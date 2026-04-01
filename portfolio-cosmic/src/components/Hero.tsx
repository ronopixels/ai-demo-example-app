import gsap from "gsap";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { HLS_URL, useHls } from "@/hooks/useHls";

const ROLES = ["Creative", "Fullstack", "Founder", "Scholar"] as const;
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
] as const;

function useActiveSection() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const ids = [
      { id: "home", label: "Home" },
      { id: "work", label: "Work" },
      { id: "resume", label: "Resume" },
    ] as const;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const found = ids.find((x) => x.id === e.target.id);
            if (found) setActive(found.label);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    for (const { id } of ids) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return active;
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const activeNav = useActiveSection();

  useHls(videoRef, HLS_URL);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } }).from(
        ".name-reveal",
        { opacity: 0, y: 50, duration: 1.2 },
        0.1
      ).from(
        ".blur-in",
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          duration: 1,
          stagger: 0.1,
        },
        0.3
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const scrollToWork = useCallback(() => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-screen overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="pointer-events-none absolute inset-0 bg-black/20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <nav
          className={`inline-flex items-center rounded-full border border-white/10 bg-surface/90 px-2 py-2 backdrop-blur-md transition-shadow ${
            scrolled ? "shadow-md shadow-black/10" : ""
          }`}
          aria-label="Primary"
        >
          <a
            href="#home"
            className="group relative flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)] p-[1.5px] transition-all duration-300 group-hover:bg-[linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]">
              <span className="flex size-full items-center justify-center rounded-full bg-bg">
                <span className="font-display text-[13px] italic text-text-primary">JA</span>
              </span>
            </span>
          </a>

          <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

          <div className="flex items-center gap-0.5">
            {NAV.map(({ label, href }) => {
              const isActive = activeNav === label;
              return (
                <a
                  key={label}
                  href={href}
                  className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                    isActive
                      ? "bg-stroke/50 text-text-primary"
                      : "text-muted hover:bg-stroke/50 hover:text-text-primary"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

          <div className="group relative rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="pointer-events-none absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 accent-gradient-border group-hover:opacity-100" />
            <a
              href="mailto:hello@michaelsmith.com"
              className="relative flex items-center gap-1 rounded-full bg-surface/95 px-2 py-1 text-xs backdrop-blur-md transition-colors group-hover:text-text-primary sm:text-sm"
            >
              Say hi
              <span aria-hidden>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:px-10">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          COLLECTION &apos;26
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          Michael Smith
        </h1>

        <p className="blur-in mb-12 text-sm text-muted md:text-base">
          A{" "}
          <span key={roleIndex} className="inline-block font-display italic text-text-primary animate-role-fade-in">
            {ROLES[roleIndex]}
          </span>{" "}
          lives in Chicago.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>

        <div className="blur-in inline-flex flex-wrap justify-center gap-4">
          <div className="rounded-full bg-transparent p-[2px] transition-transform hover:scale-105 hover:bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]">
            <button
              type="button"
              onClick={scrollToWork}
              className="block rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-colors hover:bg-bg hover:text-text-primary"
            >
              See Works
            </button>
          </div>

          <div className="rounded-full bg-transparent p-[2px] transition-transform hover:scale-105 hover:bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]">
            <a
              href="mailto:hello@michaelsmith.com"
              className="block rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-colors hover:border-transparent hover:bg-bg"
            >
              Reach out...
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <div className="absolute left-0 top-0 h-1/2 w-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
