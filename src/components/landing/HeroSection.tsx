import PhoneFrame from "@/components/mock/PhoneFrame";
import CameraScreen from "@/components/mock/CameraScreen";
import { CURRENCIES, FREE_LIMITS } from "@/lib/appSpec";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft2 via-white to-white">
      {/* 背景の淡いティール光 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-soft blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3 py-1.5 text-[11.5px] font-bold text-brand-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            海外旅行の買い物アプリ
          </span>

          <h1 className="mt-5 text-[34px] font-bold leading-[1.25] tracking-tight text-text sm:text-[42px]">
            値札にかざすだけで、
            <br />
            <span className="text-brand">日本円がわかる。</span>
          </h1>

          <p className="mt-5 text-[15px] leading-[1.9] text-body">
            レジの前で暗算しない。カメラを値札に向けるだけで、その場で日本円の目安が出ます。
            気になったものだけ保存すれば、合計と残り予算もひと目で確認できます。
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {CURRENCIES.map((c) => (
              <li
                key={c.code}
                className="rounded-full border border-line bg-white px-3 py-1.5 text-[11.5px] font-semibold text-body"
              >
                <span className="mr-1 text-brand tabular">{c.symbol}</span>
                {c.label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-button bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(14,148,136,0.7)] transition-opacity hover:opacity-90"
            >
              無料でできることを見る
            </a>
            <a
              href="#howto"
              className="inline-flex items-center justify-center rounded-button border border-line bg-white px-7 py-3.5 text-[15px] font-semibold text-body transition-colors hover:border-brand-border hover:text-brand-dark"
            >
              使い方を見る
            </a>
          </div>

          <p className="mt-4 text-[12px] font-medium leading-relaxed text-muted">
            無料で、1つの旅行につき{FREE_LIMITS.savesPerTrip}件まで保存できます。
            翻訳・音声入力・読み上げも無料です。
          </p>
        </div>

        <div className="float-animation">
          <PhoneFrame label="値札にカメラを向けて、日本円の目安を表示しているアプリ画面" >
            <CameraScreen />
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}
