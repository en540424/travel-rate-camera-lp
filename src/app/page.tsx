import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FeatureSection from "@/components/landing/FeatureSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PricingSection from "@/components/landing/PricingSection";
import UseCaseSection from "@/components/landing/UseCaseSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <ProblemSection />
        <SolutionSection />
        <div id="features">
          <FeatureSection />
        </div>
        <div id="howto">
          <HowItWorksSection />
        </div>
        <PricingSection />
        <UseCaseSection />
        <div id="faq">
          <FAQSection />
        </div>
        <div id="cta">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
