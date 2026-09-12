import { SectionHeading } from "@/components/ui/Section";

/**
 * 課題提示。
 *
 * カードを3枚並べるのをやめ、番号を大きく取った編集的な3列にしている。
 * 地色は candidate（amber）系の極薄。amberはアプリで「まだ買うか決めていない＝候補」を
 * 意味する色なので、「迷っている場面」を扱うこのセクションと意味が合う。
 */
const PROBLEMS = [
  {
    n: "01",
    title: "結局いくら？",
    desc: "「₩42,900」と言われても、日本円でいくらなのかがとっさに出てこない。店員さんを待たせたまま固まる。",
  },
  {
    n: "02",
    title: "毎回、電卓を開く",
    desc: "電卓アプリを開いてレートを打ち直す。1点ならまだしも、まとめ買いだと合計が追えなくなる。",
  },
  {
    n: "03",
    title: "使いすぎに、後で気づく",
    desc: "帰国してから明細を見て青ざめる。旅行中に「今いくら使ったか」が見えていない。",
  },
];

export default function ProblemSection() {
  return (
    <section className="ground-warm py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          align="left"
          eyebrow="よくある困りごと"
          title={
            <>
              海外の買い物で、
              <br className="sm:hidden" />
              いちばん面倒なこと。
            </>
          }
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PROBLEMS.map((problem) => (
            <div key={problem.n} className="border-t-2 border-candidate/35 pt-6">
              <span className="block text-[13px] font-bold tracking-[0.12em] text-candidate-strong tabular">
                {problem.n}
              </span>
              <h3 className="mt-4 text-[20px] font-bold leading-snug tracking-[-0.01em] text-text sm:text-[22px]">
                {problem.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.95] text-body">{problem.desc}</p>
            </div>
          ))}
        </div>

        {/* 解決への転換。次セクションへの導線として機能させる */}
        <p className="mt-16 max-w-xl text-[18px] font-bold leading-[1.75] tracking-[-0.01em] text-text sm:text-[22px]">
          暗算も電卓もやめて、
          <span className="text-brand">換算はカメラに任せる。</span>
          <br />
          決めるのは「買うかどうか」だけでいい。
        </p>
      </div>
    </section>
  );
}
