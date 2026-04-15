import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMemo, useRef, type CSSProperties } from "react";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

function CharSpan({
  char,
  progress,
  index,
  total,
}: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = "", style }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = useMemo(() => text.split(""), [text]);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <CharSpan key={i} char={char} progress={scrollYProgress} index={i} total={chars.length} />
      ))}
    </p>
  );
}
