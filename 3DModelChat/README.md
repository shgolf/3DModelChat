# 3DModelChat

## プロジェクト概要
3DModelChatは、VRMモデルと対話できるAIチャットアプリケーションです。音声入力、リップシンク、感情表現を備えた革新的なインタラクティブキャラクターアプリです。

## 機能
- VRMモデルの読み込みと表示
- 音声入力と音声合成
- AIとのインタラクティブな会話
- リアルタイムのリップシンク
- 感情分析と表情制御

## 技術スタック
- React
- TypeScript
- Three.js
- @react-three/fiber
- Web Speech API
- OpenAI API (オプション)

## 必要な環境
- Node.js 16+
- npm または yarn

## セットアップ手順
1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/3DModelChat.git
cd 3DModelChat
```

2. 依存関係をインストール
```bash
cd frontend
npm install
```

3. 環境変数の設定
- `.env`ファイルを作成
- OpenAI APIキーを設定
```
REACT_APP_OPENAI_API_KEY=your_openai_api_key
```

4. 開発サーバーの起動
```bash
npm start
```

## 使用方法
1. VRMモデルファイルをアップロード
2. マイクボタンをクリック
3. キャラクターと会話を楽しむ

## 今後の開発予定
- 追加の感情表現
- 複数言語対応
- カスタマイズ機能の拡張

## ライセンス
MITライセンス

## 貢献方法
プルリクエストは歓迎します。詳細は`CONTRIBUTING.md`を参照してください。
