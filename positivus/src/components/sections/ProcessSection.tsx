import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/data/site";
import { useAccordion } from "@/hooks/useAccordion";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ProcessSection() {
  const { toggle, isOpen } = useAccordion<string>("1");
  const reduced = useReducedMotion();

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionHeading
          badge="Our Working Process"
          description="Step-by-Step Guide to Achieving Your Business Goals"
        />
        <motion.div className="flex flex-col gap-[30px]" {...fadeUpProps(reduced)}>
          {PROCESS_STEPS.map((step) => {
            const open = isOpen(step.id);
            return (
              <div
                key={step.id}
                className={`rounded-[45px] border border-dark shadow-[0_5px_0_0_#191A23] transition-colors ${
                  open ? "bg-primary" : "bg-muted"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(step.id)}
                  className="flex w-full flex-col gap-4 px-8 py-8 text-left sm:px-[60px] sm:py-10"
                  aria-expanded={open}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                      <span className="text-h1 font-medium leading-none text-black">
                        {step.n}
                      </span>
                      <span className="text-h3 font-medium text-black">
                        {step.title}
                      </span>
                    </div>
                    <span className="relative h-[58px] w-[58px] shrink-0">
                      <img
                        src={open ? "/images/minus.svg" : "/images/plus.svg"}
                        alt=""
                        width={58}
                        height={58}
                        className="block"
                      />
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={reduced === true ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced === true ? undefined : { height: 0, opacity: 0 }}
                        transition={{
                          duration: reduced === true ? 0 : 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black pt-6">
                          <p className="text-p max-w-[1114px] font-normal text-black">{step.body}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
