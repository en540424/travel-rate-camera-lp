export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: "🌏",
      title: "旅行と通貨を選ぶ",
      desc: "韓国旅行なら KRW → JPY、ハワイなら USD → JPY を選択。手入力レートで実際の両替レートも設定できます。",
      examples: ["USD → JPY", "KRW → JPY", "TWD → JPY", "THB → JPY", "EUR → JPY"],
    },
    {
      step: "02",
      icon: "📷",
      title: "値札にカメラをかざす",
      desc: "カメラを値札の数字に向けるだけ。その場で日本円の目安が表示されます。保存しなくてもその場で判断できます。",
      examples: ["$29.99 → 約4,720円", "₩39,000 → 約4,290円", "NT$890 → 約4,160円"],
    },
    {
      step: "03",
      icon: "💾",
      title: "気になる商品だけ保存",
      desc: "「これは買う！」と思ったものだけ保存。保存しない商品を増やして、必要なものだけ残します。",
      examples: ["買い物リストに追加", "後でゆっくり比較", "不要なものは保存しない"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-50 border border-green-200 text-green-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            使い方
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            使い方はかんたん
            <span className="text-green-500"> 3ステップ</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base">
            はじめての方でも、すぐ使えるシンプル設計。
          </p>
        </div>

        {/* ステップカード */}
        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* 接続ライン（デスクトップ） */}
          <div className="hidden lg:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-green-200 via-green-300 to-green-200 z-0" style={{ left: "calc(16.67% + 3rem)", right: "calc(16.67% + 3rem)" }} />

          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative z-10">
              {/* モバイル矢印 */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2">
                  <div className="text-green-400 text-xl">↓</div>
                </div>
              )}

              <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 h-full">
                {/* ステップ番号 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-2xl flex items-center justify-center font-black text-sm">
                    {step.step}
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                </div>

                {/* タイトル */}
                <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>

                {/* 説明 */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>

                {/* 例 */}
                <div className="flex flex-wrap gap-2">
                  {step.examples.map((ex, j) => (
                    <span
                      key={j}
                      className="bg-green-50 border border-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 補足：合計・予算管理 */}
        <div className="mt-6 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center text-xl">
            📊
          </div>
          <div>
            <p className="text-gray-700 text-sm font-bold mb-0.5">保存後は合計・残り予算もひと目で確認</p>
            <p className="text-gray-400 text-xs">買い物リストに保存した商品の合計金額と、設定した予算との差額を自動で表示します。</p>
          </div>
        </div>

        {/* 仕様メモ */}
        <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 text-center">
          <p className="text-blue-700 text-sm">
            <span className="font-bold">📌 仕様について：</span>
            通貨の自動判定は非対応です。事前に換算モード（USD→JPY など）を選択する方式で、認識精度と速度を優先しています。
          </p>
        </div>
      </div>
    </section>
  );
}
