const PROBLEMS = [
  {
    icon: "?",
    title: "結局いくら？",
    desc: "「₩42,900」と言われても、日本円でいくらなのかがとっさに出てこない。",
  },
  {
    icon: "×",
    title: "毎回スマホで計算",
    desc: "電卓アプリを開いてレートを打ち直す。店の前で立ち止まる時間がもったいない。",
  },
  {
    icon: "!",
    title: "使いすぎに後で気づく",
    desc: "帰国してカードの明細を見て青ざめる。旅行中は合計がわからない。",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[30px]">
            海外での買い物、
            <br className="sm:hidden" />
            こんなことありませんか。
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-card-lg border border-line bg-screen p-6"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-danger-soft text-[17px] font-bold text-danger"
              >
                {p.icon}
              </span>
              <h3 className="mt-4 text-[16px] font-bold text-text">{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.85] text-body">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
