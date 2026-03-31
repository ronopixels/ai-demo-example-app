import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import { featuresPageMeta, marketingPageFeatures } from "@/data/features";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: featuresPageMeta.title,
  description: featuresPageMeta.description,
  openGraph: {
    title: `${featuresPageMeta.title} · ${siteConfig.name}`,
    description: featuresPageMeta.description,
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: featuresPageMeta.title }]}
        />
        <PageHero
          title="Features that ship with the template"
          description="Composable marketing sections, auth shells, dashboard widgets, and data-driven content — ready to customize for your AI SaaS."
          size="lg"
        >
          <Button href={routes.auth.signUp}>Get started</Button>
          <Button href={routes.marketing.pricing} variant="outline">
            Pricing
          </Button>
        </PageHero>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {marketingPageFeatures.map((f) => (
            <FeatureCard
              key={f.id}
              title={f.title}
              description={f.description}
              icon={f.icon ? <span aria-hidden>{f.icon}</span> : undefined}
            />
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Feature list in{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">src/data/features.ts</code>
          .{" "}
          <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Home
          </Link>
        </p>
      </main>
    </div>
  );
}
