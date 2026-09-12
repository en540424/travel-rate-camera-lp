import { StatusBar, TabBar } from "../chrome";
import { TRANSLATION_DEMO, TRIP } from "../demoData";

/**
 * 翻訳画面のモック。
 *
 * 本体アプリ `src/app/(tabs)/translation.tsx` の実装に一致させている：
 *   - タイトル「翻訳」＋ 補足「入力した文章をその場で翻訳します」＋ 旅行バッジ
 *   - 翻訳元 / ⇄ / 翻訳先 の3カード（言語名＋言語コード）
 *   - 入力カード（文字数カウンタ・マイク）→「翻訳する」→「訳文」カード
 *   - 訳文カードには「読み上げ」「コピー」がある
 *
 * ■ 事実に関する注意
 * 翻訳はAppleの翻訳機能を使う端末内の機能で、**iOS限定**。
 * 音声入力はApple音声認識。どちらも無料版で使える。
 */
export default function TranslationScreen() {
  return (
    <>
      <StatusBar time="15:26" />

      <div className="flex flex-1 flex-col gap-[12px] overflow-hidden px-[15px] pt-[8px]">
        {/* ヘッダー */}
        <div className="flex items-start justify-between gap-[10px]">
          <div className="flex flex-col gap-[2px]">
            <span className="text-[20px] font-bold tracking-[-0.3px] text-text">翻訳</span>
            <span className="text-[11px] font-medium text-muted">
              入力した文章をその場で翻訳します
            </span>
          </div>
          <span className="inline-flex flex-none items-center gap-[4px] rounded-full bg-brand-soft px-[10px] py-[5px] text-[11px] font-bold text-brand-dark">
            <span aria-hidden>{TRIP.flag}</span>
            {TRIP.name}
          </span>
        </div>

        {/* 言語バー */}
        <div className="flex items-center gap-[8px]">
          <div className="flex flex-1 flex-col gap-[1px] rounded-card border border-line bg-card px-[11px] py-[9px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
            <span className="text-[9.5px] font-bold tracking-[0.4px] text-faint">翻訳元</span>
            <span className="truncate text-[14px] font-bold text-text">
              {TRANSLATION_DEMO.sourceLabel}
            </span>
            <span className="text-[9.5px] font-semibold uppercase text-faint2">ja</span>
          </div>
          <div className="flex h-[32px] w-[32px] flex-none items-center justify-center rounded-full bg-brand text-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M4 9h12M4 9l3-3M4 9l3 3" />
              <path d="M20 15H8M20 15l-3-3M20 15l-3 3" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col gap-[1px] rounded-card border border-line bg-card px-[11px] py-[9px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
            <span className="text-[9.5px] font-bold tracking-[0.4px] text-faint">翻訳先</span>
            <span className="truncate text-[14px] font-bold text-text">
              {TRANSLATION_DEMO.targetLabel}
            </span>
            <span className="text-[9.5px] font-semibold uppercase text-faint2">ko</span>
          </div>
        </div>

        {/* 入力カード。入力欄は実装と同じ minHeight 140 を確保する */}
        <div className="flex flex-col gap-[10px] rounded-card border border-line bg-card p-[13px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <p className="min-h-[140px] text-[14px] font-medium leading-[21px] text-text">
            {TRANSLATION_DEMO.source}
          </p>
          <div className="flex items-center justify-between border-t border-line3 pt-[9px]">
            <span className="text-[10px] font-semibold text-faint tabular">
              {TRANSLATION_DEMO.source.length} / 1,000
            </span>
            <span className="flex items-center gap-[5px] rounded-full bg-brand-soft px-[10px] py-[5px] text-[11px] font-bold text-brand-dark">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <rect x="9" y="2.5" width="6" height="11" rx="3" />
                <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5" />
              </svg>
              音声入力
            </span>
          </div>
        </div>

        {/* 翻訳するCTA */}
        <div className="flex h-[48px] flex-none items-center justify-center rounded-button bg-brand text-[16px] font-bold text-white shadow-[0_8px_18px_-6px_rgba(14,148,136,0.5)]">
          翻訳する
        </div>

        {/* 訳文カード */}
        <div className="flex flex-col gap-[10px] rounded-card border border-line bg-card p-[13px] shadow-[0_1px_2px_rgba(16,33,31,0.04)]">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-[0.5px] text-muted">訳文</span>
            <span className="text-[10px] font-semibold text-faint2">ko</span>
          </div>
          <p className="min-h-[86px] text-[15px] font-semibold leading-[23px] text-text">
            {TRANSLATION_DEMO.target}
          </p>
          <div className="flex gap-[7px] border-t border-line3 pt-[10px]">
            <span className="flex items-center gap-[5px] rounded-[8px] border border-brand-border bg-brand-soft2 px-[10px] py-[6px] text-[11.5px] font-bold text-brand-dark">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4 9.5h3L12 5v14l-5-4.5H4z" />
                <path
                  d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              読み上げ
            </span>
            <span className="flex items-center gap-[5px] rounded-[8px] border border-line bg-card px-[10px] py-[6px] text-[11.5px] font-bold text-brand-dark">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="8.5" y="8.5" width="11" height="12" rx="2" />
                <path d="M15.5 5.5h-9a2 2 0 0 0-2 2v9" />
              </svg>
              コピー
            </span>
          </div>
        </div>
      </div>

      <TabBar active="翻訳" />
    </>
  );
}
