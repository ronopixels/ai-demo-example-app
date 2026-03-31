"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type ItemCtx = { open: boolean; setOpen: (v: boolean) => void; panelId: string };

const ItemContext = createContext<ItemCtx | null>(null);

export function Accordion({
  className,
  children,
  ...props
}: { children: ReactNode } & React.ComponentProps<"div">) {
  return (
    <div
      className={cn("divide-y divide-zinc-200 dark:divide-zinc-800", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function AccordionItem({
  className,
  defaultOpen = false,
  children,
  ...props
}: {
  defaultOpen?: boolean;
  children: ReactNode;
} & React.ComponentProps<"div">) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const panelId = `${uid}-content`;

  return (
    <ItemContext.Provider value={{ open, setOpen, panelId }}>
      <div className={cn("py-0", className)} {...props}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: { children: ReactNode } & React.ComponentProps<"button">) {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error("AccordionTrigger must be inside AccordionItem");

  return (
    <button
      type="button"
      aria-expanded={ctx.open}
      aria-controls={ctx.panelId}
      className={cn(
        "flex w-full items-center justify-between gap-2 py-4 text-left text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-100 dark:hover:text-zinc-300 dark:focus-visible:outline-zinc-100",
        className
      )}
      onClick={() => ctx.setOpen(!ctx.open)}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <span
        className={cn(
          "shrink-0 text-zinc-500 transition-transform dark:text-zinc-400",
          ctx.open && "rotate-180"
        )}
        aria-hidden
      >
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: { children: ReactNode } & React.ComponentProps<"div">) {
  const ctx = useContext(ItemContext);
  if (!ctx) throw new Error("AccordionContent must be inside AccordionItem");

  if (!ctx.open) return null;

  return (
    <div
      id={ctx.panelId}
      role="region"
      className={cn("pb-4 text-sm text-zinc-600 dark:text-zinc-400", className)}
      {...props}
    >
      {children}
    </div>
  );
}
