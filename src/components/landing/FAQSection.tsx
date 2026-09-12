import { FREE_LIMITS, PRICING } from "@/lib/appSpec";

/**
 * 回答は本体アプリの実装事実に一致させる。
 * 未実装機能（自動為替取得など）を「できる」と書かない。できないことは、できないと書く。
 */
const FAQS = [
  {
    q: "無料で使えますか？",
    a: `はい。カメラでの円換算・通貨換算・翻訳・音声入力・読み上げ・カテゴリー選択は、無料版で回数の制限なくお使いいただけます。無料版では、同時に管理できる旅行が${FREE_LIMITS.trips}件、1つの旅行につき${FREE_LIMITS.savesPerTrip}件まで保存できます。`,
  },
  {
    q: "Proにすると何が変わりますか？",
    a: "保存が無制限になり、複数の旅行を同時に管理できます。あわせて、カテゴリーでの絞り込み・カテゴリー別の分析・CSVエクスポートが使えます。カメラや翻訳などの基本機能は無料版と同じです。",
  },
  {
    q: "Proの料金はいくらですか？",
    a: `月額 ¥${PRICING.monthlyYen.toLocaleString("ja-JP")}、年額 ¥${PRICING.annualYen.toLocaleString("ja-JP")} です。年額は月あたり約 ¥${PRICING.annualPerMonthYen.toLocaleString("ja-JP")} になります。最新の価格はApp Storeの表示をご確認ください。`,
  },
  {
    q: "レートは自動で取得されますか？",
    a: "いいえ。レートはご自身で入力していただく方式です。両替時のレートやカード決済のレートなど、実際にご自身が使うレートを入力できるため、感覚に合う金額で判断できます。旅行前に入力しておけば、現地ですぐ使えます。",
  },
  {
    q: "通貨記号は自動で判定されますか？",
    a: "いいえ。事前に「USD→JPY」「KRW→JPY」のように換算モードを選んでいただく方式です。読み取りの精度と速度を優先した設計のため、数字の読み取りは安定して動作します。",
  },
  {
    q: "電波がない場所でも使えますか？",
    a: "入力したレートでの円換算は端末内で計算するため、通信が不安定な場所でもそのままお使いいただけます。旅行前にレートを設定しておくと安心です。",
  },
  {
    q: "保存したデータはどこにありますか？",
    a: "保存した買い物の記録は、お使いの端末内に保存されます。詳しくはプライバシーポリシーをご確認ください。",
  },
  {
    q: "Proを解約したら、保存したデータは消えますか？",
    a: "消えません。解約後も、それまでに保存した記録や旅行のデータは残ります。無料版の上限を超えている分については、新しく追加することができなくなります。",
  },
  {
    q: "解約はどこからできますか？",
    a: "App Storeの購読管理から、いつでも解約できます。解約後も、購読期間が終わるまではPro版の機能をお使いいただけます。",
  },
  {
    q: "日本円から外貨への換算もできますか？",
    a: "旅先の価格を日本円の目安に換算することに特化しています（例：₩42,900 → 約4,719円）。",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
            FAQ
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[32px]">
            よくある質問
          </h2>
        </div>

        <div className="mt-10 divide-y divide-line2 border-y border-line2">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] font-bold text-text marker:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0 text-[17px] font-bold text-brand transition-transform group-open:rotate-45"
                >
                  ＋
                </span>
              </summary>
              <p className="mt-3 text-[13.5px] leading-[1.95] text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
