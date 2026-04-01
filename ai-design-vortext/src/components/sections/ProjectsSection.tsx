import { PROJECT_GIF_URLS } from "@/constants/assets";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const projects = [
  { title: "Aether OS", subtitle: "Product launch & motion system" },
  { title: "Fieldwork Journal", subtitle: "Editorial site & identity" },
  { title: "Brightline Labs", subtitle: "Brand sprint & campaign" },
];

export function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section
      id="projects"
      ref={ref}
      className={`mx-auto w-full max-w-[1200px] px-6 py-16 md:py-24 ${!isInView ? "opacity-0" : ""} ${isInView ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: isInView ? "0.5s" : undefined }}
    >
      <h2 className="text-center text-3xl font-semibold tracking-tight text-[#051A24] md:text-4xl">Selected work</h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-vortex-muted">
        A few recent engagements — motion, product, and brand, built for teams who ship.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_4px_32px_rgba(5,26,36,0.06)]"
          >
            <img
              src={PROJECT_GIF_URLS[i]}
              alt=""
              className="mx-3 mt-3 aspect-[4/3] w-[calc(100%-1.5rem)] rounded-xl object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#051A24]">{p.title}</h3>
              <p className="mt-1 text-sm text-vortex-muted">{p.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
