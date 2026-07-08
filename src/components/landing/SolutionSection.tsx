export default function SolutionSection() {
  const steps = [
    {
      icon: "📷",
      title: "カメラで価格を読み取る",
      desc: "値札の数字にカメラをかざすだけ。OCRが自動で読み取ります。",
    },
    {
      icon: "💱",
      title: "その場で日本円に換算",
      desc: "事前に設定した通貨レートで、即座に円換算された金額を表示。",
    },
    {
      icon: "🤔",
      title: "保存前に価格判断できる",
      desc: "「4,720円か、買うかな？」その場で判断。不要なものは保存しない。",
    },
    {
      icon: "💾",
      title: "気になる商品だけ保存",
      desc: "買い物メモに追加して、後でゆっくり比較できます。",
    },
    {
      icon: "📊",
      title: "合計・残り予算を確認",
      desc: "保存した商品の合計金額と、設定した予算との差額をひと目で確認。",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-600 to-blue-700">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            解決策
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            旅レートカメラなら、
            <br />
            <span className="text-cyan-300">値札を見るだけで円換算。</span>
          </h2>
          <p className="text-blue-200 mt-4 text-base">
            難しい操作は不要。かざして、見て、保存するだけ。
          </p>
        </div>

        {/* フロー */}
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* 矢印ライン */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/30">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-6 bg-white/30 mt-1" />
                )}
              </div>
              {/* テキスト */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-cyan-300 text-xs font-bold">STEP {i + 1}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 強調メッセージ */}
        <div className="mt-10 bg-white rounded-3xl p-6 text-center shadow-xl">
          <div className="text-3xl mb-3">🎯</div>
          <p className="text-gray-900 font-black text-lg leading-tight">
            「見る → 円で判断する → 保存する → 合計を見る」
          </p>
          <p className="text-gray-500 text-sm mt-2">
            この流れが、旅行中の買い物をもっとスマートにします。
          </p>
        </div>
      </div>
    </section>
  );
}
