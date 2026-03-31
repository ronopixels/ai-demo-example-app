import { FeatureCard } from "@/components/marketing/feature-card";
import { SectionHeading } from "@/components/common/section-heading";
import { demoFeatures } from "@/data/features";
import { cn } from "@/lib/cn";

export function FeaturesSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6", className)}>
      <SectionHeading
        eyebrow="Product"
        title="Everything you need to ship"
        subtitle="Composable blocks, data-driven pages, and a path to a real SaaS product."
        align="center"
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoFeatures.map((f) => (
          <FeatureCard
            key={f.id}
            title={f.title}
            description={f.description}
            icon={f.icon ? <span aria-hidden>{f.icon}</span> : undefined}
          />
        ))}
      </div>
    </section>
  );
}
