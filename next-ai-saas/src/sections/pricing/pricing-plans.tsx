import { PricingCard } from "@/components/marketing/pricing-card";
import { pricingTiers } from "@/data/pricing";

export function PricingPlans() {
  return (
    <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <PricingCard key={tier.id} tier={tier} />
      ))}
    </div>
  );
}
