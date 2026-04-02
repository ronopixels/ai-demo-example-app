import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CASE_STUDIES } from "@/data/site";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CaseStudiesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="py-12 lg:py-16" id="case-studies">
      <Container>
        <SectionHeading
          badge="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <motion.div
          className="rounded-card bg-dark px-8 py-12 lg:px-[60px] lg:py-section"
          {...fadeUpProps(reduced)}
        >
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">
            {CASE_STUDIES.map((c, idx) => (
              <div
                key={idx}
                className={`flex flex-col gap-5 ${idx > 0 ? "lg:border-l lg:border-white/40 lg:pl-12" : ""}`}
              >
                <p className="text-p font-normal text-white">{c.text}</p>
                <a
                  href="#contact"
                  className="text-lead inline-flex items-center gap-[15px] font-normal text-primary"
                >
                  Learn more
                  <span
                    className="inline-block h-0 w-5 rotate-[-30deg] border-t-[3px] border-primary"
                    aria-hidden
                  />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
