import { FREE_FEATURES, PRO_FEATURES, PRICING, FREE_LIMITS } from "@/lib/appSpec";

/**
 * 料金セクション。
 *
 * 掲載してよいのは appSpec.ts の FREE_FEATURES / PRO_FEATURES（＝実装済み）のみ。
 * 自動為替取得・クラウドOCR・PDF出力などの将来候補を「Proでできること」として書かない。
 * 価格はHuman確定値（月額¥500／年額¥4,000）。
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
            Pricing
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[32px]">
            まずは無料で。
            <br className="sm:hidden" />
            足りなくなったらPro。
          </h2>
          <p className="mt-4 text-[14.5px] leading-[1.9] text-body">
            換算・翻訳・音声はすべて無料です。保存の上限と旅行の数だけがProとの違いです。
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* 無料版 */}
          <div className="rounded-card-lg border border-line bg-white p-7">
            <h3 className="text-[17px] font-bold text-text">無料版</h3>
            <p className="mt-1 text-[13px] font-medium text-muted">
              旅行の買い物に必要な機能は無料で使えます
            </p>
            <p className="mt-5 text-[34px] font-bold leading-none text-text tabular">
              ¥0
            </p>

            <ul className="mt-7 space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-body">
                  <span aria-hidden className="mt-[3px] shrink-0 font-bold text-brand">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro版 */}
          <div className="relative rounded-card-lg border-2 border-brand bg-brand-soft2 p-7">
            <span className="gradient-pro absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold text-white">
              Pro
            </span>

            <h3 className="text-[17px] font-bold text-text">Pro版</h3>
            <p className="mt-1 text-[13px] font-medium text-muted">
              旅行が増えても、保存を気にせず使えます
            </p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-[34px] font-bold leading-none text-text tabular">
                ¥{PRICING.monthlyYen.toLocaleString("ja-JP")}
              </span>
              <span className="text-[13.5px] font-semibold text-muted">/ 月</span>
            </div>
            <p className="mt-2 text-[13px] font-semibold text-brand-dark tabular">
              年額 ¥{PRICING.annualYen.toLocaleString("ja-JP")}
              <span className="ml-1.5 font-medium text-muted">
                （月あたり約 ¥{PRICING.annualPerMonthYen.toLocaleString("ja-JP")}・
                月額より約{PRICING.annualDiscountPercent}%おトク）
              </span>
            </p>

            <ul className="mt-7 space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-body">
                  <span aria-hidden className="mt-[3px] shrink-0 font-bold text-brand">
                    ✓
                  </span>
                  <span className="font-semibold text-text">{f}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-brand-border pt-4 text-[12px] leading-[1.8] text-muted">
              無料版との違いは上記のみです。カメラでの円換算・翻訳・音声入力・読み上げは、
              無料版でも回数の制限なくお使いいただけます。
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[12px] leading-[1.9] text-muted">
          無料版では、同時に管理できる旅行が{FREE_LIMITS.trips}件、
          1つの旅行につき{FREE_LIMITS.savesPerTrip}件まで保存できます。
          価格はApp Storeの表示を正とします。購入・解約はApp Storeの購読管理から行えます。
        </p>
      </div>
    </section>
  );
}
