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

## プロジェクト構造
```
3DModelChat/
├── frontend/          # フロントエンドアプリケーション
│   ├── public/       # 静的ファイル
│   └── src/          # ソースコード
│       ├── components/
│       ├── services/
│       ├── utils/
│       └── hooks/
├── backend/          # バックエンドサーバー（オプション）
├── docs/            # ドキュメンテーション
└── tests/           # テストファイル
```

## セットアップ手順
1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/3DModelChat.git
cd 3DModelChat
```

2. 依存関係をインストール
```bash
# フロントエンド
cd frontend
npm install

# バックエンド（オプション）
cd ../backend
npm install
```

3. 環境変数の設定
`.env.example`をコピーして`.env`を作成し、必要な環境変数を設定します：
```
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_API_URL=http://localhost:3001
```

4. 開発サーバーの起動
```bash
# フロントエンド（http://localhost:3000）
npm run dev

# バックエンド（オプション、http://localhost:3001）
cd ../backend
npm run dev
```

## 環境構築
1. 必要なパッケージのインストール
```bash
npm install --legacy-peer-deps
```

2. VOICEVOXのセットアップ
```bash
docker pull voicevox/voicevox_engine
docker run --rm -p 50021:50021 voicevox/voicevox_engine
```

3. 環境変数の設定
`.env`ファイルを作成し、以下の内容を設定：
```
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_VOICEVOX_API_URL=http://localhost:50021
```

## 開発サーバーの起動
```bash
npm start
```

## 使用方法
1. VRMファイルをアップロード
2. マイクボタンをクリックして会話を開始
3. AIアシスタントが応答し、3Dモデルが表情と口の動きを伴って話します

## 今後の開発予定
- 追加の感情表現
- 複数言語対応
- カスタマイズ機能の拡張

## ライセンス
MITライセンス

## 貢献ガイドライン
1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

コードスタイルについては、以下のガイドラインに従ってください：
- TypeScriptの厳格な型チェックを使用
- ESLintとPrettierの設定に従う
- コンポーネントにはJSDocコメントを追加
- テストコードを含める
