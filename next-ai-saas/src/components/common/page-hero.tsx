import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type PageHeroProps = {
  title: string;
  description?: string;
  /** Primary actions (buttons) */
  children?: ReactNode;
  size?: "default" | "lg";
  className?: string;
};

export function PageHero({ title, description, children, size = "default", className }: PageHeroProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl text-center",
        size === "lg" && "max-w-4xl",
        className
      )}
    >
      <h1
        className={cn(
          "text-balance font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
          size === "default" && "text-3xl sm:text-4xl",
          size === "lg" && "text-4xl sm:text-5xl"
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div> : null}
    </div>
  );
}
