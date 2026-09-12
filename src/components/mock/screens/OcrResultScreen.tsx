import { Card, Overline, StatusBar, TabBar, TripRateHeader } from "../chrome";
import { MEMO_CANDIDATES, PRICE_CANDIDATES, TRIP } from "../demoData";

/**
 * OCR結果（成功）画面のモック ＝ LPの主役。
 *
 * 本体アプリの `design-handoff/ocr-result-v2/`（spec ＋ HTML）をそのまま写している。
 * これは独立画面ではなく `(tabs)/index.tsx` の状態（`ocrResult != null && prices.length > 0`）。
 *
 * ■ 掲載上の注意
 * 「日本円で ¥4,719」は**手入力したレートでの計算結果**であって、自動取得したレートではない。
 * レート行（₩42,900 ・ 1 KRW = ¥0.11）を必ず一緒に出し、レート根拠を隠さない。
 *
 * ■ 実画面から省いた要素（誇張ではなく、1画面に収めるための省略）
 *   - 「保存する写真」行（写真添付は履歴画面のサムネイルで見せている）
 *   - メモ候補の2件目
 * 価格候補は2件。値札に複数の数字が写った実機どおりの状態。
 *
 * `scrolled` を付けると、旅行ヘッダーまでスクロールし終えた状態を描く。
 */
export default function OcrResultScreen({ scrolled = false }: { scrolled?: boolean }) {
  const selected = PRICE_CANDIDATES[0];

  return (
    <>
      <StatusBar />

      <div className="relative flex-1 overflow-hidden">
        <div
          className="flex flex-col gap-[12px] px-[15px] pb-[10px] pt-[8px]"
          style={scrolled ? { marginTop: -52 } : undefined}
        >
          <TripRateHeader trip={TRIP.name} flag={TRIP.flag} rate={TRIP.rateLabel} />

          {/* 読み取り結果カード */}
          <Card className="flex flex-col gap-[12px] p-[14px]">
            <div className="flex items-center justify-between">
              <Overline>読み取り結果</Overline>
              <span aria-hidden className="text-[16px] leading-none text-muted">
                ✕
              </span>
            </div>

            <div className="flex flex-col gap-[6px]">
              <span className="text-[11px] font-bold tracking-[0.5px] text-muted">
                価格候補
              </span>
              <div className="flex flex-wrap gap-[8px]">
                {PRICE_CANDIDATES.map((price) => {
                  const isSelected = price === selected;
                  return (
                    <span
                      key={price}
                      className={`rounded-full px-[18px] py-[10px] text-[18px] font-bold tracking-[-0.3px] text-white tabular ${
                        isSelected ? "bg-brand-dark" : "bg-brand"
                      }`}
                    >
                      {isSelected ? `✓ ${price}` : price}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <span className="text-[11px] font-bold tracking-[0.5px] text-muted">
                メモ候補（タップで追加）
              </span>
              {MEMO_CANDIDATES.map((memo) => (
                <div key={memo.text} className="flex items-center gap-[8px]">
                  <span className="flex-1 truncate text-[13px] font-medium text-text">
                    {memo.text}
                  </span>
                  {memo.added ? (
                    <span className="rounded-[8px] border border-line bg-line2 px-[7px] py-[3px] text-[12px] font-semibold text-muted">
                      ✓ 追加済み
                    </span>
                  ) : (
                    <span className="rounded-[8px] border border-brand px-[7px] py-[3px] text-[12px] font-semibold text-brand">
                      ＋メモ
                    </span>
                  )}
                </div>
              ))}
            </div>

            <span className="text-[12px] font-semibold text-muted">
              ▶ 読み取った文字（全文）
            </span>
          </Card>

          {/* 入力カード（保存確認）。円換算ヒーローが主役 */}
          <Card className="flex flex-col gap-[12px] p-[15px]">
            {/* 入力モード切替 */}
            <div className="flex overflow-hidden rounded-[8px] border border-line">
              <div className="flex-1 bg-brand py-[6px] text-center text-[13px] font-semibold text-white">
                {TRIP.currency} → JPY
              </div>
              <div className="flex-1 py-[6px] text-center text-[13px] font-semibold text-body">
                JPY → {TRIP.currency}
              </div>
            </div>

            {/* 金額入力（外貨） */}
            <div className="flex items-baseline gap-[8px]">
              <span className="text-[28px] font-bold leading-none text-text">
                {TRIP.symbol}
              </span>
              <span className="flex-1 text-[36px] font-extrabold leading-none tracking-[-0.5px] text-text tabular">
                42,900
              </span>
            </div>

            {/* 円換算ヒーロー（typography.display） */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.6px] text-muted">
                日本円で
              </span>
              <span className="text-[48px] font-bold leading-[1.05] tracking-[-1.6px] text-text tabular">
                ¥4,719
              </span>
              <span className="mt-[3px] text-[13px] font-medium text-muted tabular">
                ₩42,900　・　{TRIP.rateLabel}
              </span>
            </div>

            <div className="h-px bg-line2" />

            {/* メモ */}
            <div className="flex items-center gap-[8px] rounded-[8px] bg-screen px-[12px] py-[2px]">
              <span className="min-w-[28px] text-[12px] font-bold tracking-[0.4px] text-muted">
                メモ
              </span>
              <span className="flex-1 py-[10px] text-[14px] font-medium text-text">
                {MEMO_CANDIDATES[0].text}
              </span>
            </div>

            {/* 保存先（候補＝amber / 購入済み＝teal） */}
            <div className="flex items-center gap-[6px]">
              <span className="text-[11px] font-medium tracking-[0.4px] text-muted">
                保存先
              </span>
              <span className="rounded-full border border-candidate-border bg-candidate-soft px-[12px] py-[5px] text-[13px] font-semibold text-candidate-text">
                候補
              </span>
              <span className="rounded-full border border-line bg-card px-[12px] py-[5px] text-[13px] font-semibold text-body">
                購入済み
              </span>
            </div>

            {/* 保存CTA */}
            <div className="flex h-[52px] items-center justify-center rounded-button bg-brand text-[17px] font-bold text-white shadow-[0_8px_18px_-6px_rgba(14,148,136,0.5)]">
              ¥4,719 を候補に保存
            </div>
            <div className="text-center text-[13px] font-semibold text-body">
              保存しないで次を撮る →
            </div>
          </Card>
        </div>

        {/* 下に続くことを示すフェード（ScrollView の途中である表現） */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-[22px] bg-gradient-to-t from-screen to-transparent"
        />
      </div>

      <TabBar active="カメラ" />
    </>
  );
}
