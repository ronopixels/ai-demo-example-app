import { BarChart3, Palette, Shield, Zap } from "lucide-react";

const CARDS = [
  {
    icon: Zap,
    title: "Days, Not Months",
    body: "Concept to launch at a pace that redefines fast.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    body: "Every detail considered. Every element refined.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    body: "Layouts informed by data. Decisions backed by performance.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Enterprise-grade protection comes standard.",
  },
] as const;

export function FeaturesGrid() {
  return (
    <section id="why-us" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-16 lg:px-24">
        <div className="section-badge">Why Us</div>
        <h2 className="section-heading max-w-3xl">The difference is everything.</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="liquid-glass rounded-2xl p-6">
              <div className="liquid-glass-strong flex size-10 items-center justify-center rounded-full text-white">
                <Icon className="size-5" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-heading text-lg italic text-white">{title}</h3>
              <p className="section-body mt-2">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
