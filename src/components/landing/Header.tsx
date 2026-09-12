import Link from "next/link";

const NAV = [
  { href: "#features", label: "できること" },
  { href: "#howto", label: "使い方" },
  { href: "#pricing", label: "料金" },
  { href: "#faq", label: "よくある質問" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-brand text-[13px] font-bold text-white"
          >
            ¥
          </span>
          <span className="text-[15px] font-bold tracking-tight text-text">
            旅レートカメラ
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-body transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="rounded-full bg-brand px-4 py-2 text-[12.5px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          アプリを見る
        </a>
      </div>
    </header>
  );
}
