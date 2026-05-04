<script setup lang="ts">
const logos = [
  "Vercel",
  "Cash App",
  "Retool",
  "OpenAI",
  "Ramp",
  "Scale",
  "Descript",
  "Mercury",
];
</script>

<template>
  <section class="border-b border-hairline/60 bg-canvas px-4 py-12 md:px-8 md:py-16">
    <div class="mx-auto max-w-[1280px]">
      <p class="text-center text-[12px] text-ink-subtle">
        Powering the world’s best product teams.
        <span class="text-ink-muted">From next-gen startups to established enterprises.</span>
      </p>
      <div
        class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6"
      >
        <div
          v-for="name in logos"
          :key="name"
          class="flex items-center justify-center rounded-xs bg-canvas px-4 py-4 text-center text-[12px] text-ink-subtle ring-1 ring-hairline/80"
        >
          {{ name }}
        </div>
      </div>
    </div>
  </section>
</template>
