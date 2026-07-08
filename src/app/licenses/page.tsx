import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "ライセンス | 旅レートカメラ",
  description: "旅レートカメラ公式サイトが使用しているオープンソースソフトウェアの一覧です。",
};

interface LibraryInfo {
  name: string;
  purpose: string;
  license: string;
  note?: string;
}

// package.json（このLPリポジトリ）の dependencies / devDependencies に記載された
// 直接依存ライブラリのみを対象とする。各ライブラリの license フィールドは
// node_modules 配下の package.json をローカルで確認して転記したもの（2026-07-07時点）。
const libraries: LibraryInfo[] = [
  { name: "Next.js", purpose: "Webサイトのフレームワーク", license: "MIT" },
  { name: "React", purpose: "UIライブラリ", license: "MIT" },
  { name: "React DOM", purpose: "UIライブラリ（DOM描画）", license: "MIT" },
  { name: "Tailwind CSS", purpose: "CSSフレームワーク", license: "MIT" },
  { name: "TypeScript", purpose: "開発言語", license: "Apache-2.0", note: "開発時のみ使用" },
  { name: "ESLint", purpose: "コード検証ツール", license: "MIT", note: "開発時のみ使用" },
];

export default function LicensesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            ライセンス
          </h1>
          <p className="text-gray-500 mb-10">
            このサイト（旅レートカメラ 公式サイト）は、以下のオープンソースソフトウェアを使用しています。
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-bold">ライブラリ</th>
                  <th className="px-4 py-3 font-bold">用途</th>
                  <th className="px-4 py-3 font-bold">ライセンス</th>
                  <th className="px-4 py-3 font-bold">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {libraries.map((lib) => (
                  <tr key={lib.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{lib.name}</td>
                    <td className="px-4 py-3 text-gray-600">{lib.purpose}</td>
                    <td className="px-4 py-3 text-gray-600">{lib.license}</td>
                    <td className="px-4 py-3 text-gray-400">{lib.note ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-400 text-xs mt-6 leading-relaxed">
            上記は本サイトが直接利用しているライブラリの一覧であり、各ライブラリが内部で利用する依存ライブラリまでは網羅していません。ライセンス表記の詳細は、各ライブラリの配布元をご確認ください。
          </p>

          <div className="mt-16">
            <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
