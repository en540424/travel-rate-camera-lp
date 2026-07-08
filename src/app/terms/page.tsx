import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "利用規約 | 旅レートカメラ",
  description: "旅レートカメラの利用規約です。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            利用規約
          </h1>
          <p className="text-gray-400 text-sm mb-10">制定日：2026年7月7日</p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">
            <p>
              この利用規約（以下「本規約」）は、「旅レートカメラ」（以下「本アプリ」）のご利用にあたっての条件を定めるものです。本アプリをご利用になる場合には、本規約に同意いただいたものとします。
            </p>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第1条（本アプリの内容）
              </h2>
              <p>
                本アプリは、お客様が入力・設定した為替レートをもとに、撮影または入力した金額を日本円に換算し、旅行中の買い物を記録・管理するための補助ツールです。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第2条（換算結果は参考値であること）
              </h2>
              <p>
                本アプリで表示される円換算額は、お客様ご自身が設定したレートに基づく参考値です。実際のクレジットカード会社の適用レート、決済時点の為替レート、両替手数料等により、実際の請求額とは異なる場合があります。本アプリの換算結果を最終的な金額として保証するものではありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第3条（文字認識（OCR）機能について）
              </h2>
              <p>
                本アプリの価格読み取り機能（OCR）は、値札等の文字を誤って認識する場合があります。読み取り結果は必ずお客様ご自身でご確認ください。誤認識に気づかれた場合は、金額の手入力による修正が可能です。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第4条（保存データ・予算管理について）
              </h2>
              <p>
                旅行の予算設定・買い物の保存履歴は、お客様の記録・管理を補助するための機能です。これらの情報をもとにした金銭的な判断・支出の管理については、最終的な責任はお客様ご自身にあるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第5条（免責事項）
              </h2>
              <p>
                本アプリの不具合、動作停止、端末の故障・紛失、その他の事由によりお客様のデータが消失・破損した場合であっても、法令上許容される範囲で、これによって生じた損害について当方は責任を負わないものとします。当方は、可能な範囲で本アプリの品質向上に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第6条（禁止事項）
              </h2>
              <p className="mb-3">
                お客様は、本アプリのご利用にあたり、以下の行為をしてはならないものとします。
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>法令または公序良俗に違反する行為</li>
                <li>本アプリの逆コンパイル、逆アセンブル、リバースエンジニアリングその他の解析行為</li>
                <li>本アプリの運営を妨害する行為</li>
                <li>その他、当方が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第7条（本規約の変更）
              </h2>
              <p>
                当方は、必要と判断した場合、お客様への予告なく本規約の内容を変更することがあります。変更後の規約は、このページに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第8条（お問い合わせ）
              </h2>
              <p>
                本規約に関するお問い合わせは、以下までお願いします。
              </p>
              <p className="mt-2">
                <a
                  href="mailto:support@e-nexus.shop"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  support@e-nexus.shop
                </a>
              </p>
            </section>
          </div>

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
