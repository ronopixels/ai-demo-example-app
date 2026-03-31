import {
  homeV2Announcement,
  homeV2Cta,
  homeV2FeaturesHeading,
  homeV2Hero,
  homeV2Integrations,
  homeV2LogoStrip,
  homeV2Stats,
  homeV2TestimonialsHeading,
} from "@/data/home-v2";
import { AnnouncementBarSection } from "./announcement-bar-section";
import { CtaSection } from "./cta-section";
import { FaqSection } from "./faq-section";
import { FeaturesSection } from "./features-section";
import { IntegrationsSection } from "./integrations-section";
import { LogoStripSection } from "./logo-strip-section";
import { PricingSection } from "./pricing-section";
import { SplitHeroSection } from "./split-hero-section";
import { StatsStripSection } from "./stats-strip-section";
import { TestimonialsSection } from "./testimonials-section";

/**
 * Home v2 — alternate landing: split hero, stats strip, testimonials before features.
 */
export function HomeV2() {
  return (
    <>
      <AnnouncementBarSection
        message={homeV2Announcement.message}
        href={homeV2Announcement.href}
        linkLabel={homeV2Announcement.linkLabel}
      />
      <SplitHeroSection
        eyebrow={homeV2Hero.eyebrow}
        title={homeV2Hero.title}
        description={homeV2Hero.description}
      />
      <StatsStripSection stats={homeV2Stats} />
      <LogoStripSection eyebrow={homeV2LogoStrip.eyebrow} logos={homeV2LogoStrip.logos} />
      <TestimonialsSection
        eyebrow={homeV2TestimonialsHeading.eyebrow}
        title={homeV2TestimonialsHeading.title}
        subtitle={homeV2TestimonialsHeading.subtitle}
      />
      <FeaturesSection
        eyebrow={homeV2FeaturesHeading.eyebrow}
        title={homeV2FeaturesHeading.title}
        subtitle={homeV2FeaturesHeading.subtitle}
      />
      <IntegrationsSection
        eyebrow={homeV2Integrations.eyebrow}
        title={homeV2Integrations.title}
        description={homeV2Integrations.description}
        items={homeV2Integrations.items}
      />
      <PricingSection />
      <FaqSection />
      <CtaSection title={homeV2Cta.title} description={homeV2Cta.description} />
    </>
  );
}
