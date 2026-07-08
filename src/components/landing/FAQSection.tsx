"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "無料で使えますか？",
    a: "無料でご利用いただけます。手入力レートでの円換算や、買い物メモの保存など、基本機能を無料でお使いいただけます。",
  },
  {
    q: "レートは自動取得できますか？",
    a: "レートはご自身で設定する方式です。両替時のレートやカードのレートなど、ご自身の感覚に合うレートを入力してご利用いただけます。旅行前に入力しておけば、現地ですぐ使えます。",
  },
  {
    q: "手入力レートも使えますか？",
    a: "はい。ご自身が両替したレートやカード決済レートを入力してご利用いただけます。",
  },
  {
    q: "カメラで通貨記号も自動判定できますか？",
    a: "本アプリでは、ユーザーが事前に「USD→JPY」「KRW→JPY」などの換算モードを選択する方式です。通貨記号の自動判定には対応していませんが、認識精度と速度を優先した設計のため、数字の読み取りは精度よく動作します。",
  },
  {
    q: "オフラインでも使えますか？",
    a: "手入力レートは端末内で計算するため、通信が不安定な場面でもそのまま円換算に使えます。旅行前にレートを設定しておくと安心です。",
  },
  {
    q: "対応通貨は何ですか？",
    a: "主要6通貨（USD・KRW・TWD・THB・EUR・GBP）に対応しています。",
  },
  {
    q: "iPhoneとAndroid、どちらに対応しますか？",
    a: "現在はiPhone向けアプリとして開発しています。",
  },
  {
    q: "日本円から外貨への換算にも対応しますか？",
    a: "旅先の価格を日本円の目安に換算することに特化しています（例：$29.99 → 約4,720円）。",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-100 border border-gray-200 text-gray-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            よくある質問
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            FAQ
          </h2>
        </div>

        {/* アコーディオン */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <div className="flex items-start gap-3 flex-1">
                  <span className="text-blue-600 font-black text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <span className="text-gray-800 font-bold text-sm sm:text-base">{faq.q}</span>
                </div>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-sm transition-transform duration-200 ${
                    openIndex === i ? "rotate-180 bg-blue-50 text-blue-600" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 border-t border-gray-50">
                  <div className="flex items-start gap-3 pt-4">
                    <span className="text-green-600 font-black text-sm flex-shrink-0 mt-0.5">A.</span>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 補足 */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            その他のご質問は、
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              お問い合わせページ
            </Link>
            からご連絡ください。
          </p>
        </div>
      </div>
    </section>
  );
}
