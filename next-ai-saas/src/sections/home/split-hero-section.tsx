"use client";

import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import { cn } from "@/lib/cn";
import { ChartLineUp, Lightning, Sparkle } from "@phosphor-icons/react";

export type SplitHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SplitHeroSection({ eyebrow, title, description, className }: SplitHeroSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,120,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(200,200,200,0.08),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routes.auth.signUp}>Get started</Button>
            <Button href={routes.marketing.pricing} variant="outline">
              See pricing
            </Button>
          </div>
        </div>
        <div className="relative lg:justify-self-end">
          <div className="relative aspect-[4/3] w-full max-w-lg rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-50 p-6 shadow-xl dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950">
            <div className="flex h-full flex-col rounded-xl border border-zinc-200/80 bg-white/90 p-4 dark:border-zinc-700 dark:bg-zinc-900/90">
              <div className="flex items-center gap-2 border-b border-zinc-100 pb-3 dark:border-zinc-800">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-amber-400" />
                <span className="size-2 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-zinc-500">dashboard — overview</span>
              </div>
              <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
                <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/80">
                  <ChartLineUp className="size-5 text-emerald-600 dark:text-emerald-400" aria-hidden />
                  <p className="mt-2 text-xs text-zinc-500">Active users</p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">12.4k</p>
                </div>
                <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800/80">
                  <Lightning className="size-5 text-amber-600 dark:text-amber-400" aria-hidden />
                  <p className="mt-2 text-xs text-zinc-500">Workflow runs</p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">842k</p>
                </div>
                <div className="col-span-2 rounded-lg border border-dashed border-zinc-200 p-4 dark:border-zinc-700">
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Sparkle className="size-4 shrink-0 text-violet-600 dark:text-violet-400" aria-hidden />
                    <span>AI assistant panel — drop in your chat UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
