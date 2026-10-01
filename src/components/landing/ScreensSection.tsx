import PhoneFrame from "@/components/mock/PhoneFrame";
import AnalyticsScreen from "@/components/mock/screens/AnalyticsScreen";
import CalendarScreen from "@/components/mock/screens/CalendarScreen";
import TranslationScreen from "@/components/mock/screens/TranslationScreen";
import { TOTALS } from "@/components/mock/demoData";
import { SectionHeading, Pill } from "@/components/ui/Section";

/**
 * 実際の利用画面ギャラリー。
 *
 * 換算のあとに続く「翻訳 / カレンダー / 分析」を暗面の上に並べる。
 * 明るいアプリ画面を暗い地に置くと端末が浮き上がるので、ここが端末モックの見せ場になる。
 *
 * ■ 事実に関する注意
 * この3画面はいずれも**無料版で使える**。
 * 分析のうちカテゴリー別だけがProなので、画面内にProバッジを出して区別している。
 *
 * desktop（lg以上）は3画面を1画面で俯瞰しやすいよう、端末は --s 0.32（HowToの0.29より一段大きく、
 * ここが端末の見せ場）にとどめ、見出し→端末、端末→説明文の間隔を詰める。本文は16pxのまま。
 *
 * ■ 翻訳だけ一段強く見せる（2026-10）
 * 翻訳は「画面がある」ではなく「店員さんとのやり取りにそのまま使える」ことを伝えたいので、
 * 翻訳の列にだけ「話す → 翻訳 → 読み上げ」の3ステップを添える。
 * 端末の大きさは3列で揃えたまま（1列だけ大きくすると、タブ名・見出し・本文の高さがずれる）。
 * 列の外枠・面は敷かない（Human確認 2026-10：翻訳だけ主役に見えすぎるため外した）。
 * 役割分担：ここ＝実際の使い方／FeatureSection＝搭載機能／Pricing＝無料で使えること。
 *
 * 手順は本体アプリ `src/app/(tabs)/translation.tsx` の実装どおり：
 * 音声入力は翻訳元の言語で認識 →「翻訳する」で翻訳 → 訳文カードの「読み上げ」で翻訳先の言語を再生。
 * 言語データのダウンロードや音声認識でAppleと通信することがあるため、オフラインとは書かない。
 */
