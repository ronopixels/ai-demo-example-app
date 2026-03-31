import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { PricingHero } from "@/sections/pricing/pricing-hero";
import { PricingPlans } from "@/sections/pricing/pricing-plans";
import { routes } from "@/routes";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Plans for individuals and teams. Start free, upgrade when you need more AI credits and support.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 flex-col px-6 py-16 sm:py-24">
        <PricingHero />
        <PricingPlans />
        <p className="mx-auto mt-16 max-w-xl text-center text-sm text-zinc-500 dark:text-zinc-400">
          Demo data in{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
            src/data/pricing.ts
          </code>
          . Questions?{" "}
          <Link
            href={routes.marketing.contact}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            Contact
          </Link>{" "}
          or return{" "}
          <Link
            href={routes.home}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            home
          </Link>
          .
        </p>
        <p className="sr-only">{siteConfig.name} pricing overview</p>
      </main>
    </div>
  );
}
