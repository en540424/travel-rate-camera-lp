# CURRENT_STRUCTURE.md — 現在のLP構造

実コード（`src/app/page.tsx` および `src/components/landing/*`）から抽出。
**この並び順は情報設計として確定済み。入れ替え・増減は禁止。**

ページ全体の実測サイズ: **desktop 1440px幅で 9,540px / mobile 390px幅で 14,676px**

---

## ページ構成（`src/app/page.tsx`）

```tsx
<Header />
<main>
  <HeroSection />        {/* 暗 */}
  <ProblemSection />     {/* 温（アンバー） */}
  <HowItWorksSection />  {/* 白 */}
  <ScreensSection />     {/* 暗 */}
  <FeatureSection />     {/* 淡ティール */}
  <UseCaseSection />     {/* グレー */}
  <PricingSection />     {/* 白 */}
  <FAQSection />         {/* 温（アンバー） */}
  <CTASection />         {/* ティール→暗 */}
</main>
<Footer />               {/* 暗 */}
```

地色を **暗 → 温 → 白 → 暗 → 淡ティール → グレー → 白 → 温 → 暗** と入れ替えて、
白カードが延々と続く単調さを避ける設計。この「リズムの意図」は維持し、強度だけ上げてほしい。

---

## セクション詳細

凡例: **文言** = 変更禁止 / **visual** = 変更可

### 0. Header — `src/components/landing/Header.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | sticky ヘッダー。Heroが暗面なのでヘッダーも暗面で揃えている |
| 地 | `bg-ink/85` + `backdrop-blur-md`、下罫 `border-white/10` |
| 構成 | ロゴ（¥マーク + 「旅レートカメラ」） / ナビ5本（md以上のみ） / 右CTA |
| ナビ | 使い方・画面・できること・料金・よくある質問（すべて `/#id` 形式） |
| 高さ | `h-14`（56px） |
| 文言 | **変更禁止** |
| visual | 変更可（ただし `/#id` 形式とsticky挙動は維持） |
| 注意 | 右CTAは `LINKS.appStore` の有無で「App Storeで入手」／「公開のお知らせ」が切り替わる |

### 1. HeroSection — `src/components/landing/HeroSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | LPで最も重要。5秒で価値を伝える |
| 地 | `.ground-ink`（暗面グラデ）+ `.grid-overlay`（CSS方眼） |
| レイアウト | `lg:grid-cols-[1fr_auto]` — 左コピー / 右 端末モック |
| 構成 | バッジ → h1 → リード文 → 要点3つ（`<dl>`） → CTA2つ → 注記 → 対応通貨帯 |
| 端末 | `<PhoneFrame glow>` に `<OcrResultScreen />`（**中身は凍結**） |
| アニメ | `.rise` クラス（左コピー） |
| 文言 | **変更禁止** |
| visual | 変更可。**現状評価は「良い」ので大きく変えない** |
| 弱点 | 要点3つの `<dl>` が `dt:13.5px / dd:11.5px` と小さい |

### 2. ProblemSection — `src/components/landing/ProblemSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 課題提示。「迷っている場面」なのでアンバー地を使っている |
| 地 | `.ground-warm`（`#FAF3E6 → #FDF9F1 → #FFFFFF`） |
| レイアウト | `md:grid-cols-3`、カードではなく上罫（`border-t-2 border-candidate/35`）の編集的3列 |
| 構成 | SectionHeading（左寄せ）→ 3列（番号01-03 / 見出し / 本文）→ 転換の一文 |
| 文言 | **変更禁止**（3項目 + 転換文） |
| visual | 変更可 |
| 弱点 | 本文 `14px`。番号 `13px` が小さく、せっかくの番号が効いていない |
| 色の論点 | アンバー使用箇所。§4-2のA/B/C決定の対象 |

