import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRMLoaderPlugin, VRM } from '@pixiv/three-vrm';

interface VRMViewerProps {
  modelUrl?: string;
}

const VRMViewer: React.FC<VRMViewerProps> = ({ modelUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | undefined>(undefined);
  const cameraRef = useRef<THREE.PerspectiveCamera | undefined>(undefined);
  const rendererRef = useRef<THREE.WebGLRenderer | undefined>(undefined);
  const vrmRef = useRef<VRM | undefined>(undefined);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    // シーンの初期化
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);  // 明るいグレーの背景色
    sceneRef.current = scene;

    // カメラの設定
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 3);
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    // レンダラーの設定
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      canvas: containerRef.current.querySelector('canvas') || undefined
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.setClearColor(0xf0f0f0, 1.0);  // クリアカラーを設定
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ライトの設定
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);  // 強度を2.0に設定
    directionalLight.position.set(1, 2, 1).normalize();
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);  // 強度を0.7に設定
    scene.add(ambientLight);

    // グリッドヘルパーを追加
    const gridHelper = new THREE.GridHelper(10, 10, 0x888888, 0x888888);
    scene.add(gridHelper);

    // アニメーションループ
    const animate = () => {
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    // リサイズハンドラー
    const onResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', onResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', onResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // VRMモデルのロード
  useEffect(() => {
    if (!modelUrl || !sceneRef.current) return;

    const loader = new GLTFLoader();
    loader.register((parser) => {
      return new VRMLoaderPlugin(parser);
    });

    loader.load(
      modelUrl,
      async (gltf) => {
        try {
          if (vrmRef.current && sceneRef.current) {
            sceneRef.current.remove(vrmRef.current.scene);
          }
          vrmRef.current = gltf.userData.vrm;
          if (sceneRef.current && vrmRef.current) {
            sceneRef.current.add(vrmRef.current.scene);
            vrmRef.current.scene.rotation.y = Math.PI; // モデルを正面に向ける
          }
        } catch (error) {
          console.error('VRMのロードに失敗しました:', error);
        }
      },
      (progress) => {
        console.log('Loading model...', (progress.loaded / progress.total) * 100, '%');
      },
      (error) => {
        console.error('モデルのロードに失敗しました:', error);
      }
    );
  }, [modelUrl]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        backgroundColor: '#f0f0f0'  // コンテナの背景色も設定
      }} 
    />
  );
};

export default VRMViewer;