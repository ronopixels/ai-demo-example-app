/** Hero, CTA, and contact block art (`public/images/`). */
export const SECTION_IMAGES = {
  hero: "/images/hero-logo.png",
  cta: "/images/cta.png",
  contact: "/images/contact-section-logo.png",
} as const;

export const NAV_LINKS = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
] as const;

export const LOGO_CLIENTS = [
  { name: "Amazon", src: "/images/amazon.svg" },
  { name: "Dribbble", src: "/images/dribble.svg" },
  { name: "HubSpot", src: "/images/hubspot.svg" },
  { name: "Notion", src: "/images/notion.svg" },
  { name: "Netflix", src: "/images/netflix.svg" },
  { name: "Zoom", src: "/images/zoom.svg" },
] as const;

export type ServiceVariant = "grey" | "green" | "dark";

export const SERVICES: {
  title: [string, string];
  variant: ServiceVariant;
  /** `public/images/service-{n}.png` */
  image: string;
  /** Match Figma export (email illustration mirrored). */
  flipX?: boolean;
}[] = [
  {
    title: ["Search engine", "optimization"],
    variant: "grey",
    image: "/images/service-1.png",
  },
  {
    title: ["Pay-per-click", "advertising"],
    variant: "green",
    image: "/images/service-2.png",
  },
  {
    title: ["Social media", "Marketing"],
    variant: "dark",
    image: "/images/service-3.png",
  },
  {
    title: ["Email", "Marketing"],
    variant: "grey",
    image: "/images/service-4.png",
    flipX: true,
  },
  {
    title: ["Content", "Creation"],
    variant: "green",
    image: "/images/service-5.png",
  },
  {
    title: ["Analytics and", "Tracking"],
    variant: "dark",
    image: "/images/service-6.png",
  },
];

export const CASE_STUDIES = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
] as const;

export const PROCESS_STEPS: { id: string; n: string; title: string; body: string }[] =
  [
    {
      id: "1",
      n: "01",
      title: "Consultation",
      body: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "2",
      n: "02",
      title: "Research and Strategy Development",
      body: "We analyze your market, competitors, and audience to build a clear strategy with measurable KPIs and a practical roadmap.",
    },
    {
      id: "3",
      n: "03",
      title: "Implementation",
      body: "Our team executes campaigns across agreed channels with creative, tracking, and quality checks at every step.",
    },
    {
      id: "4",
      n: "04",
      title: "Monitoring and Optimization",
      body: "We continuously review performance data and refine targeting, creatives, and budgets to improve ROI.",
    },
    {
      id: "5",
      n: "05",
      title: "Reporting and Communication",
      body: "You receive transparent reports and regular syncs so you always know what is running and what comes next.",
    },
    {
      id: "6",
      n: "06",
      title: "Continual Improvement",
      body: "We iterate on learnings, test new ideas, and scale what works to keep your growth compounding.",
    },
  ];

export const TEAM: {
  name: string;
  role: string;
  bio: string;
  image: string;
}[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    image: "/images/team-1.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    image: "/images/team-2.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    image: "/images/team-3.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    image: "/images/team-4.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
    image: "/images/team-5.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
    image: "/images/team-6.png",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "Positivus helped us clarify our funnel and rebuild our paid campaigns. Within three months we cut CPA by 32% while scaling spend.",
    name: "Anna Müller",
    role: "Head of Growth, Northwind",
  },
  {
    quote:
      "Their reporting is honest, their creative is sharp, and they actually understand B2B sales cycles. Rare find in an agency.",
    name: "David Chen",
    role: "CMO, Stellar SaaS",
  },
  {
    quote:
      "From SEO to content, one team that talks to each other — we finally have a coherent brand story across channels.",
    name: "Priya Nair",
    role: "Founder, Bloom Retail",
  },
] as const;
