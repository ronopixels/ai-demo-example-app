import { routes } from "@/routes";

export const mainNav = [
  { label: "Features", href: routes.marketing.features },
  { label: "Integrations", href: routes.marketing.integrations },
  { label: "Pricing", href: routes.marketing.pricing },
  { label: "Blog", href: routes.marketing.blog },
  { label: "Contact", href: routes.marketing.contact },
] as const;
