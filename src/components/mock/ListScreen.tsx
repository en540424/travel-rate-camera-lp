/**
 * 買い物リスト画面のCSSモック。
 * 候補＝amber系、購入済み＝teal系という本体アプリの色分けに従う（tokens.ts）。
 */
const ITEMS = [
  { name: "コスメセット", local: "₩ 42,900", yen: "4,719円", bought: false },
  { name: "スニーカー", local: "₩ 89,000", yen: "9,790円", bought: true },
  { name: "お土産のお菓子", local: "₩ 12,000", yen: "1,320円", bought: true },
] as const;

export default function ListScreen() {
  return (
    <div className="flex h-full flex-col bg-screen px-[15px] pb-3 pt-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[15px] font-bold tracking-tight text-text">
          買い物リスト
        </span>
        <span className="rounded-full bg-brand-soft px-[9px] py-[3px] text-[9px] font-bold text-brand-dark tabular">
          3 / 10件
        </span>
      </div>

      {/* 予算サマリー（ダークヒーロー面） */}
      <div className="gradient-ink mb-3 rounded-card-lg px-3 py-[10px]">
        <div className="text-[8px] font-semibold text-ink-muted">購入済み合計</div>
        <div className="text-[21px] font-bold leading-tight text-white tabular">
          11,110円
        </div>
        <div className="mt-[6px] h-[3px] overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-[37%] rounded-full bg-brand-accent" />
        </div>
        <div className="mt-[6px] flex justify-between text-[8px] font-semibold text-ink-sub tabular">
          <span>予算 30,000円</span>
          <span>残り 18,890円</span>
        </div>
      </div>

      {/* リスト */}
      <div className="flex flex-col gap-2">
        {ITEMS.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-between rounded-card border px-[10px] py-[8px] ${
              item.bought
                ? "border-brand-border bg-brand-soft2"
                : "border-candidate-border bg-candidate-soft2"
            }`}
          >
            <div className="flex items-center gap-[7px]">
              <span
                className={`h-[6px] w-[6px] rounded-full ${
                  item.bought ? "bg-brand" : "bg-candidate"
                }`}
              />
              <div>
                <div className="text-[10px] font-bold text-text">{item.name}</div>
                <div className="text-[8px] font-semibold text-muted tabular">
                  {item.local}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div
                className={`text-[11px] font-bold tabular ${
                  item.bought ? "text-brand-dark" : "text-candidate-text"
                }`}
              >
                {item.yen}
              </div>
              <div
                className={`text-[7.5px] font-bold ${
                  item.bought ? "text-brand" : "text-candidate-strong"
                }`}
              >
                {item.bought ? "購入済み" : "候補"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
