import { SectionHeading } from "@/components/ui/Section";
import { CATEGORIES, FREE_LIMITS } from "@/lib/appSpec";

/**
 * 機能紹介。
 *
 * 掲載するのは**実装済みの機能のみ**。
 * 将来候補（自動為替取得・クラウドOCR・PDF等）は appSpec.ts の FUTURE_CANDIDATES に隔離してあり、
 * ここから参照しない。
 *
 * 同じ大きさのカードを6枚並べると平板になるので、
 * 主役（カメラで円換算・手入力レート）だけ面積を取る非対称なグリッドにしている。
 */
const SMALL_FEATURES = [
  {
    title: "翻訳",
    desc: "伝えたいこと、聞かれたことをその場で翻訳。iPhoneの翻訳機能を使います。",
  },
  {
    title: "音声入力・読み上げ",
    desc: "話した言葉を文字にして翻訳。訳文は音声で読み上げられるので、画面を見せなくても伝わります。",
  },
  {
    title: "買い物カレンダー",
    desc: "日ごとの記録を振り返れます。その日の購入済み・候補の合計もわかります。",
  },
  {
    title: "商品写真",
    desc: "値札だけでなく商品そのものも撮って記録に添付できます。あとで何を見たか思い出せます。",
  },
  {
    title: "候補と購入済み",
    desc: "迷っているものは候補のまま。買ったら切り替えるだけで、購入済みの合計に反映されます。",
  },
  {
    title: "期間ごとの分析",
    desc: "今日・月・年で、購入済みと候補の合計、保存件数を確認できます。",
  },
];

export default function FeatureSection() {
  return (
    <section id="features" className="ground-mint scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="できること"
          title={
            <>
              ここにあるものは、
              <br className="sm:hidden" />
              すべて無料版で使えます。
            </>
          }
          lead="Proとの違いは、保存できる件数と旅行の数、そしてカテゴリーの絞り込み・分析・CSVだけです。"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* 主役1：カメラで円換算 */}
          <article className="flex flex-col justify-between gap-8 rounded-card-lg border border-brand-border bg-white p-7 shadow-[0_18px_40px_-30px_rgba(16,33,31,0.5)] lg:col-span-2 lg:p-9">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                主役
              </span>
              <h3 className="mt-3 text-[22px] font-bold leading-snug tracking-[-0.01em] text-text sm:text-[25px]">
                カメラで、値札を日本円に。
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-[1.95] text-body">
                値札の数字を読み取って、日本円の目安をその場で表示します。
                通貨記号の自動判定に頼らず、事前に換算モードを選ぶ方式にしているので、
                読み取りが速く安定します。
              </p>
            </div>

            {/* 換算の見え方をそのまま示す帯 */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-card border border-line bg-screen px-5 py-4">
              <span className="text-[22px] font-bold text-body tabular sm:text-[26px]">
                ₩42,900
              </span>
              <span aria-hidden className="text-[18px] font-bold text-brand">
                →
              </span>
              <div>
                <span className="block text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted">
                  日本円で
                </span>
                <span className="text-[28px] font-bold leading-tight tracking-[-0.04em] text-text tabular sm:text-[34px]">
                  ¥4,719
                </span>
              </div>
              <span className="text-[11.5px] font-medium text-muted tabular">
                1 KRW = ¥0.11（自分で入力したレート）
              </span>
            </div>
          </article>

          {/* 主役2：手入力レート */}
          <article className="flex flex-col justify-between gap-6 rounded-card-lg border border-line bg-ink p-7 lg:p-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-accent">
                レート
              </span>
              <h3 className="mt-3 text-[20px] font-bold leading-snug tracking-[-0.01em] text-white">
                自分が使うレートで、
                <br />
                判断できる。
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.95] text-ink-sub">
                両替所やカード請求の実際のレートを自分で入力します。
                自動取得はしません。そのぶん換算は端末内で完結するので、
                電波が不安定な場所でもそのまま使えます。
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-[11px] font-semibold text-ink-muted">
                保存した記録は、その時のレートで固定されます
              </span>
            </div>
          </article>

          {/* 小さめの機能 */}
          {SMALL_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-card-lg border border-line bg-white p-6 transition-colors hover:border-brand-border"
            >
              <h3 className="text-[16px] font-bold text-text">{feature.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.9] text-body">{feature.desc}</p>
            </article>
          ))}

          {/* カテゴリー：一覧を出して具体性を持たせる */}
          <article className="rounded-card-lg border border-candidate-border bg-candidate-soft2 p-6 lg:col-span-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <div>
                <h3 className="text-[16px] font-bold text-text">カテゴリーを選んで保存</h3>
                <p className="mt-2.5 max-w-xl text-[13.5px] leading-[1.9] text-body">
                  保存するときにカテゴリーを選べます（無料版でも使えます）。
                  カテゴリーでの絞り込みと、カテゴリー別の分析はProです。
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-candidate-border bg-white px-3 py-1.5 text-[12px] font-bold text-candidate-text"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[12.5px] leading-[1.9] text-muted">
          無料版でも、カメラでの円換算・翻訳・音声入力・読み上げは回数の制限なく使えます。
          保存は1つの旅行につき{FREE_LIMITS.savesPerTrip}件、
          同時に管理できる旅行は{FREE_LIMITS.trips}件までです。
        </p>
      </div>
    </section>
  );
}
