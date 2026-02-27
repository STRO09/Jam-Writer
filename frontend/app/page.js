import SiteHeader from "@/components/marketing/site-header";
import HeroSection from "@/components/marketing/hero-section";
import HowItWorks from "@/components/marketing/how-it-works";
import FeaturesSection from "@/components/marketing/features-section";
import CTASection from "@/components/marketing/cta-section";
import SiteFooter from "@/components/marketing/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
