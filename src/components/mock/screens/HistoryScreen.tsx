import { StatusBar, TabBar } from "../chrome";
import { ITEMS, TOTALS, TRIP } from "../demoData";

/**
 * 履歴画面のモック。
 *
 * 本体アプリ `src/app/(tabs)/history/index.tsx` の実装に一致させている：
 *   - 画面タイトルは旅行名（23/700）＋ レートチップ（primarySoft pill・最大58%幅）
 *   - サマリーは**白カード**（残り予算を大きく＋購入済み/候補を薄い小チップ）
 *   - セグメントは すべて / 候補 / 購入済み（件数を添える）
 *   - 各記録は白カード＋左端3pxのアクセント（購入済み=teal / 候補=amber）
 *     ＋ 58×58サムネ ＋ タイトル(memo) ＋ 状態チップ ＋ 右に円金額と「日本円」
 *
 * 「◯ / 10件」のようなバッジはアプリに存在しないので出さない。
 * カテゴリー絞り込みチップはProのみなので、この無料版の画面には描かない。
 */
export default function HistoryScreen() {
  const segments = [
    { label: "すべて", count: TOTALS.savedCount, active: true },
    { label: "候補", count: TOTALS.candidateCount, active: false },
    { label: "購入済み", count: TOTALS.purchasedCount, active: false },
  ];

  return (
    <>
      <StatusBar time="20:05" />

      <div className="flex flex-1 flex-col gap-[16px] overflow-hidden px-[15px] pt-[8px]">
        {/* タイトル行 */}
        <div className="flex items-center justify-between gap-[10px]">
          <span className="flex-1 truncate text-[23px] font-bold leading-[29px] tracking-[-0.5px] text-text">
            {TRIP.name}
          </span>
          <span className="inline-flex max-w-[58%] flex-none items-center gap-[5px] rounded-full bg-brand-soft px-[12px] py-[6px] text-[13px] font-bold text-brand-dark tabular">
            <span aria-hidden>{TRIP.flag}</span>
            <span className="truncate">{TRIP.rateLabel}</span>
          </span>
        </div>

        {/* サマリーカード（白） */}
        <div className="rounded-card border border-line bg-card p-[14px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <div className="flex items-end justify-between gap-[12px]">
            <div className="shrink">
              <div className="mb-[2px] text-[12px] font-bold tracking-[0.2px] text-brand">
                残り予算
              </div>
              <div className="text-[33px] font-bold leading-[39px] tracking-[-1px] text-text tabular">
                {TOTALS.remainingJpy}
              </div>
            </div>
            <div className="flex flex-col items-end gap-[6px]">
              <div className="flex items-center gap-[6px] rounded-chip bg-brand-soft2 px-[8px] py-[4px]">
                <span className="h-[8px] w-[8px] rounded-full bg-brand" />
                <span className="text-[12px] font-semibold text-body">購入済み</span>
                <span className="min-w-[56px] text-right text-[13px] font-bold text-text tabular">
                  {TOTALS.purchasedJpy}
                </span>
              </div>
              <div className="flex items-center gap-[6px] rounded-chip bg-candidate-soft px-[8px] py-[4px]">
                <span className="h-[8px] w-[8px] rounded-full bg-candidate" />
                <span className="text-[12px] font-semibold text-body">候補</span>
                <span className="min-w-[56px] text-right text-[13px] font-bold text-text tabular">
                  {TOTALS.candidateJpy}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* セグメント */}
        <div className="flex gap-[3px] rounded-chip bg-line2 p-[3px]">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className={`flex flex-1 items-center justify-center rounded-[8px] py-[8px] text-[12.5px] ${
                segment.active
                  ? "bg-card font-bold text-text shadow-[0_1px_2px_rgba(16,33,31,0.04)]"
                  : "font-semibold text-muted"
              }`}
            >
              {segment.label}
              <span
                className={`ml-[3px] font-semibold tabular ${
                  segment.active ? "text-muted" : "text-faint2"
                }`}
              >
                {segment.count}
              </span>
            </div>
          ))}
        </div>

        {/* 記録リスト */}
        <div className="flex flex-col gap-[10px]">
          {ITEMS.map((item) => (
            <div
              key={item.memo}
              className="flex items-center gap-[11px] rounded-card border border-line bg-card p-[9px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]"
              style={{
                borderLeftWidth: 3,
                borderLeftColor: item.purchased ? "#0E9488" : "#E0A53B",
              }}
            >
              <div
                aria-hidden
                className="flex h-[58px] w-[58px] flex-none items-center justify-center overflow-hidden rounded-chip bg-line2"
              >
                <span className="text-[10px] font-semibold text-faint2">写真</span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                <div className="flex items-center gap-[6px]">
                  <span className="shrink truncate text-[13px] font-semibold tracking-[-0.2px] text-text">
                    {item.memo}
                  </span>
                  <span
                    className={`flex-none rounded-full px-[6px] py-[2px] text-[10px] font-bold ${
                      item.purchased
                        ? "bg-brand-soft text-brand-dark"
                        : "bg-candidate-soft text-candidate-text"
                    }`}
                  >
                    {item.purchased ? "購入済み" : "候補"}
                  </span>
                </div>
                <span className="truncate text-[11px] font-medium text-muted tabular">
                  {item.foreign} ・ 9月{item.day}日
                </span>
              </div>

              <div className="flex flex-none flex-col items-end">
                <span className="text-[15px] font-bold leading-tight text-text tabular">
                  {item.jpy}
                </span>
                <span className="text-[9.5px] font-semibold text-faint">日本円</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TabBar active="履歴" />
    </>
  );
}
