import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import FeatureSection from "@/components/landing/FeatureSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import ProblemSection from "@/components/landing/ProblemSection";
import ScreensSection from "@/components/landing/ScreensSection";
import UseCaseSection from "@/components/landing/UseCaseSection";

/**
 * トップページ。
 *
 * セクションの並びは「5秒で価値が伝わる → スクロールしたくなる → 納得して選べる」順。
 * 地色を 暗 → 砂 → 白 → 暗 → 淡ティール → グレー → 白 → 砂 → ティール → 暗 と入れ替えて、
 * 白カードが延々と続く単調さを避けている（各セクションのコメント参照）。
 * 見た目は Design V2（2026-09・claude.ai/design「ランディングページのデザイン刷新」）を移植したもの。
 * 文言・料金・Free/Pro仕様は appSpec.ts と各コンポーネントの既存内容を正とし、Design側から写していない。
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ScreensSection />
        <FeatureSection />
        <UseCaseSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
