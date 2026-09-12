# DESIGN_TOKENS.md — 現行デザイントークン と 提案

**出典**: `src/app/globals.css` の `@theme` ブロック（Tailwind CSS v4）
**上流の正本**: `travel-rate-camera-app/src/theme/tokens.ts`

> ⚠️ **重要な前提**
> `globals.css` の冒頭コメントにこう書かれている：
>
> > 色・角丸の値は本体アプリの `src/theme/tokens.ts`（travel-rate-camera-app）を正とし、
> > そこから機械的に写している。**LP側で独自の色を足さない。**
> > 補助色は新規に発明せず、アプリが既に持つ candidate（amber）を使う。
>
> コーラル追加はこのルールに抵触する。扱いは **§3（提案）** と HANDOFF §4-2 を参照。

---

## 1. 現行カラートークン（CURRENT — そのまま使ってよい確定値）

### brand / primary（ティール）— 主役・CTA

| token | 値 | 用途 |
|---|---|---|
| `--color-brand` | `#0E9488` | 主役・CTA・購入済み |
| `--color-brand-dark` | `#0A766E` | 濃いティール（テキスト/数字） |
| `--color-brand-soft` | `#E7F5F2` | 淡いティール背景（pill/バッジ） |
| `--color-brand-soft2` | `#F0FAF7` | さらに淡いカード背景 |
| `--color-brand-border` | `#D7EDE7` | ティール系ボーダー |
| `--color-brand-accent` | `#7FD8CC` | **暗背景上の**ティールアクセント |

### candidate（アンバー）— 「候補＝まだ買うか決めていない」

| token | 値 | 用途 |
|---|---|---|
| `--color-candidate` | `#E0A53B` | ドット/バー |
| `--color-candidate-text` | `#9A6516` | 候補テキスト |
| `--color-candidate-strong` | `#B5731A` | 候補強調/アイコン |
| `--color-candidate-soft` | `#FBF1DE` | 候補バッジ背景 |
| `--color-candidate-soft2` | `#FDFAF3` | 候補カード背景 |
| `--color-candidate-border` | `#F0E6CF` | |

### Pro（ゴールド）— バッジ・識別のみ。**CTAには使わない**

| token | 値 |
|---|---|
| `--color-pro` | `#B5731A` |
| `--color-pro-soft` | `#FBF1DE` |
| `--color-pro-gold-a` | `#EBC976` |
| `--color-pro-gold-b` | `#D9A441` |

### dark（暗面）

| token | 値 | 用途 |
|---|---|---|
| `--color-ink` | `#11201E` | 暗面の基調 |
| `--color-ink-alt` | `#16211F` | 最濃 |
| `--color-ink-deep` | `#0E1413` | 端末ベゼル |
| `--color-ink-muted` | `#8FA39E` | 暗面の補助テキスト |
| `--color-ink-sub` | `#A9BAB5` | 暗面の本文 |

### text（明面のテキスト）

| token | 値 | 白地コントラスト | 判定 |
|---|---|---|---|
| `--color-text` | `#16211F` | 16.52:1 | ✅ |
| `--color-body` | `#5B6764` | 5.88:1 | ✅ AA |
| `--color-muted` | `#7E8986` | 3.61:1 | ❌ 通常サイズAA未達 |
| `--color-faint` | `#939E9B` | 2.76:1 | ❌ |
| `--color-faint2` | `#A6AEAB` | 2.27:1 | ❌ |

### surfaces（地・線）

| token | 値 | 用途 |
|---|---|---|
| `--color-bg` | `#EAEEEC` | |
| `--color-screen` | `#F4F6F5` | UseCase地・補足カード地・端末画面地 |
| `--color-card` | `#FFFFFF` | |
| `--color-line` | `#ECEFED` | カードボーダー（**白との差が小さい**） |
| `--color-line2` | `#EEF1F0` | 区切り線 |
| `--color-line3` | `#F2F4F3` | 行区切り（Pricing表の行罫） |
| `--color-input-border` | `#DCE3E0` | |

### destructive（**LPでは未使用。アプリで「削除」を意味する**）

| token | 値 |
|---|---|
| `--color-danger` | `#C2543F` |
| `--color-danger-soft` | `#FBF3F1` |
| `--color-danger-border` | `#F0D9D4` |

（アプリ側にはさらに `dangerAlt: #D9614E` / `sundayRed: #C2543F` がある — LPには写されていない）

### その他（端末モック内専用・触らない）

| token | 値 |
|---|---|
| `--color-chart-bar` | `#7F8FC4` |
| `--color-tab-inactive` | `#4F5865` |

---

## 2. 現行のその他トークン

### radius

| token | 値 | 用途 |
|---|---|---|
| `--radius-chip` | `12px` | chip / 表の角 |
| `--radius-card` | `16px` | 標準カード |
| `--radius-card-lg` | `18px` | 大カード |
| `--radius-button` | `15px` | 主要ボタン |
| `--radius-phone` | `38px` | （端末角の元値。実装は `rounded-[66px]`/`[54px]`） |

