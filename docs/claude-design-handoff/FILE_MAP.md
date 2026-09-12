# FILE_MAP.md — ファイルの場所と役割

repo: `C:\Users\envie\travel-rate-camera-lp`
branch: `feat/lp-v2-visual-rebuild` / HEAD `fca1be2`

---

## 0. このパッケージの2つの形（重要）

同じ内容を2通りで持っている。**用途が違う**。

| | repo内 `docs/claude-design-handoff/` | Desktop の ZIP |
|---|---|---|
| 中身 | **`.md` 6本 + `screenshots/` のみ** | `.md` 6本 + `screenshots/` + **ソースのコピー** |
| ソースコード | **コピーしない**（このFILE_MAPで原本を指す） | 同梱する |
| 理由 | repoにソースを二重化すると、原本が変わったとき乖離する | Claude Designはrepoを読めない別環境なので、実物が要る |

→ **repo内で作業する人（Claude Code / Human）はこのFILE_MAPから原本を読む。**
→ **Claude Designに渡すのはZIP。** ZIP内のソースは「その時点のスナップショット」であり、
　 実装時の正本は常にrepoの原本。

---

## 1. Claude Designへ渡すソース（ZIP同梱・最小セット）

| path | 行数 | 役割 | 変更可否 |
|---|---|---|---|
| `src/app/globals.css` | 180 | **デザイントークン全部・地色クラス・アニメーション** | ✅ visual |
| `src/app/layout.tsx` | 60 | metadata・**フォントスタック**・body基礎 | ⚠️ フォント/metadataは慎重に |
| `src/app/page.tsx` | 38 | セクションの並び | ❌ 並び順は固定 |
| `src/components/ui/Section.tsx` | 84 | **見出し階層の共通部品（最重要）** | ✅ visual |
| `src/components/landing/Header.tsx` | 59 | ヘッダー | ✅ visual |
| `src/components/landing/HeroSection.tsx` | 139 | Hero | ✅ visual |
| `src/components/landing/ProblemSection.tsx` | 68 | 課題提示 | ✅ visual |
| `src/components/landing/HowItWorksSection.tsx` | 112 | 使い方3ステップ | ✅ visual |
| `src/components/landing/ScreensSection.tsx` | 87 | 実画面ギャラリー | ✅ visual |
| `src/components/landing/FeatureSection.tsx` | 163 | **機能紹介（問題が最も集中）** | ✅ visual |
| `src/components/landing/UseCaseSection.tsx` | 57 | 利用シーン | ✅ visual |
| `src/components/landing/PricingSection.tsx` | 144 | 料金・比較表 | ✅ visual |
| `src/components/landing/FAQSection.tsx` | 94 | FAQ 11問 | ✅ visual |
| `src/components/landing/CTASection.tsx` | 67 | 最終CTA | ✅ visual |
| `src/components/landing/Footer.tsx` | 91 | フッター | ✅ visual |
| `src/lib/appSpec.ts` | 161 | **掲載仕様の単一ソース**（価格・上限・比較表・通貨・カテゴリー） | ❌ 内容は変更禁止 |
| `src/components/mock/PhoneFrame.tsx` | 85 | 端末フレーム | ⚠️ **外側のみ**変更可 |
| `src/components/mock/demoData.ts` | 139 | 端末モックのデモ数値（計算で整合） | ❌ 変更禁止 |

**合計 約1,800行。**

---

## 2. ⛔ ZIPにあえて同梱していないファイル（凍結領域）

| path | 行数 | 理由 |
|---|---|---|
| `src/components/mock/chrome.tsx` | 162 | 端末モックの共通クローム（ステータスバー・下タブ） |
| `src/components/mock/screens/CameraScreen.tsx` | 103 | アプリのカメラ画面 |
| `src/components/mock/screens/OcrResultScreen.tsx` | 178 | アプリのOCR結果画面 |
| `src/components/mock/screens/HistoryScreen.tsx` | 145 | アプリの履歴画面 |
| `src/components/mock/screens/TranslationScreen.tsx` | 156 | アプリの翻訳画面 |
| `src/components/mock/screens/CalendarScreen.tsx` | 202 | アプリのカレンダー画面 |
| `src/components/mock/screens/AnalyticsScreen.tsx` | 165 | アプリの分析画面 |

**合計 約1,110行 = アプリUIの内部実装。**

これらは本体アプリの実装ハンドオフ（`travel-rate-camera-app/design-handoff/`）の
px値をそのまま写したもので、**iPhone論理解像度 393×852pt で組まれている**。

**同梱しない理由**: 渡すと「ここもデザイン改善できる」と誤解される。
LPの信頼性は「端末の中はアプリ実装そのもの」という点に依存しているので、ここは触らせない。

→ Claude Designは、端末モックを **「中身が確定した1枚の板」** として扱い、
　 **フレームの外側**（配置・大きさ・背後のglow・キャプション・並べ方）だけを設計すること。

---

## 3. 触ってはいけないファイル（デザイン対象外）

| path | 理由 |
|---|---|
| `src/app/privacy/page.tsx` | 法務文言 |
| `src/app/terms/page.tsx` | 法務文言 |
| `src/app/licenses/page.tsx` | ライセンス表記 |
| `src/app/contact/page.tsx` | 問い合わせ。**フォーム送信先はHuman-only領域** |
| `src/app/opengraph-image.tsx` | OGP画像をコード生成。別途判断 |
| `next.config.ts` / `tsconfig.json` / `eslint.config.mjs` / `postcss.config.mjs` | 設定 |
| `package.json` | **依存追加禁止** |
| `.claude/` | ローカル設定（ZIPに含めない） |

