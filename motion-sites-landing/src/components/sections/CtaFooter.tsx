import { HlsVideoBackdrop } from "@/components/HlsVideoBackdrop";
import { HLS_CTA_FOOTER } from "@/constants/media";

export function CtaFooter() {
  return (
    <HlsVideoBackdrop src={HLS_CTA_FOOTER} className="bg-black pb-8 pt-16 md:pb-12 md:pt-20">
      <div id="cta" className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-5xl italic tracking-tight text-white md:text-6xl lg:text-7xl">
          Your next website starts here.
        </h2>
        <p className="section-body mx-auto mt-6 max-w-lg md:text-base">
          Book a free strategy call. See what AI‑powered design can do.
        </p>
        <div id="pricing" className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@studio.design"
            className="liquid-glass-strong inline-flex rounded-full px-8 py-3.5 font-body text-sm font-medium text-white"
          >
            Book a Call
          </a>
          <a
            href="#pricing"
            className="inline-flex rounded-full bg-white px-8 py-3.5 font-body text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            View Pricing
          </a>
        </div>

        <footer className="mt-32 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
            <p>© 2026 Studio</p>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#" className="transition-colors hover:text-white/70">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-white/70">
                Terms
              </a>
              <a href="mailto:hello@studio.design" className="transition-colors hover:text-white/70">
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </HlsVideoBackdrop>
  );
}
