import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "旅レートカメラへのお問い合わせ窓口です。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 bg-white px-4 pb-20 pt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-text mb-2">
            お問い合わせ
          </h1>
          <p className="text-muted mb-10">
            「旅レートカメラ」に関するご質問・不具合のご報告は、以下のメールアドレスまでお願いします。
          </p>

          {/* 公開前のLPからのCTA（「公開のお知らせを受け取る」）の着地先。
              フォーム送信先の新設はHuman-only領域なので、既存のサポートメールに
              件名だけ添えて案内する。新しい送信先・外部サービスは追加していない。 */}
          <div className="mb-10 rounded-card-lg border-2 border-brand bg-brand-soft2 p-7">
            <div className="mb-2 text-sm font-bold text-brand-dark">
              App Store公開のお知らせをご希望の方へ
            </div>
            <p className="mb-4 text-[15px] leading-relaxed text-body">
              現在、App Storeでの公開を準備中です。公開時にお知らせをご希望の場合は、
              件名を「公開通知希望」としてサポートメールへお送りください。
              公開が決まりましたらご連絡します。
            </p>
            <a
              href="mailto:support@e-nexus.shop?subject=%E5%85%AC%E9%96%8B%E9%80%9A%E7%9F%A5%E5%B8%8C%E6%9C%9B%EF%BC%88%E6%97%85%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AB%E3%83%A1%E3%83%A9%EF%BC%89"
              className="inline-flex items-center justify-center gap-2 rounded-[15px] bg-brand px-6 py-3.5 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
            >
              「公開通知希望」でメールを作成
              <span aria-hidden>→</span>
            </a>
            {/* メールアドレスの取り扱い方針を新たに宣言することはしない
                （プライバシーポリシー本文の範囲外の約束をLP側で作らないため）。
                必要なら人間が追記する。 */}
          </div>

          <div className="bg-screen border border-line rounded-card-lg p-7 mb-10">
            <div className="text-sm font-bold text-muted mb-2">サポートメール</div>
            <a
              href="mailto:support@e-nexus.shop"
              className="text-xl sm:text-2xl font-bold text-brand hover:text-brand-dark break-all"
            >
              support@e-nexus.shop
            </a>
            <p className="text-muted text-sm mt-4">
              ご返信までにお時間をいただく場合があります。あらかじめご了承ください。
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-lg font-bold text-text mb-4">
              お問い合わせの際にご記入いただきたい内容
            </h2>
            <p className="text-body text-sm mb-4">
              スムーズにご案内できるよう、以下の内容をあわせてお送りいただけると助かります。
            </p>
            <ul className="space-y-2 text-body text-[15px]">
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">・</span>
                <span>アプリ名：旅レートカメラ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">・</span>
                <span>ご利用の端末（機種名）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">・</span>
                <span>iOSのバージョン</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">・</span>
                <span>どの画面で起きたか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">・</span>
                <span>何をした時に起きたか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand mt-0.5">・</span>
                <span>可能であれば、状況が分かるスクリーンショット</span>
              </li>
            </ul>
          </section>

          <section>
            <p className="text-muted text-sm leading-relaxed">
              App Storeのレビュー欄では個別のご案内が難しいため、不具合のご報告やご質問は上記のサポートメールへご連絡いただけますようお願いいたします。
            </p>
          </section>

          <div className="mt-16">
            <Link href="/" className="text-brand hover:text-brand-dark text-sm font-medium">
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
