import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WORDS = ["Design", "Create", "Inspire"] as const;
const DURATION_MS = 2700;

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef(0);
  const finishedRef = useRef(false);

  useEffect(() => {
    const tick = (t: number) => {
      if (finishedRef.current) return;
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const pct = Math.min(100, Math.floor((elapsed / DURATION_MS) * 100));
      setCount(pct);

      if (elapsed >= DURATION_MS) {
        finishedRef.current = true;
        setCount(100);
        window.setTimeout(() => onComplete(), 400);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <motion.p
        className="absolute left-8 top-8 text-xs uppercase tracking-[0.3em] text-muted"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Portfolio
      </motion.p>

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="relative h-[1.2em] min-w-[12ch] text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[wordIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
            >
              {WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <p className="absolute bottom-20 right-8 font-display text-6xl tabular-nums text-text-primary md:bottom-24 md:text-8xl lg:text-9xl">
        {String(count).padStart(3, "0")}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left shadow-[0_0_8px_rgba(137,170,204,0.35)]"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </motion.div>
  );
}
