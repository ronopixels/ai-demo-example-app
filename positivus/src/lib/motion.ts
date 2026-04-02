import type { Transition, Variants } from "framer-motion";

export function fadeUpProps(reducedMotion: boolean | null) {
  const reduced = reducedMotion === true;
  return {
    initial: reduced ? "visible" : "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-48px" as const },
    variants: fadeUpVariants,
    transition: reduced
      ? ({ duration: 0 } satisfies Transition)
      : ({ duration: 0.45, ease: [0.22, 1, 0.36, 1] } satisfies Transition),
  };
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
} satisfies Variants;

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};
