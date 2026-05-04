<script setup lang="ts">
import TopNav from "./components/TopNav.vue";
import HeroSection from "./components/HeroSection.vue";
import LogoMarquee from "./components/LogoMarquee.vue";
import ResourcesBand from "./components/ResourcesBand.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import PricingSection from "./components/PricingSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import NowSection from "./components/NowSection.vue";
import CtaBanner from "./components/CtaBanner.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div class="min-h-dvh bg-canvas">
    <TopNav />
    <main>
      <HeroSection />
      <LogoMarquee />
      <ResourcesBand />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <NowSection />
      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
</template>
