"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants/site-config";
import { routes } from "@/routes";
import { dashboardNavItems } from "@/data/dashboard-nav";
import { cn } from "@/lib/cn";

export function DashboardSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex w-56 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
    >
      <div className="border-b border-zinc-200 px-4 py-4 dark:border-zinc-800">
        <Link href={routes.home} className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
          {siteConfig.name}
        </Link>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">Dashboard</p>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 p-2" aria-label="Dashboard">
        {dashboardNavItems.map((item) => {
          const active =
            item.href === routes.dashboard.root
              ? pathname === routes.dashboard.root
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
