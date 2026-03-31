import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Build href for page number `page` (1-based). */
  getPageHref: (page: number) => string;
  className?: string;
};

export function Pagination({ currentPage, totalPages, getPageHref, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const prev = Math.max(1, currentPage - 1);
  const next = Math.min(totalPages, currentPage + 1);

  return (
    <nav
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
      aria-label="Pagination"
    >
      <PaginationLink
        href={getPageHref(prev)}
        disabled={currentPage <= 1}
        label="Previous page"
      >
        Previous
      </PaginationLink>
      <span className="px-2 text-sm text-zinc-600 dark:text-zinc-400">
        Page {currentPage} of {totalPages}
      </span>
      <PaginationLink
        href={getPageHref(next)}
        disabled={currentPage >= totalPages}
        label="Next page"
      >
        Next
      </PaginationLink>
    </nav>
  );
}

function PaginationLink({
  href,
  disabled,
  children,
  label,
}: {
  href: string;
  disabled: boolean;
  children: ReactNode;
  label: string;
}) {
  if (disabled) {
    return (
      <span
        className="cursor-not-allowed rounded-lg border border-zinc-200 px-3 py-1.5 text-sm text-zinc-400 dark:border-zinc-800 dark:text-zinc-600"
        aria-disabled
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:outline-zinc-100"
      aria-label={label}
    >
      {children}
    </Link>
  );
}
