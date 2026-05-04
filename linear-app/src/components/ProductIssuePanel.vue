<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div
    class="panel-lift rounded-xl border border-hairline bg-surface-1 p-6 text-left ring-1 ring-white/[0.04]"
  >
    <div v-if="title || subtitle" class="mb-5 flex items-start justify-between gap-4">
      <div>
        <p v-if="title" class="text-xs font-medium uppercase tracking-[0.4px] text-ink-subtle">
          {{ title }}
        </p>
        <p v-if="subtitle" class="mt-1 text-sm text-ink-muted">{{ subtitle }}</p>
      </div>
      <span
        class="inline-flex items-center rounded-full bg-surface-2 px-2 py-0.5 text-[12px] text-ink-muted ring-1 ring-hairline"
      >
        In progress
      </span>
    </div>

    <div class="overflow-hidden rounded-lg border border-hairline bg-canvas">
      <div class="flex items-center gap-2 border-b border-hairline px-3 py-2">
        <span class="h-2 w-2 rounded-full bg-ink-tertiary/80" />
        <span class="h-2 w-2 rounded-full bg-ink-tertiary/60" />
        <span class="h-2 w-2 rounded-full bg-ink-tertiary/40" />
        <span class="ml-2 font-mono text-[11px] text-ink-tertiary">linear.app / engineering</span>
      </div>

      <div class="text-[13px]">
        <div
          class="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] gap-x-3 border-b border-hairline px-3 py-2 text-ink-subtle"
        >
          <span>Title</span>
          <span class="text-right">Status</span>
          <span class="hidden text-right sm:block">Owner</span>
          <span class="hidden text-right md:block">ID</span>
        </div>

        <div
          class="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-x-3 border-b border-hairline px-3 py-2.5"
        >
          <span class="truncate text-ink">Ship dark-mode polish for marketing</span>
          <span class="text-right">
            <span class="inline-flex rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-ink-muted">
              Active
            </span>
          </span>
          <span class="hidden text-right text-ink-subtle sm:block">AR</span>
          <span class="hidden text-right font-mono text-ink-tertiary md:block">ENG-2041</span>
        </div>

        <div
          class="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-x-3 border-b border-hairline px-3 py-2.5"
        >
          <span class="truncate text-ink">Improve issue peek performance</span>
          <span class="text-right">
            <span
              class="inline-flex rounded-full px-2 py-0.5 text-[11px] text-semantic-success ring-1 ring-semantic-success/30"
            >
              Done
            </span>
          </span>
          <span class="hidden text-right text-ink-subtle sm:block">MK</span>
          <span class="hidden text-right font-mono text-ink-tertiary md:block">ENG-1988</span>
        </div>

        <div
          class="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-x-3 border-b border-hairline px-3 py-2.5"
        >
          <span class="truncate text-ink-muted">Refine keyboard shortcuts panel</span>
          <span class="text-right">
            <span class="inline-flex rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-ink-muted">
              Backlog
            </span>
          </span>
          <span class="hidden text-right text-ink-subtle sm:block">JD</span>
          <span class="hidden text-right font-mono text-ink-tertiary md:block">ENG-2012</span>
        </div>

        <div
          class="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-x-3 px-3 py-2.5"
        >
          <span class="truncate text-ink">Design system tokens for surfaces</span>
          <span class="text-right">
            <span class="inline-flex rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-ink-muted">
              Triage
            </span>
          </span>
          <span class="hidden text-right text-ink-subtle sm:block">LS</span>
          <span class="hidden text-right font-mono text-ink-tertiary md:block">ENG-2090</span>
        </div>
      </div>
    </div>
  </div>
</template>
