import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CustomerJourneySection from "@/components/CustomerJourneySection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <main className="font-inter">
      <Header />
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Fidelify - App de Fidelidade White-Label",
          "description": "Fidelify: Aplicativo de fidelidade personalizado para supermercados, farmácias e lojas",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "iOS, Android",
          "offers": {
            "@type": "Offer",
            "description": "Solução completa de fidelização de clientes com o Fidelify"
          }
        })}
      </script>

      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <HowItWorksSection />
      <CustomerJourneySection />
      <SocialProofSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
