"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export function Modal({
  open,
  onOpenChange,
  children,
  title,
  description,
  className,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open) {
      el.showModal();
    } else {
      el.close();
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 w-[min(100vw-2rem,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-200 bg-white p-0 text-zinc-950 shadow-xl backdrop:bg-black/50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
        className
      )}
      onClose={() => onOpenChange(false)}
    >
      <div className="max-h-[90vh] overflow-y-auto p-6">
        {title ? (
          <h2 className="text-lg font-semibold leading-none tracking-tight">{title}</h2>
        ) : null}
        {description ? (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
        ) : null}
        <div className={title || description ? "mt-4" : undefined}>{children}</div>
      </div>
    </dialog>
  );
}
