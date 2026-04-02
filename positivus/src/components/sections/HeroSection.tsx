import { motion } from "framer-motion";
import { SECTION_IMAGES } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUpProps, staggerContainer, staggerItem } from "@/lib/motion";
import { HeroClientLogosMarquee } from "@/components/sections/HeroClientLogosMarquee";

export function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="pb-16 pt-4 lg:pb-20" id="about">
      <Container className="flex flex-col gap-10 lg:gap-section">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-[100px]">
          <motion.div
            className="flex max-w-[531px] flex-col gap-[35px]"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: reduced === true ? 0 : 0.09,
              delayChildren: reduced === true ? 0 : 0.04,
            }}
          >
            <motion.h1
              variants={staggerItem}
              className="text-h1 font-medium tracking-tight text-dark"
            >
              Navigating the digital landscape for success
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-lead max-w-[498px] font-normal text-dark"
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </motion.p>
            <motion.div variants={staggerItem}>
              <a
                href="#contact"
                className="text-lead inline-flex rounded-btn bg-dark px-[35px] py-5 text-center font-normal text-white transition-transform hover:translate-y-[-2px] active:translate-y-0"
              >
                Book a consultation
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full flex-1 lg:max-w-[50%]"
            {...fadeUpProps(reduced)}
          >
            <img
              src={SECTION_IMAGES.hero}
              alt=""
              width={600}
              height={515}
              className="mx-auto w-full max-w-[600px] object-contain"
              decoding="async"
            />
          </motion.div>
        </div>
        <HeroClientLogosMarquee />
      </Container>
    </section>
  );
}
