import {
  homeV1Analytics,
  homeV1Announcement,
  homeV1Cta,
  homeV1Hero,
  homeV1Integrations,
  homeV1LogoStrip,
  homeV1ProductPreview,
} from "@/data/home-v1";
import { FadeInView } from "@/components/motion/fade-in-view";
import { AnalyticsPreviewSection } from "./analytics-preview-section";
import { AnnouncementBarSection } from "./announcement-bar-section";
import { CtaSection } from "./cta-section";
import { FaqSection } from "./faq-section";
import { FeaturesSection } from "./features-section";
import { HeroSection } from "./hero-section";
import { IntegrationsSection } from "./integrations-section";
import { LogoStripSection } from "./logo-strip-section";
import { PricingSection } from "./pricing-section";
import { ProductPreviewSection } from "./product-preview-section";
import { TestimonialsSection } from "./testimonials-section";

/**
 * Home v1 — full marketing homepage (section order matches `demos.ts` → `home-v1`).
 */
export function HomeV1() {
  return (
    <>
      <FadeInView className="w-full" staggerIndex={0}>
        <AnnouncementBarSection
          message={homeV1Announcement.message}
          href={homeV1Announcement.href}
          linkLabel={homeV1Announcement.linkLabel}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={1}>
        <HeroSection
          title={homeV1Hero.title}
          description={homeV1Hero.description}
          className="px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-12"
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={2}>
        <LogoStripSection eyebrow={homeV1LogoStrip.eyebrow} logos={homeV1LogoStrip.logos} />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={3}>
        <FeaturesSection />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={4}>
        <ProductPreviewSection
          eyebrow={homeV1ProductPreview.eyebrow}
          title={homeV1ProductPreview.title}
          description={homeV1ProductPreview.description}
          bullets={homeV1ProductPreview.bullets}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={5}>
        <IntegrationsSection
          eyebrow={homeV1Integrations.eyebrow}
          title={homeV1Integrations.title}
          description={homeV1Integrations.description}
          items={homeV1Integrations.items}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={6}>
        <AnalyticsPreviewSection
          eyebrow={homeV1Analytics.eyebrow}
          title={homeV1Analytics.title}
          description={homeV1Analytics.description}
          metrics={homeV1Analytics.metrics}
        />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={7}>
        <TestimonialsSection />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={8}>
        <PricingSection />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={9}>
        <FaqSection />
      </FadeInView>
      <FadeInView className="w-full" staggerIndex={10}>
        <CtaSection title={homeV1Cta.title} description={homeV1Cta.description} />
      </FadeInView>
    </>
  );
}
