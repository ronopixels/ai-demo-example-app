import { MARQUEE_GIF_URLS } from "@/constants/assets";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function ImageMarquee() {
  const { ref, isInView } = useInViewAnimation();
  const row = [...MARQUEE_GIF_URLS, ...MARQUEE_GIF_URLS];

  return (
    <section
      ref={ref}
      className={`mt-16 mb-16 w-full md:mt-20 ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.1s" : undefined }}
    >
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-track">
          {row.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="mx-3 h-[280px] w-auto shrink-0 rounded-2xl object-cover shadow-lg md:h-[500px]"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
