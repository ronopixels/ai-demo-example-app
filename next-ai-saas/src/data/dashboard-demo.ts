/** Demo entities for dashboard routes — replace with API data. */

export const demoAiChats = [
  {
    id: "1",
    title: "Onboarding Q&A",
    preview: "How do credits roll over each month?",
    updatedAt: "2 min ago",
  },
  {
    id: "2",
    title: "SQL helper",
    preview: "Write a query for active users in the last 7 days…",
    updatedAt: "1 hour ago",
  },
  {
    id: "3",
    title: "Release notes",
    preview: "Summarize these commits for customers…",
    updatedAt: "Yesterday",
  },
] as const;

export const demoPrompts = [
  {
    id: "p1",
    title: "Support reply",
    description: "Friendly tone, max 120 words, include doc links when relevant.",
  },
  {
    id: "p2",
    title: "Release notes",
    description: "Summarize PR titles for a weekly changelog email.",
  },
] as const;

export const demoTeamMembers = [
  { id: "u1", name: "Sam Rivera", role: "Admin", email: "sam@acme.test" },
  { id: "u2", name: "Jordan Lee", role: "Member", email: "jordan@acme.test" },
  { id: "u3", name: "Casey Morgan", role: "Billing", email: "casey@acme.test" },
] as const;

export const demoProjects = [
  {
    id: "pr1",
    name: "Growth workspace",
    description: "Campaigns, workflows, and shared prompts.",
    updatedAt: "Today",
  },
  {
    id: "pr2",
    name: "Product analytics",
    description: "Dashboards and scheduled reports.",
    updatedAt: "Mar 28",
  },
] as const;

export const demoInvoices = [
  {
    id: "inv1",
    number: "INV-2026-0142",
    date: "2026-03-01",
    amount: "$29.00",
    status: "paid" as const,
  },
  {
    id: "inv2",
    number: "INV-2026-0118",
    date: "2026-02-01",
    amount: "$29.00",
    status: "paid" as const,
  },
] as const;

export const demoApiKeys = [
  { id: "k1", name: "Production", prefix: "nx_live_", createdAt: "2026-01-10" },
  { id: "k2", name: "Staging", prefix: "nx_test_", createdAt: "2026-02-02" },
] as const;

export const demoNotifications = [
  {
    id: "n1",
    title: "Workflow failed",
    body: "Lead enrichment hit timeout after 120s.",
    read: false,
    time: "5 min ago",
  },
  {
    id: "n2",
    title: "Invoice paid",
    body: "INV-2026-0142 marked as paid.",
    read: true,
    time: "2 days ago",
  },
] as const;

export const demoFiles = [
  { id: "f1", name: "Brand guidelines.pdf", type: "PDF", size: "2.4 MB", updated: "Mar 2" },
  { id: "f2", name: "Q1 roadmap.md", type: "Doc", size: "48 KB", updated: "Feb 20" },
] as const;

export const demoIntegrations = [
  { id: "i1", name: "Stripe", status: "connected" as const, description: "Billing and customer portal" },
  { id: "i2", name: "Slack", status: "connected" as const, description: "#alerts channel" },
  { id: "i3", name: "OpenAI", status: "error" as const, description: "Key rotation required (demo)" },
] as const;

export function getDemoAiChat(id: string) {
  return demoAiChats.find((c) => c.id === id);
}

export function getDemoPrompt(id: string) {
  return demoPrompts.find((p) => p.id === id);
}

export function getDemoTeamMember(id: string) {
  return demoTeamMembers.find((m) => m.id === id);
}
