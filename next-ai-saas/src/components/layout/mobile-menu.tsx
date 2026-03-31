"use client";

import {
  useEffect,
  useId,
  useState,
} from "react";
import Link from "next/link";
import { ButtonNative } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export type MobileNavItem = {
  label: string;
  href: string;
};

export function MobileMenu({
  items,
  className,
}: {
  items: readonly MobileNavItem[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const titleId = `${id}-title`;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className={cn("md:hidden", className)}>
      <ButtonNative
        type="button"
        variant="outline"
        className="size-9 rounded-full p-0"
        aria-expanded={open}
        aria-controls={open ? `${id}-panel` : undefined}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </ButtonNative>

      {open ? (
        <div
          id={`${id}-panel`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-sm dark:bg-black/95"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <p id={titleId} className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Menu
            </p>
            <ButtonNative
              type="button"
              variant="ghost"
              className="rounded-full px-3"
              onClick={() => setOpen(false)}
            >
              Close
            </ButtonNative>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
