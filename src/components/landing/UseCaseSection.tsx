import { SectionHeading } from "@/components/ui/Section";

/**
 * 利用シーン。
 *
 * Design V2 にはこのセクションが無いが、既存の内容を残し、V2のトーンに合わせて再スタイリングしている。
 * 前（できること：淡ティール→白）と後（料金：白）が明るい面なので、
 * ここは薄いグレー（bg-screen）の帯にして白が3つ続かないようにする。
 * カードは「できること」の小カードと同じ型（白・radius 20・薄い影）で揃え、
 * 国旗を丸いタイルに置いて場面の違いを一目で分ける。
 * タグは coral-text（文字が絡む強調は暗いコーラルのみ・HANDOFF §4-2）。
 */
const CASES = [
  {
    flag: "🇰🇷",
    place: "韓国・明洞",
    tag: "コスメのまとめ買い",
    body: "3つ4つとカゴに入れるうちに合計が読めなくなる。1点ずつ保存しておけば、レジに並ぶ前に「今いくら分か」がわかります。",
  },
  {
    flag: "🇹🇭",
    place: "タイ・バンコク",
    tag: "値札のない市場",
    body: "値札がない店では、聞いた金額を手入力で記録。翻訳と読み上げがあるので、やり取りで詰まりません。",
  },
  {
    flag: "🇪🇺",
    place: "ヨーロッパ",
    tag: "予算を決めた旅",
    body: "出発前に予算を決めておけば、購入済みの合計が自動で引かれます。最終日に残りいくら使えるかが見えます。",
  },
];

export default function UseCaseSection() {
  return (
    <section className="section-pad bg-screen lg:py-10">
      <div className="container-lp max-w-lp">
        <SectionHeading eyebrow="使う場面" title="旅先での、こんな場面で。" />

        <div className="mt-[clamp(36px,4vw,56px)] grid gap-[clamp(18px,2vw,26px)] md:grid-cols-3 lg:mt-5 lg:gap-3.5">
          {CASES.map((useCase) => (
            <article
              key={useCase.place}
              className="rounded-[20px] border border-line-strong bg-white px-6 py-[26px] shadow-[0_12px_28px_-22px_rgba(16,60,54,0.5)] lg:rounded-2xl lg:px-5 lg:py-3.5"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-screen text-[22px] lg:h-9 lg:w-9 lg:text-[19px]"
                >
                  {useCase.flag}
                </span>
                <div>
                  <p className="text-[17px] font-extrabold tracking-[-0.01em] text-text lg:text-[16px]">
                    {useCase.place}
                  </p>
                  <p className="mt-0.5 text-[13px] font-extrabold text-coral-text lg:text-[12.5px]">{useCase.tag}</p>
                </div>
              </div>
              <p className="mt-4 text-[15.5px] leading-[1.9] text-body-strong lg:mt-2 lg:text-[15.5px] lg:leading-[1.6]">{useCase.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
