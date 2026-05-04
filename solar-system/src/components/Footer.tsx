type FooterLink = { label: string; href: string; external?: boolean };

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "3D lessons", href: "#interactive-labs" },
      { label: "Planet profiles", href: "#worlds" },
      { label: "Dwarf planets", href: "#dwarfs" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "How the system formed", href: "#science" },
      { label: "Scale & orbits", href: "#scale" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Missions",
    links: [
      { label: "Active programs", href: "#missions" },
      { label: "NASA Solar System", href: "https://science.nasa.gov/solar-system/", external: true },
      { label: "ESA Space Science", href: "https://www.esa.int/Science_Exploration/Space_Science", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-nebula/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-xl font-semibold text-white">Solar System Explorer</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              An educational experience blending WebGL visuals with facts about the Sun, planets, moons, and robotic
              explorers. Distances and sizes in the 3D view are stylized for clarity — not to scale.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Built with React, Three.js, and Tailwind CSS. Content is for learning and demonstration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="text-sm text-slate-400 transition hover:text-sky-300"
                      >
                        {link.label}
                        {link.external ? " ↗" : ""}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Solar System Explorer. Not affiliated with NASA or ESA.</p>
          <p className="text-slate-600">Data rounded for readability — verify mission details at agency sources.</p>
        </div>
      </div>
    </footer>
  );
}
