<script setup lang="ts">
import { ref } from "vue";

const cycle = ref<"monthly" | "annual">("monthly");

const tiers = [
  {
    name: "Free",
    desc: "For small teams getting started.",
    priceMonthly: "$0",
    priceAnnual: "$0",
    featured: false,
    features: ["Unlimited members", "250 issues", "Import & export", "Slack & GitHub"],
  },
  {
    name: "Business",
    desc: "For growing teams shipping weekly.",
    priceMonthly: "$10",
    priceAnnual: "$8",
    featured: true,
    features: ["Everything in Free", "Unlimited issues", "Private teams", "Admin roles", "SSO (SAML)"],
  },
  {
    name: "Enterprise",
    desc: "For organizations at scale.",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    featured: false,
    features: ["Dedicated support", "Audit logs", "SCIM", "Advanced security", "Uptime SLA"],
  },
];

const price = (tier: (typeof tiers)[number]) =>
  tier.priceMonthly === "Custom"
    ? "Custom"
    : cycle.value === "monthly"
      ? `${tier.priceMonthly}/mo`
      : `${tier.priceAnnual}/mo`;
</script>

<template>
  <section id="pricing" class="border-b border-hairline/60 bg-canvas px-4 py-20 md:px-8 md:py-24">
    <div class="mx-auto max-w-[1280px]">
      <div class="flex max-w-2xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-[13px] font-medium uppercase tracking-[0.4px] text-ink-subtle">Pricing</p>
          <h2
            class="mt-3 text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-semibold leading-tight tracking-[-0.045em] text-ink"
          >
            Simple, transparent pricing
          </h2>
          <p class="mt-3 text-base text-ink-muted md:text-lg">
            Choose the plan that fits your team. Upgrade or downgrade anytime.
          </p>
        </div>

        <div
          class="inline-flex min-h-11 w-fit rounded-full bg-canvas p-1 ring-1 ring-hairline"
          role="tablist"
          aria-label="Billing cycle"
        >
          <button
            type="button"
            role="tab"
            :aria-selected="cycle === 'monthly'"
            class="min-h-9 min-w-[88px] rounded-full px-3.5 text-sm font-medium transition-colors"
            :class="
              cycle === 'monthly'
                ? 'bg-surface-2 text-ink'
                : 'text-ink-subtle hover:text-ink-muted'
            "
            @click="cycle = 'monthly'"
          >
            Monthly
          </button>
          <button
            type="button"
            role="tab"
            :aria-selected="cycle === 'annual'"
            class="min-h-9 min-w-[88px] rounded-full px-3.5 text-sm font-medium transition-colors"
            :class="
              cycle === 'annual'
                ? 'bg-surface-2 text-ink'
                : 'text-ink-subtle hover:text-ink-muted'
            "
            @click="cycle = 'annual'"
          >
            Annual
          </button>
        </div>
      </div>

      <div class="mt-12 grid gap-4 lg:grid-cols-3">
        <article
          v-for="t in tiers"
          :key="t.name"
          class="panel-lift flex flex-col rounded-lg border p-6 ring-1 ring-white/[0.03]"
          :class="
            t.featured
              ? 'border-hairline-strong bg-surface-2'
              : 'border-hairline bg-surface-1'
          "
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="text-xl font-semibold tracking-[-0.02em] text-ink">{{ t.name }}</h3>
              <p class="mt-1 text-sm text-ink-muted">{{ t.desc }}</p>
            </div>
            <span
              v-if="t.featured"
              class="rounded-full bg-surface-3 px-2 py-0.5 text-[11px] text-ink-muted ring-1 ring-hairline"
            >
              Popular
            </span>
          </div>

          <p class="mt-6 text-3xl font-semibold tracking-tight text-ink">
            {{ price(t) }}
            <span
              v-if="t.priceMonthly !== 'Custom'"
              class="text-base font-normal text-ink-subtle"
            >
              per user
            </span>
          </p>

          <a
            href="#"
            class="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md text-sm font-medium transition-colors"
            :class="
              t.featured
                ? 'bg-primary text-on-primary hover:bg-primary-hover'
                : 'border border-hairline bg-surface-1 text-ink hover:bg-surface-2'
            "
          >
            {{ t.name === "Enterprise" ? "Contact sales" : "Get started" }}
          </a>

          <ul class="mt-6 space-y-2 text-sm text-ink-muted">
            <li v-for="f in t.features" :key="f" class="flex gap-2">
              <span class="mt-0.5 text-primary" aria-hidden="true">✓</span>
              <span>{{ f }}</span>
            </li>
          </ul>
        </article>
      </div>

      <p class="mt-8 text-center text-[12px] text-ink-subtle">
        Prices shown are illustrative for this demo marketing page.
      </p>
    </div>
  </section>
</template>
