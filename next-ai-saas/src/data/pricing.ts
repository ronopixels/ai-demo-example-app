/**
 * Demo pricing content for the marketing /pricing page.
 * Replace with CMS or API-backed data in production.
 */

export type PricingTier = {
  id: string;
  name: string;
  description: string;
  /** Price in USD per month when billed monthly */
  priceMonthly: number;
  /** Price in USD per month when billed yearly (effective monthly); null if yearly not offered */
  priceYearly: number | null;
  /** Visually emphasize this tier (e.g. “Most popular”) */
  highlight?: boolean;
  features: string[];
  ctaLabel: string;
  /** Placeholder hrefs — wire to checkout or auth when ready */
  ctaHref: string;
};

export const pricingPageCopy = {
  title: "Simple, transparent pricing",
  description:
    "Start free and scale as you grow. All plans include core AI workflows; upgrade when you need higher limits and support.",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals exploring AI-assisted workflows.",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "1 workspace",
      "50 AI credits / month",
      "Community support",
      "Export to Markdown",
    ],
    ctaLabel: "Start free",
    ctaHref: "/sign-up",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For teams shipping features with AI every week.",
    priceMonthly: 29,
    priceYearly: 24,
    highlight: true,
    features: [
      "5 workspaces",
      "5,000 AI credits / month",
      "Priority email support",
      "Custom integrations (webhooks)",
      "Usage analytics",
    ],
    ctaLabel: "Start Pro trial",
    ctaHref: "/sign-up",
  },
  {
    id: "business",
    name: "Business",
    description: "For orgs with compliance and SSO requirements.",
    priceMonthly: 99,
    priceYearly: 79,
    features: [
      "Unlimited workspaces",
      "25,000 AI credits / month",
      "Dedicated success manager",
      "SSO (SAML)",
      "Audit logs & SLAs",
    ],
    ctaLabel: "Contact sales",
    ctaHref: "/contact",
  },
];
