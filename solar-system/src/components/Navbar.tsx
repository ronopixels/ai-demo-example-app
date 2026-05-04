import { useEffect, useState } from "react";

const links = [
  { href: "#interactive-labs", label: "3D Labs" },
  { href: "#explore", label: "About" },
  { href: "#science", label: "Science" },
  { href: "#missions", label: "Missions" },
  { href: "#worlds", label: "Worlds" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-white">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 shadow-lg shadow-sky-500/25 transition group-hover:shadow-sky-400/40">
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition group-hover:opacity-100" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-void" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </span>
          Solar System
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#interactive-labs"
            className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:text-white sm:inline-flex"
          >
            3D Tour
          </a>
          <a
            href="#science"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110"
          >
            Learn more
          </a>
        </div>
      </div>
    </header>
  );
}
