import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { PricingTier } from "@/data/pricing";
import { cn } from "@/lib/cn";

function formatUsd(n: number) {
  if (n === 0) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function PriceBlock({ tier }: { tier: PricingTier }) {
  const monthly = formatUsd(tier.priceMonthly);
  const yearly =
    tier.priceYearly != null && tier.priceYearly !== tier.priceMonthly
      ? formatUsd(tier.priceYearly)
      : null;

  return (
    <div className="mt-4">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {monthly}
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">/month</span>
      </div>
      {yearly ? (
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {yearly}/month billed yearly (save vs monthly)
        </p>
      ) : null}
    </div>
  );
}

export type PricingCardProps = {
  tier: PricingTier;
  popularLabel?: string;
  className?: string;
};

export function PricingCard({ tier, popularLabel = "Most popular", className }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col",
        tier.highlight &&
          "border-violet-500/50 ring-1 ring-violet-500/30 dark:border-violet-400/40 dark:ring-violet-400/20",
        className
      )}
    >
      {tier.highlight ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-3 py-0.5 text-xs font-medium text-white dark:bg-violet-500">
          {popularLabel}
        </span>
      ) : null}
      <CardHeader>
        <CardTitle>{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
        <PriceBlock tier={tier} />
      </CardHeader>
      <CardContent className="mt-auto flex flex-1 flex-col gap-6">
        <ul className="flex flex-1 flex-col gap-3 text-sm text-zinc-700 dark:text-zinc-300">
          {tier.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-0.5 text-emerald-600 dark:text-emerald-400" aria-hidden>
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button
          href={tier.ctaHref}
          variant={tier.highlight ? "default" : "outline"}
          className="w-full"
        >
          {tier.ctaLabel}
        </Button>
      </CardContent>
    </Card>
  );
}
