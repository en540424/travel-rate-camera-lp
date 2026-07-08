export default function FeatureSection() {
  const features = [
    {
      icon: "📷",
      title: "ライブ円換算",
      badge: null,
      badgeColor: "",
      desc: "カメラで値札の数字を読み取り、その場で日本円の目安をリアルタイム表示。レジ前に悩む時間をゼロに。",
      highlight: true,
    },
    {
      icon: "🛍️",
      title: "買い物メモ保存",
      badge: null,
      badgeColor: "",
      desc: "気になる商品だけ買い物リストに保存。商品名・現地価格・円換算額をまとめてメモできます。",
      highlight: false,
    },
    {
      icon: "📊",
      title: "合計・予算管理",
      badge: null,
      badgeColor: "",
      desc: "保存した商品の合計金額と、設定した予算との差額をひと目で確認。使いすぎを防ぎます。",
      highlight: false,
    },
    {
      icon: "⚙️",
      title: "手入力レート対応",
      badge: null,
      badgeColor: "",
      desc: "両替所やカード請求レートに合わせて、自分で自由にレートを設定できます。自分が実際に使うレートで計算できるのが強みです。",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-50 border border-blue-200 text-blue-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            主要機能
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            旅行中の買い物を、
            <span className="text-blue-600">ぜんぶサポート。</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            シンプルに使えて、必要なときに必要な機能が揃っています。
          </p>
        </div>

        {/* 機能カードグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                feature.highlight
                  ? "bg-blue-600 text-white shadow-blue-200 shadow-md"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {/* アイコン＋バッジ */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                    feature.highlight ? "bg-white/20" : "bg-blue-50"
                  }`}
                >
                  {feature.icon}
                </div>
                {feature.badge && (
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                )}
              </div>

              {/* タイトル */}
              <h3
                className={`text-base font-bold mb-2 ${
                  feature.highlight ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>

              {/* 説明 */}
              <p
                className={`text-sm leading-relaxed ${
                  feature.highlight ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 対応通貨メモ */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 flex items-start gap-3 max-w-2xl mx-auto">
          <span className="text-blue-400 text-lg flex-shrink-0">🌏</span>
          <p className="text-blue-600 text-sm leading-relaxed">
            <span className="font-bold">対応通貨：</span>
            主要6通貨（USD・KRW・TWD・THB・EUR・GBP）に対応しています。
          </p>
        </div>
      </div>
    </section>
  );
}
