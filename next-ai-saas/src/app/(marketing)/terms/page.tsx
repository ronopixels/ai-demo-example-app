import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { termsPageMeta, termsSections } from "@/data/legal";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: termsPageMeta.title,
  description: termsPageMeta.description,
  openGraph: {
    title: `${termsPageMeta.title} · ${siteConfig.name}`,
    description: termsPageMeta.description,
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: termsPageMeta.title }]}
        />
        <PageHero
          title="Terms of service"
          description="Placeholder legal copy for the Nexsas demo. Replace before production."
        />
        <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
          Not legal advice. Have counsel review your terms for your jurisdiction and product.
        </p>
        <div className="mt-12 space-y-10">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href={routes.marketing.privacy} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Privacy policy
          </Link>
          {" · "}
          <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Home
          </Link>
        </p>
      </main>
    </div>
  );
}
