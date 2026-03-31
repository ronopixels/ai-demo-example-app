import { routes } from "@/routes";

/** Footer columns — extend as pages ship. */
export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Home v2", href: routes.homeV2 },
      { label: "Features", href: routes.marketing.features },
      { label: "Integrations", href: routes.marketing.integrations },
      { label: "Pricing", href: routes.marketing.pricing },
      { label: "FAQ", href: routes.marketing.faq },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: routes.marketing.about },
      { label: "Blog", href: routes.marketing.blog },
      { label: "Contact", href: routes.marketing.contact },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", href: routes.auth.signIn },
      { label: "Sign up", href: routes.auth.signUp },
      { label: "Dashboard", href: routes.dashboard.root },
    ],
  },
] as const;

/** Demo social URLs — replace with real profiles for production. */
export const defaultSocialLinks = [
  { platform: "twitter" as const, href: "https://twitter.com", label: "Twitter" },
  { platform: "github" as const, href: "https://github.com", label: "GitHub" },
  { platform: "linkedin" as const, href: "https://linkedin.com", label: "LinkedIn" },
];
