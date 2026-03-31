"use client";

import {
  useId,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export function Tooltip({
  content,
  children,
  className,
  side = "top",
}: {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  side?: "top" | "bottom";
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const tipId = `${id}-tip`;

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span
        className="inline-flex"
        aria-describedby={open ? tipId : undefined}
        tabIndex={0}
      >
        {children}
      </span>
      {open ? (
        <span
          id={tipId}
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50 max-w-xs rounded-md bg-zinc-900 px-2 py-1.5 text-xs text-white shadow-md dark:bg-zinc-100 dark:text-zinc-900",
            side === "top" ? "bottom-full left-1/2 mb-2 -translate-x-1/2" : "top-full left-1/2 mt-2 -translate-x-1/2"
          )}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
