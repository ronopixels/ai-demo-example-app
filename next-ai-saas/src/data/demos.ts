/** Homepage demo definitions — swap `sectionOrder` and content per demo. */

export const demos = [
  {
    slug: "home-v1",
    title: "Home v1",
    homepage: "/",
    heroVariant: "product" as const,
    /** Mirrors `HomeV1` section composition in `src/sections/home/home-v1.tsx` */
    sectionOrder: [
      "announcement",
      "hero",
      "logo-strip",
      "features",
      "product-preview",
      "integrations",
      "analytics-preview",
      "testimonials",
      "pricing",
      "faq",
      "cta",
    ],
  },
  {
    slug: "home-v2",
    title: "Home v2",
    homepage: "/home-v2",
    heroVariant: "split" as const,
    /** Mirrors `HomeV2` in `src/sections/home/home-v2.tsx` */
    sectionOrder: [
      "announcement",
      "split-hero",
      "stats-strip",
      "logo-strip",
      "testimonials",
      "features",
      "integrations",
      "pricing",
      "faq",
      "cta",
    ],
  },
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export function getDemoBySlug(slug: DemoSlug) {
  return demos.find((d) => d.slug === slug);
}
