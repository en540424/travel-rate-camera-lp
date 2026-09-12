import Link from "next/link";

import { LINKS } from "@/lib/appSpec";

/**
 * ページ内リンクは必ず `/#id` と書く。ヘッダーは /privacy などの下層ページにも出るので、
 * `#id` だと `/privacy#howto` になって飛ばない（リンク切れになる）。
 */
const NAV = [
  { href: "/#howto", label: "使い方" },
  { href: "/#screens", label: "画面" },
  { href: "/#features", label: "できること" },
  { href: "/#pricing", label: "料金" },
  { href: "/#faq", label: "よくある質問" },
];

/**
 * ヘッダー。Heroが暗面なので、ヘッダーも暗面で揃える
 * （白ヘッダーだとHeroの第一印象を上で切ってしまう）。
 * 右のCTAは、App Store URLが未確定の間は「公開のお知らせ」＝お問い合わせへ送る。
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex flex-none items-center gap-2">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-brand text-[13px] font-bold text-white"
          >
            ¥
          </span>
          <span className="text-[15px] font-bold tracking-tight text-white">
            旅レートカメラ
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-ink-sub transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={LINKS.appStore ?? LINKS.contact}
          className="flex-none rounded-full bg-brand px-4 py-2 text-[12.5px] font-bold text-white transition-opacity hover:opacity-90"
        >
          {LINKS.appStore ? "App Storeで入手" : "公開のお知らせ"}
        </Link>
      </div>
    </header>
  );
}
