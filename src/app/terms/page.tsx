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
          <p className="text-gray-400 text-sm mb-10">制定日：2026年7月7日　最終改定日：2026年9月11日</p>

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
                第5条（有料プラン「Pro」・自動更新サブスクリプション）
              </h2>
              <p className="mb-3">
                本アプリの一部の機能（保存件数・旅行作成数の上限解除、カテゴリー絞り込み・分析、CSV書き出しなど。内容はアプリ内の表示を正とします）は、有料プラン「Pro」の契約者のみご利用いただけます。
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>Proは月額または年額の自動更新サブスクリプションとして、Apple社のApp Storeを通じて提供します。価格はアプリ内およびApp Storeの表示を正とします。</li>
                <li>お支払いは購入確定時にApple IDに請求されます。契約期間終了の24時間前までに解約されない限り、契約は自動的に更新され、更新時に同じ期間の料金が請求されます。</li>
                <li>解約・自動更新の停止は、iOSの設定（Apple ID）のサブスクリプション管理から行えます。本アプリを削除しても契約は解約されません。</li>
                <li>解約後も、契約期間の終了日までは引き続きProの機能をご利用いただけます。期間途中の解約に対する日割り返金は行いません。</li>
                <li>返金については、Apple社の定める規定・手続きに従います。当方が直接返金を行うことはできません。</li>
                <li>機種変更などで契約状態が反映されない場合は、アプリ内の「購入を復元」から、同じApple IDでの購入を復元できます。</li>
                <li>Proの契約が終了した場合、新規の保存・旅行作成などは無料版の上限に戻りますが、契約中に保存した記録・写真・旅行は削除されず、引き続き閲覧・編集・削除できます。</li>
                <li>当方は、Proで提供する機能の内容や価格を、予告のうえ変更することがあります。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第6条（免責事項）
              </h2>
              <p>
                本アプリの不具合、動作停止、端末の故障・紛失、その他の事由によりお客様のデータが消失・破損した場合であっても、法令上許容される範囲で、これによって生じた損害について当方は責任を負わないものとします。当方は、可能な範囲で本アプリの品質向上に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第7条（禁止事項）
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
                第8条（本規約の変更）
              </h2>
              <p>
                当方は、必要と判断した場合、お客様への予告なく本規約の内容を変更することがあります。変更後の規約は、このページに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                第9条（お問い合わせ）
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
