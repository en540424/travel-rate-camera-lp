import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeatureSection from "@/components/landing/FeatureSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
// PricingSection: 初回無料MVPでは非表示（Pro/課金は未実装のため露出しない）。ファイルは将来用に温存。
import UseCaseSection from "@/components/landing/UseCaseSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="problem">
        <ProblemSection />
      </div>

      <div id="solution">
        <SolutionSection />
      </div>

      <div id="features">
        <FeatureSection />
      </div>

      <div id="howto">
        <HowItWorksSection />
      </div>

      <div id="usecase">
        <UseCaseSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="cta">
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
