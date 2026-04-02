import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
};

/**
 * Word-by-word blur-to-clear: blur(10px)→blur(5px)→blur(0), opacity 0→0.5→1, y 50→-5→0.
 * 100ms stagger between words (delay: index * 0.1), ~0.35s per step in the keyframe chain.
 */
export function BlurText({ text, className }: BlurTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <h1 ref={ref} className={cn("flex flex-wrap justify-center gap-x-3 gap-y-1", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
          animate={
            isInView
              ? {
                  opacity: [0, 0.5, 1],
                  filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 1.05,
            times: [0, 0.33, 1],
            ease: "easeOut",
            delay: i * 0.1,
          }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
