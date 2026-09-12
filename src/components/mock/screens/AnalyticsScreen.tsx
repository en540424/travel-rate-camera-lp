import { StatusBar, TabBar } from "../chrome";
import { CATEGORY_ANALYSIS, TOTALS } from "../demoData";

/**
 * 分析画面のモック。
 *
 * 本体アプリ `src/app/(tabs)/analytics.tsx` の実装に一致させている：
 *   - 期間切替（今日 / 月 / 年）・期間ナビ（‹ 2026年9月 ›）
 *   - 「◯年◯月のまとめ」カードの2×2（購入済み合計 / 候補合計 / 保存件数 / 購入済み）
 *     ＝ **無料版でも使える**
 *   - 「今月のカテゴリー別」カード ＝ **Proのみ**。Proバッジを付けて区別する
 *   - 棒グラフの棒色は tokens.ts の chartBar（#7F8FC4）、選択中は primaryDark
 */

/** 日別購入済み推移のデモ（高さは%）。0は記録なしの日 */
const BARS = [0, 0, 18, 0, 42, 0, 0, 26, 0, 0, 64, 0, 88, 34];

export default function AnalyticsScreen() {
  return (
    <>
      <StatusBar time="20:11" />

      <div className="flex flex-1 flex-col gap-[14px] overflow-hidden px-[15px] pt-[8px]">
        <span className="text-[20px] font-bold tracking-[-0.3px] text-text">分析</span>

        {/* 期間切替 */}
        <div className="flex gap-[2px] rounded-full border border-line bg-card p-[3px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          {[
            { label: "今日", active: false },
            { label: "月", active: true },
            { label: "年", active: false },
          ].map((period) => (
            <div
              key={period.label}
              className={`flex-1 rounded-full py-[8px] text-center text-[14px] ${
                period.active
                  ? "bg-brand font-bold text-white"
                  : "font-semibold text-body"
              }`}
            >
              {period.label}
            </div>
          ))}
        </div>

        {/* 期間ナビ */}
        <div className="flex items-center justify-between rounded-card-lg border border-line bg-card px-[18px] py-[10px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <span className="text-[26px] font-light leading-[32px] text-brand">‹</span>
          <span className="text-[17px] font-bold tracking-[-0.2px] text-text tabular">
            2026年9月
          </span>
          <span className="text-[26px] font-light leading-[32px] text-brand">›</span>
        </div>

        {/* まとめ（無料版でも使える） */}
        <div className="flex flex-col gap-[14px] rounded-card-lg border border-line bg-card p-[15px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <span className="text-[14px] font-bold text-text">2026年9月のまとめ</span>
          <div className="flex flex-wrap gap-[8px]">
            {[
              { label: "購入済み合計", value: TOTALS.purchasedJpy, tone: "purchased" },
              { label: "候補合計", value: TOTALS.candidateJpy, tone: "candidate" },
              { label: "保存件数", value: `${TOTALS.savedCount}件`, tone: "plain" },
              { label: "購入済み", value: `${TOTALS.purchasedCount}件`, tone: "plain" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`flex min-w-[45%] flex-1 flex-col items-center gap-[4px] rounded-[8px] p-[12px] ${
                  stat.tone === "purchased"
                    ? "bg-brand-soft2"
                    : stat.tone === "candidate"
                      ? "bg-candidate-soft2"
                      : "bg-bg"
                }`}
              >
                <span className="text-center text-[10px] font-semibold text-faint">
                  {stat.label}
                </span>
                <span
                  className={`text-center text-[20px] font-bold tracking-[-0.5px] tabular ${
                    stat.tone === "purchased"
                      ? "text-brand"
                      : stat.tone === "candidate"
                        ? "text-candidate"
                        : "text-text"
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 日別購入済み推移 */}
        <div className="flex flex-col gap-[14px] rounded-card-lg border border-line bg-card p-[15px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <span className="text-[14px] font-bold text-text">日別購入済み推移</span>
          <div className="flex h-[64px] items-end gap-[2px]">
            {BARS.map((height, index) => {
              const isSelected = index === BARS.length - 2;
              return (
                <div key={index} className="flex flex-1 items-end justify-center self-stretch">
                  <div
                    className={`rounded-[4px] ${
                      height === 0
                        ? "w-[80%] bg-line2"
                        : isSelected
                          ? "w-[95%] bg-brand-dark"
                          : "w-[80%] bg-chart-bar"
                    }`}
                    style={{ height: `${Math.max(height, 4)}%` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 今月のカテゴリー別（Pro） */}
        <div className="flex flex-col gap-[14px] rounded-card-lg border border-line bg-card p-[15px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px] font-bold text-text">今月のカテゴリー別</span>
            <span className="rounded-full bg-pro-soft px-[8px] py-[3px] text-[10.5px] font-bold text-pro">
              Pro
            </span>
          </div>
          <div className="flex flex-col">
            {CATEGORY_ANALYSIS.map((category, index) => (
              <div
                key={category.label}
                className={`flex items-center gap-[10px] py-[9px] ${
                  index > 0 ? "border-t border-line3" : ""
                }`}
              >
                <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
                  <span className="truncate text-[13px] font-semibold text-text">
                    {category.label}
                  </span>
                  <div className="h-[4px] overflow-hidden rounded-full bg-line2">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: `${category.share}%` }}
                    />
                  </div>
                </div>
                <div className="flex flex-none flex-col items-end">
                  <span className="text-[13px] font-bold text-text tabular">
                    {category.total}
                  </span>
                  <span className="text-[10px] font-medium text-faint tabular">
                    {category.count}件・{category.share}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TabBar active="分析" />
    </>
  );
}
