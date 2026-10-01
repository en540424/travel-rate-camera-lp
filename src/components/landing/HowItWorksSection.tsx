import PhoneFrame from "@/components/mock/PhoneFrame";
import CameraScreen from "@/components/mock/screens/CameraScreen";
import HistoryScreen from "@/components/mock/screens/HistoryScreen";
import OcrResultScreen from "@/components/mock/screens/OcrResultScreen";
import { SectionHeading } from "@/components/ui/Section";
import { TOTALS } from "@/components/mock/demoData";
import { FREE_LIMITS } from "@/lib/appSpec";

/**
 * 解決の流れ。3ステップをすべて実画面で見せる。
 *
 * 説明文だけの3カードではなく、`mock/screens/*`（＝アプリの実装どおりの画面）を
 * 順番に並べることで「本当にこの3手で終わる」ことを目で確認できるようにしている。
 *
 * 事前準備（旅行とレートの設定）は旅行前に1回で済むので、
 * ステップに数えず上の注記に置いている（現地での操作数を実際より多く見せないため）。
 *
 * ■ V2（2026-09）のレイアウト
 * 各ステップは「番号＋タグ → 見出し → 本文 → 端末パネル」の1ブロック（<li>）のまま、
 * md以上では subgrid で3列の高さを揃え、文章の行数が違っても端末の上端が並ぶようにしている。
 * 端末は淡いパネル（.panel-phone）に収めて、白地の上で浮かせる。
 *
 * ■ desktop（lg以上）の密度
 * 「3ステップを一目で全部把握できる」を最優先に、見出しは1行に流し、
 * 番号タイル・タグ・パネルの余白（chrome）を優先して詰める。
 * 端末は --s 0.29（PhoneFrame は 1280px 以上で xl 値が効く）。本文は16pxのまま。
 */
const STEPS = [
  {
    n: "1",
    label: "かざす",
    title: "値札にカメラを向ける",
    desc: "枠を値札に合わせて「読み取る」。事前に換算モードを選ぶ方式なので、読み取りが速く安定します。",
    screen: <CameraScreen />,
    alt: "価格OCRモードのカメラ画面。値札に四隅の枠を合わせていて、下に残り予算と今日の件数が出ている",
  },
  {
    n: "2",
    label: "わかる",
    title: "日本円で確かめて、保存",
    desc: "読み取れた価格をタップすると、日本円が大きく出ます。迷っているものは「候補」、買ったら「購入済み」で保存。",
    screen: <OcrResultScreen />,
    alt: "読み取り結果の画面。日本円で 4,719円 と大きく表示され、候補に保存するボタンが並んでいる",
  },
  {
    n: "3",
    label: "残る",
    title: "残り予算と記録が残る",
    desc: "購入済みの合計が予算から引かれて、残りがひと目でわかります。写真とメモも一緒に残ります。",
    screen: <HistoryScreen />,
    alt: `履歴画面。残り予算 ${TOTALS.remainingJpy} が大きく出て、購入済みと候補の合計、保存した${TOTALS.savedCount}件の記録が並んでいる`,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howto" className="section-pad scroll-mt-20 bg-white lg:py-10">
      <div className="container-lp max-w-lp">
        <SectionHeading
          layout="split"
          eyebrow="使い方"
          title={
            <>
              現地でやることは、
              <br className="lg:hidden" />
              <span className="text-coral">3手</span>だけ。
            </>
          }
          lead="旅行の作成とレートの入力は、出発前に1回だけ済ませておけます。現地でやるのは、下の3ステップだけです。"
        />

        <ol className="mt-[clamp(40px,5vw,54px)] grid gap-x-[clamp(28px,3vw,32px)] gap-y-12 md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-y-[clamp(28px,3vw,32px)] lg:mt-5 lg:gap-x-6 lg:gap-y-5">
          {STEPS.map((step) => (
            <li key={step.n} className="grid gap-y-8 md:row-span-2 md:grid-rows-subgrid lg:gap-y-3">
              <div>
                <div className="flex items-center gap-3.5">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-brand text-[24px] lg:h-9 lg:w-9 lg:rounded-xl lg:text-[17px] font-extrabold text-white shadow-[0_12px_24px_-14px_rgba(14,148,136,1)] tabular">
                    {step.n}
                  </span>
                  <span className="rounded-full bg-brand-soft px-3.5 py-[7px] text-[13px] font-extrabold tracking-[0.14em] text-brand-dark lg:px-3 lg:py-1.5 lg:text-[12.5px]">
                    {step.label}
                  </span>
                </div>

                <h3 className="mt-5 text-[clamp(21px,2.1vw,22px)] font-extrabold leading-snug tracking-[-0.025em] text-text lg:mt-3 lg:text-[21px]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[16.5px] leading-[1.95] text-body-strong lg:mt-1.5 lg:text-[16px] lg:leading-[1.7]">{step.desc}</p>
              </div>

              <div className="panel-phone flex justify-center px-4 py-7 lg:mx-auto lg:w-fit lg:px-6 lg:py-2">
                <PhoneFrame
                  label={step.alt}
                  className="[--s:0.62] md:[--s:0.46] lg:[--s:0.28] xl:[--s:0.29]"
                >
                  {step.screen}
                </PhoneFrame>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-[clamp(32px,3.6vw,40px)] inline-block rounded-2xl border border-[#CFE8E1] bg-brand-soft px-[22px] py-[18px] text-[15.5px] font-semibold leading-[1.85] text-text lg:mt-4 lg:rounded-xl lg:px-4 lg:py-2.5 lg:text-[15px] lg:leading-[1.7]">
          無料版では、1つの旅行につき{FREE_LIMITS.savesPerTrip}件まで保存できます。
          レートは自分で入力する方式なので、換算は端末内で完結します。
        </p>
      </div>
    </section>
  );
}
