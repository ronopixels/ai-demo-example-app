import { Button } from "@/components/Button";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const mondwest = { fontFamily: "'PP Mondwest', serif" } as const;

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      ref={ref}
      className={`mx-auto w-full max-w-[440px] px-6 pt-12 md:pt-16 ${
        !isInView ? "opacity-0" : ""
      } ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0s" : undefined }}
    >
      <h1
        className="text-center text-[32px] font-semibold leading-tight text-[#051A24] md:text-[40px] lg:text-[44px]"
        style={mondwest}
      >
        V Vortex
      </h1>
      <p className="mt-4 text-center font-mono text-xs text-[#051A24] md:text-sm">
        The creative studio of Sarah Vortex
      </p>
      <h2 className="mt-10 text-balance text-3xl font-medium leading-snug text-[#051A24] md:text-4xl">
        Build the{" "}
        <span className="font-semibold" style={mondwest}>
          next wave
        </span>
        , the{" "}
        <span className="font-semibold" style={mondwest}>
          bold way.
        </span>
      </h2>
      <div className="mt-8 space-y-4 text-pretty text-base leading-relaxed text-vortex-muted md:text-[17px]">
        <p>
          Sarah spent years at Apple shaping products people live in every day — from pixels to narrative. That
          craft now lives here: a studio obsessed with clarity, restraint, and work that feels inevitable.
        </p>
        <p>
          V Vortex partners with founders and teams who want flagship-level creative without the agency theater. We
          prototype fast, design with opinion, and ship work that holds up in the real world.
        </p>
        <p>
          Partnerships start at <span className="font-medium text-vortex-primary">$25,000/month</span> — a single
          monthly engagement that covers strategy, visual systems, and hands-on execution alongside your builders.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="#partner" variant="primary">
          Start a chat
        </Button>
        <Button href="#projects" variant="secondary">
          View projects
        </Button>
      </div>
    </section>
  );
}
