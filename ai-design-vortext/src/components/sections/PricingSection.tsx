import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="pricing"
      ref={ref}
      className={`mx-auto w-full max-w-7xl px-6 py-16 md:py-24 ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.3s" : undefined }}
    >
      <div className="flex flex-col items-end gap-6 md:flex-row md:justify-end md:gap-8">
        <article className="w-full max-w-md rounded-3xl bg-[#051A24] p-8 text-vortex-light shadow-[0_24px_80px_rgba(5,26,36,0.35)] md:w-[min(100%,380px)]">
          <p className="text-sm font-medium uppercase tracking-wider text-vortex-light-muted">Monthly Partnership</p>
          <p className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">$25,000</p>
          <p className="mt-2 text-sm text-vortex-light-muted">per month · embedded creative + systems</p>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-vortex-light-muted">
            <li>— Dedicated strategy &amp; design sprints</li>
            <li>— Brand, product, and launch assets</li>
            <li>— Async + live sessions with your team</li>
          </ul>
        </article>

        <article className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-8 shadow-[0_4px_40px_rgba(5,26,36,0.08)] md:w-[min(100%,380px)]">
          <p className="text-sm font-medium uppercase tracking-wider text-vortex-muted">Custom Project</p>
          <p className="mt-4 text-4xl font-semibold tracking-tight text-[#051A24] md:text-5xl">$25,000</p>
          <p className="mt-2 text-sm text-vortex-muted">fixed scope · one flagship deliverable</p>
          <ul className="mt-8 space-y-3 text-sm leading-relaxed text-vortex-muted">
            <li>— Defined timeline &amp; milestones</li>
            <li>— Brand, site, or campaign system</li>
            <li>— Handoff + documentation included</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
