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
 * 主役（カメラで円換算・手入力レート）だけ面積を取る bento 型のグリッドにしている。
 * 主役は白の大カード、レートは濃色カードで、淡ティールの地の上に強い明暗差を作る。
 * col-span はブレークポイントで切り替える（auto-fit + span 2 は1列に潰れたとき横にはみ出す）。
 *
 * ■ desktop（lg以上）の上段比率
 * 2:1 だと濃色カード側の本文が5行に折れて高さを決め、白カードの下に大きな空白が出る。
 * 1.6:1 にして濃色カードの本文を4行・見出しを1行に収め、2枚の高さを内容で揃える
 * （equal height を維持したまま、片方だけ空く状態をなくす）。
 * 下段は lg で4列にし、小カード6枚＋カテゴリー（2列分）を2段に収める。
 * カテゴリーを独立した段として残すと3段積みになり、セクション全体が縦に伸びるため。
 * 小カード・カテゴリー・注記は padding / gap / 行間で詰め、本文サイズ（15.5〜16px）は変えない。
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
    <section id="features" className="ground-mint section-pad scroll-mt-20 lg:py-10">
      <div className="container-lp max-w-lp">
        <SectionHeading
          layout="split"
          eyebrow="できること"
          title={
            <>
              ここにあるものは、
              <br className="hidden sm:block" />
              すべて無料版で使えます。
            </>
          }
          lead="Proとの違いは、保存できる件数と旅行の数、そしてカテゴリーの絞り込み・分析・CSVだけです。"
        />

        <div className="mt-[clamp(40px,5vw,64px)] grid gap-[clamp(18px,2vw,26px)] lg:grid-cols-[1.6fr_1fr] lg:mt-5 lg:gap-3.5">
          {/* 主役1：カメラで円換算 */}
          <article className="min-w-0 rounded-card-xl border border-[#CFE8E1] bg-white p-[clamp(26px,3vw,42px)] shadow-[0_26px_50px_-34px_rgba(16,60,54,0.4)] lg:p-6">
            <span className="text-[12.5px] font-extrabold tracking-[0.16em] text-brand-dark">
              主役
            </span>
            <h3 className="mt-3.5 text-[clamp(24px,2.8vw,28px)] font-extrabold leading-snug tracking-[-0.03em] text-text lg:mt-2 lg:text-[22px]">
              カメラで、値札を日本円に。
            </h3>
            <p className="mt-3.5 max-w-[620px] text-[16.5px] leading-[1.95] text-body-strong lg:mt-2 lg:max-w-none lg:text-[16px] lg:leading-[1.7]">
              値札の数字を読み取って、日本円の目安をその場で表示します。
              通貨記号の自動判定に頼らず、事前に換算モードを選ぶ方式にしているので、
              読み取りが速く安定します。
            </p>

            {/* 換算の見え方をそのまま示す帯。元の価格に打ち消し線は引かない（値引きに見える） */}
            <div className="mt-[clamp(22px,2.4vw,32px)] flex flex-wrap items-center gap-x-6 gap-y-4 rounded-[20px] border border-brand-border bg-brand-soft2 p-[clamp(20px,2.4vw,28px)] lg:mt-3.5 lg:gap-x-5 lg:gap-y-2 lg:px-4 lg:py-3">
              <span className="text-[clamp(24px,2.6vw,30px)] font-bold text-muted tabular lg:text-[24px]">
                ₩42,900
              </span>
              <span aria-hidden className="text-[22px] text-brand">
                →
              </span>
              <span>
                <span className="block text-[12.5px] font-extrabold text-brand-dark">
                  日本円で
                </span>
                <span className="block text-[clamp(34px,4vw,46px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-text tabular lg:text-[34px]">
                  ¥4,719
                </span>
              </span>
              <span className="text-[14px] font-semibold text-body-strong tabular lg:text-[13.5px]">
                1 KRW = ¥0.11（自分で入力したレート）
              </span>
            </div>
          </article>

          {/* 主役2：手入力レート */}
          <article className="ground-card-dark flex min-w-0 flex-col rounded-card-xl p-[clamp(26px,3vw,38px)] shadow-[0_26px_50px_-30px_rgba(10,20,19,0.7)] lg:p-6">
            <span className="text-[12.5px] font-extrabold tracking-[0.16em] text-brand-accent">
              レート
            </span>
            <h3 className="mt-3.5 text-[clamp(21px,2.2vw,24px)] font-extrabold leading-[1.4] tracking-[-0.025em] text-white lg:mt-2 lg:text-[21px]">
              自分が使うレートで、
              <br className="lg:hidden" />
              判断できる。
            </h3>
            <p className="mt-3.5 text-[16px] leading-[1.95] text-ink-bright lg:mt-2 lg:text-[16px] lg:leading-[1.7]">
              両替所やカード請求の実際のレートを自分で入力します。
              自動取得はしません。そのぶん換算は端末内で完結するので、
              電波が不安定な場所でもそのまま使えます。
            </p>
            <p className="mt-auto pt-[22px] lg:pt-3.5">
              <span className="block rounded-[14px] border border-white/[0.16] bg-white/[0.09] px-4 py-3.5 text-[14px] font-bold leading-[1.7] text-white lg:py-2">
                保存した記録は、その時のレートで固定されます
              </span>
            </p>
          </article>
        </div>

        {/* 小さめの機能 */}
        <div className="mt-[clamp(18px,2vw,26px)] grid gap-[clamp(18px,2vw,26px)] sm:grid-cols-2 lg:grid-cols-4 lg:mt-3 lg:gap-3">
          {SMALL_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[20px] border border-line-strong bg-white px-6 py-[26px] shadow-[0_12px_28px_-22px_rgba(16,60,54,0.5)] transition-colors hover:border-brand-border lg:rounded-2xl lg:px-4 lg:py-3"
            >
              <h3 className="text-[18px] font-extrabold tracking-[-0.01em] text-text lg:text-[17px]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15.5px] leading-[1.9] text-body-strong lg:mt-1 lg:text-[15.5px] lg:leading-[1.6]">{feature.desc}</p>
            </article>
          ))}

          {/* カテゴリー：一覧を出して具体性を持たせる。candidate（アンバー）は「候補として保存」の文脈なのでここに残す。
              sm/md では2列分の幅で独立した段、lg では4列グリッドの2列分に収めて小カードと同じ段に置く */}
          <article className="grid items-center gap-x-8 gap-y-5 rounded-[22px] border border-sand-border bg-sand p-[clamp(24px,2.8vw,36px)] sm:col-span-2 md:grid-cols-2 lg:col-span-2 lg:grid-cols-1 lg:content-center lg:gap-y-2 lg:rounded-2xl lg:px-5 lg:py-3">
            <div>
              <h3 className="text-[19px] font-extrabold text-text lg:text-[17px]">カテゴリーを選んで保存</h3>
              <p className="mt-3 text-[16px] leading-[1.9] text-body-strong lg:mt-1 lg:text-[15.5px] lg:leading-[1.6]">
                保存するときにカテゴリーを選べます（無料版でも使えます）。
                カテゴリーでの絞り込みと、カテゴリー別の分析はProです。
              </p>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-sand-line bg-white px-[18px] py-2.5 text-[14.5px] font-bold text-candidate-text lg:px-3.5 lg:py-1 lg:text-[14px]"
                >
                  {category}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-[clamp(28px,3vw,40px)] max-w-[760px] text-[15px] leading-[1.9] text-muted-strong lg:mt-3.5 lg:max-w-none lg:text-[14.5px] lg:leading-[1.65]">
          無料版でも、カメラでの円換算・翻訳・音声入力・読み上げは回数の制限なく使えます。
          保存は1つの旅行につき{FREE_LIMITS.savesPerTrip}件、
          同時に管理できる旅行は{FREE_LIMITS.trips}件までです。
        </p>
      </div>
    </section>
  );
}
