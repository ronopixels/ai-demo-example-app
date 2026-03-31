import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  integrationTiles,
  integrationsHero,
  integrationsPageMeta,
} from "@/data/integrations-page";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: integrationsPageMeta.title,
  description: integrationsPageMeta.description,
  openGraph: {
    title: `${integrationsPageMeta.title} · ${siteConfig.name}`,
    description: integrationsPageMeta.description,
  },
};

export default function IntegrationsPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: integrationsPageMeta.title }]}
        />
        <PageHero title={integrationsHero.title} description={integrationsHero.description} size="lg" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrationTiles.map((item) => (
            <Card key={item.id} className="flex flex-col">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {item.category}
                </Badge>
                <CardTitle className="mt-2 text-xl">{item.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Tiles from{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">
            src/data/integrations-page.ts
          </code>
          .{" "}
          <Link href={routes.marketing.contact} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Contact
          </Link>
        </p>
      </main>
    </div>
  );
}
