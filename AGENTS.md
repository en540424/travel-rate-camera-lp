<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Claude Code / Codex 共通ルール（2026-07-15追加）

このrepoは、Claude CodeとCodexのどちらでも実装・レビューを担当できる。**役割は固定しない**。実装前後にどちらのSkillを使うか（`common-safe-implementation`／`common-code-review`）も固定せず、作業内容に応じて自動選択してよい。

## 技術構成

Next.js 16（App Router）／React 19／TypeScript／Tailwind CSS v4。

## 検収コマンド

- `npx tsc --noEmit`（typecheck）
- `npm run lint`（eslint）
- `npm run build`（`next build`。本番デプロイは伴わない、ローカルビルド確認のみ）
- `npm run dev`（プレビュー確認）

## 実機優先の原則

- 掲載内容は、常に本体アプリ（`travel-rate-camera-app`）の実装と一致させる
- 未実装機能・未確定の料金・Pro機能を推測で掲載・確定しない（現状はVault側`旅レートカメラ_LP公開方針決定メモ_2026-07-07`・`旅レートカメラ_Kit概要_2026-07-14`が正本。価格は人間最終確定待ち）
- App Store URL・公開日等、未確定の情報を推測で埋めない
- 本体アプリ側の最新仕様と食い違いがないか、変更前に確認する

## 触ってはいけない領域・Human-only

- Analytics設定、フォーム送信先、ドメイン設定、環境変数（Human-onlyまたは要確認）
- Vercel等への本番デプロイ、公開URLの変更、DNS変更
- 画像・ロゴ・スクリーンショットは正本（Vault側デザイン資料）を確認してから使用する

## UI変更時の確認

- レスポンシブ表示、主要導線（CTA等）、リンク切れの有無を確認する
- 比較案（案A／案B）を作る場合は別branchで作業し、本番branchへ直接反映しない

## Git・作業ログ

- commit・push運用は`AI-Workflow-System/01_harness/ChatGPT共同作業ルール正本`（Vault側正本）の共通条件に従う
- 変更前に必ず現在のbranch・HEAD・upstream・working tree状態を確認する

## Claude Code ⇄ Codex 移管

作業を途中で他方のエージェントへ引き継ぐ場合は、Vault側正本`AI-Workflow-System/01_harness/Claude-Code_Codex_双方向移管_正本`の移管パック形式に従う。
