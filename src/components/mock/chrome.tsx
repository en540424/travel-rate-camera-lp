import type { ReactNode } from "react";

import { TABS } from "@/lib/appSpec";

/**
 * 端末モックの共通クローム（ステータスバー・下タブ・旅行ヘッダー）。
 *
 * 数値は本体アプリの実装ハンドオフ
 * （travel-rate-camera-app/design-handoff/ocr-result-v2/ocr-result-v2.html）を写している。
 * 下タブの構成は `appSpec.ts` の TABS（＝アプリの (tabs)/_layout.tsx）を正とする。
 */

/* ── ステータスバー ─────────────────────────────────────────── */

export function StatusBar({ time = "12:08" }: { time?: string }) {
  return (
    <div className="relative flex h-[54px] flex-none items-center justify-between px-[30px] pt-[6px]">
      <span className="text-[17px] font-semibold tracking-tight text-text">{time}</span>
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-[11px] h-[36px] w-[122px] -translate-x-1/2 rounded-full bg-ink-deep" />
      <div className="flex items-center gap-[8px] text-text">
        <svg width="19" height="13" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <div className="h-[13px] w-[26px] rounded-[4px] border-[1.4px] border-text p-[1.6px]">
          <div className="h-full w-[82%] rounded-[1.5px] bg-text" />
        </div>
      </div>
    </div>
  );
}

/* ── 下タブ ─────────────────────────────────────────────────── */

const ICON_PATHS: Record<string, ReactNode> = {
  カメラ: (
    <>
      <path d="M3 8.5A2 2 0 0 1 5 6.5h1.6l1-1.4A1 1 0 0 1 9.4 4.6h5.2a1 1 0 0 1 .8.5l1 1.4H18a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="11.5" cy="12.3" r="3.1" />
    </>
  ),
  翻訳: (
    <>
      <path d="M4 6h8M8 6v1.6c0 2.6-1.6 4.6-4 5.4M6.2 9.4c.8 2 2.4 3.2 4.3 3.6" />
      <path d="M12.6 20l3.6-9 3.6 9M13.9 17.2h4.6" />
    </>
  ),
  換算: (
    <>
      <path d="M4 9h12M4 9l3-3M4 9l3 3" />
      <path d="M20 15H8M20 15l-3-3M20 15l-3 3" />
    </>
  ),
  履歴: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.2l2.6 1.6" />
    </>
  ),
  カレンダー: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </>
  ),
  分析: <path d="M6 20V13M12 20V5M18 20V10" />,
  設定: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
};

/** 下タブ。`active` は appSpec.TABS のいずれかのラベル */
export function TabBar({ active }: { active: (typeof TABS)[number] }) {
  return (
    <div className="flex flex-none justify-between border-t border-line2 bg-card px-[6px] pb-[30px] pt-[9px]">
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <div
            key={tab}
            className={`flex flex-1 flex-col items-center gap-[4px] ${
              isActive ? "text-brand" : "text-tab-inactive"
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              {ICON_PATHS[tab]}
            </svg>
            <span className="text-[9.5px] font-semibold leading-none">{tab}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ── 旅行名 ＋ レートチップ ─────────────────────────────────── */

/**
 * TripRateHeader。レートチップは primarySoft の teal pill で
 * 「国旗 ¥レート」形式（アプリの formatRate ＋ CurrencyFlagImage と同形）。
 */
export function TripRateHeader({
  trip,
  flag,
  rate,
}: {
  trip: string;
  flag: string;
  rate: string;
}) {
  return (
    <div className="flex items-center justify-between gap-[10px]">
      <span className="flex-1 truncate text-[20px] font-bold leading-tight tracking-[-0.3px] text-text">
        {trip}
      </span>
      <span className="inline-flex flex-none items-center gap-[5px] rounded-full bg-brand-soft px-[12px] py-[6px] text-[13px] font-bold text-brand-dark tabular">
        <span aria-hidden>{flag}</span>
        {rate}
      </span>
    </div>
  );
}

/** 画面内の白カード（アプリの SectionCard / card.base 相当） */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-line bg-card shadow-[0_1px_2px_rgba(16,33,31,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

/** カード内の overline 見出し（typography.overline 相当） */
export function Overline({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-bold tracking-[0.6px] text-muted">{children}</span>
  );
}
