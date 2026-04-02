import { ArrowUpRight } from "lucide-react";

import { HlsVideoBackdrop } from "@/components/HlsVideoBackdrop";
import { HLS_HOW_IT_WORKS } from "@/constants/media";

export function HowItWorks() {
  return (
    <section id="services" className="relative">
      <HlsVideoBackdrop src={HLS_HOW_IT_WORKS} className="min-h-[700px] bg-black py-32">
        <div className="mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center px-6 text-center md:px-16 lg:px-24">
          <div className="section-badge">How It Works</div>
          <h2 className="section-heading mt-2 max-w-3xl">You dream it. We ship it.</h2>
          <p className="section-body mx-auto mt-6 max-w-xl md:text-base">
            Share your vision. Our AI handles the rest—wireframes, design, code, launch. All in days, not quarters.
          </p>
          <a
            href="#cta"
            className="liquid-glass-strong mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-body text-sm font-medium text-white"
          >
            Get Started
            <ArrowUpRight className="size-4" strokeWidth={2} />
          </a>
        </div>
      </HlsVideoBackdrop>
    </section>
  );
}
