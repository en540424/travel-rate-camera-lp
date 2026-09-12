import PhoneFrame from "@/components/mock/PhoneFrame";
import ListScreen from "@/components/mock/ListScreen";

export default function SolutionSection() {
  return (
    <section className="bg-screen py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <PhoneFrame label="買い物リストと予算の残りを表示しているアプリ画面">
            <ListScreen />
          </PhoneFrame>
        </div>

        <div className="order-1 md:order-2">
          <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-brand">
            Solution
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-snug tracking-tight text-text sm:text-[32px]">
            かざす、わかる、
            <br />
            残りも見える。
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-body">
            換算はカメラに任せて、あなたは「買うかどうか」だけ決めればいい。
            保存した買い物は候補と購入済みに分かれて、購入済みの合計から残り予算が自動で引かれます。
          </p>

          <dl className="mt-7 space-y-4">
            {[
              {
                t: "候補と購入済みを分けて管理",
                d: "迷っているものは候補のまま。買ったら購入済みに切り替えるだけで合計に反映されます。",
              },
              {
                t: "残り予算がいつでも見える",
                d: "予算を決めておけば、購入済みの合計を引いた残りが常に表示されます。",
              },
              {
                t: "レートは自分で決められる",
                d: "両替所やカードの実際のレートを入力できるので、自分の感覚に合う金額で判断できます。",
              },
            ].map((item) => (
              <div key={item.t} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand"
                />
                <div>
                  <dt className="text-[15px] font-bold text-text">{item.t}</dt>
                  <dd className="mt-1 text-[13.5px] leading-[1.85] text-body">
                    {item.d}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
