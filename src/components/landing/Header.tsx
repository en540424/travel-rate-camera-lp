import Image from "next/image";
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
 * CTAの先頭のコーラルのドットは「今すぐ押せる」ことの合図。CTA本体はティールのまま。
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(13,26,24,0.94)] backdrop-blur-lg">
      <div className="container-lp flex h-[60px] max-w-lp items-center justify-between gap-4 sm:h-16">
        <Link href="/" className="flex flex-none items-center gap-2.5">
          {/* アプリアイコン（docs/brand の採用reference から切り出した public/brand/app-icon-512.png）。隣に名前があるので装飾扱い */}
          <Image
            src="/brand/app-icon-512.png"
            alt=""
            width={30}
            height={30}
            className="h-[30px] w-[30px] flex-none"
          />
          <span className="text-[16.5px] font-extrabold tracking-[0.01em] text-white">
            旅レートカメラ
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[14.5px] font-bold text-ink-sub transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={LINKS.appStore ?? LINKS.contact}
          className="inline-flex flex-none items-center gap-2 rounded-full bg-brand px-[18px] py-[10px] text-[13.5px] font-extrabold text-white shadow-[0_10px_24px_-12px_rgba(14,148,136,0.9)] transition-colors hover:bg-[#12A396] sm:text-[14px]"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-coral-glow" />
          {LINKS.appStore ? "App Storeで入手" : "公開のお知らせ"}
        </Link>
      </div>
    </header>
  );
}
