import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type DashboardTopbarProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function DashboardTopbar({ title, description, children, className }: DashboardTopbarProps) {
  return (
    <header
      className={cn(
        "flex flex-wrap items-start justify-between gap-4 border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
    >
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        ) : null}
      </div>
      {children ? <div className="flex shrink-0 items-center gap-2">{children}</div> : null}
    </header>
  );
}
