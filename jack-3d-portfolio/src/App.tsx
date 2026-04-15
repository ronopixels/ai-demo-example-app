import { HeroSection } from "@/sections/HeroSection";
import { MarqueeSection } from "@/sections/MarqueeSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-sans text-[#D7E2EA]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <main id="main">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <section
          id="contact"
          className="flex items-center justify-center gap-2 bg-[#0C0C0C] py-16 text-sm text-[#D7E2EA]/50"
          aria-label="Contact"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          <span>Jack — 3D Creator</span>
        </section>
      </main>
    </div>
  );
}
