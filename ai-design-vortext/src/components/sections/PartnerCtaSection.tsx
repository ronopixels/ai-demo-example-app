import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { TRAIL_PREVIEW_URLS } from "@/constants/assets";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

type Trail = { id: number; x: number; y: number; src: string };

export function PartnerCtaSection() {
  const { ref, isInView } = useInViewAnimation();
  const [trails, setTrails] = useState<Trail[]>([]);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);

  const removeTrail = useCallback((id: number) => {
    setTrails((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastSpawn.current < 72) return;
    lastSpawn.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = ++nextId.current;
    const src = TRAIL_PREVIEW_URLS[id % TRAIL_PREVIEW_URLS.length];
    setTrails((prev) => [...prev.slice(-14), { id, x, y, src }]);
  }, []);

  return (
    <section
      id="partner"
      ref={ref}
      className={`mx-auto w-full max-w-4xl px-6 py-20 md:py-28 ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.6s" : undefined }}
    >
      <div
        onMouseMove={onMove}
        className="relative min-h-[360px] overflow-hidden rounded-3xl border border-zinc-200 bg-white p-10 shadow-[0_8px_60px_rgba(5,26,36,0.08)] md:min-h-[420px] md:p-14"
      >
        {trails.map((t) => (
          <TrailPreview key={t.id} trail={t} onRemove={removeTrail} />
        ))}

        <div className="relative z-10 mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#051A24] md:text-4xl">
            Partner with a studio built for builders
          </h2>
          <p className="mt-4 text-pretty text-vortex-muted md:text-lg">
            Move your cursor across this space — previews follow. When you’re ready, we’ll trade sketches for shipped work.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="mailto:hello@vvortex.studio" variant="primary">
              Start a chat
            </Button>
            <Button href="#projects" variant="tertiary">
              See projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrailPreview({ trail, onRemove }: { trail: Trail; onRemove: (id: number) => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fade = window.setTimeout(() => {
      setVisible(false);
    }, 900);
    const remove = window.setTimeout(() => {
      onRemove(trail.id);
    }, 1320);
    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, [trail.id, onRemove]);

  return (
    <div
      className={`-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute z-0 size-20 overflow-hidden rounded-lg border border-white/80 shadow-lg transition-opacity duration-[420ms] ease-out ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ left: trail.x, top: trail.y }}
    >
      <img src={trail.src} alt="" className="size-full object-cover" />
    </div>
  );
}
