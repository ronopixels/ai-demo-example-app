"use client";

import { Bell, CreditCard, File, Key, Plugs, User } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

const variants = {
  file: File,
  plugs: Plugs,
  key: Key,
  bell: Bell,
  user: User,
  card: CreditCard,
} as const;

export type DashboardListIconVariant = keyof typeof variants;

export function DashboardListIcon({
  variant,
  className,
}: {
  variant: DashboardListIconVariant;
  className?: string;
}) {
  const Icon = variants[variant];
  return (
    <Icon
      className={cn("size-5 shrink-0 text-zinc-500 dark:text-zinc-400", className)}
      weight="duotone"
      aria-hidden
    />
  );
}
