import { SectionHeading } from "@/components/ui/Section";
import { FREE_LIMITS, LINKS, PRICING } from "@/lib/appSpec";

/**
 * よくある質問。
 *
 * 回答は本体アプリの実装事実に一致させる。
 * 未実装機能（自動為替取得など）を「できる」と書かない。**できないことは、できないと書く。**
 * FAQで終わらせず、末尾に問い合わせ導線と最終CTAへの橋渡しを置く。
 *
 * ■ V2（2026-09）の見た目
 * 罫で区切る一覧から、白いカードを縦に並べる形にして質問／回答の階層をはっきりさせる。
 * 最初の1問だけ開いた状態にして「開くと回答が出る」ことを示す。
 *
 * desktop（lg以上）は11問を一度に多く見渡せるよう、行の高さ・padding・行間gapを詰める
 * （質問 16.5px / 回答 15.5px の文字サイズは変えない）。
 */
const FAQS = [
  {
    q: "無料で使えますか？",
    a: `はい。カメラでの円換算・通貨換算・翻訳・音声入力・読み上げ・買い物カレンダー・期間ごとの合計の確認は、無料版で回数の制限なくお使いいただけます。無料版では、同時に管理できる旅行が${FREE_LIMITS.trips}件、1つの旅行につき${FREE_LIMITS.savesPerTrip}件まで保存できます。`,
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
    q: "Proにすると何が変わりますか？",
    a: "保存が無制限になり、複数の旅行を同時に管理できます。あわせて、カテゴリーでの絞り込み・カテゴリー別の分析・CSVエクスポートが使えます。カメラ・翻訳・音声・カレンダーなどの基本機能は無料版と同じです。",
  },
  {
    q: "カレンダーや分析は無料で使えますか？",
    a: "買い物カレンダーと、期間ごとの合計・件数の分析は無料版でお使いいただけます。カテゴリー別の内訳・構成比の分析と、カテゴリーでの絞り込み、CSV書き出しがPro版の機能です。",
  },
  {
    q: "Proの料金はいくらですか？",
    a: `月額 ¥${PRICING.monthlyYen.toLocaleString("ja-JP")}、年額 ¥${PRICING.annualYen.toLocaleString("ja-JP")} です。年額は月あたり約 ¥${PRICING.annualPerMonthYen.toLocaleString("ja-JP")} になります。最新の価格はApp Storeの表示をご確認ください。`,
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
    a: "旅先の価格を日本円の目安に換算することに特化しています（例：₩42,900 → 約4,719円）。換算タブでは、日本円から旅先の通貨への向きも確認できます。",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="ground-sand section-pad scroll-mt-20 lg:py-10">
      <div className="container-lp max-w-[900px]">
        <SectionHeading tone="coral" eyebrow="FAQ" title="よくある質問" />

        <div className="mt-[clamp(32px,4vw,48px)] flex flex-col gap-3 lg:mt-3 lg:gap-1.5">
          {FAQS.map((faq, index) => (
            <details
              key={faq.q}
              open={index === 0}
              className="group rounded-[18px] border border-faq-border bg-white px-6 py-5 shadow-[0_10px_24px_-22px_rgba(80,60,30,0.5)] lg:rounded-[14px] lg:px-5 lg:py-2"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-extrabold leading-[1.6] text-text marker:hidden sm:text-[17.5px] lg:text-[16.5px] lg:leading-[1.45]">
                <span>{faq.q}</span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[16px] font-extrabold text-brand-dark transition-transform group-open:rotate-45 lg:mt-0 lg:h-6 lg:w-6 lg:text-[14px]"
                >
                  ＋
                </span>
              </summary>
              <p className="mt-4 text-[16px] leading-[2] text-body-strong lg:mt-1.5 lg:pb-1 lg:text-[15.5px] lg:leading-[1.7]">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-[clamp(32px,4vw,44px)] text-center text-[16px] leading-[1.9] text-body-strong lg:mt-3.5 lg:text-[15.5px]">
          ほかに知りたいことがあれば、
          <a
            href={LINKS.contact}
            className="font-extrabold text-brand-dark underline underline-offset-4 hover:text-brand"
          >
            お問い合わせ
          </a>
          からお送りください。
        </p>
      </div>
    </section>
  );
}
