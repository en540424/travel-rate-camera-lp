import { SectionHeading } from "@/components/ui/Section";

/**
 * 課題提示。
 *
 * カードを3枚並べるのをやめ、番号を大きく取った編集的な3列にしている。
 * 地色は砂色（.ground-warm）。番号と上罫はコーラルで、ここで一度視線を止める。
 * コーラルは「文字が絡まない」大きな数字と罫にだけ使い（HANDOFF §4-2 C案）、
 * 見出し・本文は通常の文字色で読ませる。
 * 末尾の転換文は、コーラルの極薄い面のカードに載せて次セクションへの導線にする。
 *
 * desktop（lg以上）は「3列＋帯」で1セクションが必要以上に大きく見えないよう、
 * 番号・余白・帯の高さを詰め、転換文は1行に流す。本文は16pxのまま縮めない。
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
    <section className="ground-warm section-pad lg:py-10">
      <div className="container-lp max-w-lp">
        <SectionHeading
          tone="coral"
          eyebrow="よくある困りごと"
          title={
            <>
              海外の買い物で、
              <br className="sm:hidden" />
              いちばん面倒なこと。
            </>
          }
        />

        <div className="mt-[clamp(40px,5vw,52px)] grid gap-[clamp(24px,3vw,36px)] md:grid-cols-3 lg:mt-5 lg:gap-6">
          {PROBLEMS.map((problem) => (
            <div key={problem.n} className="border-t-[3px] border-coral pt-[22px] lg:pt-3.5">
              <span className="block text-[40px] font-extrabold leading-none tracking-[-0.04em] text-coral tabular lg:text-[30px]">
                {problem.n}
              </span>
              <h3 className="mt-3.5 text-[clamp(20px,2vw,22px)] font-extrabold leading-snug tracking-[-0.02em] text-text lg:mt-2 lg:text-[21px]">
                {problem.title}
              </h3>
              <p className="mt-3 text-[16.5px] leading-[1.95] text-body-strong lg:mt-1.5 lg:text-[16px] lg:leading-[1.7]">{problem.desc}</p>
            </div>
          ))}
        </div>

        {/* 解決への転換。次セクションへの導線として機能させる。desktopでは1行に流して帯を薄くする */}
        <div className="mt-[clamp(44px,5vw,58px)] rounded-[22px] border border-coral-border bg-coral-soft px-[clamp(24px,3.4vw,40px)] py-[clamp(28px,3.4vw,36px)] lg:mt-5 lg:px-6 lg:py-4">
          <p className="text-balance text-[clamp(21px,2.7vw,24px)] font-extrabold leading-[1.62] tracking-[-0.025em] text-text lg:text-[20px] lg:leading-[1.5]">
            暗算も電卓もやめて、
            <span className="text-brand-dark">換算はカメラに任せる。</span>
            <br className="lg:hidden" />
            決めるのは「買うかどうか」だけでいい。
          </p>
        </div>
      </div>
    </section>
  );
}
