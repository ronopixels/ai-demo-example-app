import { routes } from "@/routes";

/**
 * Home v1 — marketing homepage copy and section data.
 * Add Home v2/v3 as separate modules when you ship alternate demos.
 */

export const homeV1Meta = {
  id: "home-v1",
  title: "Home v1",
  description: "Default Nexsas marketing homepage — AI SaaS ThemeForest template.",
} as const;

export const homeV1Hero = {
  title: "Ship an AI SaaS buyers actually want to buy",
  description:
    "Nexsas is a premium Next.js template: marketing, auth, dashboard, and reusable sections — data-driven and ready for ThemeForest.",
} as const;

export const homeV1Announcement = {
  message: "New: dashboard widgets + auth shell. See the live dashboard demo.",
  href: routes.dashboard.root,
  linkLabel: "Open dashboard",
} as const;

export const homeV1LogoStrip = {
  eyebrow: "Trusted by teams who ship",
  logos: ["Acme", "Northwind", "Contoso", "Fabrikam", "Tailspin"],
} as const;

export const homeV1ProductPreview = {
  eyebrow: "Product",
  title: "A dashboard that looks like the real thing",
  description:
    "Stats, billing, and workflows use the same design language as your marketing site — one product family, not two templates glued together.",
  bullets: [
    "Dark mode + accessible components out of the box",
    "Demo data in src/data — swap for your API later",
    "Route groups for marketing, auth, and dashboard",
  ],
} as const;

export const homeV1Integrations = {
  eyebrow: "Integrations",
  title: "Plays well with your stack",
  description: "Placeholder logos for Stripe, Slack, Notion, and more — replace with real partner assets.",
  items: [
    { id: "stripe", name: "Stripe" },
    { id: "slack", name: "Slack" },
    { id: "notion", name: "Notion" },
    { id: "openai", name: "OpenAI" },
    { id: "vercel", name: "Vercel" },
    { id: "github", name: "GitHub" },
  ],
} as const;

export const homeV1Analytics = {
  eyebrow: "Analytics",
  title: "See what matters at a glance",
  description: "Preview-style metrics you can wire to PostHog, Mixpanel, or your warehouse.",
  metrics: [
    { label: "Active users", value: "12.4k", change: "+6.2%", tone: "positive" as const },
    { label: "Workflow runs", value: "842k", change: "+12%", tone: "positive" as const },
    { label: "P95 latency", value: "380 ms", change: "-4%", tone: "positive" as const },
  ],
} as const;

export const homeV1Cta = {
  title: "Ready to ship Home v1?",
  description:
    "See the alternate layout at /home-v2 — same system, different section order and split hero.",
} as const;
