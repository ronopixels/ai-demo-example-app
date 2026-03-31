import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blog";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · ${siteConfig.name}`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 dark:bg-black">
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumb
          className="mb-8"
          items={[
            { label: "Home", href: routes.home },
            { label: "Blog", href: routes.marketing.blog },
            { label: post.title },
          ]}
        />
        <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readTimeMinutes} min read</span>
            {post.tag ? <Badge variant="secondary">{post.tag}</Badge> : null}
          </div>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-pretty text-lg text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
        </header>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="mt-12 text-sm text-zinc-500 dark:text-zinc-400">
          <Link
            href={routes.marketing.blog}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            ← All posts
          </Link>
        </p>
      </article>
    </div>
  );
}
