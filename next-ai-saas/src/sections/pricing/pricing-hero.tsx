import { pricingPageCopy } from "@/data/pricing";

export function PricingHero() {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Pricing</p>
      <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {pricingPageCopy.title}
      </h1>
      <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        {pricingPageCopy.description}
      </p>
    </header>
  );
}
