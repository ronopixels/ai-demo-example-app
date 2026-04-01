import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import { HLS_URL, useHls } from "@/hooks/useHls";

const SEGMENT = "BUILDING THE FUTURE • ";
const MARQUEE_TEXT = Array(10)
  .fill(SEGMENT)
  .join("");

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
] as const;

export function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useHls(videoRef, HLS_URL);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 scale-y-[-1]">
          <video
            ref={videoRef}
            className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden py-10">
          <div
            ref={trackRef}
            className="inline-flex will-change-transform font-display text-4xl italic text-text-primary/90 md:text-5xl lg:text-6xl"
          >
            <span className="shrink-0 px-8">{MARQUEE_TEXT}</span>
            <span className="shrink-0 px-8">{MARQUEE_TEXT}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 px-6">
          <div className="pointer-events-auto rounded-full p-[2px] transition-transform hover:scale-[1.02] hover:bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]">
            <a
              href="mailto:hello@michaelsmith.com"
              className="block rounded-full bg-surface px-10 py-4 text-sm font-medium text-text-primary backdrop-blur-sm md:text-base"
            >
              hello@michaelsmith.com
            </a>
          </div>

          <div className="pointer-events-auto flex flex-col items-center gap-6 text-sm text-muted md:flex-row md:flex-wrap md:justify-center md:gap-8">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-text-primary"
              >
                {s.label}
              </a>
            ))}
            <span className="flex items-center gap-2 text-text-primary/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
