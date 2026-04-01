import { FixedBottomNav } from "@/components/FixedBottomNav";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageMarquee } from "@/components/sections/ImageMarquee";
import { PartnerCtaSection } from "@/components/sections/PartnerCtaSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { TestimonialQuoteSection } from "@/components/sections/TestimonialQuoteSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white pb-28">
      <main>
        <HeroSection />
        <ImageMarquee />
        <TestimonialQuoteSection />
        <PricingSection />
        <TestimonialCarousel />
        <ProjectsSection />
        <PartnerCtaSection />
        <FooterSection />
      </main>
      <FixedBottomNav />
    </div>
  );
}
