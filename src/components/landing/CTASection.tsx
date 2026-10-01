import { FREE_LIMITS, LINKS } from "@/lib/appSpec";

/**
 * 最終CTA。
 *
 * ■ App Store公開前の導線設計
 * `LINKS.appStore` が null の間は「入手」ボタンを出せない。
 * その代わり、この時点でいちばん意味のある行動＝**公開を知らせる連絡先を残してもらうこと**
 * をprimary CTAに置く（お問い合わせへ）。灰色の「準備中」バッジで終わらせない。
 * 公開が決まったら appSpec.ts の LINKS.appStore を設定するだけでボタンに切り替わる。
 *
 * ■ V2（2026-09）の見た目
 * 見出しとボタンを一段大きくし、ページ全体でいちばん存在感のあるブロックにする。
 * 主ボタンは白（ティール地の上で最も強い）、副ボタンは白の線。コーラルはバッジのドットと背景の微光のみ。
 */
const CTA_PRIMARY =
  "inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white px-9 py-[22px] text-[18px] font-extrabold text-brand-deep lg:px-7 lg:py-[15px] lg:text-[16px] shadow-[0_24px_48px_-18px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5";

export default function CTASection() {
  return (
    <section id="cta" className="ground-cta relative scroll-mt-20 overflow-hidden py-[clamp(84px,10vw,92px)] lg:py-14">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="container-lp relative max-w-[840px] text-center">
        <h2 className="text-balance text-[clamp(32px,5vw,44px)] font-extrabold leading-[1.24] tracking-[-0.035em] text-white lg:text-[38px]">
          次の旅行から、
          <br />
          暗算をやめませんか。
        </h2>
        <p className="mx-auto mt-6 max-w-[620px] text-pretty text-[clamp(16.5px,1.6vw,17px)] leading-[1.95] text-white/[0.88] lg:mt-4 lg:text-[16px] lg:leading-[1.7]">
          値札にかざすだけで日本円がわかる。買い物の合計も、残りの予算も、
          旅行中にちゃんと見える。まずは無料でお試しください。
        </p>

        <div className="mt-[clamp(34px,4vw,46px)] flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap lg:mt-6">
          {LINKS.appStore ? (
            <a href={LINKS.appStore} className={CTA_PRIMARY}>
              App Storeで入手
            </a>
          ) : (
            <a href={LINKS.contact} className={CTA_PRIMARY}>
              公開のお知らせを受け取る
              <span aria-hidden>→</span>
            </a>
          )}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-2xl border-[1.5px] border-white/35 px-8 py-[21px] text-[17.5px] font-extrabold text-white lg:px-6 lg:py-[14px] lg:text-[15.5px] transition-colors hover:border-white/70 hover:bg-white/10"
          >
            無料でできることを見る
          </a>
        </div>

        {!LINKS.appStore && (
          <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.24] bg-white/[0.12] px-5 py-[11px] text-[14px] font-bold text-white lg:mt-4 lg:px-4 lg:py-2 lg:text-[13.5px]">
            <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-coral-glow" />
            App Storeで公開準備中
          </p>
        )}

        <p className="mt-5 text-[14px] font-medium leading-[1.9] text-white/[0.72] lg:mt-3 lg:text-[14.5px]">
          無料版で、同時に管理できる旅行は{FREE_LIMITS.trips}件、
          1つの旅行につき{FREE_LIMITS.savesPerTrip}件まで保存できます。
        </p>
      </div>
    </section>
  );
}
