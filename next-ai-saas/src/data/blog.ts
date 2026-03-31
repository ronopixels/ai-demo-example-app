/** Demo blog cards for listings / previews. */
export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTimeMinutes: number;
  tag?: string;
};

export const demoBlogPosts: BlogPostPreview[] = [
  {
    slug: "shipping-faster-with-ai",
    title: "Shipping faster with AI-assisted workflows",
    excerpt: "Patterns we use to keep scope tight and quality high in the Nexsas template.",
    date: "2026-03-01",
    readTimeMinutes: 6,
    tag: "Product",
  },
  {
    slug: "design-system-tokens",
    title: "Design tokens that scale to dashboards",
    excerpt: "How we keep marketing and app UI feeling like one family.",
    date: "2026-02-18",
    readTimeMinutes: 4,
    tag: "Design",
  },
];
