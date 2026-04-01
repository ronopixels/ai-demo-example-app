import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Automotive Motion",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Urban Architecture",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Human Perspective",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
  },
] as const;

export function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.header
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Selected Work</span>
          </div>
          <h2 className="text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Featured <span className="font-display italic">projects</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
            A selection of projects I&apos;ve worked on, from concept to launch.
          </p>
          <div className="mt-6 hidden md:inline-flex">
            <div className="group relative rounded-full p-[2px] transition-transform hover:scale-[1.02] hover:bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-2.5 text-sm text-text-primary"
              >
                View all work
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${p.span}`}
            >
              <div className={`relative ${p.aspect} w-full overflow-hidden`}>
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />
                <div className="absolute inset-0 flex items-end justify-center bg-bg/0 p-6 opacity-0 transition-all duration-500 group-hover:bg-bg/70 group-hover:opacity-100 group-hover:backdrop-blur-lg">
                  <div className="rounded-full p-[2px] accent-gradient-border">
                    <div className="rounded-full bg-white px-5 py-2.5 text-sm text-neutral-900">
                      View — <span className="font-display italic">{p.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
