export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 bg-grid-fade px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-sky-200/90">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
          </span>
          Four WebGL lessons · Tap, drag, and play
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          Journey through our{" "}
          <span className="text-gradient bg-[length:200%_auto] animate-shimmer">
            cosmic neighborhood
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          From the Sun’s fusion furnace to ice giants on the frontier — explore
          scale, motion, and the robotic eyes we send between the worlds.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#interactive-labs"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 transition hover:brightness-110"
          >
            Start 3D lessons
          </a>
          <a
            href="#science"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            How it all formed
          </a>
        </div>

        <dl className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            {
              k: "8",
              l: "major planets",
              d: "plus dwarf worlds & countless small bodies",
            },
            {
              k: "1 AU",
              l: "Earth–Sun distance",
              d: "≈ 149.6 million kilometres — our measuring stick",
            },
            {
              k: "4.6 Ga",
              l: "system age",
              d: "born from a collapsing molecular cloud rich in heavy elements",
            },
          ].map((item) => (
            <div key={item.l} className="glass rounded-2xl p-5">
              <dt className="font-display text-3xl font-semibold text-white">
                {item.k}
              </dt>
              <dd className="mt-1 text-sm font-medium text-sky-200/80">
                {item.l}
              </dd>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {item.d}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
