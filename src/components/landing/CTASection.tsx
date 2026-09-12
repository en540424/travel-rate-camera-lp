import { FREE_LIMITS, LINKS } from "@/lib/appSpec";

/**
 * 最終CTA。
 *
 * ■ App Store公開前の導線設計
 * `LINKS.appStore` が null の間は「入手」ボタンを出せない。
 * その代わり、この時点でいちばん意味のある行動＝**公開を知らせる連絡先を残してもらうこと**
 * をprimary CTAに置く（お問い合わせへ）。灰色の「準備中」バッジで終わらせない。
 * 公開が決まったら appSpec.ts の LINKS.appStore を設定するだけでボタンに切り替わる。
 */
export default function CTASection() {
  return (
    <section id="cta" className="ground-cta relative scroll-mt-16 overflow-hidden py-20 md:py-28">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-[30px] font-bold leading-[1.3] tracking-[-0.02em] text-white sm:text-[40px]">
          次の旅行から、
          <br className="sm:hidden" />
          暗算をやめませんか。
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[14.5px] leading-[1.95] text-white/75 sm:text-[15.5px]">
          値札にかざすだけで日本円がわかる。買い物の合計も、残りの予算も、
          旅行中にちゃんと見える。まずは無料でお試しください。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {LINKS.appStore ? (
            <a
              href={LINKS.appStore}
              className="inline-flex items-center justify-center rounded-button bg-white px-8 py-4 text-[15.5px] font-bold text-brand-dark shadow-[0_16px_36px_-14px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
            >
              App Storeで入手
            </a>
          ) : (
            <a
              href={LINKS.contact}
              className="inline-flex items-center justify-center gap-2 rounded-button bg-white px-8 py-4 text-[15.5px] font-bold text-brand-dark shadow-[0_16px_36px_-14px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
            >
              公開のお知らせを受け取る
              <span aria-hidden>→</span>
            </a>
          )}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-button border border-white/25 px-8 py-4 text-[15.5px] font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10"
          >
            無料でできることを見る
          </a>
        </div>

        {!LINKS.appStore && (
          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12.5px] font-semibold text-white">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            App Storeで公開準備中
          </p>
        )}

        <p className="mt-6 text-[12px] font-medium leading-[1.9] text-white/55">
          無料版で、同時に管理できる旅行は{FREE_LIMITS.trips}件、
          1つの旅行につき{FREE_LIMITS.savesPerTrip}件まで保存できます。
        </p>
      </div>
    </section>
  );
}
