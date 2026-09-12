import PhoneFrame from "@/components/mock/PhoneFrame";
import AnalyticsScreen from "@/components/mock/screens/AnalyticsScreen";
import CalendarScreen from "@/components/mock/screens/CalendarScreen";
import TranslationScreen from "@/components/mock/screens/TranslationScreen";
import { TOTALS } from "@/components/mock/demoData";
import { SectionHeading } from "@/components/ui/Section";

/**
 * 実際の利用画面ギャラリー。
 *
 * 換算のあとに続く「翻訳 / カレンダー / 分析」を暗面の上に並べる。
 * 明るいアプリ画面を暗い地に置くと端末が浮き上がるので、ここが端末モックの見せ場になる。
 *
 * ■ 事実に関する注意
 * この3画面はいずれも**無料版で使える**。
 * 分析のうちカテゴリー別だけがProなので、画面内にProバッジを出して区別している。
 */
const SCREENS = [
  {
    tab: "翻訳",
    title: "その場で、言葉も通す",
    desc: "店員さんとのやり取りは翻訳タブで。話した言葉を文字にして翻訳し、訳文は読み上げられます。",
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
    <section id="screens" className="ground-ink relative scroll-mt-16 overflow-hidden py-20 md:py-28">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          tone="dark"
          eyebrow="実際の画面"
          title={
            <>
              換算のあとも、
              <br className="sm:hidden" />
              旅の記録として残る。
            </>
          }
          lead="下はすべて実装どおりの画面です。翻訳も、カレンダーも、期間ごとの分析も、無料版で使えます。"
        />

        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {SCREENS.map((item) => (
            <div key={item.tab} className="flex flex-col items-center text-center">
              <PhoneFrame
                glow
                label={item.alt}
                className="[--s:0.56] sm:[--s:0.64] md:[--s:0.46] lg:[--s:0.58]"
              >
                {item.screen}
              </PhoneFrame>

              <span className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[11px] font-bold text-brand-accent">
                {item.tab}タブ
              </span>
              <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-[-0.01em] text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 max-w-xs text-[13.5px] leading-[1.9] text-ink-sub">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
