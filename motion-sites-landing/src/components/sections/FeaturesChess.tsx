import { ArrowUpRight } from "lucide-react";

import { FEATURE_GIF_1, FEATURE_GIF_2 } from "@/constants/media";

export function FeaturesChess() {
  return (
    <section id="work" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-16 lg:px-24">
        <div className="section-badge">Capabilities</div>
        <h2 className="section-heading max-w-3xl">Pro features. Zero complexity.</h2>

        <div className="mt-16 flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <h3 className="font-heading text-2xl italic tracking-tight text-white md:text-3xl">
              Designed to convert. Built to perform.
            </h3>
            <p className="section-body mt-4 max-w-lg md:text-base">
              Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours
              to outperform them all.
            </p>
            <a
              href="#cta"
              className="liquid-glass-strong mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium text-white"
            >
              Learn more
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </a>
          </div>
          <div className="liquid-glass flex-1 overflow-hidden rounded-2xl">
            <img src={FEATURE_GIF_1} alt="" className="aspect-video w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-16 lg:mt-24 lg:flex-row-reverse lg:items-center lg:gap-16">
          <div className="flex-1">
            <h3 className="font-heading text-2xl italic tracking-tight text-white md:text-3xl">
              It gets smarter. Automatically.
            </h3>
            <p className="section-body mt-4 max-w-lg md:text-base">
              Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real
              time. No manual updates. Ever.
            </p>
            <a
              href="#services"
              className="liquid-glass-strong mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 font-body text-sm font-medium text-white"
            >
              See how it works
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </a>
          </div>
          <div className="liquid-glass flex-1 overflow-hidden rounded-2xl">
            <img src={FEATURE_GIF_2} alt="" className="aspect-video w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
