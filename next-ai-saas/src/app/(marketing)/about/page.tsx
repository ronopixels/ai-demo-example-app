import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { SectionHeading } from "@/components/common/section-heading";
import { aboutHero, aboutPageMeta, aboutValues } from "@/data/about";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: aboutPageMeta.title,
  description: aboutPageMeta.description,
  openGraph: {
    title: `${aboutPageMeta.title} · ${siteConfig.name}`,
    description: aboutPageMeta.description,
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: aboutPageMeta.title }]}
        />
        <PageHero title={aboutHero.title} description={aboutHero.description} size="lg" />
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-pretty text-zinc-600 dark:text-zinc-400">
            {siteConfig.name} is a Next.js template for AI SaaS marketing sites, authentication flows, and
            logged-in dashboards. It is not a hosted product — replace branding and connect your stack when
            you launch.
          </p>
        </div>
        <section className="mt-20">
          <SectionHeading
            eyebrow="Values"
            title="What we optimize for"
            subtitle="Principles reflected in file structure, data modules, and UI polish."
            align="center"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {aboutValues.map((v) => (
              <li
                key={v.id}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <Button href={routes.marketing.contact}>Contact</Button>
          <Button href={routes.marketing.pricing} variant="outline">
            View pricing
          </Button>
        </div>
        <p className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Edit copy in{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">src/data/about.ts</code>
          .{" "}
          <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Back home
          </Link>
        </p>
      </main>
    </div>
  );
}
