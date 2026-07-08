import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "お問い合わせ | 旅レートカメラ",
  description: "旅レートカメラへのお問い合わせ窓口です。",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            お問い合わせ
          </h1>
          <p className="text-gray-500 mb-10">
            「旅レートカメラ」に関するご質問・不具合のご報告は、以下のメールアドレスまでお願いします。
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-7 mb-10">
            <div className="text-sm font-bold text-gray-500 mb-2">サポートメール</div>
            <a
              href="mailto:support@e-nexus.shop"
              className="text-xl sm:text-2xl font-black text-blue-600 hover:text-blue-700 break-all"
            >
              support@e-nexus.shop
            </a>
            <p className="text-gray-500 text-sm mt-4">
              ご返信までにお時間をいただく場合があります。あらかじめご了承ください。
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              お問い合わせの際にご記入いただきたい内容
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              スムーズにご案内できるよう、以下の内容をあわせてお送りいただけると助かります。
            </p>
            <ul className="space-y-2 text-gray-700 text-[15px]">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">・</span>
                <span>アプリ名：旅レートカメラ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">・</span>
                <span>ご利用の端末（機種名）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">・</span>
                <span>iOSのバージョン</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">・</span>
                <span>どの画面で起きたか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">・</span>
                <span>何をした時に起きたか</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">・</span>
                <span>可能であれば、状況が分かるスクリーンショット</span>
              </li>
            </ul>
          </section>

          <section>
            <p className="text-gray-500 text-sm leading-relaxed">
              App Storeのレビュー欄では個別のご案内が難しいため、不具合のご報告やご質問は上記のサポートメールへご連絡いただけますようお願いいたします。
            </p>
          </section>

          <div className="mt-16">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
