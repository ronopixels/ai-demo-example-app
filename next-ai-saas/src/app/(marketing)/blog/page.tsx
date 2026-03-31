import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHero } from "@/components/common/page-hero";
import { BlogCard } from "@/components/marketing/blog-card";
import { blogPageMeta, demoBlogPosts } from "@/data/blog";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: blogPageMeta.title,
  description: blogPageMeta.description,
  openGraph: {
    title: `${blogPageMeta.title} · ${siteConfig.name}`,
    description: blogPageMeta.description,
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[{ label: "Home", href: routes.home }, { label: blogPageMeta.title }]}
        />
        <PageHero
          title="Blog"
          description="Notes on building and shipping the Nexsas template — swap for your editorial content."
          size="lg"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {demoBlogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} href={`${routes.marketing.blog}/${post.slug}`} />
          ))}
        </div>
        <p className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Posts in{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-xs dark:bg-zinc-800">src/data/blog.ts</code>
          .{" "}
          <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            Home
          </Link>
        </p>
      </main>
    </div>
  );
}
