/** Demo testimonials for marketing sections. */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarSrc?: string;
};

export const demoTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Nexsas cut our build time in half. The dashboard feels like a real product on day one.",
    author: "Alex Rivera",
    role: "Founder",
    company: "Northwind AI",
  },
  {
    id: "2",
    quote: "Finally a template that doesn’t fight our design system. Ship and iterate fast.",
    author: "Sam Chen",
    role: "Design Lead",
    company: "Pixelcraft",
  },
  {
    id: "3",
    quote: "Our ThemeForest launch went smoothly — buyers loved the polish.",
    author: "Jordan Lee",
    role: "Product",
    company: "Studio 42",
  },
];