### 3. HowItWorksSection — `src/components/landing/HowItWorksSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 解決の流れ。3ステップを**すべて実画面**で見せる |
| `id` | `#howto`（`scroll-mt-16`） |
| 地 | `bg-white` |
| レイアウト | `<ol>` `md:grid-cols-3`、中央揃え |
| 構成 | SectionHeading → 3ステップ（番号バッジ / ラベル / 見出し / 本文 / 端末モック）→ 注記 |
| 端末 | `CameraScreen` / `OcrResultScreen` / `HistoryScreen`（**中身は凍結**） |
| 装飾 | ステップ間に矢印 `→`（`text-brand/35`・md以上のみ） |
| 文言 | **変更禁止** |
| visual | 変更可 |
| 弱点 | 矢印が薄すぎて流れが読めない。本文 `13.5px` |

### 4. ScreensSection — `src/components/landing/ScreensSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 実際の利用画面ギャラリー。換算のあとに続く体験 |
| `id` | `#screens`（`scroll-mt-16`） |
| 地 | `.ground-ink` + `.grid-overlay`（暗面） |
| レイアウト | `md:grid-cols-3` |
| 構成 | SectionHeading（`tone="dark"`）→ 3枚（端末 / タブpill / 見出し / 本文） |
| 端末 | `TranslationScreen` / `CalendarScreen` / `AnalyticsScreen`（**中身は凍結**） |
| 文言 | **変更禁止** |
| visual | 変更可。**現状評価は「良い」** |
| 事実 | この3画面はいずれも無料版で使える。カテゴリー別分析のみPro |

### 5. FeatureSection — `src/components/landing/FeatureSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 機能紹介。**実装済み機能のみ** |
| `id` | `#features`（`scroll-mt-16`） |
| 地 | `.ground-mint`（`#E4F4EF → #F2FBF8 → #FFFFFF`） |
| レイアウト | `lg:grid-cols-3` の非対称グリッド |
| 構成 | ① 主役1「カメラで、値札を日本円に。」（`lg:col-span-2`・白カード・換算の帯付き）<br>② 主役2「自分が使うレートで、判断できる。」（暗カード `bg-ink`）<br>③ 小カード6枚（翻訳／音声入力・読み上げ／買い物カレンダー／商品写真／候補と購入済み／期間ごとの分析）<br>④ カテゴリーカード（`lg:col-span-3`・アンバー系）<br>⑤ 注記 |
| 文言 | **変更禁止** |
| visual | 変更可 |
| 弱点 | **このLPで最も問題が集中する場所。** 淡ティール地＋白カード＋薄罫の同化（§3-3）、小カード6枚の階層の平板さ（§3-4） |

### 6. UseCaseSection — `src/components/landing/UseCaseSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 利用シーン。前後（カード群・表）と密度を変える意図 |
| 地 | `bg-screen`（`#F4F6F5`） |
| レイアウト | `md:grid-cols-3`、左罫（`border-l-2 border-brand/25`）の行構成 |
| 構成 | SectionHeading（左寄せ）→ 3件（国旗 / 場所 / タグ / 本文） |
| 内容 | 韓国・明洞 / タイ・バンコク / ヨーロッパ |
| 文言 | **変更禁止** |
| visual | 変更可 |
| 弱点 | セクション高 480px（desktop）と最も薄く、印象に残らない |

### 7. PricingSection — `src/components/landing/PricingSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 料金。**アプリの `pro-features.tsx` と同じ3列比較表の形** |
| `id` | `#pricing`（`scroll-mt-16`） |
| 地 | `bg-white` |
| 構成 | ① SectionHeading<br>② 価格カード2枚（無料版 `¥0` / Pro版 `¥500`・Proバッジはゴールドグラデ）<br>③ 比較表（機能 / 無料 / Pro の3列・9行）<br>④「Proが要るのは、こんなときだけ」カード（3項目 + 注記） |
| 文言 | **変更禁止**（価格・表の中身・行の順序すべて） |
| visual | 変更可 |
| 弱点 | 表セル `13.5px` / ヘッダー `12px`、`—` が `text-faint2`（2.27:1）で読めない、`min-w-[440px]` |
| 注意 | **モバイルは表→カードへの組み替えが必要**（HANDOFF §6-4） |