const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** 翻訳の使い方。アイコンはモック内のもの（マイク／翻訳タブ／読み上げのスピーカー）と同じ形。⇄は換算タブの形なので使わない */
const TRANSLATION_STEPS = [
  {
    label: "話す",
    sub: "マイクで入力",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="9" y="2.5" width="6" height="11" rx="3" />
        <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5" />
      </svg>
    ),
  },
  {
    label: "翻訳",
    sub: "現地の言葉に",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 6h8M8 6v1.6c0 2.6-1.6 4.6-4 5.4M6.2 9.4c.8 2 2.4 3.2 4.3 3.6" />
        <path d="M12.6 20l3.6-9 3.6 9M13.9 17.2h4.6" />
      </svg>
    ),
  },
  {
    label: "読み上げ",
    sub: "音声で伝える",
    icon: (
      <svg {...ICON_PROPS} fill="currentColor" stroke="none">
        <path d="M4 9.5h3L12 5v14l-5-4.5H4z" />
        <path
          d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const SCREENS = [
  {
    tab: "翻訳",
    featured: true,
    // 2行に折れる幅（md〜lg手前）で「その場／で。」と割れないよう、後半をひとかたまりにする
    title: (
      <>
        言葉が通じなくても、<span className="inline-block">その場で。</span>
      </>
    ),
    desc: "日本語で話すと文字になり、ボタンひとつで現地の言葉に翻訳。訳文を読み上げれば、店員さんとのやり取りにそのまま使えます。",
    screen: <TranslationScreen />,
    alt: "翻訳画面。日本語から韓国語へ「これのいちばん小さいサイズはありますか？」を翻訳し、読み上げとコピーのボタンが並んでいる",
  },
  {
    tab: "カレンダー",
    title: "いつ、何を買ったか",
    desc: "買い物カレンダーで、日ごとの記録を振り返れます。記録のある日には国旗と、購入済み・候補のしるしが付きます。",
    screen: <CalendarScreen />,
    alt: `買い物カレンダー画面。9月の日付グリッドに記録のある日の印が付き、月合計として購入済み${TOTALS.purchasedJpy}・候補${TOTALS.candidateJpy}が出ている`,
  },
  {
    tab: "分析",
    title: "何にいくら使ったか",
    desc: "期間ごとの合計と件数は無料で見られます。カテゴリー別の内訳と構成比はPro。",
    screen: <AnalyticsScreen />,
    alt: `分析画面。2026年9月のまとめとして購入済み合計${TOTALS.purchasedJpy}・候補合計${TOTALS.candidateJpy}、日別の棒グラフ、Proのカテゴリー別内訳が並んでいる`,
  },
];

export default function ScreensSection() {
  return (
    <section
      id="screens"
      className="ground-ink-alt section-pad relative scroll-mt-20 overflow-hidden lg:py-10"
    >
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="container-lp relative max-w-lp">
        <SectionHeading
          tone="dark"
          layout="split"
          eyebrow="実際の画面"
          title={
            <>
              換算のあとも、
              <br />
              旅の記録として残る。
            </>
          }
          lead="下はすべて実装どおりの画面です。翻訳も、カレンダーも、期間ごとの分析も、無料版で使えます。"
        />

        <div className="mt-[clamp(44px,5vw,56px)] grid gap-14 md:grid-cols-3 md:gap-[clamp(32px,3.4vw,40px)] lg:mt-4 lg:gap-6">
          {SCREENS.map((item) => (
            <div key={item.tab} className="flex flex-col items-center text-center">
              <PhoneFrame
                glow
                label={item.alt}
                className="[--s:0.62] md:[--s:0.46] lg:[--s:0.31] xl:[--s:0.32]"
              >
                {item.screen}
              </PhoneFrame>

              <div className="mt-7 lg:mt-2.5">
                <Pill tone="dark">{item.tab}タブ</Pill>
              </div>
              <h3 className="mt-4 text-[clamp(20px,2vw,22px)] font-extrabold leading-snug tracking-[-0.02em] text-white lg:mt-2 lg:text-[21px]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[360px] text-[16px] leading-[1.95] text-ink-bright lg:mt-1.5 lg:max-w-none lg:text-[16px] lg:leading-[1.7]">
                {item.desc}
              </p>

              {item.featured && (
                <ol className="relative mt-5 grid w-full max-w-[326px] grid-cols-3 gap-2.5 md:max-w-none md:grid-cols-1 md:gap-2 lg:mt-3 lg:grid-cols-3 lg:gap-2.5">
                  {TRANSLATION_STEPS.map((step, i) => (
                    <li
                      key={step.label}
                      className="relative flex flex-col items-center gap-1.5 rounded-2xl border border-white/[0.12] bg-white/[0.05] px-1.5 py-3 md:flex-row md:gap-3 md:px-3 md:py-2.5 md:text-left lg:flex-col lg:gap-1 lg:px-1.5 lg:py-2.5 lg:text-center"
                    >
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand text-white lg:h-8 lg:w-8">
                        {step.icon}
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[14.5px] font-extrabold leading-snug text-white">
                          <span className="tabular text-brand-accent">{i + 1}.</span> {step.label}
                        </span>
                        <span className="text-[12px] font-semibold leading-[1.5] text-ink-soft">
                          {step.sub}
                        </span>
                      </span>
                      {i < TRANSLATION_STEPS.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute -right-[11px] top-[26px] z-10 text-[15px] font-extrabold text-brand-accent md:hidden lg:block lg:top-[22px]"
                        >
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
