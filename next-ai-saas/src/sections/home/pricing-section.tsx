import { PricingCard } from "@/components/marketing/pricing-card";
import { SectionHeading } from "@/components/common/section-heading";
import { pricingPageCopy, pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/cn";

export function PricingSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6", className)}>
      <SectionHeading
        eyebrow="Pricing"
        title={pricingPageCopy.title}
        subtitle={pricingPageCopy.description}
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} />
        ))}
      </div>
    </section>
  );
}
