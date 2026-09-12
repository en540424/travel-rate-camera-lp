import { StatusBar, TabBar } from "../chrome";
import { ITEMS, TOTALS, TRIP } from "../demoData";

/**
 * 買い物カレンダー画面のモック。
 *
 * 本体アプリ `src/app/(tabs)/calendar.tsx` の実装に一致させている：
 *   - タイトルは「買い物カレンダー」＋ 旅行チップ（国旗＋旅行名）
 *   - カレンダーカード（月ナビ ‹ 2026年9月 › / 曜日 / 日付グリッド / 凡例）
 *   - 記録のある日には国旗と、購入済み＝teal・候補＝amber のドットが付く
 *   - 月合計カード（購入済み / 候補の2列）
 *   - 日曜は赤（#C2543F）・土曜は青（#3B8DBD）＝ tokens.ts の sundayRed / saturdayBlue
 *
 * この画面は**無料版でも使える**（Pro限定機能ではない）。
 */

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

/** 2026年9月。1日は火曜なので先頭に日・月の空きが2つ入る。TODAY は選択中の日でもある */
const LEADING_BLANKS = 2;
const DAYS_IN_MONTH = 30;
const TODAY = 14;

/** 記録がある日 → その日の状態 */
const DAY_STATE = new Map(
  ITEMS.map((item) => [item.day, item.purchased ? "purchased" : "candidate"] as const),
);

export default function CalendarScreen() {
  const cells: (number | null)[] = [
    ...Array.from({ length: LEADING_BLANKS }, () => null),
    ...Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <>
      <StatusBar time="20:14" />

      <div className="flex flex-1 flex-col gap-[14px] overflow-hidden px-[15px] pt-[8px]">
        {/* ヘッダー */}
        <div className="flex items-center justify-between gap-[10px]">
          <span className="text-[20px] font-bold tracking-[-0.3px] text-text">
            買い物カレンダー
          </span>
          <span className="inline-flex flex-none items-center gap-[5px] rounded-full bg-brand-soft px-[10px] py-[5px] text-[12px] font-bold text-brand-dark">
            <span aria-hidden>{TRIP.flag}</span>
            {TRIP.name}
          </span>
        </div>

        {/* カレンダーカード */}
        <div className="flex flex-col gap-[12px] rounded-card-lg border border-line bg-card p-[13px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          {/* 月ナビ */}
          <div className="flex items-center justify-between px-[4px]">
            <span className="text-[24px] font-light leading-[28px] text-brand">‹</span>
            <span className="text-[16px] font-bold tracking-[-0.2px] text-text tabular">
              2026年9月
            </span>
            <span className="text-[24px] font-light leading-[28px] text-brand">›</span>
          </div>

          {/* 曜日 */}
          <div className="grid grid-cols-7">
            {WEEKDAYS.map((day, index) => (
              <span
                key={day}
                className={`text-center text-[10px] font-bold ${
                  index === 0
                    ? "text-danger"
                    : index === 6
                      ? "text-[#3B8DBD]"
                      : "text-faint"
                }`}
              >
                {day}
              </span>
            ))}
          </div>

          {/* 日付グリッド */}
          <div className="grid grid-cols-7 gap-y-[3px]">
            {cells.map((day, index) => {
              if (day === null) return <div key={`blank-${index}`} className="h-[30px]" />;
              const state = DAY_STATE.get(day);
              const isToday = day === TODAY;
              const column = index % 7;
              return (
                <div
                  key={day}
                  className={`flex h-[30px] flex-col items-center justify-center gap-[2px] rounded-[7px] ${
                    isToday ? "bg-brand-soft" : ""
                  }`}
                >
                  <span
                    className={`text-[11px] leading-none tabular ${
                      isToday
                        ? "font-bold text-brand-dark"
                        : column === 0
                          ? "font-semibold text-danger"
                          : column === 6
                            ? "font-semibold text-[#3B8DBD]"
                            : "font-semibold text-text"
                    }`}
                  >
                    {day}
                  </span>
                  {state ? (
                    <span className="flex items-center gap-[2px]">
                      <span aria-hidden className="text-[7px] leading-none">
                        {TRIP.flag}
                      </span>
                      <span
                        className={`h-[4px] w-[4px] rounded-full ${
                          state === "purchased" ? "bg-brand" : "bg-candidate"
                        }`}
                      />
                    </span>
                  ) : (
                    <span className="h-[4px]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* 凡例 */}
          <div className="flex items-center justify-center gap-[14px] border-t border-line3 pt-[10px]">
            <span className="flex items-center gap-[5px]">
              <span className="h-[9px] w-[9px] rounded-[3px] bg-brand-soft ring-1 ring-brand-border" />
              <span className="text-[10px] font-semibold text-muted">今日</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="h-[6px] w-[6px] rounded-full bg-candidate" />
              <span className="text-[10px] font-semibold text-muted">候補</span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span className="h-[6px] w-[6px] rounded-full bg-brand" />
              <span className="text-[10px] font-semibold text-muted">購入済み</span>
            </span>
          </div>
        </div>

        {/* 月合計 */}
        <div className="flex flex-col gap-[10px] rounded-card-lg border border-line bg-card p-[15px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <span className="text-[14px] font-bold text-text">月合計</span>
          <div className="flex gap-[8px]">
            <div className="flex flex-1 flex-col gap-[4px] rounded-[8px] bg-brand-soft2 p-[11px]">
              <span className="flex items-center gap-[5px]">
                <span className="h-[6px] w-[6px] rounded-full bg-brand" />
                <span className="text-[10px] font-semibold text-faint">購入済み</span>
              </span>
              <span className="truncate text-[19px] font-bold tracking-[-0.5px] text-brand tabular">
                {TOTALS.purchasedJpy}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-[4px] rounded-[8px] bg-candidate-soft2 p-[11px]">
              <span className="flex items-center gap-[5px]">
                <span className="h-[6px] w-[6px] rounded-full bg-candidate" />
                <span className="text-[10px] font-semibold text-faint">候補</span>
              </span>
              <span className="truncate text-[19px] font-bold tracking-[-0.5px] text-candidate tabular">
                {TOTALS.candidateJpy}
              </span>
            </div>
          </div>
        </div>

        {/* 選択日の記録（日付を選ぶと出る実装どおりのパネル） */}
        <div className="flex flex-col gap-[10px] rounded-card-lg border border-line bg-card p-[15px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <span className="text-[11px] font-bold tracking-[0.5px] text-muted">
            9月{TODAY}日の記録
          </span>
          {ITEMS.filter((item) => item.day === TODAY).map((item) => (
            <div
              key={item.memo}
              className="flex items-center gap-[10px] rounded-chip border border-line bg-card px-[10px] py-[8px]"
              style={{
                borderLeftWidth: 3,
                borderLeftColor: item.purchased ? "#0E9488" : "#E0A53B",
              }}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
                <span className="truncate text-[13px] font-semibold text-text">
                  {item.memo}
                </span>
                <span className="text-[11px] font-medium text-muted tabular">
                  {item.foreign} ・ {item.category}
                </span>
              </div>
              <span className="flex-none text-[15px] font-bold text-text tabular">
                {item.jpy}
              </span>
            </div>
          ))}
        </div>
      </div>

      <TabBar active="カレンダー" />
    </>
  );
}
