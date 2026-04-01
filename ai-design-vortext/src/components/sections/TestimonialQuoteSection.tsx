import { useEffect, useRef, useState } from "react";
import { PARALLAX_IMAGE_URL } from "@/constants/assets";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const mondwest = { fontFamily: "'PP Mondwest', serif" } as const;

const brands = ["Kaldera", "North & Co.", "Studio Meridian"];

export function TestimonialQuoteSection() {
  const { ref, isInView } = useInViewAnimation();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height / 2;
      const delta = (vh / 2 - center) * 0.08;
      setParallaxY(delta);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className={`mx-auto w-full max-w-2xl px-6 py-20 md:py-28 ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.2s" : undefined }}
    >
      <blockquote className="text-center">
        <p className="text-2xl font-medium leading-snug text-[#051A24] md:text-3xl lg:text-[34px]">
          &ldquo;I still believe in craft that feels like{" "}
          <span style={mondwest} className="text-[#051A24]">
            Apple
          </span>{" "}
          — clear, quiet, inevitable. At V Vortex we build the systems and stories teams actually ship.&rdquo;
        </p>
        <footer className="mt-8 text-lg italic text-vortex-muted">Sarah Vortex</footer>
      </blockquote>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium tracking-wide text-[#051A24]">
        {brands.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </div>

      <div ref={parallaxRef} className="mt-14 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={PARALLAX_IMAGE_URL}
          alt=""
          className="h-[220px] w-full object-cover md:h-[320px]"
          style={{ transform: `translateY(${parallaxY}px)` }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
