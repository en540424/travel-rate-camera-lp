import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/lib/appSpec";

/**
 * フッター。CTAが暗面で終わるので、フッターも暗面で受けて着地させる。
 * 法的導線（プライバシーポリシー・利用規約・ライセンス）と問い合わせは必ず残す。
 *
 * ページ内リンクは必ず `/#id` と書く。フッターは /privacy などの下層ページにも出るので、
 * `#id` だと `/privacy#howto` になって飛ばない（リンク切れになる）。
 */
const COLUMNS = [
  {
    heading: "アプリ",
    links: [
      { href: "/#howto", label: "使い方" },
      { href: "/#screens", label: "画面を見る" },
      { href: "/#features", label: "できること" },
      { href: "/#pricing", label: "料金" },
    ],
  },
  {
    heading: "サポート",
    links: [
      { href: "/#faq", label: "よくある質問" },
      { href: LINKS.contact, label: "お問い合わせ" },
    ],
  },
  {
    heading: "規約",
    links: [
      { href: LINKS.privacy, label: "プライバシーポリシー" },
      { href: LINKS.terms, label: "利用規約" },
      { href: LINKS.licenses, label: "ライセンス" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0F1C1A] pb-10 pt-[clamp(56px,6vw,80px)]">
      <div className="container-lp max-w-lp">
        <div className="grid gap-[clamp(32px,4vw,56px)] sm:grid-cols-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <div className="max-w-[400px] sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              {/* アプリアイコン（docs/brand の採用reference から切り出した public/brand/app-icon-512.png）。隣に名前があるので装飾扱い */}
              <Image
                src="/brand/app-icon-512.png"
                alt=""
                width={30}
                height={30}
                className="h-[30px] w-[30px] flex-none"
              />
              <span className="text-[16.5px] font-extrabold text-white">旅レートカメラ</span>
            </div>
            <p className="mt-[18px] text-[15px] leading-[1.9] text-ink-soft">
              海外旅行の買い物で、値札にかざすだけで日本円の目安がわかるアプリです。
              レートは自分で入力する方式で、換算は端末内で完結します。
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading}>
              <h2 className="text-[13px] font-extrabold tracking-[0.14em] text-brand-accent">
                {column.heading}
              </h2>
              <ul className="mt-[18px] flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-semibold text-ink-bright transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-[clamp(40px,5vw,64px)] border-t border-white/[0.08] pt-6 text-[13.5px] text-ink-muted">
          © {new Date().getFullYear()} 旅レートカメラ
        </p>
      </div>
    </footer>
  );
}
