import type { ReactNode } from "react";

/**
 * セクション見出しの共通部品。
 *
 * 「小さいeyebrow → 大見出し → リード文」の階層を1か所で決め、
 * セクションごとに文字サイズがばらつくのを防ぐ。
 * `tone="dark"` は暗い地の上（Hero・実画面ギャラリー・最終CTA）で使う。
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] ${
            isDark ? "text-brand-accent" : "text-brand"
          }`}
        >
          <span
            aria-hidden
            className={`h-px w-5 ${isDark ? "bg-brand-accent/50" : "bg-brand/40"}`}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-[27px] font-bold leading-[1.32] tracking-[-0.02em] sm:text-[34px] ${
          isDark ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-[14.5px] leading-[1.95] sm:text-[15.5px] ${
            isDark ? "text-ink-sub" : "text-body"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** ラベル付きの小さなpill。セクション内の補足に使う */
export function Pill({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "candidate" | "dark" | "neutral";
}) {
  const tones = {
    brand: "border-brand-border bg-brand-soft text-brand-dark",
    candidate: "border-candidate-border bg-candidate-soft text-candidate-text",
    dark: "border-white/15 bg-white/10 text-white",
    neutral: "border-line bg-white text-body",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11.5px] font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
