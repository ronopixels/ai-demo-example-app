import { useEffect, useRef, useState } from "react";
import { MARQUEE_ROW1, MARQUEE_ROW2 } from "@/data/content";

function triple<T>(arr: readonly T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [tx, setTx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.offsetTop;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setTx(raw);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = triple([...MARQUEE_ROW1]);
  const row2 = triple([...MARQUEE_ROW2]);

  return (
    <section
      ref={ref}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-hidden
    >
      <div className="flex flex-col gap-3 overflow-hidden">
        <div
          className="flex w-max gap-3 will-change-transform"
          style={{ transform: `translateX(${tx - 200}px)` }}
        >
          {row1.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              width={420}
              height={270}
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div
          className="flex w-max gap-3 will-change-transform"
          style={{ transform: `translateX(${-(tx - 200)}px)` }}
        >
          {row2.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              width={420}
              height={270}
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
