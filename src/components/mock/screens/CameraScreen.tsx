import { StatusBar, TabBar, TripRateHeader } from "../chrome";
import { TOTALS, TRIP } from "../demoData";

/**
 * メイン画面（価格OCRモード・撮影前）のモック。
 *
 * 本体アプリの `design-handoff/main-v2/main-v2-spec.md` に一致させている：
 *   - カメラ枠は radius 16・四隅コーナー（長方形の枠線ではない）
 *   - 「読み取る」CTAはカメラ枠の**内部**下部中央の pill
 *   - 下部は白カードの3分割（残り / 今日 / 手入力で記録）
 *   - **撮影前に円換算の結果は出ない**（それは OcrResultScreen の状態）
 */
export default function CameraScreen() {
  return (
    <>
      <StatusBar time="11:42" />

      <div className="flex flex-1 flex-col gap-[14px] overflow-hidden px-[15px] pb-[12px] pt-[8px]">
        <TripRateHeader trip={TRIP.name} flag={TRIP.flag} rate={TRIP.rateLabel} />

        {/* モードセグメント */}
        <div className="flex flex-none gap-[3px] rounded-chip bg-line2 p-[3px]">
          <div className="flex flex-1 items-center justify-center rounded-[9px] bg-card py-[7px] text-[14px] font-bold text-text shadow-[0_1px_2px_rgba(16,33,31,0.13)]">
            価格OCR
          </div>
          <div className="flex flex-1 items-center justify-center rounded-[9px] py-[7px] text-[14px] font-semibold text-muted">
            商品写真
          </div>
        </div>

        {/* カメラステージ */}
        <div className="gradient-viewfinder relative flex-1 overflow-hidden rounded-card">
          {/* 値札に見立てた被写体 */}
          <div className="absolute left-1/2 top-[44%] w-[150px] -translate-x-1/2 -translate-y-1/2 -rotate-2 rounded-[6px] bg-[#F7F4EC] px-[12px] py-[10px] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)]">
            <div className="text-[8px] font-bold uppercase tracking-[1px] text-[#9A8F7B]">
              HERA
            </div>
            <div className="text-[22px] font-bold leading-tight text-[#2A2620] tabular">
              ₩42,900
            </div>
          </div>

          {/* 四隅コーナー（CameraPreview の実装と同じ） */}
          {[
            "left-[34px] top-[26%] border-l-[3px] border-t-[3px] rounded-tl-[4px]",
            "right-[34px] top-[26%] border-r-[3px] border-t-[3px] rounded-tr-[4px]",
            "left-[34px] bottom-[30%] border-b-[3px] border-l-[3px] rounded-bl-[4px]",
            "right-[34px] bottom-[30%] border-b-[3px] border-r-[3px] rounded-br-[4px]",
          ].map((position) => (
            <div
              key={position}
              aria-hidden
              className={`absolute h-[28px] w-[28px] border-white/85 ${position}`}
            />
          ))}

          {/* 走査線（読み取り中の表現） */}
          <div
            aria-hidden
            className="scan-line absolute left-[34px] right-[34px] top-[26%] h-[2px] bg-brand-accent shadow-[0_0_10px_rgba(127,216,204,0.9)]"
            style={{ ["--scan-distance" as string]: "150px" }}
          />

          {/* ズームバッジ */}
          <div className="absolute right-[14px] top-[14px] rounded-[14px] bg-[rgba(16,33,31,0.52)] px-[12px] py-[6px] text-[14px] font-bold leading-none text-white">
            3×
          </div>

          {/* ガイド文 */}
          <div className="absolute bottom-[64px] left-0 right-0 text-center text-[12px] font-semibold tracking-[0.4px] text-white/55">
            値札に枠を合わせてください
          </div>

          {/* 読み取るCTA（カメラ枠の内部） */}
          <div className="absolute bottom-[14px] left-1/2 flex h-[40px] min-w-[120px] -translate-x-1/2 items-center justify-center rounded-[20px] bg-[rgba(14,148,136,0.92)] px-[22px] text-[14px] font-bold text-white">
            読み取る
          </div>
        </div>

        {/* 下部サマリー（白カード3分割） */}
        <div className="flex flex-none items-stretch rounded-chip border border-line bg-card py-[10px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <div className="flex flex-1 flex-col items-center gap-[2px]">
            <span className="text-[10.5px] font-semibold text-muted">残り</span>
            <span className="text-[15px] font-bold text-text tabular">
              {TOTALS.remainingJpy}
            </span>
          </div>
          <div className="w-px bg-line" />
          <div className="flex flex-1 flex-col items-center gap-[2px]">
            <span className="text-[10.5px] font-semibold text-muted">今日</span>
            <span className="text-[15px] font-bold text-text tabular">1件</span>
          </div>
          <div className="w-px bg-line" />
          <div className="flex flex-1 items-center justify-center">
            <span className="text-[13px] font-bold text-brand">手入力で記録</span>
          </div>
        </div>
      </div>

      <TabBar active="カメラ" />
    </>
  );
}
