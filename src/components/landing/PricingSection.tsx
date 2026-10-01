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
 * 価格はHuman確定値（月額¥500／年額¥4,000）。数値はすべて appSpec.PRICING / FREE_LIMITS から出す。
 *
 * ■ V2（2026-09）の見た目
 * 無料版（薄いグレー）とPro版（濃いティール・白文字）の差をはっきり付ける。
 * 比較表はヘッダーを黒系にして、Proで変わる行の値だけ coral-text で示す
 * （行の位置と太字も併用し、色だけに頼らない）。
 *
 * ■ desktop（lg以上）の幅と並び
 * コンテナは 940px（他セクションの 1160px より狭い）。
 * 比較表をコンテナ幅いっぱいに広げると「機能」列が実際のラベル幅（最長で約180px）の
 * 3〜4倍空くので、表は約540pxの自前の幅にし、右に「Proが要るのは」boxを並べる。
 * 表の幅・行高、カードと箱のpaddingで詰め、¥0 / ¥500 の価格表示と本文（15.5px）は縮めない。
 * （md以下は従来どおり、表の下に box を積む）
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="section-pad scroll-mt-20 bg-white lg:py-10">
      <div className="container-lp max-w-[1040px] lg:max-w-[940px]">
        <SectionHeading
          layout="split"
          size="compact"
          eyebrow="料金"
          title={
            <>
              まずは無料で。
              <br />
              足りなくなったらPro。
            </>
          }
          lead="カメラでの円換算・翻訳・音声入力・読み上げは、無料版でも回数の制限なく使えます。違うのは、どれだけ残せるかだけです。"
        />

        {/* 価格 */}
        <div className="mt-[clamp(40px,5vw,52px)] grid gap-[clamp(18px,2.2vw,28px)] sm:grid-cols-2 lg:mt-5 lg:gap-3.5">
          <div className="rounded-card-xl border-[1.5px] border-[#DDE5E2] bg-screen p-[clamp(26px,3vw,30px)] lg:px-5 lg:py-4">
            <h3 className="text-[17px] font-extrabold tracking-[0.02em] text-body-strong lg:text-[15.5px]">無料版</h3>
            <p className="mt-[18px] text-[clamp(48px,6vw,66px)] font-extrabold leading-none tracking-[-0.04em] text-text tabular lg:mt-2 lg:text-[36px]">
              ¥0
            </p>
            <p className="mt-5 text-[16.5px] leading-[1.9] text-body-strong lg:mt-2 lg:text-[15.5px] lg:leading-[1.65]">
              旅行の買い物に必要な機能は、はじめから全部入っています。
            </p>
          </div>

          <div className="ground-pro relative rounded-card-xl p-[clamp(26px,3vw,30px)] shadow-[0_30px_60px_-34px_rgba(10,118,110,0.9)] lg:px-5 lg:py-4">
            <span className="gradient-pro absolute -top-[15px] left-[clamp(26px,3vw,30px)] rounded-full px-4 py-[7px] text-[12.5px] font-extrabold text-[#3B2807] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] lg:left-5 lg:py-1.5 lg:px-3.5 lg:text-[12px]">
              Pro
            </span>
            <h3 className="text-[17px] font-extrabold tracking-[0.02em] text-[#BFEDE5] lg:text-[15.5px]">Pro版</h3>
            <div className="mt-[18px] flex items-baseline gap-2.5 lg:mt-2">
              <span className="text-[clamp(48px,6vw,66px)] font-extrabold leading-none tracking-[-0.04em] text-white tabular lg:text-[36px]">
                ¥{PRICING.monthlyYen.toLocaleString("ja-JP")}
              </span>
              <span className="text-[17px] font-extrabold text-[#9FE8DD] lg:text-[15px]">/ 月</span>
            </div>
            <p className="mt-5 text-[17px] font-extrabold text-white tabular lg:mt-2 lg:text-[15.5px]">
              年額 ¥{PRICING.annualYen.toLocaleString("ja-JP")}
              <span className="mt-1.5 block text-[14.5px] font-semibold leading-[1.7] text-white/[0.82] lg:ml-1 lg:mt-0 lg:inline lg:text-[13.5px] lg:leading-[1.6]">
                （月あたり約 ¥{PRICING.annualPerMonthYen.toLocaleString("ja-JP")}・
                月額より約{PRICING.annualDiscountPercent}%おトク）
              </span>
            </p>
          </div>
        </div>

        <div className="lg:mt-3.5 lg:grid lg:grid-cols-[minmax(0,1fr)_350px] lg:items-stretch lg:gap-3.5">
          {/* 比較表（アプリの pro-features.tsx と同じ切り分け）。
              390px幅でも Pro列が画面外に隠れないよう、モバイルでは列幅と文字を詰めて横スクロールなしで収める */}
          <div className="mt-[clamp(24px,3vw,34px)] overflow-hidden rounded-3xl border border-line-card shadow-[0_20px_44px_-34px_rgba(16,60,54,0.45)] lg:mt-0 lg:self-start lg:rounded-[20px]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white text-left">
                <caption className="sr-only">無料版とPro版でできることの比較</caption>
                <thead>
                  <tr className="bg-text">
                    <th
                      scope="col"
                      className="px-4 py-[18px] text-[13px] font-extrabold tracking-[0.08em] text-ink-sub sm:px-[22px] sm:text-[14px] lg:py-2 lg:text-[13px]"
                    >
                      機能
                    </th>
                    <th
                      scope="col"
                      className="w-[68px] px-1 py-[18px] text-center text-[13px] font-extrabold tracking-[0.08em] text-ink-sub sm:w-[104px] sm:px-2 sm:text-[14px] lg:w-[104px] lg:py-2 lg:text-[13px]"
                    >
                      無料
                    </th>
                    <th
                      scope="col"
                      className="w-[68px] px-1 py-[18px] text-center text-[13px] font-extrabold tracking-[0.08em] text-brand-accent sm:w-[104px] sm:px-2 sm:text-[14px] lg:w-[104px] lg:py-2 lg:text-[13px]"
                    >
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row.label} className="border-b border-line2 last:border-b-0">
                      <th
                        scope="row"
                        className="px-4 py-[15px] text-[14.5px] font-bold leading-[1.5] text-text sm:px-[22px] sm:py-[17px] sm:text-[16px] lg:py-[7px] lg:text-[15px]"
                      >
                        {row.label}
                      </th>
                      <td
                        className={`px-1 py-[15px] text-center text-[14.5px] font-bold tabular sm:px-2 sm:py-[17px] sm:text-[16px] lg:py-[7px] lg:text-[15px] ${
                          row.free === "—" ? "text-faint2" : "text-body-strong"
                        }`}
                      >
                        {row.free}
                      </td>
                      <td
                        className={`bg-brand-soft2 px-1 py-[15px] text-center text-[14.5px] font-extrabold tabular sm:px-2 sm:py-[17px] sm:text-[16px] lg:py-[7px] lg:text-[15px] ${
                          row.same ? "text-body-strong" : "text-coral-text"
                        }`}
                      >
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Proが必要になる瞬間を、売り込まずに説明する。lg では表の右に立て、注記は下端に寄せる */}
          <div className="mt-[clamp(24px,3vw,34px)] rounded-3xl border border-sand-border bg-sand p-[clamp(26px,3vw,30px)] lg:mt-0 lg:flex lg:flex-col lg:rounded-[20px] lg:px-5 lg:py-4">
            <h3 className="text-[19px] font-extrabold text-text lg:text-[17px]">Proが要るのは、こんなときだけ</h3>
            <ul className="mt-5 grid gap-x-[26px] gap-y-3.5 sm:grid-cols-3 lg:mt-2.5 lg:grid-cols-1 lg:gap-y-2">
              {[
                `1つの旅行で${FREE_LIMITS.savesPerTrip}件を超えて保存したい`,
                `旅行を${FREE_LIMITS.trips}件より多く、同時に管理したい`,
                "カテゴリー別に絞り込み・分析し、CSVで書き出したい",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-[16px] leading-[1.85] text-body-strong lg:gap-2 lg:text-[15.5px] lg:leading-[1.6]">
                  <span aria-hidden className="mt-0.5 shrink-0 font-extrabold text-brand">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-sand-line pt-[18px] text-[14.5px] leading-[1.9] text-muted-strong lg:mt-auto lg:pt-2.5 lg:text-[14px] lg:leading-[1.65]">
              上限に達しても、保存済みの記録は消えません。Proを解約した場合も、
              それまでに保存した記録や旅行のデータはそのまま残ります。
              価格はApp Storeの表示を正とします。購入・解約はApp Storeの購読管理から行えます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