### typography（Tailwind の任意値で直接指定されている＝トークン化されていない）

現状、フォントサイズはトークンではなく各所で `text-[Npx]` の任意値。実測の分布：

| 役割 | 現在値 | 使用箇所 |
|---|---|---|
| Hero h1 | `31px / sm:44px / lg:52px` | HeroSection |
| セクション h2 | `27px / sm:34px` | `Section.tsx`（全セクション共通） |
| 最終CTA h2 | `30px / sm:40px` | CTASection |
| 価格数字 | `40px` | PricingSection |
| 換算例の数字 | `28px / sm:34px` | FeatureSection |
| 主役カード見出し | `22px / sm:25px`、`20px` | FeatureSection |
| Problem見出し | `20px / sm:22px` | ProblemSection |
| ステップ見出し | `19px` | HowItWorksSection |
| Screens見出し | `18px` | ScreensSection |
| 小カード見出し | `16px` | FeatureSection |
| FAQ質問 | `15px` | FAQSection |
| Hero本文 | `15px / sm:16px` | HeroSection |
| セクションlead | `14.5px / sm:15.5px` | `Section.tsx` |
| **本文（最多）** | **`13.5px`** | HowItWorks / Screens / Feature小 / UseCase / FAQ回答 / Pricing表 |
| Problem本文 | `14px` | ProblemSection |
| 注記 | `12.5px` / `12px` | 各所 |
| eyebrow / caption | `11.5px` / `11px` / `10.5px` | 各所 |

**line-height**: 本文は `leading-[1.9]`〜`leading-[1.95]`、見出しは `leading-[1.32]`〜`leading-snug`
**letter-spacing**: 見出し `tracking-[-0.01em]`〜`tracking-[-0.03em]`、eyebrow `tracking-[0.14em]`

### spacing（セクション）

| 役割 | 現在値 |
|---|---|
| セクション縦 | `py-20 md:py-28`（UseCaseのみ `py-20 md:py-24`） |
| コンテナ幅 | `max-w-6xl`（FAQ・CTAのみ `max-w-3xl`） |
| 横パディング | `px-5` |
| 見出し→本体 | `mt-12`〜`mt-16` |

### shadow（トークン化されておらず任意値）

| 用途 | 値 |
|---|---|
| 主役カード | `shadow-[0_18px_40px_-30px_rgba(16,33,31,0.5)]` |
| Hero CTA | `shadow-[0_14px_32px_-12px_rgba(14,148,136,0.9)]` |
| 最終CTA | `shadow-[0_16px_36px_-14px_rgba(0,0,0,0.6)]` |
| 端末フレーム | `shadow-[0_2px_5px_rgba(16,33,31,0.1),0_34px_60px_-30px_rgba(16,33,31,0.55)]` |
| 小カード | **なし** |

### breakpoint（Tailwind既定）

| 名前 | px |
|---|---|
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |

実測の想定幅: **desktop 1440px / mobile 390px**

---

## 3. 地色クラス（`globals.css`・セクションの地）

| class | 値 | 使用セクション |
|---|---|---|
| `.ground-ink` | radial teal 22% + radial amber 10% + `linear-gradient(160deg,#16211F,#11201E 55%,#0C1716)` | Hero / Screens |
| `.grid-overlay` | 44px方眼（白4.5%）+ radial mask | Hero / Screens / CTA |
| `.ground-warm` | `linear-gradient(180deg,#FAF3E6,#FDF9F1 48%,#FFFFFF)` | Problem / FAQ |
| `.ground-mint` | `linear-gradient(180deg,#E4F4EF,#F2FBF8 45%,#FFFFFF)` | Feature |
| `.ground-cta` | radial `#7FD8CC` 28% + `linear-gradient(150deg,#0A766E,#0E5F59 46%,#11201E)` | CTA |
| `.gradient-pro` | `linear-gradient(135deg,#EBC976,#D9A441)` | Proバッジ |
| `.gradient-viewfinder` | `linear-gradient(155deg,#33413C,#1E2B28 55%,#12201D)` | **端末モック内・凍結** |

アニメーション: `.scan-line`（2.6s infinite・端末モック内）、`.rise`（0.7s・Hero）
いずれも `prefers-reduced-motion: reduce` で無効化済み。

---

## 4. 【PROPOSAL】コーラル追加案 — **確定値ではない**

> 🔴 **ここから下はすべて提案。現行コードには存在しない。**
> 採用の可否と最終値はHumanが決める。HANDOFF §4-2 のA/B/C決定が前提。

### 4-1. Humanの想定値

| 役割 | 想定HEX | 備考 |
|---|---|---|
| accent coral | `#E76F51` 前後 | 完全な赤ではなく、少しくすんだコーラル |
| soft coral background | `#FCE9E3` 前後 | |

### 4-2. 検討時に必ず考慮すること

