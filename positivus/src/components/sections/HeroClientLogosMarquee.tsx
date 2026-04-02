import { motion } from "framer-motion";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { LOGO_CLIENTS } from "@/data/site";

const LOGO_STRIP = [...LOGO_CLIENTS, ...LOGO_CLIENTS];
const LOGO_MARQUEE_LABEL = `Client logos: ${LOGO_CLIENTS.map((l) => l.name).join(", ")}`;

function LogoImg({
  logo,
  decorative,
}: {
  logo: (typeof LOGO_CLIENTS)[number];
  decorative?: boolean;
}) {
  return (
    <img
      src={logo.src}
      alt={decorative ? "" : logo.name}
      className="h-8 w-auto shrink-0 opacity-80 grayscale transition-opacity hover:opacity-100 lg:h-12"
      style={{ mixBlendMode: "luminosity" }}
      draggable={false}
    />
  );
}

export function HeroClientLogosMarquee() {
  const reduced = useReducedMotion();

  return (
    <motion.div className="w-full" {...fadeUpProps(reduced)}>
      {reduced === true ? (
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {LOGO_CLIENTS.map((logo) => (
            <LogoImg key={logo.name} logo={logo} />
          ))}
        </div>
      ) : (
        <div
          className="relative overflow-hidden py-1"
          role="region"
          aria-label={LOGO_MARQUEE_LABEL}
        >
          <div className="hero-logo-marquee-track items-center gap-12 lg:gap-20">
            {LOGO_STRIP.map((logo, i) => (
              <LogoImg key={`${logo.name}-${i}`} logo={logo} decorative />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
