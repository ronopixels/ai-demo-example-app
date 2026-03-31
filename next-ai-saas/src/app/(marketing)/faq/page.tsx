import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { demoFaqItems } from "@/data/faq";
import { faqPageMeta } from "@/data/faq-page";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: faqPageMeta.title,
  description: faqPageMeta.description,
  openGraph: {
    title: `${faqPageMeta.title} · ${siteConfig.name}`,
    description: faqPageMeta.description,
  },
};

export default function FaqPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: faqPageMeta.title }]}
        />
        <PageHero
          title="Frequently asked questions"
          description="Quick answers about the template. Extend src/data/faq.ts for your product."
          size="lg"
        />
        <Accordion className="mt-12 rounded-2xl border border-zinc-200 bg-white px-2 dark:border-zinc-800 dark:bg-zinc-950">
          {demoFaqItems.map((item, index) => (
            <AccordionItem key={item.id} defaultOpen={index === 0}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
          More questions?{" "}
          <Link
            href={routes.marketing.contact}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            Contact
          </Link>{" "}
          ·{" "}
          <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Home
          </Link>
        </p>
      </main>
    </div>
  );
}
