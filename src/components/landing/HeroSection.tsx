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
 *
 * ■ V2（2026-09）の見た目
 *   見出し・本文・CTAを一段大きくし、要点3つは太いティールの左罫で区切る。
 *   コーラルはバッジのドットと背景の微光にだけ使う（CTAはティール）。
 */
const CTA_PRIMARY =
  "inline-flex items-center justify-center gap-2.5 rounded-2xl bg-brand px-8 py-5 text-[17px] font-extrabold text-white shadow-[0_22px_44px_-18px_rgba(14,148,136,1),inset_0_1px_0_rgba(255,255,255,0.18)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#12A396] sm:text-[17.5px] lg:px-7 lg:py-4 lg:text-[16.5px]";

export default function HeroSection() {
  return (
    <section id="top" className="ground-ink relative overflow-hidden">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="container-lp relative max-w-lp pt-[clamp(44px,6vw,52px)] lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-10">
          {/* ── コピー ── */}
          <div className="rise max-w-[600px]">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.18] bg-white/[0.07] px-4 py-2 text-[13px] font-extrabold text-[#8FE3D7] backdrop-blur-sm">
              <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-coral-glow" />
              海外旅行の買い物アプリ・iPhone
            </span>

            <h1 className="mt-6 text-balance text-[clamp(36px,5.4vw,44px)] font-extrabold leading-[1.16] lg:mt-5 lg:leading-[1.14] tracking-[-0.035em] text-white">
              値札にかざす。
              <br />
              <span className="text-brand-accent">日本円</span>が、すぐ出る。
            </h1>

            <p className="mt-6 max-w-[540px] text-pretty text-[clamp(16.5px,1.5vw,17px)] leading-[1.95] text-ink-lead lg:mt-5 lg:leading-[1.8]">
              「₩42,900って、結局いくら？」——
              カメラを向けるだけで、自分で決めたレートの日本円が大きく出ます。
              気になったものは候補として保存。購入済みの合計から、残り予算が自動で引かれます。
            </p>

            {/* 3点の要点 */}
            <dl className="mt-8 grid max-w-[560px] gap-x-6 gap-y-[18px] sm:grid-cols-3 lg:mt-6">
              {[
                { t: "6通貨に対応", d: "ウォン・ドル・ユーロほか" },
                { t: "端末内で計算", d: "電波が不安定でも動く" },
                /* 翻訳まわりは「何ができるか」を具体的に。3列（sm以上）では各列が約150pxなので、
                   見出しは1行に収め、音声入力・読み上げと回数の制限なしは説明側で2行に分ける */
                {
                  t: "翻訳も無料",
                  d: (
                    <>
                      音声入力・読み上げつき
                      <span className="sm:hidden">／</span>
                      <br className="hidden sm:inline" />
                      回数の制限なし
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.t} className="border-l-[3px] border-brand pl-3.5">
                  <dt className="text-[15.5px] font-extrabold leading-[1.4] text-white">
                    {item.t}
                  </dt>
                  <dd className="mt-1 text-[13.5px] font-medium leading-[1.65] text-ink-soft">
                    {item.d}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center lg:mt-7">
              {LINKS.appStore ? (
                <a href={LINKS.appStore} className={CTA_PRIMARY}>
                  App Storeで入手
                </a>
              ) : (
                /* App Store公開URLが未確定のため、入手ボタンは出さない。
                   公開が決まったら appSpec.ts の LINKS.appStore を設定するだけで切り替わる。 */
                <a href={LINKS.contact} className={CTA_PRIMARY}>
                  公開のお知らせを受け取る
                  <span aria-hidden>→</span>
                </a>
              )}
              <a
                href="#screens"
                className="inline-flex items-center justify-center rounded-2xl border-[1.5px] border-white/[0.28] px-[30px] py-5 text-[17px] font-extrabold text-white transition-colors hover:border-white/60 hover:bg-white/[0.06] lg:px-[26px] lg:py-4 lg:text-[16.5px]"
              >
                実際の画面を見る
              </a>
            </div>

            <p className="mt-5 text-[14px] font-medium leading-[1.8] text-ink-soft lg:mt-4">
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
                className="[--s:0.7] sm:[--s:0.78] lg:[--s:0.48] xl:[--s:0.52]"
              >
                <OcrResultScreen />
              </PhoneFrame>

              {/* モックではなく実装どおりの画面であることを明示する */}
              <span className="inline-flex items-center gap-2.5 text-[11px] font-extrabold tracking-[0.18em] text-ink-muted">
                <span aria-hidden className="h-px w-[26px] bg-ink-muted/50" />
                実際のアプリ画面
                <span aria-hidden className="h-px w-[26px] bg-ink-muted/50" />
              </span>
            </div>
          </div>
        </div>

        {/* 対応通貨。Heroの足元を締める帯 */}
        <div className="mt-[clamp(40px,5vw,44px)] border-t border-white/[0.12] pb-[20px] pt-[16px] lg:mt-8 lg:pb-4 lg:pt-3.5">
          <div className="flex flex-wrap items-center gap-x-[22px] gap-y-3">
            <span className="text-[12px] font-extrabold tracking-[0.16em] text-ink-muted">
              対応通貨
            </span>
            {CURRENCIES.map((currency) => (
              <span
                key={currency.code}
                className="flex items-center gap-[7px] text-[14px] font-bold text-ink-bright"
              >
                <span aria-hidden>{currency.flag}</span>
                {currency.label}
                <span className="font-extrabold text-brand-accent tabular">{currency.symbol}</span>
              </span>
            ))}
            <span className="text-[13px] font-semibold text-ink-muted">
              ／ 国内は「円」モードで換算なし
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
