import type { ReactNode } from "react";

/**
 * セクション見出しの共通部品。
 *
 * 「小さいeyebrow（罫付き）→ 大見出し → リード文」の階層を1か所で決め、
 * セクションごとに文字サイズがばらつくのを防ぐ。
 * 文字サイズは Design V2（2026-09）の型：
 *   h2 clamp(30px,4.4vw,38px) / lead clamp(16px,1.5vw,17.5px) / eyebrow 13px
 *
 * `tone`
 *   - "light" : 白・淡色の地（eyebrowはティール）
 *   - "dark"  : 暗い地（Screens）
 *   - "coral" : 砂色の地で、視線を止めたいセクション（Problem・FAQ）。eyebrowと罫だけコーラル
 *
 * `layout`
 *   - "stack" : eyebrow → h2 → lead を縦に積む（従来どおり）
 *   - "split" : md以上で h2 を左・lead を右に並べる（Design V2の基本形）。
 *               見出しとリードが同じ行に並ぶことで、上部の密度が上がり単調さが消える
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  layout = "stack",
  size = "default",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark" | "coral";
  align?: "center" | "left";
  layout?: "stack" | "split";
  /** "compact" は狭いコンテナ（料金 1040px）で見出しが3行に折れるのを防ぐための一段小さい型 */
  size?: "default" | "compact";
  className?: string;
}) {
  const isDark = tone === "dark";
  const eyebrowColor = {
    light: "text-brand-dark",
    dark: "text-brand-accent",
    coral: "text-coral-text",
  }[tone];
  const ruleColor = {
    light: "bg-brand",
    dark: "bg-brand-accent",
    coral: "bg-coral",
  }[tone];
  const titleColor = isDark ? "text-white" : "text-text";
  const leadColor = isDark ? "text-ink-bright" : "text-body-strong";

  const eyebrowEl = eyebrow && (
    <span
      className={`inline-flex items-center gap-3 text-[13px] font-extrabold tracking-[0.16em] ${eyebrowColor}`}
    >
      <span aria-hidden className={`h-[2px] w-[26px] ${ruleColor}`} />
      {eyebrow}
    </span>
  );

  const titleSize =
    size === "compact"
      ? "text-[clamp(28px,3.8vw,34px)]"
      : "text-[clamp(30px,4.4vw,38px)]";

  const titleEl = (
    <h2
      className={`text-balance ${titleSize} font-extrabold leading-[1.26] tracking-[-0.03em] ${titleColor} lg:leading-[1.2]`}
    >
      {title}
    </h2>
  );

  const leadEl = lead && (
    <p
      className={`text-pretty text-[clamp(16px,1.5vw,17.5px)] leading-[1.95] lg:text-[17px] lg:leading-[1.72] ${leadColor}`}
    >
      {lead}
    </p>
  );

  if (layout === "split") {
    return (
      <div className={className}>
        {eyebrowEl}
        {/* 見出し側を少し広く取る（日本語の見出しは同じ字数でもリードより幅を食う） */}
        <div className="mt-5 grid items-end gap-x-[clamp(28px,4vw,52px)] gap-y-3 md:grid-cols-[1.2fr_1fr] lg:mt-3.5">
          {titleEl}
          {leadEl}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-[900px]"} ${className}`}
    >
      {eyebrowEl}
      <div className="mt-5 lg:mt-3.5">{titleEl}</div>
      {leadEl && <div className="mt-5 lg:mt-3">{leadEl}</div>}
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
    dark: "border-brand-accent/35 bg-brand-accent/15 text-brand-accent",
    neutral: "border-line bg-white text-body-strong",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[7px] text-[12.5px] font-extrabold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
