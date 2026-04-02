import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SECTION_IMAGES } from "@/data/site";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CTASection() {
  const reduced = useReducedMotion();

  return (
    <section className="py-8 lg:py-12" id="pricing">
      <Container>
        <motion.div
          className="flex flex-col items-center gap-10 overflow-hidden rounded-card bg-muted px-8 py-12 lg:flex-row lg:justify-between lg:gap-16 lg:px-[60px] lg:py-14"
          {...fadeUpProps(reduced)}
        >
          <div className="flex max-w-[500px] flex-col gap-[26px]">
            <h3 className="text-h3 font-medium text-dark">
              Let&apos;s make things happen
            </h3>
            <p className="text-p font-normal text-dark">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <a
              href="#contact"
              className="text-lead inline-flex w-fit rounded-btn bg-dark px-[35px] py-5 text-center font-normal text-white transition-transform hover:translate-y-[-2px]"
            >
              Get your free proposal
            </a>
          </div>
          <img
            src={SECTION_IMAGES.cta}
            alt=""
            width={494}
            height={394}
            className="h-auto max-h-[min(394px,45vh)] w-full max-w-[494px] shrink-0 object-contain lg:max-h-[394px]"
            decoding="async"
          />
        </motion.div>
      </Container>
    </section>
  );
}
