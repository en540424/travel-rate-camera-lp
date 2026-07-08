"use client";

export default function HeroSection() {
  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-12">
      {/* 背景装飾 */}
      <div className="absolute top-10 left-4 text-4xl opacity-10 rotate-12">✈️</div>
      <div className="absolute top-20 right-8 text-3xl opacity-10 -rotate-12">🌏</div>
      <div className="absolute bottom-20 left-8 text-3xl opacity-10 rotate-6">💱</div>
      <div className="absolute bottom-10 right-4 text-4xl opacity-10 -rotate-6">🛍️</div>

      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* テキスト部分 */}
          <div className="flex-1 text-center lg:text-left">
            {/* アプリ名バッジ */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="text-lg">📸</span>
              <span className="text-sm font-bold text-blue-600 tracking-wide">旅レートカメラ</span>
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">β準備中</span>
            </div>

            {/* メインコピー */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
              海外旅行の買い物、
              <br />
              <span className="text-blue-600">もう暗算しない。</span>
            </h1>

            {/* サブコピー */}
            <p className="text-lg sm:text-xl text-gray-600 font-medium mb-3">
              値札にカメラをかざすだけで、<span className="text-blue-600 font-bold">日本円がその場でわかる。</span>
            </p>

            {/* 補足コピー */}
            <p className="text-base text-gray-500 mb-8 leading-relaxed">
              保存しなくても、かざした瞬間に円換算。<br />
              ドルもウォンもバーツも<span className="text-blue-600 font-bold">円で見える</span>から、その場で判断できる。<br />
              気になった商品だけ保存して、合計・予算もひと目で確認。
            </p>

            {/* 特徴バッジ */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {["📸 ライブ円換算", "✅ 無料版あり", "📱 スマホ完結", "🌏 主要6通貨に対応"].map((badge) => (
                <span
                  key={badge}
                  className="bg-white border border-blue-100 text-gray-700 text-sm px-3 py-1.5 rounded-full shadow-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base">
                🔔 公開通知を受け取る
              </button>
              <button className="bg-white hover:bg-blue-50 border-2 border-blue-200 text-blue-600 font-bold px-8 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-base">
                詳しく見る ↓
              </button>
            </div>

            {/* 小さな注記 */}
            <p className="text-xs text-gray-400 mt-4">
              ※現在、アプリ公開準備中です。公開時にご案内します。
            </p>
          </div>

          {/* スマホモックアップ */}
          <div className="flex-shrink-0 float-animation">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* 背景グロー */}
      <div className="absolute inset-0 bg-blue-400 opacity-20 blur-3xl rounded-full scale-110" />

      {/* スマホ本体 */}
      <div className="relative w-64 sm:w-72 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* ノッチ */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />

        {/* 画面 */}
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* ステータスバー */}
          <div className="bg-gray-900 px-5 pt-8 pb-2 flex justify-between items-center">
            <span className="text-white text-xs font-medium">9:41</span>
            <span className="text-white text-xs">📶 🔋</span>
          </div>

          {/* アプリヘッダー */}
          <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
            <div>
              <div className="text-white text-xs opacity-80">換算モード</div>
              <div className="text-white text-sm font-bold">USD → JPY</div>
            </div>
            <div className="text-right">
              <div className="text-blue-200 text-xs">1 USD =</div>
              <div className="text-white text-sm font-bold">157.34 JPY</div>
            </div>
          </div>

          {/* カメラビュー */}
          <div className="bg-gray-800 relative h-40 flex items-center justify-center overflow-hidden">
            {/* スキャンコーナー */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-blue-400 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-blue-400 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-blue-400 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-blue-400 rounded-br-lg" />

            {/* スキャンライン */}
            <div className="scan-line absolute left-4 right-4 h-0.5 bg-blue-400 opacity-70" style={{ top: "30%" }} />

            {/* 値札 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 text-center shadow-lg">
              <div className="text-gray-400 text-xs mb-1">PRICE</div>
              <div className="text-gray-900 text-2xl font-black">$29.99</div>
            </div>
          </div>

          {/* 換算結果 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-4 border-b border-blue-100">
            <div className="text-gray-500 text-xs mb-1">日本円の目安</div>
            <div className="text-blue-600 text-3xl font-black">約 4,720円</div>
          </div>

          {/* 保存ボタン */}
          <div className="px-4 py-3">
            <button className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl text-sm shadow-md">
              💾 保存する
            </button>
          </div>

          {/* 買い物リスト（小さく） */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
            <div className="text-gray-600 text-xs font-bold mb-2">🛍 買い物リスト</div>
            {[
              { name: "ショルダーバッグ", price: "$29.99", yen: "約4,720円" },
              { name: "サングラス", price: "$19.99", yen: "約3,150円" },
              { name: "スニーカー", price: "$59.90", yen: "約9,420円" },
            ].map((item) => (
              <div key={item.name} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-0">
                <span className="text-gray-700 text-xs truncate flex-1">{item.name}</span>
                <span className="text-blue-600 text-xs font-bold ml-2 flex-shrink-0">{item.yen}</span>
              </div>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600 text-xs">合計</span>
                <span className="text-blue-700 text-xs font-black">約17,290円</span>
              </div>
              <div className="flex justify-between mt-0.5">
                <span className="text-gray-500 text-xs">予算 30,000円</span>
                <span className="text-green-600 text-xs font-bold">残り 約12,710円</span>
              </div>
            </div>
          </div>

          {/* ホームインジケーター */}
          <div className="bg-white px-4 pb-3 pt-1">
            <div className="w-24 h-1 bg-gray-300 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
