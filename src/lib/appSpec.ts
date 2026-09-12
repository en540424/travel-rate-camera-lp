/**
 * LP掲載仕様の単一ソース。
 *
 * ここの値は本体アプリ（travel-rate-camera-app）の実装を正とする：
 *   - 無料上限      : src/config/limits.ts の FREE_LIMITS（trips: 1 / saves: 10）
 *   - Free/Pro差分  : src/app/pro-features.tsx の ROWS（比較表）／src/app/pro.tsx（訴求文）
 *   - Product ID    : src/config/revenuecat.ts
 *   - 下タブ構成    : src/app/(tabs)/_layout.tsx
 *   - 通貨          : src/constants/currencies.ts
 *   - カテゴリー    : src/config/categories.ts
 *   - 価格          : Human確定値（月額¥500／年額¥4,000）
 *
 * ルール：
 *   1. **未実装の機能をここへ書かない。** 将来候補は FUTURE_CANDIDATES に隔離し、
 *      LP本文（Free/Proの表）からは参照しない
 *   2. 各セクションのコピーはこのファイルを読む。コンポーネント側に数値を直書きしない
 *   3. アプリ側の仕様が変わったら、まずここを直す
 *   4. `travel-rate-camera-app/ss_*.png`（2026-06・旧青テーマ・4タブ）と
 *      `design/*-v4.png`（¥480/¥3,800仮・高性能OCR等の将来候補を含む）は**古い**。
 *      価格・上限・機能の値をそれらから写さない
 */

/** 無料版の上限（アプリの FREE_LIMITS と一致させること） */
export const FREE_LIMITS = {
  /** 同時に管理できる旅行の件数（アーカイブすれば新規作成は可） */
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
  "通貨換算（換算タブ）",
  "翻訳",
  "音声入力（読み上げた言葉を文字に）",
  "読み上げ（翻訳文を音声で再生）",
  "商品写真を記録に添付",
  "買い物カレンダー",
  "期間ごとの合計・件数の分析",
  "カテゴリーを選んで保存",
  `1つの旅行につき${FREE_LIMITS.savesPerTrip}件まで保存`,
  `同時に管理できる旅行は${FREE_LIMITS.trips}件`,
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
 * 無料版とProの比較表。
 * 本体アプリ `src/app/pro-features.tsx` の ROWS と同じ切り分け・同じ順序を保つ。
 * 「カテゴリーの保存は無料でもできる／絞り込みと分析はPro」という区別を崩さない。
 */
export const COMPARE_ROWS: readonly {
  label: string;
  free: string;
  pro: string;
  /** 無料版でも使えて、Proで変わらない行（表の強調を抑える） */
  same?: boolean;
}[] = [
  { label: "カメラで円換算（OCR）", free: "○", pro: "○", same: true },
  { label: "翻訳・音声入力・読み上げ", free: "○", pro: "○", same: true },
  { label: "買い物カレンダー", free: "○", pro: "○", same: true },
  { label: "保存件数（1旅行につき）", free: `${FREE_LIMITS.savesPerTrip}件`, pro: "無制限" },
  { label: "同時に管理できる旅行", free: `${FREE_LIMITS.trips}件`, pro: "無制限" },
  { label: "カテゴリー保存", free: "○", pro: "○", same: true },
  { label: "カテゴリー絞り込み", free: "—", pro: "○" },
  { label: "カテゴリー分析", free: "—", pro: "○" },
  { label: "CSV書き出し", free: "—", pro: "○" },
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
export const CURRENCIES: readonly {
  code: string;
  label: string;
  symbol: string;
  flag: string;
}[] = [
  { code: "USD", label: "米ドル", symbol: "$", flag: "🇺🇸" },
  { code: "KRW", label: "韓国ウォン", symbol: "₩", flag: "🇰🇷" },
  { code: "TWD", label: "台湾ドル", symbol: "NT$", flag: "🇹🇼" },
  { code: "THB", label: "タイバーツ", symbol: "฿", flag: "🇹🇭" },
  { code: "EUR", label: "ユーロ", symbol: "€", flag: "🇪🇺" },
  { code: "GBP", label: "英ポンド", symbol: "£", flag: "🇬🇧" },
];

/** 国内モード。旅先通貨ではないので CURRENCIES には含めない（アプリ側も JPY は別扱い） */
export const DOMESTIC_CURRENCY = {
  code: "JPY",
  label: "円（国内）",
  symbol: "¥",
  flag: "🇯🇵",
} as const;

/** 買い物カテゴリー（アプリの src/config/categories.ts と一致させること・表示順もこの順） */
export const CATEGORIES: readonly string[] = [
  "食事",
  "お土産",
  "衣類",
  "交通",
  "娯楽",
  "その他",
];

/**
 * 下タブ構成（アプリの src/app/(tabs)/_layout.tsx と一致させること）。
 * 「翻訳」はApple Translation依存のためiOS限定だが、本アプリはiOS向けなので7本すべて出す。
 * 端末モックのタブバーはこの配列を正とする。
 */
export const TABS: readonly string[] = [
  "カメラ",
  "翻訳",
  "換算",
  "履歴",
  "カレンダー",
  "分析",
  "設定",
];
