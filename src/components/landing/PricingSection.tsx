export default function PricingSection() {
  const freeFeatures = [
    { label: "手入力レートで円換算", included: true },
    { label: "ライブ円換算（お試し）", included: true },
    { label: "基本の買い物メモ保存", included: true },
    { label: "合計金額の表示", included: true },
    { label: "旅行1件まで管理", included: true },
    { label: "保存件数あり（上限あり）", included: true },
    { label: "自動レート取得", included: false },
    { label: "ライブ円換算 無制限", included: false },
    { label: "複数旅行の管理", included: false },
  ];

  const proFeatures = [
    { label: "ライブ円換算 無制限", included: true },
    { label: "自動レート取得", included: true },
    { label: "手入力レートも使える", included: true },
    { label: "買い物メモ 保存無制限", included: true },
    { label: "複数旅行の管理", included: true },
    { label: "予算管理機能", included: true },
    { label: "カード手数料込み表示", included: true },
    { label: "商品の写真保存", included: true },
    { label: "オフライン用レート保存", included: true },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-50 border border-purple-200 text-purple-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            料金プラン
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            無料で試せて、
            <span className="text-purple-600">Proでもっと便利に。</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            まずは無料版から。旅行が増えるほど、Proが活きてきます。
          </p>
        </div>

        {/* プランカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* 無料版 */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-7 shadow-sm">
            <div className="mb-6">
              <div className="text-sm font-bold text-gray-500 mb-1">無料版</div>
              <div className="text-3xl font-black text-gray-900">¥0</div>
              <div className="text-gray-400 text-sm mt-1">基本機能をお試しいただけます</div>
            </div>

            <ul className="space-y-3 mb-6">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                    f.included
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}>
                    {f.included ? "✓" : "×"}
                  </span>
                  <span className={`text-sm ${f.included ? "text-gray-700" : "text-gray-400"}`}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-2xl transition-colors text-sm">
              無料版を使う（公開予定）
            </button>
          </div>

          {/* Pro版 */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-blue-500 rounded-3xl p-7 shadow-xl relative overflow-hidden">
            {/* おすすめバッジ */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full">
              おすすめ
            </div>

            {/* 背景装飾 */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full" />

            <div className="mb-6">
              <div className="text-sm font-bold text-blue-200 mb-1">Pro版</div>
              <div className="text-3xl font-black text-white">価格未定</div>
              <div className="text-blue-300 text-sm mt-1">アプリ公開時に案内予定</div>
            </div>

            <ul className="space-y-3 mb-6">
              {proFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-sm text-blue-100">{f.label}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-white hover:bg-blue-50 text-blue-600 font-bold py-3 rounded-2xl transition-colors text-sm shadow-md">
              Pro版の公開を待つ
            </button>
          </div>
        </div>

        {/* 補足 */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            ※ Pro版の価格・提供形式（買い切り / サブスクリプション）はアプリ公開時にご案内します
          </p>
        </div>
      </div>
    </section>
  );
}
