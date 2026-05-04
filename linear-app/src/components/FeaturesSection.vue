<script setup lang="ts">
import ProductIssuePanel from "./ProductIssuePanel.vue";

const cards = [
  {
    title: "Built for speed",
    body: "Keyboard-first workflows, instant search, and a UI that stays out of your way so your team can move faster.",
  },
  {
    title: "Crafted to every detail",
    body: "A dense, technical surface with quiet hierarchy — surfaces, hairlines, and typography tuned for long sessions.",
  },
  {
    title: "Designed for developers",
    body: "Git integrations, API access, and automation hooks that match how modern software teams actually ship.",
  },
];
</script>

<template>
  <section id="product" class="border-b border-hairline/60 bg-canvas px-4 py-20 md:px-8 md:py-24">
    <div class="mx-auto max-w-[1280px]">
      <div class="max-w-2xl">
        <p class="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">Product</p>
        <h2
          class="mt-3 text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-semibold leading-tight tracking-[-0.045em] text-ink"
        >
          Plan and build with clarity
        </h2>
        <p class="mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
          Linear is a purpose-built tool for planning and building products. Meet the system behind
          consistent, high-quality software delivery.
        </p>
      </div>

      <div class="mt-12 md:mt-16">
        <ProductIssuePanel title="Roadmap" subtitle="Initiatives spanning teams" />
      </div>

      <div class="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="c in cards"
          :key="c.title"
          class="panel-lift rounded-lg border border-hairline bg-surface-1 p-6 ring-1 ring-white/[0.03]"
        >
          <h3 class="text-[22px] font-medium leading-snug tracking-[-0.02em] text-ink">
            {{ c.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
            {{ c.body }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
