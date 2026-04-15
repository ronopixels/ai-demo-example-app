import { FadeIn } from "@/components/FadeIn";
import { SERVICES } from "@/data/content";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>
      <div className="mx-auto max-w-5xl divide-y divide-[rgba(12,12,12,0.15)]">
        {SERVICES.map((item, i) => (
          <FadeIn key={item.n} delay={i * 0.1} y={24} className="py-8 sm:py-10 md:py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12 lg:gap-16">
              <span
                className="shrink-0 font-black text-[#0C0C0C]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {item.n}
              </span>
              <div className="flex flex-col gap-3">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C]/60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
