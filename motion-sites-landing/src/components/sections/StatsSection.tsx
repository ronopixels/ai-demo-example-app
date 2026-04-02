import { HlsVideoBackdrop } from "@/components/HlsVideoBackdrop";
import { HLS_STATS } from "@/constants/media";

const STATS = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
] as const;

export function StatsSection() {
  return (
    <section id="process" className="relative bg-black">
      <HlsVideoBackdrop src={HLS_STATS} desaturate className="py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
          <div className="liquid-glass rounded-3xl p-12 md:p-16">
            <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-4xl italic text-white md:text-5xl lg:text-6xl">{s.value}</p>
                  <p className="section-body mt-2 text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HlsVideoBackdrop>
    </section>
  );
}
