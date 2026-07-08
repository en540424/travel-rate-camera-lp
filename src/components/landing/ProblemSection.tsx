export default function ProblemSection() {
  const problems = [
    {
      icon: "🤔",
      title: "これ、日本円でいくら？が毎回めんどう",
      desc: "値札を見るたびに「えーっと…」となる。旅行中ずっとこれが続くのはつらい。",
    },
    {
      icon: "📱",
      title: "電卓や為替アプリを開くのが地味に手間",
      desc: "アプリを切り替えて、レートを調べて、計算して…。買い物のたびにこれは疲れる。",
    },
    {
      icon: "😟",
      title: "気づいたら使いすぎていた",
      desc: "旅行中って感覚がズレがち。帰国してカード明細を見て後悔するのは避けたい。",
    },
    {
      icon: "🛍️",
      title: "あの店のほうが安かったかも",
      desc: "「さっきの雑貨屋と比べてどっちが安い？」をその場で判断できたら便利なのに。",
    },
    {
      icon: "💳",
      title: "実際にいくら取られるか不安",
      desc: "両替レートとカードの手数料、どっちで払うのが得なんだろう。円ベースで見たい。",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block bg-amber-50 border border-amber-200 text-amber-600 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            あるある
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
            海外旅行中、こんなこと
            <br />
            <span className="text-amber-500">ありませんか？</span>
          </h2>
        </div>

        {/* 問題カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-amber-50 border border-amber-100 rounded-2xl p-5 hover:shadow-md hover:border-amber-200 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{problem.icon}</div>
              <h3 className="text-base font-bold text-gray-800 mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{problem.desc}</p>
            </div>
          ))}

          {/* 共感メッセージカード */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 text-white sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
            <div className="text-3xl mb-3">💡</div>
            <p className="text-base font-bold leading-relaxed">
              旅行中の買い物って、もっとラクにできるはず。
            </p>
            <p className="text-sm text-blue-200 mt-2">
              旅レートカメラは、そのストレスを解消するために生まれました。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
