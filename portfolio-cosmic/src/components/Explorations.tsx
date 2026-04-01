import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const GALLERY = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
] as const;

export function Explorations() {
  const wrapRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const cards = wrap.querySelectorAll(".parallax-card");
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const dir = i % 2 === 0 ? -1 : 1;
        gsap.to(card, {
          y: dir * (90 + i * 12),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={wrapRef} className="relative min-h-[300vh] bg-bg">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Explorations</p>
              <h2 className="mt-4 text-4xl text-text-primary md:text-5xl lg:text-6xl">
                Visual <span className="font-display italic">playground</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted">
                Experiments in form, color, and motion — a living sketchbook.
              </p>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto mt-8 inline-flex rounded-full border border-stroke bg-surface/80 px-6 py-2.5 text-sm text-text-primary backdrop-blur-sm transition-colors hover:bg-stroke/50"
              >
                Dribbble
              </a>
            </div>

            <div className="relative z-20 grid grid-cols-2 gap-12 pt-28 md:gap-40 md:pt-36">
              <div className="flex flex-col items-center gap-8 md:items-start md:gap-12">
                {GALLERY.slice(0, 3).map((src, i) => (
                  <GalleryCard
                    key={src}
                    src={src}
                    rotation={i % 2 === 0 ? "-rotate-2" : "rotate-2"}
                    onOpen={() => setLightbox(src)}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center gap-8 pt-16 md:items-start md:gap-12 md:pt-32">
                {GALLERY.slice(3, 6).map((src, i) => (
                  <GalleryCard
                    key={src}
                    src={src}
                    rotation={i % 2 === 0 ? "rotate-2" : "-rotate-2"}
                    onOpen={() => setLightbox(src)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox ? (
          <motion.button
            type="button"
            key="lightbox"
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <motion.img
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function GalleryCard({
  src,
  rotation,
  onOpen,
}: {
  src: string;
  rotation: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`parallax-card aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface transition-transform hover:rotate-0 hover:scale-[1.02] ${rotation}`}
    >
      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </button>
  );
}
