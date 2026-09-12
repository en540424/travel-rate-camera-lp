import { SectionHeading } from "@/components/ui/Section";
import { COMPARE_ROWS, FREE_LIMITS, PRICING } from "@/lib/appSpec";

/**
 * 料金セクション。
 *
 * ■ 構造をアプリに合わせている理由
 * 本体アプリの `src/app/pro-features.tsx` は「機能 / 無料 / Pro」の3列比較表を出す。
 * LPも同じ形にすることで、（1）ダウンロード後に見る画面と印象が一致し、
 * （2）「何が違うのか」を一覧で比べられる ＝ 選びやすさが上がる。
 *
 * ■ 掲載してよいもの
 * appSpec.ts の COMPARE_ROWS（＝実装済み）のみ。
 * 自動為替取得・クラウドOCR・PDF出力などの将来候補を「Proでできること」として書かない。
 * 価格はHuman確定値（月額¥500／年額¥4,000）。
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="料金"
          title={
            <>
              まずは無料で。
              <br className="sm:hidden" />
              足りなくなったらPro。
            </>
          }
          lead="カメラでの円換算・翻訳・音声入力・読み上げは、無料版でも回数の制限なく使えます。違うのは、どれだけ残せるかだけです。"
        />

        {/* 価格 */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-card-lg border border-line bg-screen p-7">
            <h3 className="text-[15px] font-bold text-text">無料版</h3>
            <p className="mt-4 text-[40px] font-bold leading-none tracking-[-0.03em] text-text tabular">
              ¥0
            </p>
            <p className="mt-4 text-[13px] font-medium leading-[1.85] text-body">
              旅行の買い物に必要な機能は、はじめから全部入っています。
            </p>
          </div>

          <div className="relative rounded-card-lg border-2 border-brand bg-brand-soft2 p-7">
            <span className="gradient-pro absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold text-white">
              Pro
            </span>
            <h3 className="text-[15px] font-bold text-text">Pro版</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[40px] font-bold leading-none tracking-[-0.03em] text-text tabular">
                ¥{PRICING.monthlyYen.toLocaleString("ja-JP")}
              </span>
              <span className="text-[13.5px] font-bold text-muted">/ 月</span>
            </div>
            <p className="mt-4 text-[13px] font-bold text-brand-dark tabular">
              年額 ¥{PRICING.annualYen.toLocaleString("ja-JP")}
              <span className="ml-1.5 font-medium text-muted">
                （月あたり約 ¥{PRICING.annualPerMonthYen.toLocaleString("ja-JP")}・
                月額より約{PRICING.annualDiscountPercent}%おトク）
              </span>
            </p>
          </div>
        </div>

        {/* 比較表（アプリの pro-features.tsx と同じ切り分け） */}
        <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-left">
            <caption className="sr-only">無料版とPro版でできることの比較</caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="py-3 pr-4 text-[12px] font-bold text-muted">
                  機能
                </th>
                <th
                  scope="col"
                  className="w-[88px] py-3 text-center text-[12px] font-bold text-muted"
                >
                  無料
                </th>
                <th
                  scope="col"
                  className="w-[88px] rounded-t-chip bg-brand-soft2 py-3 text-center text-[12px] font-bold text-brand-dark"
                >
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label} className="border-b border-line3">
                  <th
                    scope="row"
                    className="py-3.5 pr-4 text-[13.5px] font-semibold text-text"
                  >
                    {row.label}
                  </th>
                  <td
                    className={`py-3.5 text-center text-[13.5px] tabular ${
                      row.free === "—" ? "font-medium text-faint2" : "font-bold text-body"
                    }`}
                  >
                    {row.free}
                  </td>
                  <td
                    className={`bg-brand-soft2 py-3.5 text-center text-[13.5px] font-bold tabular ${
                      row.same ? "text-body" : "text-brand-dark"
                    }`}
                  >
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Proが必要になる瞬間を、売り込まずに説明する */}
        <div className="mx-auto mt-10 max-w-3xl rounded-card-lg border border-line bg-screen p-7">
          <h3 className="text-[15px] font-bold text-text">Proが要るのは、こんなときだけ</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              `1つの旅行で${FREE_LIMITS.savesPerTrip}件を超えて保存したい`,
              `旅行を${FREE_LIMITS.trips}件より多く、同時に管理したい`,
              "カテゴリー別に絞り込み・分析し、CSVで書き出したい",
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-[1.8] text-body">
                <span aria-hidden className="mt-[3px] shrink-0 font-bold text-brand">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-line pt-4 text-[12px] leading-[1.9] text-muted">
            上限に達しても、保存済みの記録は消えません。Proを解約した場合も、
            それまでに保存した記録や旅行のデータはそのまま残ります。
            価格はApp Storeの表示を正とします。購入・解約はApp Storeの購読管理から行えます。
          </p>
        </div>
      </div>
    </section>
  );
}
