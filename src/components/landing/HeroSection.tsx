import PhoneFrame from "@/components/mock/PhoneFrame";
import OcrResultScreen from "@/components/mock/screens/OcrResultScreen";
import { CURRENCIES, FREE_LIMITS, LINKS } from "@/lib/appSpec";

/**
 * Hero。LPで最も重要なブロック。
 *
 * ■ 端末モックに「OCR結果画面」を置いている理由
 * このアプリの価値が確定する瞬間は、値札を撮った**直後**に
 * 「日本円で ¥4,719」が出るところ。撮影前のカメラ画面ではその価値が映らない。
 * そのため主役を `OcrResultScreen`（アプリの ocr-result 状態）にしている。
 *
 * ■ 誇張しないための決まり
 *   - レートは手入力なので、「自動でレートを取得」とは書かない
 *   - App Store URLが未確定（appSpec.LINKS.appStore === null）の間は
 *     「入手」ボタンを出さず、お問い合わせ（公開のお知らせ）へ導く
 */
export default function HeroSection() {
  return (
    <section className="ground-ink relative overflow-hidden">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-5 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-8">
          {/* ── コピー ── */}
          <div className="rise max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[11.5px] font-bold text-brand-accent backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
              海外旅行の買い物アプリ・iPhone
            </span>

            <h1 className="mt-6 text-[31px] font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[52px]">
              値札にかざす。
              <br />
              <span className="text-brand-accent">日本円</span>が、すぐ出る。
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-[1.95] text-ink-sub sm:text-[16px]">
              「₩42,900って、結局いくら？」——
              カメラを向けるだけで、自分で決めたレートの日本円が大きく出ます。
              気になったものは候補として保存。購入済みの合計から、残り予算が自動で引かれます。
            </p>

            {/* 3点の要点 */}
            <dl className="mt-8 grid max-w-lg gap-x-6 gap-y-4 sm:grid-cols-3">
              {[
                { t: "6通貨に対応", d: "ウォン・ドル・ユーロほか" },
                { t: "端末内で計算", d: "電波が不安定でも動く" },
                { t: "翻訳・音声も無料", d: "回数の制限なし" },
              ].map((item) => (
                <div key={item.t} className="border-l border-white/12 pl-3.5">
                  <dt className="text-[13.5px] font-bold text-white">{item.t}</dt>
                  <dd className="mt-0.5 text-[11.5px] font-medium leading-relaxed text-ink-muted">
                    {item.d}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {LINKS.appStore ? (
                <a
                  href={LINKS.appStore}
                  className="inline-flex items-center justify-center rounded-button bg-brand px-7 py-4 text-[15.5px] font-bold text-white shadow-[0_14px_32px_-12px_rgba(14,148,136,0.9)] transition-transform hover:-translate-y-0.5"
                >
                  App Storeで入手
                </a>
              ) : (
                /* App Store公開URLが未確定のため、入手ボタンは出さない。
                   公開が決まったら appSpec.ts の LINKS.appStore を設定するだけで切り替わる。 */
                <a
                  href={LINKS.contact}
                  className="inline-flex items-center justify-center gap-2 rounded-button bg-brand px-7 py-4 text-[15.5px] font-bold text-white shadow-[0_14px_32px_-12px_rgba(14,148,136,0.9)] transition-transform hover:-translate-y-0.5"
                >
                  公開のお知らせを受け取る
                  <span aria-hidden>→</span>
                </a>
              )}
              <a
                href="#screens"
                className="inline-flex items-center justify-center rounded-button border border-white/20 px-7 py-4 text-[15.5px] font-bold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                実際の画面を見る
              </a>
            </div>

            <p className="mt-5 text-[12.5px] font-medium leading-relaxed text-ink-muted">
              App Storeで公開準備中。無料版で、1つの旅行につき
              {FREE_LIMITS.savesPerTrip}件まで保存できます。
            </p>
          </div>

          {/* ── 端末モック（主役） ── */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center gap-4">
              <PhoneFrame
                glow
                label="値札を読み取った直後の画面。日本円で 4,719円 と大きく表示され、その下に ₩42,900・1 KRW = ¥0.11 のレート内訳と「候補に保存」ボタンが並んでいる"
                className="[--s:0.66] sm:[--s:0.78] lg:[--s:0.8] xl:[--s:0.88]"
              >
                <OcrResultScreen />
              </PhoneFrame>

              {/* モックではなく実装どおりの画面であることを明示する */}
              <span className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.16em] text-ink-muted">
                <span aria-hidden className="h-px w-6 bg-ink-muted/40" />
                実際のアプリ画面
                <span aria-hidden className="h-px w-6 bg-ink-muted/40" />
              </span>
            </div>
          </div>
        </div>

        {/* 対応通貨。Heroの足元を締める帯 */}
        <div className="mt-12 border-t border-white/10 py-6 sm:mt-16">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
              対応通貨
            </span>
            {CURRENCIES.map((currency) => (
              <span
                key={currency.code}
                className="flex items-center gap-1.5 text-[12.5px] font-semibold text-ink-sub"
              >
                <span aria-hidden>{currency.flag}</span>
                {currency.label}
                <span className="font-bold text-brand-accent tabular">{currency.symbol}</span>
              </span>
            ))}
            <span className="text-[11.5px] font-medium text-ink-muted">
              ／ 国内は「円」モードで換算なし
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
