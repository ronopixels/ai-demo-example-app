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
