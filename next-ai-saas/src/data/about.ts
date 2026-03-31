/** About page — demo copy for Nexsas marketing. */

export const aboutPageMeta = {
  title: "About",
  description:
    "Nexsas is a commercial AI SaaS template: marketing, auth, dashboard, and data-driven sections.",
} as const;

export const aboutHero = {
  title: "Built for teams who ship AI products",
  description:
    "We focus on ThemeForest-ready polish, realistic demo data, and a path from template to real product — without pretending to be a hosted service.",
} as const;

export const aboutValues = [
  {
    id: "1",
    title: "One design system",
    description: "Marketing, auth, and dashboard share tokens and components so the product feels cohesive.",
  },
  {
    id: "2",
    title: "Data, not hardcoded walls",
    description: "Navigation, pricing, FAQ, and blog previews live in src/data — swap for your CMS or API later.",
  },
  {
    id: "3",
    title: "Scoped for agents",
    description: "Route groups, commands, and briefs make it easy to extend one page at a time.",
  },
] as const;
