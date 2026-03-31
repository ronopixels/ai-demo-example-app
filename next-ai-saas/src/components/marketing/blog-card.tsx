"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPostPreview } from "@/data/blog";
import { cn } from "@/lib/cn";

export type BlogCardProps = {
  post: BlogPostPreview;
  /** e.g. `/blog/${post.slug}` */
  href: string;
  className?: string;
};

export function BlogCard({ post, href, className }: BlogCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className={cn("flex h-full flex-col transition-shadow hover:shadow-md", className)}>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden>·</span>
            <span>{post.readTimeMinutes} min read</span>
            {post.tag ? <Badge variant="secondary">{post.tag}</Badge> : null}
          </div>
          <CardTitle className="text-xl leading-snug">
            <Link href={href} className="hover:underline">
              {post.title}
            </Link>
          </CardTitle>
          <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto pt-0">
          <Link
            href={href}
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            Read more
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
