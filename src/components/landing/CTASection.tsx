export default function CTASection() {
  return (
    <section className="py-24 gradient-cta relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 text-6xl opacity-5">✈️</div>
      <div className="absolute top-1/3 right-1/4 text-5xl opacity-5">📸</div>

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        {/* アイコン */}
        <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl border border-white/20">
          📸
        </div>

        {/* 見出し */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
          海外旅行の買い物を、
          <br />
          <span className="text-cyan-300">もっとわかりやすく。</span>
        </h2>

        {/* サブコピー */}
        <p className="text-blue-200 text-base sm:text-lg mb-10 leading-relaxed">
          値札にかざすだけで、日本円がわかる。<br />
          旅レートカメラで、買い物の「なんとなく不安」をなくしましょう。
        </p>

        {/* CTAボタン群 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {/* メインCTA */}
          <button className="bg-white hover:bg-blue-50 active:bg-blue-100 text-blue-700 font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 text-base">
            🔔 公開通知を受け取る
          </button>

          {/* セカンダリCTA */}
          <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 text-base">
            📬 無料で事前登録
          </button>
        </div>

        {/* 最新情報ボタン */}
        <button className="text-blue-300 hover:text-white border border-blue-400/50 hover:border-white/50 font-medium px-6 py-2.5 rounded-xl transition-all duration-200 text-sm">
          📱 最新情報を受け取る
        </button>

        {/* 注記 */}
        <p className="text-blue-400 text-xs mt-6">
          ※現在、アプリ公開準備中です。公開時に詳細をご案内します。
          <br />
          ※App Storeリンクは公開後に設置予定です。
        </p>

        {/* ストアバッジ（将来用プレースホルダー）。初回公開はiPhone向けのため、App Storeのみ表示 */}
        <div className="flex justify-center gap-4 mt-8 opacity-40">
          <div className="bg-black border border-white/30 rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-white text-lg">🍎</span>
            <div className="text-left">
              <div className="text-white text-xs">準備中</div>
              <div className="text-white text-sm font-bold">App Store</div>
            </div>
          </div>
          {/* Google Playバッジは非表示（将来Android対応時に復活）
          <div className="bg-black border border-white/30 rounded-xl px-4 py-2 flex items-center gap-2">
            <span className="text-white text-lg">▶️</span>
            <div className="text-left">
              <div className="text-white text-xs">準備中</div>
              <div className="text-white text-sm font-bold">Google Play</div>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
