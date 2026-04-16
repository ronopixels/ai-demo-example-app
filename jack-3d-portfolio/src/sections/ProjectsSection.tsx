import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "@/components/LiveProjectButton";
import { PROJECTS } from "@/data/content";

const TOTAL = PROJECTS.length;

/** Per-card scroll runway — must be > 100vh so each card can stick while the next slides over it. */
const CARD_SCROLL_RUNWAY = "h-[200vh]";

/**
 * Negative margin pulls the next card’s scroll section up so stickies overlap in the viewport
 * (classic stacked-cards layout). Tune alongside CARD_SCROLL_RUNWAY.
 */
const STACK_OVERLAP = "mt-[-165vh] sm:mt-[-168vh] md:mt-[-172vh]";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [Math.min(1, targetScale + 0.06), targetScale],
  );

  return (
    <div
      ref={containerRef}
      className={`relative ${CARD_SCROLL_RUNWAY} ${index > 0 ? STACK_OVERLAP : ""}`}
      style={{ zIndex: 10 + index }}
    >
      {/* Sticky on a plain div; scale only on motion.div. Later cards sit above earlier ones via z-index. */}
      <div
        className="project-sticky-card sticky mx-auto max-w-6xl px-4 sm:px-6 md:px-8"
        style={{ ["--stack" as string]: `${index * 28}px` }}
      >
        <motion.div
          className="origin-top will-change-transform"
          style={{ scale }}
        >
          <div className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-wrap items-end gap-4 md:gap-8">
                <span
                  className="font-black text-[#D7E2EA]"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 0.85,
                  }}
                >
                  {project.num}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/80">
                    {project.category}
                  </span>
                  <h3
                    className="font-medium uppercase text-[#D7E2EA]"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
              <LiveProjectButton className="shrink-0 self-start md:self-auto" />
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
              <div className="flex w-full flex-col gap-3 md:w-[40%]">
                <img
                  src={project.col1a}
                  alt=""
                  className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                  style={{ height: "clamp(130px, 16vw, 230px)" }}
                  loading="lazy"
                />
                <img
                  src={project.col1b}
                  alt=""
                  className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                  style={{ height: "clamp(160px, 22vw, 340px)" }}
                  loading="lazy"
                />
              </div>
              <div className="w-full md:w-[60%]">
                <img
                  src={project.col2}
                  alt=""
                  className="h-full min-h-[200px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:min-h-[400px] md:rounded-[60px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]"
    >
      <h2
        className="hero-heading px-5 pb-8 pt-16 text-center font-black uppercase leading-none tracking-tight sm:px-8 md:px-10"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>
      <div className="isolate pb-[min(28vh,8rem)]">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
