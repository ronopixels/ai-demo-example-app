const NAMES = ["Stripe", "Vercel", "Linear", "Notion", "Figma"] as const;

export function PartnersBar() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="section-badge">Trusted by the teams behind</div>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {NAMES.map((name) => (
            <span key={name} className="font-heading text-2xl italic text-white md:text-3xl">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
