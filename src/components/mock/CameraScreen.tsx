/**
 * メイン画面（価格OCRモード）のCSSモック。
 * 構造・色・角丸は本体アプリの design-handoff/main/main-spec.md に合わせている。
 * 実機スクリーンショットが用意できたら PhoneFrame の children ごと差し替える。
 */
export default function CameraScreen() {
  return (
    <div className="flex h-full flex-col gap-[10px] bg-screen px-[15px] pb-3 pt-8">
      {/* 旅行名 ＋ レートチップ */}
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-bold tracking-tight text-text">
          ソウル旅行
        </span>
        <span className="rounded-full border border-line bg-card px-[9px] py-[4px] text-[9.5px] font-semibold text-body tabular">
          1₩ = 0.11円
        </span>
      </div>

      {/* モードセグメント */}
      <div className="flex gap-[3px] rounded-chip bg-[#EFF2F0] p-[3px]">
        <div className="flex flex-1 items-center justify-center rounded-[9px] bg-card py-[7px] text-[10.5px] font-bold text-text shadow-[0_1px_3px_rgba(16,33,31,0.13)]">
          <span className="mr-1 text-brand">◎</span>価格OCR
        </div>
        <div className="flex flex-1 items-center justify-center rounded-[9px] py-[7px] text-[10.5px] font-semibold text-muted">
          商品写真
        </div>
      </div>

      {/* カメラステージ */}
      <div className="relative flex-1 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#2C3A36] via-[#1E2B28] to-[#16211F]">
        {/* 値札に見立てた被写体 */}
        <div className="absolute left-1/2 top-[42%] w-[112px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[6px] bg-[#F7F4EC] px-2 py-[7px] shadow-lg">
          <div className="text-[7px] font-semibold uppercase tracking-wider text-[#9A8F7B]">
            SALE
          </div>
          <div className="text-[15px] font-bold leading-tight text-[#2A2620] tabular">
            ₩ 42,900
          </div>
        </div>

        {/* OCR reticle */}
        <div className="absolute left-1/2 top-[42%] h-[68px] w-[118px] -translate-x-1/2 -translate-y-1/2 rounded-[13px] border-2 border-white/90" />

        {/* 走査線 */}
        <div className="scan-line absolute left-1/2 h-[2px] w-[110px] -translate-x-1/2 bg-brand-accent/80 shadow-[0_0_8px_rgba(127,216,204,0.9)]" />

        {/* ズームバッジ */}
        <div className="absolute right-3 top-3 rounded-full bg-[rgba(16,33,31,0.5)] px-[8px] py-[3px] text-[8.5px] font-bold text-white">
          3×
        </div>

        {/* 円換算の結果オーバーレイ */}
        <div className="absolute bottom-[46px] left-1/2 w-[132px] -translate-x-1/2 rounded-card bg-[rgba(16,33,31,0.82)] px-3 py-2 text-center backdrop-blur-sm">
          <div className="text-[8px] font-semibold text-ink-sub">日本円の目安</div>
          <div className="text-[19px] font-bold leading-tight text-white tabular">
            約 4,719円
          </div>
        </div>

        {/* ガイド文 */}
        <div className="absolute bottom-3 left-0 right-0 text-center text-[9px] font-semibold text-white/90 drop-shadow">
          値札に枠を合わせてください
        </div>
      </div>

      {/* シャッター */}
      <div className="flex h-[38px] items-center justify-center rounded-card bg-brand text-[12.5px] font-semibold text-white shadow-[0_8px_18px_-8px_rgba(14,148,136,0.6)]">
        読み取る
      </div>

      {/* 予算サマリー */}
      <div className="flex items-center justify-between text-[8.5px] font-semibold text-muted">
        <span>
          残り <span className="font-bold text-text tabular">12,710円</span>
        </span>
        <span className="text-brand">手入力で記録</span>
      </div>
    </div>
  );
}
