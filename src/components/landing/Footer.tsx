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
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-brand text-[13px] font-bold text-white"
              >
                ¥
              </span>
              <span className="text-[15px] font-bold tracking-tight text-white">
                旅レートカメラ
              </span>
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.9] text-ink-muted">
              海外旅行の買い物で、値札にかざすだけで日本円の目安がわかるアプリです。
              レートは自分で入力する方式で、換算は端末内で完結します。
            </p>
          </div>

          <div className="grid flex-1 gap-8 sm:grid-cols-3 md:max-w-lg">
            {COLUMNS.map((column) => (
              <nav key={column.heading}>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[12.5px] font-semibold text-ink-sub transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[11.5px] font-medium text-ink-muted">
          © {new Date().getFullYear()} 旅レートカメラ
        </p>
      </div>
    </footer>
  );
}
