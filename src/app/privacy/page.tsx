import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 旅レートカメラ",
  description: "旅レートカメラのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            プライバシーポリシー
          </h1>
          <p className="text-gray-400 text-sm mb-10">制定日：2026年7月7日</p>

          <div className="space-y-10 text-gray-700 leading-relaxed text-[15px]">
            <p>
              「旅レートカメラ」（以下「本アプリ」）は、お客様のプライバシーを尊重します。本ポリシーでは、本アプリが扱う情報とその取り扱いについて説明します。
            </p>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                1. アカウント登録・課金・広告について
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>本アプリはアカウント登録なしでご利用いただけます。</li>
                <li>本アプリは無料でご利用いただけ、現在のバージョンではアプリ内課金はありません。</li>
                <li>本アプリは広告を表示しません。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                2. 取得する情報とその保存先
              </h2>
              <p className="mb-3">
                本アプリは、ご利用にあたり以下の情報を扱います。
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>旅行名・基準通貨・為替レート・予算</li>
                <li>撮影または入力した金額・買い物の記録（保存履歴）</li>
                <li>撮影した値札などの写真</li>
              </ul>
              <p>
                これらの情報は、<strong className="text-gray-900">お使いの端末内にのみ保存</strong>されます。氏名・メールアドレス・位置情報・端末識別子などの個人情報を本アプリが取得することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                3. カメラ・写真・OCR（文字認識）について
              </h2>
              <p className="mb-3">
                本アプリは、値札などの価格を撮影して読み取るためにカメラを使用します。カメラへのアクセスは、お客様が許可した場合にのみ行われます。
              </p>
              <p>
                現在のバージョン（MVP）では、撮影した写真および文字認識（OCR）の処理はすべてお使いの端末上で行われ、<strong className="text-gray-900">外部のサーバーへ送信することはありません</strong>。カメラの利用を許可しない場合でも、金額の手入力により本アプリの主要な機能をご利用いただけます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                4. 外部への送信・第三者提供について
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>本アプリは、現在のバージョンにおいて、お客様のデータを外部のサーバーへ送信しません。</li>
                <li>お客様のデータを第三者に提供することはありません。</li>
                <li>アクセス解析・広告目的のトラッキングは行っていません。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                5. データの削除について
              </h2>
              <p>
                お客様のデータはすべて端末内に保存されているため、本アプリをアンインストール（削除）すると、保存された旅行・記録・写真は失われる場合があります。記録の削除は、アプリ内の操作でいつでも行えます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                6. 本ポリシーの変更について
              </h2>
              <p>
                今後の機能追加や仕様変更に伴い、本ポリシーの内容が変わる場合があります。重要な変更がある場合は、アプリ内またはこのページでお知らせします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                7. お問い合わせ
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、以下までお願いします。
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
