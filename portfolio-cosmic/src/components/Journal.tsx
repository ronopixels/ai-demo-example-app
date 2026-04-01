import { motion } from "framer-motion";

const ENTRIES = [
  {
    title: "Designing for trust in AI products",
    read: "5 min",
    date: "Feb 2026",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Motion as a system, not a garnish",
    read: "8 min",
    date: "Jan 2026",
    image:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "Notes on creative direction at scale",
    read: "6 min",
    date: "Dec 2025",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=200&q=80",
  },
  {
    title: "What I learned shipping in the open",
    read: "4 min",
    date: "Nov 2025",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
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
            <span className="text-xs uppercase tracking-[0.3em] text-muted">Journal</span>
          </div>
          <h2 className="text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Recent <span className="font-display italic">thoughts</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
            Writing on process, tools, and the edges where design meets engineering.
          </p>
          <div className="mt-6 hidden md:inline-flex">
            <div className="group relative rounded-full p-[2px] transition-transform hover:scale-[1.02] hover:bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]">
              <a
                href="#journal"
                className="inline-flex items-center gap-2 rounded-full bg-surface px-6 py-2.5 text-sm text-text-primary"
              >
                View all
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </motion.header>

        <ul className="flex flex-col gap-4">
          {ENTRIES.map((e) => (
            <li key={e.title}>
              <a
                href="#journal"
                className="flex flex-col gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-6 sm:rounded-full"
              >
                <img
                  src={e.image}
                  alt=""
                  className="h-20 w-full rounded-2xl object-cover sm:h-16 sm:w-24 sm:rounded-xl"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-text-primary">{e.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {e.read} read · {e.date}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
