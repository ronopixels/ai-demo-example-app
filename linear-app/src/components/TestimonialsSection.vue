<script setup lang="ts">
const quotes = [
  {
    quote:
      "Linear is the toolchain we reach for first. It’s fast, opinionated in the right ways, and feels like it was built by people who ship software every day.",
    name: "Alex Rivera",
    role: "VP Engineering, Northwind",
  },
  {
    quote:
      "Our team moved from scattered docs and ad-hoc trackers to one system. The density and keyboard flows are a genuine step-change.",
    name: "Sam Okonkwo",
    role: "Head of Product, Lumen Labs",
  },
  {
    quote:
      "We needed something that could scale with dozens of teams without turning into configuration soup. Linear stayed crisp as we grew.",
    name: "Jordan Lee",
    role: "CTO, Harbor Systems",
  },
];
</script>

<template>
  <section id="customers" class="border-b border-hairline/60 bg-canvas px-4 py-20 md:px-8 md:py-24">
    <div class="mx-auto max-w-[1280px]">
      <p class="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">Customers</p>
      <h2
        class="mt-3 max-w-2xl text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-semibold leading-tight tracking-[-0.045em] text-ink"
      >
        Trusted by teams who care about craft
      </h2>

      <div class="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <figure
          v-for="q in quotes"
          :key="q.name"
          class="panel-lift rounded-lg border border-hairline bg-surface-1 p-8 ring-1 ring-white/[0.03]"
        >
          <blockquote class="text-lg leading-relaxed text-ink md:text-xl">
            “{{ q.quote }}”
          </blockquote>
          <figcaption class="mt-8 flex items-center gap-3">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-sm font-medium text-ink-muted ring-1 ring-hairline"
            >
              {{ q.name
                .split(" ")
                .map((p) => p[0])
                .join("") }}
            </span>
            <div>
              <p class="text-sm font-medium text-ink">{{ q.name }}</p>
              <p class="text-[12px] text-ink-subtle">{{ q.role }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
