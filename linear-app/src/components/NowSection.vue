<script setup lang="ts">
const rows = [
  { version: "2.24", date: "Apr 12, 2026", title: "Faster search across workspaces" },
  { version: "2.23", date: "Mar 28, 2026", title: "Improved inbox triage and shortcuts" },
  { version: "2.22", date: "Mar 02, 2026", title: "Initiatives timeline refinements" },
];
</script>

<template>
  <section id="now" class="border-b border-hairline/60 bg-canvas px-4 py-20 md:px-8 md:py-24">
    <div class="mx-auto max-w-[1280px]">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p class="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">Changelog</p>
          <h2
            class="mt-3 text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-semibold leading-tight tracking-[-0.045em] text-ink"
          >
            What’s new in Linear
          </h2>
          <p class="mt-3 max-w-xl text-base text-ink-muted">
            New updates and improvements to Linear — shipped quietly, continuously.
          </p>
        </div>
        <a href="#" class="text-sm font-medium text-primary hover:text-primary-hover">
          View full changelog →
        </a>
      </div>

      <ul class="mt-10 divide-y divide-hairline">
        <li
          v-for="r in rows"
          :key="r.version"
          class="flex flex-col gap-1 py-6 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <div class="flex flex-wrap items-baseline gap-3">
            <span class="font-mono text-[13px] text-ink-tertiary">{{ r.version }}</span>
            <span class="text-base text-ink">{{ r.title }}</span>
          </div>
          <time class="text-sm text-ink-subtle" :datetime="r.date">{{ r.date }}</time>
        </li>
      </ul>
    </div>
  </section>
</template>
