import type { ReactNode } from "react";

/**
 * 端末フレーム。
 *
 * ■ スクリーンショット差し替えポイント（重要）
 * 現在このLPには実機スクリーンショットが存在しないため、画面の中身は
 * CSSで構成したモック（`components/mock/*Screen.tsx`）を描いている。
 * 実機スクショが用意できたら、**このコンポーネントは触らず**、
 * children を次のように差し替えるだけでよい：
 *
 *   <PhoneFrame>
 *     <Image src="/screenshots/home.png" alt="..." fill className="object-cover" />
 *   </PhoneFrame>
 *
 * 画面の角丸・ベゼル・サイズはフレーム側が持っているので、
 * スクショ側で角丸を付ける必要はない。
 */
export default function PhoneFrame({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  /** スクリーンリーダー向けの画面説明 */
  label: string;
}) {
  return (
    <div
      className={`relative mx-auto w-[248px] sm:w-[272px] ${className}`}
      role="img"
      aria-label={label}
    >
      {/* 外枠（端末ベゼル） */}
      <div className="rounded-[var(--radius-phone)] bg-ink p-[10px] shadow-[0_28px_60px_-20px_rgba(16,33,31,0.45)] ring-1 ring-black/5">
        {/* 画面 */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[30px] bg-screen">
          {/* ノッチ */}
          <div className="absolute left-1/2 top-0 z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-b-[13px] bg-ink" />
          {children}
        </div>
      </div>
    </div>
  );
}
