"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index for stacked sections (multiplied by base delay). */
  staggerIndex?: number;
};

const staggerStep = 0.06;

export function FadeInView({ children, className, staggerIndex = 0 }: FadeInViewProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px 0px" }}
      transition={{
        duration: 0.45,
        delay: staggerIndex * staggerStep,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
