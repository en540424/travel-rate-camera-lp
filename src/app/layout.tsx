import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "旅レートカメラ | 値札にかざすだけで日本円がわかる海外旅行アプリ",
  description:
    "海外旅行の買い物、もう暗算しない。値札にカメラをかざすだけでその場で日本円換算。買い物メモ・合計・予算管理まで、無料で使えます。",
  keywords: "海外旅行, 円換算, カメラ, 通貨換算, 旅行アプリ, 買い物, レート",
  openGraph: {
    title: "旅レートカメラ | 値札にかざすだけで日本円がわかる",
    description: "海外旅行の買い物、もう暗算しない。カメラで値札を読み取り日本円を即表示。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
