/** Demo feature grid content. */
export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  /** Optional emoji or single character for icon placeholder */
  icon?: string;
};

export const demoFeatures: FeatureItem[] = [
  {
    id: "1",
    title: "AI workflows",
    description: "Compose prompts, tools, and guardrails in one place.",
    icon: "⚡",
  },
  {
    id: "2",
    title: "Analytics you can trust",
    description: "Usage, latency, and spend — demo-ready charts out of the box.",
    icon: "📊",
  },
  {
    id: "3",
    title: "Built for teams",
    description: "Roles, workspaces, and audit-friendly defaults for growth.",
    icon: "👥",
  },
];

/** Full grid for the dedicated /features marketing page (includes home highlights + more). */
export const marketingPageFeatures: FeatureItem[] = [
  ...demoFeatures,
  {
    id: "4",
    title: "Auth-ready flows",
    description: "Sign-in, sign-up, and forgot-password shells you can connect to your provider.",
    icon: "🔐",
  },
  {
    id: "5",
    title: "Dashboard shell",
    description: "Sidebar, topbar, and widgets that match marketing — one product story end to end.",
    icon: "📐",
  },
  {
    id: "6",
    title: "SEO-friendly pages",
    description: "Metadata, sitemap, and structured sections for inner marketing routes.",
    icon: "🔎",
  },
];

export const featuresPageMeta = {
  title: "Features",
  description:
    "Everything in Nexsas: AI-oriented UI, analytics patterns, team workflows, auth, and dashboard shell.",
} as const;
