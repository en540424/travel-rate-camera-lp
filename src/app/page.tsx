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
 * 地色を 暗 → 温 → 白 → 暗 → 淡ティール → グレー → 白 → 温 → 暗 と入れ替えて、
 * 白カードが延々と続く単調さを避けている（各セクションのコメント参照）。
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
