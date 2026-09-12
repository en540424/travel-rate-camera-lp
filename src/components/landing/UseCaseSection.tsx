const CASES = [
  {
    place: "韓国・明洞",
    tag: "コスメ",
    body: "まとめ買いすると合計が読めなくなる。1つずつ保存しておけば、レジ前で「今いくら分か」がわかります。",
  },
  {
    place: "タイ・バンコク",
    tag: "市場",
    body: "値札がない店でも、聞いた金額を手入力で記録。翻訳と読み上げで値段の交渉もスムーズに。",
  },
  {
    place: "ヨーロッパ",
    tag: "お土産",
    body: "予算を決めて出発。購入済みの合計が自動で引かれるので、最終日に残りいくら使えるかが見えます。",
  },
];

export default function UseCaseSection() {
  return (
    <section className="bg-screen py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
            Use cases
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[32px]">
            こんな場面で使えます。
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.place}
              className="rounded-card-lg border border-line bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-candidate-soft px-2.5 py-1 text-[11px] font-bold text-candidate-text">
                  {c.tag}
                </span>
                <span className="text-[13px] font-bold text-text">{c.place}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.85] text-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
