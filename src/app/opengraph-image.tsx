import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/**
 * SNS・チャットで共有されたときに出るカード画像（1200×630）。
 *
 * ■ なぜコードで描くか
 * デザイン正本の画像素材をこのrepoに置いていないため、画像ファイルを用意できない。
 * `layout.tsx` は `summary_large_image` を宣言しているので、画像が無いと
 * 共有時に空欄のカードが出る。ブランド要素（ティール／黒面／アプリアイコン）だけで
 * 組めるので、ここでは next/og で描いている。
 * アイコンは public/brand/app-icon-512.png（docs/brand の採用referenceから切り出した正式アセット）を読み込む。
 *
 * ■ 使える文字の制約（重要）
 * next/og は必要なフォントを自動で解決するが、**通貨記号「₩」は字形が無く豆腐になる**
 * （ローカルビルドで確認済み）。この画像内では ₩ を使わず「ウォン」と書く。
 * ¥ と → は問題なく出る。文字を足すときはビルドして必ず目視すること。
 *
 * ■ 差し替え
 * Vault側のデザイン正本からOGP画像が用意できたら、このファイルを削除して
 * `src/app/opengraph-image.png` を置くだけでよい（Next.jsのファイル規約）。
 */
export const alt = "旅レートカメラ｜値札にかざすだけで日本円がわかる海外旅行アプリ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(join(process.cwd(), "public/brand/app-icon-512.png"), "base64");
  const iconSrc = `data:image/png;base64,${iconData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(150deg, #16211F 0%, #11201E 55%, #0C1716 100%)",
        }}
      >
        {/* ブランド */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og は <img> で画像を描く */}
          <img src={iconSrc} width={52} height={52} alt="" />
          <div style={{ color: "#fff", fontSize: 28, fontWeight: 700 }}>旅レートカメラ</div>
        </div>

        {/* 見出し */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#fff",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.03em",
            }}
          >
            値札にかざす。
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#7FD8CC" }}>日本円</span>
            <span style={{ color: "#fff" }}>が、すぐ出る。</span>
          </div>
        </div>

        {/* 換算の例と補足 */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ color: "#A9BAB5", fontSize: 34, fontWeight: 600 }}>42,900ウォン</div>
            <div style={{ color: "#0E9488", fontSize: 34, fontWeight: 700 }}>→</div>
            <div style={{ color: "#fff", fontSize: 46, fontWeight: 700, letterSpacing: "-0.03em" }}>
              ¥4,719
            </div>
          </div>
          <div style={{ color: "#8FA39E", fontSize: 22, fontWeight: 600 }}>
            海外旅行の買い物アプリ
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
