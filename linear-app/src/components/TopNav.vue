<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);

const links = [
  { label: "Product", href: "#product" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
  { label: "Now", href: "#now" },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 h-14 border-b border-hairline bg-canvas/90 backdrop-blur-md"
  >
    <div class="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 md:px-8">
      <a href="#" class="group flex items-center gap-2 text-sm font-medium text-ink">
        <span
          class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-surface-1 ring-1 ring-hairline"
          aria-hidden="true"
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
        <span class="tracking-tight">Linear</span>
      </a>

      <nav class="hidden items-center gap-8 md:flex" aria-label="Primary">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm text-ink-muted transition-colors hover:text-ink"
        >
          {{ l.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <a
          href="#"
          class="inline-flex min-h-10 items-center justify-center rounded-md border border-hairline bg-surface-1 px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-2"
        >
          Sign in
        </a>
        <a
          href="#"
          class="inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-on-primary transition-colors hover:bg-primary-hover"
        >
          Get started
        </a>
      </div>

      <button
        type="button"
        class="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md border border-hairline bg-surface-1 text-ink md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        @click="open = !open"
      >
        <span class="sr-only">Menu</span>
        <svg v-if="!open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 6l12 12M18 6L6 18" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div
      v-show="open"
      id="mobile-nav"
      class="border-b border-hairline bg-canvas px-4 py-4 md:hidden"
    >
      <nav class="flex flex-col gap-1" aria-label="Mobile primary">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="rounded-md px-3 py-3 text-sm text-ink-muted hover:bg-surface-1 hover:text-ink"
          @click="open = false"
        >
          {{ l.label }}
        </a>
        <div class="mt-3 flex flex-col gap-2 border-t border-hairline pt-3">
          <a
            href="#"
            class="inline-flex min-h-11 items-center justify-center rounded-md border border-hairline bg-surface-1 px-3.5 py-2 text-sm font-medium text-ink"
          >
            Sign in
          </a>
          <a
            href="#"
            class="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-on-primary"
          >
            Get started
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
