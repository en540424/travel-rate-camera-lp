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
    <section id="howto" className="scroll-mt-16 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="使い方"
          title={
            <>
              現地でやることは、
              <br className="sm:hidden" />
              3手だけ。
            </>
          }
          lead={
            <>
              旅行の作成とレートの入力は、出発前に1回だけ済ませておけます。
              現地でやるのは、下の3ステップだけです。
            </>
          }
        />

        <ol className="mt-16 grid gap-14 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.n} className="relative flex flex-col items-center text-center">
              {/* ステップ間の矢印（デスクトップのみ） */}
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-4 top-[22px] hidden text-[18px] font-bold text-brand/35 md:block"
                >
                  →
                </span>
              )}

              <div className="flex items-center gap-2.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-[17px] font-bold text-white tabular">
                  {step.n}
                </span>
                <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                  {step.label}
                </span>
              </div>

              <h3 className="mt-5 text-[19px] font-bold leading-snug tracking-[-0.01em] text-text">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-xs text-[13.5px] leading-[1.9] text-body">
                {step.desc}
              </p>

              <PhoneFrame
                label={step.alt}
                className="mt-8 [--s:0.52] sm:[--s:0.6] md:[--s:0.44] lg:[--s:0.56]"
              >
                {step.screen}
              </PhoneFrame>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-14 max-w-xl text-center text-[12.5px] font-medium leading-[1.9] text-muted">
          無料版では、1つの旅行につき{FREE_LIMITS.savesPerTrip}件まで保存できます。
          レートは自分で入力する方式なので、換算は端末内で完結します。
        </p>
      </div>
    </section>
  );
}
