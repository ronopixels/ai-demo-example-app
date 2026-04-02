import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/sections/CtaFooter";
import { FeaturesChess } from "@/components/sections/FeaturesChess";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PartnersBar } from "@/components/sections/PartnersBar";
import { StatsSection } from "@/components/sections/StatsSection";
import { Testimonials } from "@/components/sections/Testimonials";

export default function App() {
  return (
    <div className="overflow-visible bg-black">
      <Navbar />
      <main>
        <Hero />
        <PartnersBar />
        <HowItWorks />
        <FeaturesChess />
        <FeaturesGrid />
        <StatsSection />
        <Testimonials />
        <CtaFooter />
      </main>
    </div>
  );
}
