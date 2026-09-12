import type { ReactNode } from "react";

/**
 * 端末フレーム。
 *
 * ■ 設計の要点：論理サイズ固定 ＋ transform scale
 * 中身の画面（`mock/screens/*`）は、**iPhoneの論理解像度 393×852pt**で組み、
 * 本体アプリの実装ハンドオフ（`travel-rate-camera-app/design-handoff/{screen}/*-spec.md`）
 * 記載のpx値をそのまま使う。
 *
 * handoffのHTMLは端末を 300×648 に縮めた版だが、**フォントサイズだけは実寸のpt**なので、
 * あの箱に実装どおりの要素を全部入れると実機より3割ほど詰まって溢れる。
 * 実機と同じ393×852で組めば、spec値をそのまま使って実機と同じ収まりになる。
 *
 * 表示サイズはこのフレームが `--s`（scale）で拡縮するので、
 * 画面側のフォントサイズや余白を表示サイズごとに作り直す必要がない。
 *
 * 使い方：
 *   <PhoneFrame label="…" className="[--s:0.62] md:[--s:1.18]">
 *     <OcrResultScreen />
 *   </PhoneFrame>
 *
 * `--s` は呼び出し側が必ず指定する（未指定時は 1）。
 *
 * ■ スクリーンショット差し替えポイント
 * 実機スクショが用意できたら、**このコンポーネントは触らず** children を
 * `<Image src="/screenshots/xxx.png" alt="" fill className="object-cover" />` に
 * 差し替えるだけでよい。角丸・ベゼルはフレーム側が持っている。
 */

/** 画面の論理サイズ（iPhone 15 等の 393×852pt） */
export const SCREEN_W = 393;
export const SCREEN_H = 852;
/** ベゼル幅 */
const BEZEL = 12;

const OUTER_W = SCREEN_W + BEZEL * 2;
const OUTER_H = SCREEN_H + BEZEL * 2;

export default function PhoneFrame({
  children,
  className = "",
  label,
  glow = false,
}: {
  children: ReactNode;
  /** `--s` を含むクラス。例: "[--s:0.6] md:[--s:1.1]" */
  className?: string;
  /** スクリーンリーダー向けの画面説明 */
  label: string;
  /** 暗面に置くとき、端末の背後にティールの光を敷く */
  glow?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative shrink-0 ${className}`}
      style={{
        width: `calc(${OUTER_W}px * var(--s, 1))`,
        height: `calc(${OUTER_H}px * var(--s, 1))`,
      }}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[70px]"
        />
      )}

      <div
        className="absolute left-0 top-0 origin-top-left rounded-[66px] bg-ink-deep p-[12px] shadow-[0_2px_5px_rgba(16,33,31,0.1),0_34px_60px_-30px_rgba(16,33,31,0.55)] ring-1 ring-white/10"
        style={{
          width: OUTER_W,
          height: OUTER_H,
          transform: "scale(var(--s, 1))",
        }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[54px] bg-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
