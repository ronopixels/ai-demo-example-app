import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";

import { BlurText } from "@/components/BlurText";
import { HERO_MP4 } from "@/constants/media";

const PARTNERS = ["Stripe", "Vercel", "Linear", "Notion", "Figma"] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[1000px] flex-col overflow-visible bg-black"
    >
      <video
        className="absolute left-0 top-[20%] z-0 h-auto w-full object-contain"
        src={HERO_MP4}
        poster="/images/hero_bg.jpeg"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-black/5" />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-b from-transparent to-black"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-0 pt-[150px] text-center">
        <div className="liquid-glass mx-auto mb-10 inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-4">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">New</span>
          <span className="font-body text-sm font-medium text-white/90">
            Introducing AI‑powered web design.
          </span>
        </div>

        <BlurText
          text="The Website Your Brand Deserves"
          className="mx-auto max-w-5xl justify-center font-heading text-6xl italic leading-[0.8] tracking-[-4px] text-foreground md:text-7xl lg:text-[5.5rem]"
        />

        <motion.p
          className="mx-auto mt-8 max-w-2xl font-body text-sm font-light text-white/60 md:text-base"
          initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly
          reimagined.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a
            href="#cta"
            className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-medium text-white"
          >
            Get Started
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-body text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <Play className="size-4 fill-current" />
            Watch the Film
          </button>
        </motion.div>

        <div className="mt-auto flex flex-col items-center pb-8 pt-16">
          <p className="mb-6 font-body text-xs font-light uppercase tracking-widest text-white/40">
            Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {PARTNERS.map((name) => (
              <span key={name} className="font-heading text-2xl italic text-white md:text-3xl">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
