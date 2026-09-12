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
          <p className="text-gray-400 text-sm mb-10">制定日：2026年7月7日　最終改定日：2026年9月11日</p>

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
                <li>本アプリは無料でご利用いただけます。一部の機能を利用できる有料プラン「Pro」（自動更新サブスクリプション）をアプリ内課金として提供しています。</li>
                <li>本アプリは広告を表示しません。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                2. 端末内に保存する情報
              </h2>
              <p className="mb-3">
                本アプリは、ご利用にあたり以下の情報を扱います。
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>旅行名・基準通貨・為替レート・予算・期間</li>
                <li>撮影または入力した金額・買い物の記録（保存履歴・メモ・カテゴリー）</li>
                <li>撮影した値札や商品などの写真</li>
                <li>翻訳ページの読み上げ音声の設定</li>
              </ul>
              <p>
                これらの情報は、<strong className="text-gray-900">お使いの端末内にのみ保存</strong>され、当方が運営するサーバーやクラウドへ送信することはありません。氏名・メールアドレス・位置情報を本アプリが取得することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                3. カメラ・写真・OCR（文字認識）・翻訳について
              </h2>
              <p className="mb-3">
                本アプリは、値札などの価格を撮影して読み取るためにカメラを使用します。カメラおよび写真ライブラリへのアクセスは、お客様が許可した場合にのみ行われます。
              </p>
              <p className="mb-3">
                撮影した写真の文字認識（OCR）は、Apple社が提供する端末上の機能を用いてお使いの端末上で行われ、写真や認識結果を当方のサーバーへ送信することはありません。カメラの利用を許可しない場合でも、金額の手入力により本アプリの主要な機能をご利用いただけます。
              </p>
              <p>
                翻訳機能は、Apple社が提供する端末上の翻訳機能を用いて処理します。翻訳に必要な言語データが端末に無い場合、Apple社からのダウンロードが行われることがあります。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                4. 音声入力（音声認識）について
              </h2>
              <p className="mb-3">
                翻訳ページの音声入力は、Apple社が提供する音声認識機能を使用します。マイクおよび音声認識へのアクセスは、お客様が許可した場合にのみ行われ、音声入力を開始してから停止するまでの間だけマイクを使用します。
              </p>
              <p>
                音声認識は端末上での処理を優先しますが、端末上で処理できない言語や環境では、音声データがApple社のサーバーへ送信されて処理されることがあります。この場合の音声データの取り扱いは、Apple社のプライバシーポリシーに従います。本アプリが音声データを保存したり、当方のサーバーへ送信したりすることはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                5. アプリ内課金（Pro）と第三者サービスについて
              </h2>
              <p className="mb-3">
                Proの購入・復元・契約状態の確認には、Apple社のApp Store決済と、購入管理サービス「RevenueCat」（RevenueCat, Inc.）を利用しています。
              </p>
              <ul className="list-disc list-inside space-y-1 mb-3">
                <li>お支払いはApple IDに対して行われ、本アプリがクレジットカード情報などの決済情報を取得することはありません。</li>
                <li>購入状態を管理するため、RevenueCatはApp Storeの購入情報（購入日・契約状態・商品の識別子など）と、本アプリが端末ごとに発行する匿名の識別子を処理します。この識別子はお客様の氏名やメールアドレスとは結びつきません。</li>
                <li>RevenueCatにおけるデータの取り扱いは、同社のプライバシーポリシーに従います。</li>
              </ul>
              <p>
                これ以外の目的でお客様のデータを第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                6. 外部への送信・解析について
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>本アプリは、旅行・記録・写真などお客様の保存データを、当方が運営するサーバーやクラウドへ送信しません。</li>
                <li>外部と通信するのは、上記のアプリ内課金（App Store・RevenueCat）と、Apple社の音声認識・翻訳機能に限られます。</li>
                <li>アクセス解析・広告目的のトラッキング・クラッシュレポートの収集は行っていません。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                7. データの削除について
              </h2>
              <p>
                旅行・記録・写真はすべて端末内に保存されているため、本アプリをアンインストール（削除）すると、これらのデータは失われる場合があります。記録の削除は、アプリ内の操作でいつでも行えます。Proの契約状態はApple IDに紐づくため、アプリを削除しても契約は継続します。解約はiOSの設定（サブスクリプション）から行ってください。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                8. 本ポリシーの変更について
              </h2>
              <p>
                今後の機能追加や仕様変更に伴い、本ポリシーの内容が変わる場合があります。重要な変更がある場合は、アプリ内またはこのページでお知らせします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900 mb-3">
                9. お問い合わせ
              </h2>
              <p>
                本ポリシーに関するお問い合わせは、以下までお願いします。
              </p>
              <p className="mt-2">
                <a
                  href="mailto:support@e-nexus.shop"
                  className="text-brand hover:text-brand-dark font-medium"
                >
                  support@e-nexus.shop
                </a>
              </p>
            </section>
          </div>

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
