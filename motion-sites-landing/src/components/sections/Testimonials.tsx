const ITEMS = [
  {
    quote:
      "A complete rebuild in five days that felt like months of craft. The AI nailed structure; the team nailed soul.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote:
      "Conversions up 4x in the first month. Our funnel finally matches the quality of our product.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote:
      "They didn't just design our site—they taught our brand how to breathe on the web.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
] as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-16 lg:px-24">
        <div className="section-badge">What They Say</div>
        <h2 className="section-heading max-w-3xl">Don&apos;t take our word for it.</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <blockquote key={t.name} className="liquid-glass rounded-2xl p-8">
              <p className="font-body text-sm font-light italic text-white/80">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-body text-sm font-medium text-white">{t.name}</p>
                <p className="mt-1 font-body text-xs font-light text-white/50">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