1. **`--color-danger: #C2543F` / アプリの `dangerAlt: #D9614E` と混同されないこと。**
   アプリでは赤系＝「削除」。LPのコーラルは十分に離すか、
   面積・形（バッジ・罫など小さい面のみ）で用途を明確に分けること。
2. **アンバー（candidate）との併用は3アクセントになる。** HANDOFF §4-2 の A/B/C を先に決める。
3. **コントラスト（実測）**:

   | 組み合わせ | 比 | 判定 |
   |---|---|---|
   | `#E76F51` の文字 on 白 | **3.09:1** | ❌ 通常サイズ不可（大きい文字のみ可） |
   | 白の文字 on `#E76F51` | **3.09:1** | ❌ **バッジ背景＋白文字も不可** |
   | `#E76F51` on `#FCE9E3` | 2.64:1 | ❌ |
   | `#C2543F` の文字 on 白 | 4.53:1 | ✅ AA（ぎりぎり） |
   | 白の文字 on `#C2543F` | 4.53:1 | ✅ AA（ぎりぎり） |
   | `#D9614E` の文字 on 白 | 3.64:1 | ❌ |

   → **`#E76F51` は「文字色」にも「白文字を載せる背景」にも使えない。**
   使えるのは **罫・ドット・アイコン・小さな面・下線・図形**など、文字の可読性に依存しない用途のみ。
   文字が絡む用途（badge文字、強調語、数字）には **`#C2543F` 相当まで暗いコーラル**が必要。
   ただしその明度帯はアプリの `danger` と同値なので、混同回避の設計が別途必要。

4. ⚠️ **ティールとコーラルは輝度がほぼ同じ（相互コントラスト 1.21:1）。**
   `#0E9488` と `#E76F51` は**色相では強く対比するが、明度ではほぼ同じ**。
   つまり — グレースケール印刷、1型/2型色覚、低照度画面では**この2色が判別できない**。
   → 「ティールCTA の隣にコーラルのアクセント」を明度差なしで置くと、
   　 一部のユーザーには**のっぺりした一色の塊**に見える。
   　 コーラルを使う箇所には、**色以外の手がかり（サイズ・位置・形・罫の太さ）を必ず併用すること。**

5. **主要CTAはティールのまま**（HANDOFF §4-2）。

### 4-3. もし採用する場合のtoken追加イメージ（形式の参考のみ）

```css
/* 【PROPOSAL・未確定】LP専用アクセント。アプリtokensには存在しない */
--color-accent:        #E76F51;  /* 罫・ドット・アイコン・図形のみ。
                                    文字色にも「白文字を載せる背景」にも使えない（ともに3.09:1） */
--color-accent-strong: #C2543F;  /* 文字が絡む用途はこちら（白地4.53:1 / 白文字4.53:1）。
                                    ただしアプリの danger と同値 → 混同回避の設計が別途必要 */
--color-accent-soft:   #FCE9E3;  /* 淡い面。この上の文字は --color-text / --color-body を使う */
--color-accent-border: #F5D5CB;  /* 罫 */
```

**使い分けの結論**:
- 文字が関わらない視線誘導（罫・ドット・下線・小さな図形）→ `--color-accent`
- 文字が関わる強調（badge文字、強調語、数字）→ `--color-accent-strong`、または
  **コーラルは面に使わず `--color-text` の文字＋コーラルの罫**という組み合わせにする

> ⚠️ これを `globals.css` に入れる場合、冒頭コメントの
> 「LP側で独自の色を足さない」というルールも**同時に改訂**する必要がある。
> ルールを残したまま色だけ足すと、次のセッションで必ず矛盾が問題になる。
> 改訂文案の例：
> 「色はアプリ `tokens.ts` を正とする。ただし `--color-accent-*` はLP専用の視線誘導色として
> 　Human承認のうえ追加したもので、アプリ側には対応トークンを持たない（端末モック内では使用禁止）。」

### 4-4. コントラスト改善の提案（コーラルとは独立に有効）

Humanの指摘「本文色が薄い」に対しては、**コーラル追加より先にこちらが効く**：

| 対象 | 現状 | 提案の方向 |
|---|---|---|
| 本文サイズ | `13.5px` | **15〜16px** へ（最優先・これだけで体感が大きく変わる） |
| `--color-muted` の使用箇所 | `#7E8986`（3.61:1） | 通常サイズの文章には `--color-body` を使う。`muted` はラベル等に限定 |
| Pricing表の `—` | `--color-faint2`（2.27:1） | 少なくとも `--color-muted` 以上、できれば `--color-body` |
| リンク色（FAQの「お問い合わせ」等） | `--color-brand`（3.74:1） | `--color-brand-dark`（5.48:1）へ |
| `--color-line` のカード罫 | `#ECEFED` | 淡ティール地の上では、もう少し濃い罫か、地とカードの明度差を付ける |

**`--color-body` `#5B6764` 自体はAA合格（5.88:1）なので、闇雲に濃くしない。**
アプリ側tokenと同値であり、変えると実機整合が崩れる。
