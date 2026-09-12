import Link from "next/link";
import { LINKS } from "@/lib/appSpec";

const LEGAL = [
  { href: LINKS.privacy, label: "プライバシーポリシー" },
  { href: LINKS.terms, label: "利用規約" },
  { href: LINKS.contact, label: "お問い合わせ" },
  { href: LINKS.licenses, label: "ライセンス" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-brand text-[13px] font-bold text-white"
              >
                ¥
              </span>
              <span className="text-[15px] font-bold tracking-tight text-text">
                旅レートカメラ
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[12.5px] leading-[1.85] text-muted">
              海外旅行の買い物で、値札にかざすだけで日本円の目安がわかるアプリです。
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[12.5px] font-semibold text-body transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-10 border-t border-line2 pt-6 text-[11.5px] font-medium text-faint">
          © {new Date().getFullYear()} 旅レートカメラ
        </p>
      </div>
    </footer>
  );
}
