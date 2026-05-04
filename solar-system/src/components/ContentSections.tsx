import { dwarfPlanets } from "../data/planets";

export function ExplorerIntro() {
  return (
    <section
      id="explore"
      className="scroll-mt-24 border-b border-white/5 bg-void px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Learning playground
        </h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          Below you’ll find <strong className="text-slate-200">four different 3D worlds</strong> — a grand tour,
          a size parade, an orbit race, and an Earth–Moon buddy lab. Each lesson has short steps and a mini quiz for
          young astronauts. Jump in with the{" "}
          <a href="#interactive-labs" className="font-medium text-sky-300 underline-offset-4 hover:underline">
            3D Labs
          </a>{" "}
          section.
        </p>
      </div>
    </section>
  );
}

export function ScienceSection() {
  return (
    <section
      id="science"
      className="scroll-mt-24 border-b border-white/5 bg-nebula/40 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          How the Solar System formed
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-slate-300">
            <p className="leading-relaxed">
              About{" "}
              <strong className="text-white">4.6 billion years ago</strong>, a
              dense knot inside a giant molecular cloud collapsed under its own
              gravity. Conservation of angular momentum spun it into a rotating
              disk: a hot <strong className="text-white"> protosun</strong> at
              the center, surrounded by gas and dust where planets would
              accrete.
            </p>
            <p className="leading-relaxed">
              Close to the young Sun, volatile ices vaporized — only rock and
              metal could solidify, building{" "}
              <strong className="text-white">terrestrial planets</strong>.
              Farther out, beyond the “frost line,” icy grains stuck together
              into massive cores that captured thick hydrogen/helium envelopes —
              the <strong className="text-white">gas giants</strong>. Still
              farther, similar cores became{" "}
              <strong className="text-white">ice giants</strong> with less gas
              but plenty of water, ammonia, and methane ices.
            </p>
            <p className="leading-relaxed">
              Leftover debris became{" "}
              <strong className="text-white">
                asteroids, comets, and Kuiper Belt objects
              </strong>
              . Giant planet migration may have shaken early orbits, explaining
              some of today’s architecture (like the Late Heavy Bombardment
              inferred from lunar samples).
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold text-white">
              Key vocabulary
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-sky-300">
                  AU (Astronomical Unit):
                </span>{" "}
                mean Earth–Sun distance, used as a convenient cosmic yardstick.
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  Protoplanetary disk:
                </span>{" "}
                the pancake of material feeding planet growth.
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  Differentiation:
                </span>{" "}
                separation of a body into core, mantle, and crust by melting and
                density sorting.
              </li>
              <li>
                <span className="font-semibold text-sky-300">
                  Nice model (idea):
                </span>{" "}
                a leading scenario where Jupiter and Saturn’s orbital shifts
                sculpted the asteroid belt and Kuiper Belt populations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ScaleSection() {
  return (
    <section
      id="scale"
      className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Why the model isn’t “true scale”
        </h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          If the Sun were a basketball (~24 cm), Earth would be a pinhead ~26
          meters away — and Neptune kilometers farther. A single screen can’t
          show both planet sizes and separations faithfully, so artists and
          educators compress distances and magnify diameters.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Light-minute",
              b: "Earth is ~8.3 light-minutes from the Sun.",
            },
            {
              t: "Jupiter’s sway",
              b: "Its gravity clears or shepherds many small-body orbits.",
            },
            {
              t: "Roche limit",
              b: "Tidal forces can tear apart bodies that stray too close to a planet.",
            },
            {
              t: "Hill sphere",
              b: "Region where a planet’s gravity dominates the Sun’s — moons live here.",
            },
          ].map((c) => (
            <div key={c.t} className="glass rounded-xl p-5">
              <p className="font-medium text-white">{c.t}</p>
              <p className="mt-2 text-sm text-slate-400">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionsSection() {
  const missions = [
    {
      name: "Parker Solar Probe",
      who: "NASA",
      detail:
        "Dives into the Sun’s outer atmosphere to study the solar wind and heating of the corona.",
    },
    {
      name: "James Webb Space Telescope",
      who: "NASA / ESA / CSA",
      detail:
        "Infrared flagship observatory at L2 — studies exoplanet atmospheres and Kuiper Belt bodies.",
    },
    {
      name: "JUICE",
      who: "ESA",
      detail:
        "Jupiter Icy Moons Explorer — focused on Ganymede, Callisto, and Europa’s subsurface oceans.",
    },
    {
      name: "Europa Clipper",
      who: "NASA",
      detail:
        "Multiple flybys of Europa to assess habitability beneath its ice shell.",
    },
    {
      name: "Perseverance & Ingenuity",
      who: "NASA",
      detail:
        "Rover science in Jezero Crater; first powered flight on another planet (helicopter demo).",
    },
    {
      name: "BepiColombo",
      who: "ESA / JAXA",
      detail:
        "Two-spacecraft mission to map Mercury and its magnetosphere after orbital insertion.",
    },
  ];

  return (
    <section
      id="missions"
      className="scroll-mt-24 border-b border-white/5 bg-nebula/30 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Robotic explorers
        </h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          Humans haven’t walked past the Moon — yet our machines have touched
          Mercury, Venus, Mars, asteroids, comets, outer planets, and
          trans-Neptunian worlds. Here are a few headline missions (not
          exhaustive).
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {missions.map((m) => (
            <li key={m.name} className="glass flex flex-col rounded-2xl p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-white">
                  {m.name}
                </h3>
                <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-medium text-sky-300">
                  {m.who}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {m.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DwarfSection() {
  return (
    <section
      id="dwarfs"
      className="scroll-mt-24 border-b border-white/5 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Dwarf planets & small worlds
        </h2>
        <p className="mt-3 max-w-3xl text-slate-400">
          The International Astronomical Union’s 2006 definition demoted Pluto
          to a dwarf planet category alongside Ceres, Eris, Haumea, Makemake,
          and others — emphasizing orbital neighborhood clearance, not intrinsic
          interest.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {dwarfPlanets.map((d) => (
            <article key={d.id} className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-white">
                {d.name}
              </h3>
              <dl className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-slate-500">Mean distance</dt>
                  <dd className="font-medium text-white">
                    {d.meanDistanceAU} AU
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Orbital period</dt>
                  <dd className="font-medium text-white">
                    {d.orbitalPeriodYears} years
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Diameter vs Earth</dt>
                  <dd className="font-medium text-white">
                    {d.diameterVsEarth}×
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500">Known moons</dt>
                  <dd className="font-medium text-white">{d.moons}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-slate-400">{d.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const faqs = [
    {
      q: "Is Pluto still interesting scientifically?",
      a: "Absolutely. New Horizons revealed diverse geology, a thin nitrogen atmosphere, and hints of subsurface ocean activity — classification doesn’t change the science value.",
    },
    {
      q: "Why do gas giants have rings?",
      a: "Rings are collections of ice and rock held by gravity but shepherded by moons and resonances. Age and origin differ per planet — Saturn’s rings may be relatively young in geologic terms.",
    },
    {
      q: "Could life exist elsewhere in the Solar System?",
      a: "Liquid water is the main lead: subsurface oceans on Europa, Enceladus, and maybe Ganymede or Titan motivate astrobiology missions.",
    },
    {
      q: "What powers the Sun?",
      a: "Nuclear fusion converts hydrogen into helium in the core, releasing energy that diffuses outward and eventually escapes as light.",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group glass rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-white">
                {f.q}
                <span className="text-sky-400 transition group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
