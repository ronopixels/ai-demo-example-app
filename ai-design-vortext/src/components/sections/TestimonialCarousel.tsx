import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const testimonials = [
  {
    quote:
      "Sarah’s team made our launch feel inevitable — crisp narrative, fearless visuals, and zero fluff.",
    name: "Jordan Lee",
    role: "CEO, Kaldera",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    quote:
      "The studio operates like an in-house creative org. Fast critiques, tight systems, beautiful output.",
    name: "Morgan Chen",
    role: "Product, North & Co.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    quote:
      "We’ve worked with big agencies. V Vortex was the first partner that felt like an extension of us.",
    name: "Alex Rivera",
    role: "Founder, Studio Meridian",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    quote:
      "From storyboards to shipped UI, the craft is ridiculous. Our investors noticed the difference.",
    name: "Priya Shah",
    role: "COO, Brightline",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
  {
    quote:
      "They don’t decorate — they build language. Our site finally matches how we sound in the room.",
    name: "Sam Okonkwo",
    role: "Head of Brand, Fieldwork",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop",
  },
];

export function TestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation();
  const [index, setIndex] = useState(0);
  const n = testimonials.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + n) % n);
    },
    [n]
  );

  useEffect(() => {
    if (!isInView) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, 3000);
    return () => window.clearInterval(t);
  }, [isInView, n]);

  const current = testimonials[index];

  return (
    <section
      ref={ref}
      className={`mx-auto w-full max-w-7xl px-6 py-16 md:py-24 ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.4s" : undefined }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_4px_40px_rgba(5,26,36,0.06)] md:p-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <img
            src={current.avatar}
            alt=""
            className="size-24 shrink-0 rounded-full object-cover ring-2 ring-[#051A24]/10 md:size-28"
          />
          <div className="min-w-0 text-center md:text-left">
            <p className="text-lg leading-relaxed text-[#051A24] md:text-xl">&ldquo;{current.quote}&rdquo;</p>
            <p className="mt-6 text-base font-semibold text-[#051A24]">{current.name}</p>
            <p className="mt-1 text-sm text-vortex-muted">{current.role}</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#051A24] transition-colors hover:bg-zinc-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-5" strokeWidth={1.75} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-[#051A24]" : "w-1.5 bg-zinc-300"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#051A24] transition-colors hover:bg-zinc-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}
