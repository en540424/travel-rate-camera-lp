import { LINKS } from "@/lib/appSpec";

export default function CTASection() {
  return (
    <section className="gradient-ink py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-[27px] font-bold leading-snug tracking-tight text-white sm:text-[34px]">
          次の旅行から、
          <br className="sm:hidden" />
          暗算をやめませんか。
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-[1.95] text-ink-sub">
          値札にかざすだけで日本円がわかる。買い物の合計も、残りの予算も、
          旅行中にちゃんと見える。まずは無料でお試しください。
        </p>

        <div className="mt-9">
          {LINKS.appStore ? (
            <a
              href={LINKS.appStore}
              className="inline-flex items-center justify-center rounded-button bg-brand px-8 py-4 text-[15.5px] font-semibold text-white shadow-[0_12px_28px_-10px_rgba(14,148,136,0.8)] transition-opacity hover:opacity-90"
            >
              App Storeで入手
            </a>
          ) : (
            /* App Store公開URLが未確定のため、リンクは出さず状態だけ示す。
               公開が決まったら appSpec.ts の LINKS.appStore を設定するだけでボタンになる。 */
            <div className="inline-flex flex-col items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[13.5px] font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                App Storeで公開準備中
              </span>
              <span className="text-[12px] font-medium text-ink-muted">
                公開までもうしばらくお待ちください
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