### 8. FAQSection — `src/components/landing/FAQSection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | よくある質問。**できないことは、できないと書く**方針 |
| `id` | `#faq`（`scroll-mt-16`） |
| 地 | `.ground-warm` |
| 幅 | `max-w-3xl`（他セクションは `max-w-6xl`） |
| 構成 | SectionHeading → `<details>` × 11 → 問い合わせ導線 |
| 開閉 | `<details>` / `<summary>`、`＋` が `group-open:rotate-45` |
| 文言 | **変更禁止**（11問すべて） |
| visual | 変更可 |
| 弱点 | 質問 `15px` / 回答 `13.5px`、区切りが `divide-line`（`#ECEFED`）のみで11問が塊に見える |

### 9. CTASection — `src/components/landing/CTASection.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 最終CTA。App Store公開前は「公開のお知らせ」がprimary |
| `id` | `#cta`（`scroll-mt-16`） |
| 地 | `.ground-cta`（ティール→暗のグラデ）+ `.grid-overlay` |
| 幅 | `max-w-3xl`、中央揃え |
| 構成 | h2 → リード → CTA2つ → 「App Storeで公開準備中」バッジ → 注記 |
| 文言 | **変更禁止** |
| visual | 変更可。**着地として強いので維持寄り** |
| 注意 | `LINKS.appStore` の条件分岐あり（HANDOFF §6-3） |

### 10. Footer — `src/components/landing/Footer.tsx`

| 項目 | 内容 |
|---|---|
| 役割 | 着地。法的導線を必ず残す |
| 地 | `bg-ink`（暗） |
| 構成 | 左：ロゴ + 説明文 / 右：3カラム（アプリ / サポート / 規約）+ コピーライト |
| 規約 | プライバシーポリシー・利用規約・ライセンス（**削除禁止**） |
| 文言 | **変更禁止** |
| visual | 変更可 |

---

## 共通部品

### `src/components/ui/Section.tsx`

**LP全体の見出し階層を1か所で決めている最重要ファイル。**

`SectionHeading` props: `eyebrow` / `title` / `lead` / `tone`(light\|dark) / `align`(center\|left)

| 要素 | 現在値 |
|---|---|
| eyebrow | `text-[11.5px] font-bold uppercase tracking-[0.14em]` + 左に `h-px w-5` の罫 |
| h2 | `mt-4 text-[27px] sm:text-[34px] font-bold leading-[1.32] tracking-[-0.02em] text-balance` |
| lead | `mt-5 text-[14.5px] sm:text-[15.5px] leading-[1.95] text-pretty` |
| 幅 | `max-w-2xl`（center時は `mx-auto text-center`） |

`Pill` — `tone`: brand / candidate / dark / neutral、`text-[11.5px] font-bold`、`rounded-full`

> ここを直すと全セクションの見出し・リード文が同時に直る。
> 逆に言えば、**セクションごとに見出しの強弱を付けたい場合はこの部品に variant を足す**設計になる。

### `src/components/mock/PhoneFrame.tsx`

- 論理サイズ **393×852pt** 固定 + `transform: scale(var(--s))` で拡縮
- ベゼル12px、外枠 `rounded-[66px]`、内側 `rounded-[54px]`
- `glow` prop で背後にティールの光（`bg-brand/25 blur-[70px]`）
- `role="img"` + `aria-label` で画面内容を説明
- **フレーム外側は変更可 / 内側は凍結**

---

## 下層ページ（今回のvisual polish対象外・ただしFooter/Headerは共通）

| path | file | 内容 |
|---|---|---|
| `/privacy` | `src/app/privacy/page.tsx` | プライバシーポリシー（法務文言・変更禁止） |
| `/terms` | `src/app/terms/page.tsx` | 利用規約（法務文言・変更禁止） |
| `/licenses` | `src/app/licenses/page.tsx` | ライセンス（変更禁止） |
| `/contact` | `src/app/contact/page.tsx` | お問い合わせ（**現在の主要CTA導線の着地点**） |

これらのページもHeader/Footerを共有するため、Header/Footerのvisual変更は下層ページにも及ぶ。
