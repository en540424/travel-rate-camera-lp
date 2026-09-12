/**
 * LP掲載仕様の単一ソース。
 *
 * ここの値は本体アプリ（travel-rate-camera-app）の実装を正とする：
 *   - 無料上限      : src/config/limits.ts の FREE_LIMITS（trips: 1 / saves: 10）
 *   - Product ID    : src/config/revenuecat.ts
 *   - 価格          : Human確定値（月額¥500／年額¥4,000）
 *
 * ルール：
 *   1. **未実装の機能をここへ書かない。** 将来候補は FUTURE_CANDIDATES に隔離し、
 *      LP本文（Free/Proの表）からは参照しない
 *   2. 各セクションのコピーはこのファイルを読む。コンポーネント側に数値を直書きしない
 *   3. アプリ側の仕様が変わったら、まずここを直す
 */

/** 無料版の上限（アプリの FREE_LIMITS と一致させること） */
export const FREE_LIMITS = {
  /** 同時に管理できる旅行の件数 */
  trips: 1,
  /** 1つの旅行につき保存できる件数 */
  savesPerTrip: 10,
} as const;

/** 価格（Human確定・2026-09） */
export const PRICING = {
  monthlyYen: 500,
  annualYen: 4000,
  /** 年額を12で割った月あたり実質額（表示用・端数切り捨て） */
  get annualPerMonthYen() {
    return Math.floor(this.annualYen / 12);
  },
  /** 年額にした場合の割引率（%・表示用・端数切り捨て） */
  get annualDiscountPercent() {
    return Math.floor((1 - this.annualYen / (this.monthlyYen * 12)) * 100);
  },
} as const;

/** 無料版でできること（すべて実装済み） */
export const FREE_FEATURES: readonly string[] = [
  "カメラで値札を読み取って円換算（OCR）",
  "通貨換算",
  "翻訳",
  "音声入力（読み上げた言葉を文字に）",
  "読み上げ（翻訳文を音声で再生）",
  `1つの旅行につき${FREE_LIMITS.savesPerTrip}件まで保存`,
  `同時に管理できる旅行は${FREE_LIMITS.trips}件`,
  "カテゴリーを選んで保存",
];

/** Proで解放されること（すべて実装済み） */
export const PRO_FEATURES: readonly string[] = [
  "保存無制限",
  "複数の旅行を同時に管理",
  "カテゴリーで絞り込み",
  "カテゴリー別の分析",
  "CSVエクスポート",
];

/**
 * 将来候補。**現時点ではProの内容ではない。**
 * LPのFree/Pro表・機能紹介・FAQの「Proでできること」からは絶対に参照しない。
 * 将来実装したらここから PRO_FEATURES へ移す。
 */
export const FUTURE_CANDIDATES: readonly string[] = [
  "自動為替取得",
  "高性能クラウドOCR",
  "Pro+",
  "PDFエクスポート",
  "クラウドAI機能",
];

/** 公開URL（App Store提出時に必要。未確定のものは null のまま推測で埋めない） */
export const LINKS = {
  privacy: "/privacy",
  terms: "/terms",
  contact: "/contact",
  licenses: "/licenses",
  /** App Store公開URL。未公開のため null。確定するまで推測で埋めない */
  appStore: null as string | null,
} as const;

/** 対応通貨（アプリの src/constants/currencies.ts と一致させること） */
export const CURRENCIES: readonly { code: string; label: string; symbol: string }[] = [
  { code: "USD", label: "米ドル", symbol: "$" },
  { code: "KRW", label: "韓国ウォン", symbol: "₩" },
  { code: "TWD", label: "台湾ドル", symbol: "NT$" },
  { code: "THB", label: "タイバーツ", symbol: "฿" },
  { code: "EUR", label: "ユーロ", symbol: "€" },
  { code: "GBP", label: "英ポンド", symbol: "£" },
];
