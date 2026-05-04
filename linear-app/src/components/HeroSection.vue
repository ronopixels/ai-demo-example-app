<script setup lang="ts">
import ProductIssuePanel from "./ProductIssuePanel.vue";
</script>

<template>
  <section class="border-b border-hairline/60 bg-canvas px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
    <div class="mx-auto max-w-[1280px]">
      <p
        class="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle"
      >
        Purpose-built for software teams
      </p>
      <h1
        class="mt-4 max-w-[920px] text-[clamp(2.25rem,4vw+1.25rem,5rem)] font-semibold leading-[1.05] tracking-[-0.12em] text-ink md:tracking-[-0.14em]"
      >
        Issue tracking you’ll enjoy using
      </h1>
      <p class="mt-6 max-w-[640px] text-lg leading-relaxed tracking-[-0.01em] text-ink-muted md:text-xl">
        Meet the system for modern software development. Streamline issues, projects, and product
        roadmaps — without the busywork.
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#"
          class="inline-flex min-h-11 items-center justify-center rounded-md bg-inverse-canvas px-3.5 py-2 text-sm font-medium text-inverse-ink transition-opacity hover:opacity-90"
        >
          Start building
        </a>
        <a
          href="#"
          class="inline-flex min-h-11 items-center justify-center rounded-md border border-hairline bg-surface-1 px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
        >
          View demo
        </a>
      </div>

      <div class="mt-14 md:mt-20">
        <ProductIssuePanel title="Product" subtitle="Engineering workspace — issues" />
      </div>
    </div>
  </section>
</template>
