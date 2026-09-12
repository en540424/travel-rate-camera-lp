import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "旅レートカメラ | 値札にかざすだけで日本円がわかる海外旅行アプリ",
    template: "%s | 旅レートカメラ",
  },
  description:
    "海外旅行の買い物、もう暗算しない。値札にカメラをかざすだけで、その場で日本円の目安がわかります。翻訳・音声入力・読み上げ・買い物リスト・予算管理まで無料で使えます。",
  keywords: [
    "海外旅行",
    "円換算",
    "通貨換算",
    "カメラ",
    "OCR",
    "旅行アプリ",
    "買い物",
    "レート",
    "翻訳",
    "予算管理",
  ],
  openGraph: {
    title: "旅レートカメラ | 値札にかざすだけで日本円がわかる",
    description:
      "海外旅行の買い物、もう暗算しない。カメラで値札を読み取り、日本円の目安をその場で表示します。",
    type: "website",
    locale: "ja_JP",
    siteName: "旅レートカメラ",
  },
  twitter: {
    card: "summary_large_image",
    title: "旅レートカメラ | 値札にかざすだけで日本円がわかる",
    description:
      "海外旅行の買い物、もう暗算しない。カメラで値札を読み取り、日本円の目安をその場で表示します。",
  },
};

/** Next.js 14以降、themeColor等は metadata ではなく viewport から出す */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E9488",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full bg-white text-text">{children}</body>
    </html>
  );
}
