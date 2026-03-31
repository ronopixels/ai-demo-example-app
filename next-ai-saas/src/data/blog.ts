/** Blog listing and post bodies — demo content for Nexsas. */

export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTimeMinutes: number;
  tag?: string;
};

export type BlogPost = BlogPostPreview & {
  /** Paragraphs rendered as separate <p> blocks */
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-faster-with-ai",
    title: "Shipping faster with AI-assisted workflows",
    excerpt: "Patterns we use to keep scope tight and quality high in the Nexsas template.",
    date: "2026-03-01",
    readTimeMinutes: 6,
    tag: "Product",
    paragraphs: [
      "Templates sell when they feel intentional. Every section in Nexsas is wired to data files so you can swap copy without hunting through JSX.",
      "We keep prompts scoped: one route group, one page, or one section per task. That mirrors how successful ThemeForest updates ship — small, reviewable slices.",
      "When you add a backend, replace demo arrays with fetches or a CMS. The UI primitives stay the same; only the data layer changes.",
    ],
  },
  {
    slug: "design-system-tokens",
    title: "Design tokens that scale to dashboards",
    excerpt: "How we keep marketing and app UI feeling like one family.",
    date: "2026-02-18",
    readTimeMinutes: 4,
    tag: "Design",
    paragraphs: [
      "Users notice when marketing looks like a brochure and the app looks like a different product. Nexsas uses shared radii, borders, and type rhythm across route groups.",
      "Tailwind v4 and dark mode variants are applied consistently. Theme toggles live in the marketing shell so demos feel complete.",
      "Extend tokens in globals.css when you need brand-specific color — avoid one-off hex in random components.",
    ],
  },
];

export const demoBlogPosts: BlogPostPreview[] = blogPosts.map(
  ({ slug, title, excerpt, date, readTimeMinutes, tag }) => ({
    slug,
    title,
    excerpt,
    date,
    readTimeMinutes,
    tag,
  })
);

export const blogPageMeta = {
  title: "Blog",
  description: "Product notes, design, and template updates from the Nexsas demo.",
} as const;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
