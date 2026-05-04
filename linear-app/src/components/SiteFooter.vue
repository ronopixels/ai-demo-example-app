<script setup lang="ts">
const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog", "Documentation", "Download", "Switch"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Now", "README", "Quality", "Brand"],
  },
  {
    title: "Resources",
    links: ["Developers", "Status", "Startups", "Report vulnerability", "DPA", "Privacy", "Terms"],
  },
  {
    title: "Connect",
    links: ["Contact us", "X (Twitter)", "GitHub", "YouTube"],
  },
];
</script>

<template>
  <footer class="border-t border-hairline/60 bg-canvas px-4 py-16 text-[12px] text-ink-subtle md:px-8 md:py-20">
    <div class="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[200px_1fr]">
      <div>
        <a href="#" class="inline-flex items-center gap-2 text-sm font-medium text-ink">
          <span
            class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-surface-1 ring-1 ring-hairline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-primary">
              <path
                d="M4 18V6l8 8 8-8v12"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Linear
        </a>
        <p class="mt-4 leading-relaxed">
          Built for modern software teams.
          <span class="block text-ink-tertiary">Demo page — design tokens from DESIGN.md.</span>
        </p>
      </div>

      <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
        <div v-for="col in columns" :key="col.title">
          <p class="text-[11px] font-medium uppercase tracking-wide text-ink-muted">{{ col.title }}</p>
          <ul class="mt-3 space-y-2">
            <li v-for="link in col.links" :key="link">
              <a href="#" class="transition-colors hover:text-ink-muted">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
