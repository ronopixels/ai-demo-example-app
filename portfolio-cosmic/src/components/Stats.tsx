import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
] as const;

export function Stats() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-5xl italic text-text-primary md:text-6xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