---

## 4. 改善対象別・どのファイルを見るか

| 直したいもの | 見るファイル |
|---|---|
| **文字サイズ全体**（最優先） | `src/components/ui/Section.tsx` → その後 各 `landing/*.tsx` |
| **色・コントラスト・地色** | `src/app/globals.css`（`@theme` と `.ground-*`） |
| **カードの同化・階層** | `src/components/landing/FeatureSection.tsx` |
| **Pricing表の可読性** | `src/components/landing/PricingSection.tsx` |
| **FAQの可読性** | `src/components/landing/FAQSection.tsx` |
| **CTAの視覚デザイン** | `HeroSection.tsx` / `CTASection.tsx` / `Header.tsx`（3か所で条件分岐） |
| **端末モックの置き方** | `src/components/mock/PhoneFrame.tsx`（**外側のみ**） |
| **セクションの余白・リズム** | 各 `landing/*.tsx` の `py-20 md:py-28` |
| **フォント** | `src/app/layout.tsx` / `src/app/globals.css` の `body` |

---

## 5. 参照のみ（read-only・本体アプリ側）

| path | 用途 |
|---|---|
| `C:\Users\envie\travel-rate-camera-app\src\theme\tokens.ts` | **色トークンの上流正本** |
| `C:\Users\envie\travel-rate-camera-app\design-handoff\` | 画面別の実装ハンドオフ（端末モックの出典） |
| `C:\Users\envie\travel-rate-camera-app\src\app\pro-features.tsx` | Pricing比較表の出典 |
| `C:\Users\envie\travel-rate-camera-app\src\config\limits.ts` | `FREE_LIMITS` の出典 |

**appリポジトリは read-only。今回のセッションでは一切変更しない。**

---

## 6. screenshots/ の中身

現在のLP V2を、ローカル `npm run dev` に対し **headless Chrome で実キャプチャ**したもの。
（新しい依存は入れていない。Windowsに既にあるChromeを使用）

### desktop（1440px幅）

| file | 高さ | 内容 |
|---|---|---|
| `desktop-00-fullpage.png` | 9540 | **ページ全体。視覚リズムの問題はこれが一番分かる** |
| `desktop-01-hero.png` | 1080 | Header + Hero + 対応通貨帯 |
| `desktop-02-problem.png` | 700 | Problem |
| `desktop-03-howto.png` | 1260 | How it works |
| `desktop-04-screens.png` | 1180 | 実画面ギャラリー |
| `desktop-05-features.png` | 1420 | **Features（カード同化がここで見える）** |
| `desktop-06-usecase.png` | 480 | Use cases |
| `desktop-07-pricing.png` | 1450 | **Pricing（表の文字の小ささが見える）** |
| `desktop-08-faq.png` | 1200 | FAQ |
| `desktop-09-cta-footer.png` | 940 | 最終CTA + Footer |

### mobile（390px幅）

| file | 高さ | 内容 |
|---|---|---|
| `mobile-00-fullpage.png` | 14676 | ページ全体 |
| `mobile-01-hero.png` | 1560 | Header + Hero |
| `mobile-02-problem-howto.png` | 3610 | Problem + How it works |
| `mobile-03-screens.png` | 2550 | 実画面ギャラリー |
| `mobile-04-features.png` | 2300 | Features |
| `mobile-05-usecase.png` | 720 | Use cases |
| `mobile-06-pricing.png` | 1670 | **Pricing（表が横スクロールする箇所）** |
| `mobile-07-faq.png` | 1140 | FAQ |
| `mobile-08-cta-footer.png` | 1406 | 最終CTA + Footer |

### 再生成の手順（同じ環境で再現可能）

```bash
# 1. dev server を起動
npm run dev            # → http://localhost:3000

# 2. headless Chrome でキャプチャ（例：desktop全体）
"C:\Program Files\Google\Chrome\Application\chrome.exe" \
  --headless=new --disable-gpu --hide-scrollbars \
  --user-data-dir="$(mktemp -d)" \
  --window-size=1440,10400 --virtual-time-budget=9000 \
  --screenshot="...\desktop-00-fullpage.png" \
  http://localhost:3000/
```

**注意**: URLのアンカー（`/#pricing` 等）でのキャプチャは、
`html { scroll-behavior: smooth }` のため headless では正しい位置に止まらない。
**ページ全体を1枚撮ってから切り出す**こと（切り出しは PowerShell の `System.Drawing` で可能）。

---

## 7. 検収コマンド（実装後にClaude Codeが必ず走らせる）

```bash
npx tsc --noEmit     # typecheck
npm run lint         # eslint
npm run build        # next build（ローカル確認のみ・本番デプロイは伴わない）
npm run dev          # プレビュー確認
```

---

## 8. 禁止事項（repo運用）

- `master` へのmerge / push
- `feat/lp-v2-visual-rebuild` のpush（Human明示がない限り）
- Vercel等への本番デプロイ、公開URL・DNS変更
- Analytics設定、フォーム送信先、ドメイン設定、環境変数（**Human-only**）
- `git add .` / `git add -A`（**変更pathのみ明示stage**）
- 新規dependencyの追加
- ZIPをrepoにcommitすること（`.gitignore` に `*.zip` が無いため、repo外に置く）
