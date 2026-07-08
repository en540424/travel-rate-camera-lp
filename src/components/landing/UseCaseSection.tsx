export default function UseCaseSection() {
  const destinations = [
    { flag: "🇰🇷", name: "韓国旅行", currency: "KRW", hint: "コスメ・グルメ・ファッション" },
    { flag: "🇹🇼", name: "台湾旅行", currency: "TWD", hint: "夜市・雑貨・スイーツ" },
    { flag: "🇺🇸", name: "ハワイ旅行", currency: "USD", hint: "免税店・アウトレット" },
    { flag: "🇹🇭", name: "タイ旅行", currency: "THB", hint: "市場・雑貨・スパ用品" },
    { flag: "🇺🇸", name: "アメリカ旅行", currency: "USD", hint: "ショッピングモール・スーパー" },
    { flag: "🇪🇺", name: "ヨーロッパ旅行", currency: "EUR", hint: "ブランド品・お土産" },
  ];

  const scenes = [
    { icon: "🏪", name: "免税店", desc: "高額商品も円で見れば安心" },
    { icon: "🛍️", name: "アウトレット", desc: "本当にお得か一目でわかる" },
    { icon: "🛒", name: "海外スーパー", desc: "食料品・日用品の比較に" },
    { icon: "🏠", name: "雑貨店", desc: "お土産選びがスムーズに" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-50 border border-cyan-200 text-cyan-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            活躍シーン
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            こんな旅行で
            <span className="text-cyan-500"> 活躍します。</span>
          </h2>
        </div>

        {/* 旅行先グリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all duration-200 text-center group"
            >
              <div className="font-black text-gray-900 text-xl mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                {dest.name}
              </div>
              <div className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full mb-2">
                {dest.currency} → JPY
              </div>
              <p className="text-gray-400 text-xs">{dest.hint}</p>
            </div>
          ))}
        </div>

        {/* 区切り */}
        <div className="text-center mb-8">
          <span className="text-gray-400 text-sm">さらに、こんな場所でも</span>
        </div>

        {/* ショッピングシーン */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {scenes.map((scene, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 rounded-2xl p-4 text-center hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl mb-2">{scene.icon}</div>
              <div className="font-bold text-gray-800 text-sm mb-1">{scene.name}</div>
              <p className="text-gray-400 text-xs">{scene.desc}</p>
            </div>
          ))}
        </div>

        {/* まとめメッセージ */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-base">
            旅行先を問わず、<span className="font-bold text-blue-600">スマホ一台で円換算できる</span>から、
          </p>
          <p className="text-gray-600 text-base">
            どの旅行でもそのまま使えます。
          </p>
        </div>
      </div>
    </section>
  );
}
