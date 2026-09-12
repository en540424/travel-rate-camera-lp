const STEPS = [
  {
    n: "1",
    title: "旅行とレートを決める",
    desc: "行き先の通貨を選んで、使うレートを入力します。旅行前に済ませておけば、現地ですぐ使えます。",
  },
  {
    n: "2",
    title: "値札にカメラを向ける",
    desc: "枠を値札に合わせて読み取るだけ。日本円の目安がその場で表示されます。",
  },
  {
    n: "3",
    title: "気になったものを保存",
    desc: "候補として保存し、買ったら購入済みに。合計と残り予算が自動で更新されます。",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-screen py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
            How it works
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[32px]">
            使い方は3ステップ。
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-card-lg border border-line bg-white p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white tabular">
                {s.n}
              </span>
              <h3 className="mt-4 text-[16.5px] font-bold text-text">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.85] text-body">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
