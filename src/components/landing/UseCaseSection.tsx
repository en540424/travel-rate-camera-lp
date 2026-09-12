import { SectionHeading } from "@/components/ui/Section";

/**
 * 利用シーン。
 *
 * カード3枚ではなく、左に細いアクセント罫を置いた行構成にして、
 * 前後のセクション（カード・表）と密度を変えている。
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
    <section className="bg-screen py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          align="left"
          eyebrow="使う場面"
          title="旅先での、こんな場面で。"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {CASES.map((useCase) => (
            <div key={useCase.place} className="border-l-2 border-brand/25 pl-5">
              <div className="flex items-center gap-2">
                <span aria-hidden className="text-[15px]">
                  {useCase.flag}
                </span>
                <span className="text-[14px] font-bold text-text">{useCase.place}</span>
              </div>
              <p className="mt-1 text-[12px] font-bold text-candidate-text">{useCase.tag}</p>
              <p className="mt-3 text-[13.5px] leading-[1.95] text-body">{useCase.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
