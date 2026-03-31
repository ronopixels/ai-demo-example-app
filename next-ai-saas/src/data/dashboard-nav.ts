import { routes } from "@/routes";

export type DashboardNavItem = {
  label: string;
  href: string;
};

export type DashboardNavSection = {
  title: string;
  items: DashboardNavItem[];
};

/** Sidebar groups — order matches page map. */
export const dashboardNavSections: DashboardNavSection[] = [
  {
    title: "Workspace",
    items: [
      { label: "Overview", href: routes.dashboard.root },
      { label: "Analytics", href: routes.dashboard.analytics },
      { label: "Projects", href: routes.dashboard.projects },
      { label: "AI Assistant", href: routes.dashboard.aiAssistant },
      { label: "Workflows", href: routes.dashboard.workflow },
      { label: "Workflow builder", href: routes.dashboard.workflowBuilder },
      { label: "Prompts", href: routes.dashboard.prompts },
      { label: "Integrations", href: routes.dashboard.integrations },
      { label: "Files", href: routes.dashboard.files },
      { label: "Reports", href: routes.dashboard.reports },
      { label: "Team", href: routes.dashboard.team },
      { label: "Notifications", href: routes.dashboard.notifications },
      { label: "Billing", href: routes.dashboard.billing },
      { label: "Invoices", href: routes.dashboard.billingInvoices },
      { label: "API keys", href: routes.dashboard.apiKeys },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Profile", href: routes.dashboard.settingsProfile },
      { label: "Security", href: routes.dashboard.settingsSecurity },
      { label: "Appearance", href: routes.dashboard.settingsAppearance },
      { label: "Notifications", href: routes.dashboard.settingsNotifications },
    ],
  },
];

/** Flat list for active-state helpers and sitemap. */
export const dashboardNavItems: DashboardNavItem[] = dashboardNavSections.flatMap((s) => s.items);
