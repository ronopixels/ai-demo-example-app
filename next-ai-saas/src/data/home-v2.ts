import { routes } from "@/routes";

/**
 * Home v2 — alternate marketing homepage (split hero, stats-first social proof).
 */

export const homeV2Meta = {
  id: "home-v2",
  title: "Home v2",
  description:
    "Nexsas alternate landing — split hero, proof metrics, and testimonials-forward layout for ThemeForest demos.",
} as const;

export const homeV2Announcement = {
  message: "Prefer the classic layout?",
  href: routes.home,
  linkLabel: "View Home v1",
} as const;

export const homeV2Hero = {
  eyebrow: "AI SaaS template",
  title: "Launch faster with a dashboard that sells itself",
  description:
    "Same Nexsas system as Home v1 — different story and section order so buyers can pick the landing that fits their brand.",
} as const;

export const homeV2Stats = [
  { label: "Sections ready", value: "40+" },
  { label: "Route groups", value: "3" },
  { label: "ThemeForest ready", value: "100%" },
  { label: "Dark mode", value: "Built-in" },
] as const;

export const homeV2LogoStrip = {
  eyebrow: "Works where you ship",
  logos: ["Vercel", "Stripe", "Linear", "Notion", "Slack"],
} as const;

export const homeV2Integrations = {
  eyebrow: "Connect",
  title: "Integrations your buyers expect",
  description: "Swap names and logos for your real partners — structure stays the same.",
  items: [
    { id: "stripe", name: "Stripe" },
    { id: "slack", name: "Slack" },
    { id: "notion", name: "Notion" },
    { id: "openai", name: "OpenAI" },
    { id: "vercel", name: "Vercel" },
    { id: "github", name: "GitHub" },
  ],
} as const;

export const homeV2Cta = {
  title: "Ship Home v2 today",
  description: "Use this route as a second demo homepage or fork the sections into your own funnel.",
} as const;

export const homeV2FeaturesHeading = {
  eyebrow: "Platform",
  title: "Built for serious SaaS launches",
  subtitle:
    "Reuse the same primitives across marketing pages, auth, and the app shell — no one-off hacks.",
} as const;

export const homeV2TestimonialsHeading = {
  eyebrow: "Proof",
  title: "Teams ship faster with Nexsas",
  subtitle: "Two homepage variants, one design system — pick the story that converts.",
} as const;
