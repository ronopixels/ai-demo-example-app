import { routes } from "@/routes";

export type DashboardNavItem = {
  label: string;
  href: string;
};

export const dashboardNavItems: DashboardNavItem[] = [
  { label: "Overview", href: routes.dashboard.root },
  { label: "Analytics", href: routes.dashboard.analytics },
  { label: "AI Assistant", href: routes.dashboard.aiAssistant },
  { label: "Workflows", href: routes.dashboard.workflow },
  { label: "Billing", href: routes.dashboard.billing },
  { label: "Settings", href: routes.dashboard.settingsProfile },
];
