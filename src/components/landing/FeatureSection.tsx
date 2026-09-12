import { FREE_LIMITS } from "@/lib/appSpec";

/**
 * 掲載するのは実装済みの機能のみ。
 * 将来候補（自動為替取得・クラウドOCR・PDF等）は appSpec.ts の FUTURE_CANDIDATES に隔離してあり、
 * ここから参照しない。
 */
const FEATURES = [
  {
    icon: "◎",
    title: "カメラで円換算",
    desc: "値札の数字をその場で読み取って、日本円の目安を表示します。事前に換算モードを選ぶ方式なので、読み取りが速く安定します。",
  },
  {
    icon: "¥",
    title: "手入力レート",
    desc: "両替所やカード請求のレートを自分で設定できます。端末内で計算するので、電波が不安定な場所でもそのまま使えます。",
  },
  {
    icon: "文",
    title: "翻訳",
    desc: "店員さんに伝えたいこと、聞かれたことをその場で翻訳。買い物のやり取りで詰まらずに済みます。",
  },
  {
    icon: "♪",
    title: "音声入力・読み上げ",
    desc: "話した言葉を文字にして翻訳。翻訳した文は音声で読み上げられるので、画面を見せなくても伝わります。",
  },
  {
    icon: "＃",
    title: "カテゴリー",
    desc: "お土産・食事・コスメなど、カテゴリーを選んで保存できます。何にいくら使ったかを後から振り返れます。",
  },
  {
    icon: "▤",
    title: "買い物リストと予算",
    desc: `気になったものを保存して、候補と購入済みを管理。無料でも1つの旅行につき${FREE_LIMITS.savesPerTrip}件まで保存できます。`,
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
            Features
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[32px]">
            旅行中の「困った」を、
            <br className="sm:hidden" />
            ひとつのアプリで。
          </h2>
          <p className="mt-4 text-[14.5px] leading-[1.9] text-body">
            ここにあるものは、すべて無料版で使えます。
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-card-lg border border-line bg-white p-6 transition-shadow hover:shadow-[0_12px_28px_-18px_rgba(16,33,31,0.35)]"
            >
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-chip bg-brand-soft text-[17px] font-bold text-brand-dark"
              >
                {f.icon}
              </span>
              <h3 className="mt-4 text-[16px] font-bold text-text">{f.title}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.85] text-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
