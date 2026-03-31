import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { ContactForm } from "@/components/marketing/contact-form";
import { contactHero, contactPageMeta } from "@/data/contact-page";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: contactPageMeta.title,
  description: contactPageMeta.description,
  openGraph: {
    title: `${contactPageMeta.title} · ${siteConfig.name}`,
    description: contactPageMeta.description,
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: contactPageMeta.title }]}
        />
        <PageHero title={contactHero.title} description={contactHero.description} size="lg" />
        <ContactForm className="mt-12" />
        <p className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Back home
          </Link>
        </p>
      </main>
    </div>
  );
}
