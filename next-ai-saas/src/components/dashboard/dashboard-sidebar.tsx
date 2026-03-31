"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChartLine,
  ChatCircle,
  CreditCard,
  Cube,
  FileText,
  FlowArrow,
  FolderOpen,
  House,
  Key,
  Palette,
  Plugs,
  Shield,
  SlidersHorizontal,
  Stack,
  TreeStructure,
  User,
  Users,
  Wrench,
} from "@phosphor-icons/react";
import { siteConfig } from "@/constants/site-config";
import { routes } from "@/routes";
import { dashboardNavSections } from "@/data/dashboard-nav";
import { cn } from "@/lib/cn";

const iconClass = "size-4 shrink-0 text-zinc-500 dark:text-zinc-400";

const hrefToIcon: Record<string, React.ComponentType<{ className?: string; weight?: "regular" | "duotone" }>> = {
  [routes.dashboard.root]: House,
  [routes.dashboard.analytics]: ChartLine,
  [routes.dashboard.projects]: Cube,
  [routes.dashboard.aiAssistant]: ChatCircle,
  [routes.dashboard.workflow]: FlowArrow,
  [routes.dashboard.workflowBuilder]: TreeStructure,
  [routes.dashboard.prompts]: Stack,
  [routes.dashboard.integrations]: Plugs,
  [routes.dashboard.files]: FolderOpen,
  [routes.dashboard.reports]: FileText,
  [routes.dashboard.team]: Users,
  [routes.dashboard.notifications]: Bell,
  [routes.dashboard.billing]: CreditCard,
  [routes.dashboard.billingInvoices]: FileText,
  [routes.dashboard.apiKeys]: Key,
  [routes.dashboard.settingsProfile]: User,
  [routes.dashboard.settingsSecurity]: Shield,
  [routes.dashboard.settingsAppearance]: Palette,
  [routes.dashboard.settingsNotifications]: SlidersHorizontal,
};

function NavIcon({ href }: { href: string }) {
  const Icon = hrefToIcon[href] ?? Wrench;
  return <Icon className={iconClass} weight="duotone" aria-hidden />;
}

function isActive(pathname: string, href: string): boolean {
  if (href === routes.dashboard.root) return pathname === routes.dashboard.root;
  return pathname === href || pathname.startsWith(`${href}/`);
}

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
      <nav className="flex flex-1 flex-col gap-4 overflow-y-auto p-2" aria-label="Dashboard">
        {dashboardNavSections.map((section) => (
          <div key={section.title}>
            <p className="px-3 pb-1 text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              {section.title}
            </p>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                    )}
                  >
                    <NavIcon href={item.href} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
