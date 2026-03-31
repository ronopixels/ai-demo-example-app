/** Marketing /integrations — demo partner and stack tiles. */

export const integrationsPageMeta = {
  title: "Integrations",
  description:
    "Connect Nexsas-shaped products to payments, chat, models, and deployment — placeholder grid for your real integrations page.",
} as const;

export const integrationsHero = {
  title: "Integrations that buyers expect to see",
  description:
    "Swap names, logos, and copy for your partners. Structure stays the same for ThemeForest demos and live sites.",
} as const;

export type IntegrationTile = {
  id: string;
  name: string;
  description: string;
  category: string;
};

export const integrationTiles: IntegrationTile[] = [
  {
    id: "stripe",
    name: "Stripe",
    description: "Subscriptions, invoices, and customer portal patterns in the dashboard shell.",
    category: "Payments",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Notifications and workflow hand-offs — wire your bot or webhook when you go live.",
    category: "Messaging",
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "Model calls and assistant UI placeholders ready for your API keys and guardrails.",
    category: "AI",
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Deploy the Next.js app with previews; env-based config for staging and production.",
    category: "Hosting",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Docs and KB patterns — replace with your content source or headless CMS.",
    category: "Content",
  },
  {
    id: "github",
    name: "GitHub",
    description: "OAuth and repo links for developer-first positioning in marketing and settings.",
    category: "Dev",
  },
];
