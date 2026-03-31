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
import { FadeInView } from "@/components/motion/fade-in-view";
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
      <FadeInView className="w-full" staggerIndex={0}>
        <AnnouncementBarSection
          message={homeV2Announcement.message}
          href={homeV2Announcement.href}
          linkLabel={homeV2Announcement.linkLabel}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={1}>
        <SplitHeroSection
          eyebrow={homeV2Hero.eyebrow}
          title={homeV2Hero.title}
          description={homeV2Hero.description}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={2}>
        <StatsStripSection stats={homeV2Stats} />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={3}>
        <LogoStripSection eyebrow={homeV2LogoStrip.eyebrow} logos={homeV2LogoStrip.logos} />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={4}>
        <TestimonialsSection
          eyebrow={homeV2TestimonialsHeading.eyebrow}
          title={homeV2TestimonialsHeading.title}
          subtitle={homeV2TestimonialsHeading.subtitle}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={5}>
        <FeaturesSection
          eyebrow={homeV2FeaturesHeading.eyebrow}
          title={homeV2FeaturesHeading.title}
          subtitle={homeV2FeaturesHeading.subtitle}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={6}>
        <IntegrationsSection
          eyebrow={homeV2Integrations.eyebrow}
          title={homeV2Integrations.title}
          description={homeV2Integrations.description}
          items={homeV2Integrations.items}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={7}>
        <PricingSection />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={8}>
        <FaqSection />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={9}>
        <CtaSection title={homeV2Cta.title} description={homeV2Cta.description} />
      </FadeInView>
    </>
  );
}
