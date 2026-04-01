import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Partner", href: "#partner" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "mailto:hello@vvortex.studio" },
];

export function FooterSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <footer
      ref={ref}
      className={`border-t border-zinc-200 bg-white ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.7s" : undefined }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#051A24]" style={{ fontFamily: "'PP Mondwest', serif" }}>
            V Vortex
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-vortex-muted">
            Creative studio of Sarah Vortex — product, brand, and motion for teams who ship with care.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#051A24]">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="transition-colors hover:text-vortex-muted">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-zinc-100 bg-zinc-50/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-vortex-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} V Vortex Studio. All rights reserved.</p>
          <p>San Francisco · Remote worldwide</p>
        </div>
      </div>
    </footer>
  );
}
