/**
 * 端末モック全画面で共有するデモデータ。
 *
 * ■ なぜ1ファイルに集めるか
 * 以前、モック2画面の「残り予算」がずれる不整合が起きた（commit 1c5809c）。
 * 画面ごとに数字を直書きすると必ず再発するので、**モックの数字はここだけで持つ**。
 *
 * ■ 計算が合っていること
 *   残り予算 = 予算 − 購入済み合計（候補は差し引かない ＝ アプリの集計と同じ）
 *   合計値は下の ITEMS から計算しているので、記録を足し引きしても画面間でずれない
 *   円換算 = 外貨額 × レート（保存時レート固定・アプリの handleSaveCandidate と同じ考え方）
 *   42,900 × 0.11 = 4,719
 *
 * ■ 掲載してよい値かどうか
 * ここはあくまで**表示例**であり、料金・上限などの仕様値ではない。
 * 仕様値（価格・FREE_LIMITS・Free/Pro差分）は `@/lib/appSpec` を使う。
 */

/** デモの旅行。通貨・レート表記はアプリの formatRate と同形 */
export const TRIP = {
  name: "ソウル旅行",
  flag: "🇰🇷",
  currency: "KRW",
  symbol: "₩",
  /** 1 KRW あたりの円（手入力レート） */
  rate: 0.11,
  /** formatRate(0.11, 'KRW') と同じ文字列 */
  rateLabel: "1 KRW = ¥0.11",
  budgetJpy: 30000,
} as const;

export type DemoItem = {
  /** メモ（アプリは memo をリストのタイトルに使う。無ければ「（メモなし）」） */
  memo: string;
  foreign: string;
  jpy: string;
  jpyNumber: number;
  category: string;
  purchased: boolean;
  /** 記録の日（カレンダー用・当月の日） */
  day: number;
};

/** 保存済みの記録。表示順はアプリの履歴（新しい順）に合わせる */
export const ITEMS: readonly DemoItem[] = [
  {
    memo: "HERA BLACK CUSHION",
    foreign: "₩42,900",
    jpy: "¥4,719",
    jpyNumber: 4719,
    category: "その他",
    purchased: false,
    day: 14,
  },
  {
    memo: "スニーカー",
    foreign: "₩89,000",
    jpy: "¥9,790",
    jpyNumber: 9790,
    category: "衣類",
    purchased: true,
    day: 13,
  },
  {
    memo: "お土産のお菓子",
    foreign: "₩12,000",
    jpy: "¥1,320",
    jpyNumber: 1320,
    category: "お土産",
    purchased: true,
    day: 12,
  },
  {
    memo: "参鶏湯（ランチ）",
    foreign: "₩15,000",
    jpy: "¥1,650",
    jpyNumber: 1650,
    category: "食事",
    purchased: true,
    day: 12,
  },
];

const sum = (predicate: (item: DemoItem) => boolean) =>
  ITEMS.filter(predicate).reduce((total, item) => total + item.jpyNumber, 0);

const purchasedTotal = sum((i) => i.purchased);
const candidateTotal = sum((i) => !i.purchased);

const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

/** 集計値。画面側で足し算せず、必ずここを読む */
export const TOTALS = {
  purchasedJpy: yen(purchasedTotal),
  candidateJpy: yen(candidateTotal),
  /** 残り予算 = 予算 − 購入済み合計 */
  remainingJpy: yen(TRIP.budgetJpy - purchasedTotal),
  budgetJpy: yen(TRIP.budgetJpy),
  savedCount: ITEMS.length,
  purchasedCount: ITEMS.filter((i) => i.purchased).length,
  candidateCount: ITEMS.filter((i) => !i.purchased).length,
} as const;

/**
 * カテゴリー別分析（Pro）。アプリの集計は**購入済みのみ**が対象。
 * 構成比は購入済み合計に対する割合。
 */
export const CATEGORY_ANALYSIS = ITEMS.filter((i) => i.purchased)
  .map((item) => ({
    label: item.category,
    total: item.jpy,
    count: 1,
    share: Math.round((item.jpyNumber / purchasedTotal) * 100),
  }))
  .sort((a, b) => b.share - a.share);

/**
 * いまOCRで読み取って保存しようとしている1件 ＝ ITEMS の先頭（候補として保存前）。
 * OCR結果画面・カメラ画面・機能紹介の換算例は、すべてここを見る。
 * **画面側で金額を直書きしない**（1c5809cのずれを繰り返さないため）。
 */
export const OCR_SUBJECT = ITEMS[0];

/** 金額入力欄の表示。アプリは通貨記号を数値と別に描くので、記号を外した桁だけ渡す */
export const OCR_SUBJECT_DIGITS = OCR_SUBJECT.foreign.replace(TRIP.symbol, "");

/** OCRで読み取れた価格候補（先頭が選択中）。値札に複数の数字が写った状態 */
export const PRICE_CANDIDATES = [OCR_SUBJECT.foreign, "₩38,000"] as const;

/** OCRで読み取れたメモ候補。1件目は実際にメモへ入れた文言 */
export const MEMO_CANDIDATES = [{ text: OCR_SUBJECT.memo, added: false }] as const;

/** 翻訳画面のデモ会話 */
export const TRANSLATION_DEMO = {
  sourceLabel: "日本語",
  targetLabel: "韓国語",
  source: "これのいちばん小さいサイズはありますか？",
  target: "이것의 가장 작은 사이즈가 있나요?",
} as const;
