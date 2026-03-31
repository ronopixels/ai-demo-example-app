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
] as const;

export type DemoSlug = (typeof demos)[number]["slug"];

export function getDemoBySlug(slug: DemoSlug) {
  return demos.find((d) => d.slug === slug);
}
