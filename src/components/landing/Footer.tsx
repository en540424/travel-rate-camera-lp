import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* ブランド */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📸</span>
              <span className="text-white font-black text-lg">旅レートカメラ</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              海外旅行の買い物を、もっとスマートに。
              値札にかざすだけで日本円がわかる、
              旅行者向けカメラ円換算アプリ。
            </p>
          </div>

          {/* リンク群（将来用） */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-white text-sm font-bold mb-3">アプリ</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-600 cursor-not-allowed">App Store（準備中）</span>
                </li>
                {/* 初回公開はiPhone向けのため、Google Play行は非表示（将来Android対応時に復活） */}
                {/* <li>
                  <span className="text-gray-600 cursor-not-allowed">Google Play（準備中）</span>
                </li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-bold mb-3">情報</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="/licenses" className="hover:text-white transition-colors">
                    ライセンス
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              © {currentYear} 旅レートカメラ. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-xs">現在、アプリ公開準備中です</span>
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
