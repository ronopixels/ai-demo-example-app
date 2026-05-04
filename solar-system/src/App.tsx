import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { InteractiveLessonsSection } from "./components/InteractiveLessonsSection";
import {
  DwarfSection,
  ExplorerIntro,
  FaqSection,
  MissionsSection,
  ScaleSection,
  ScienceSection,
} from "./components/ContentSections";
import { planets } from "./data/planets";

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>("earth");

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <ExplorerIntro />

        <InteractiveLessonsSection
          selectedId={selectedId}
          onSelectId={setSelectedId}
        />

        <section
          id="worlds"
          className="scroll-mt-24 border-b border-white/5 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Meet the planets
            </h2>
            <p className="mt-3 max-w-3xl text-slate-400">
              Tap a card to pick a planet — then open{" "}
              <strong className="text-slate-200">Grand space tour</strong> in{" "}
              <a
                href="#interactive-labs"
                className="font-medium text-sky-300 hover:underline"
              >
                3D Labs
              </a>{" "}
              to see it glow in the big 3D world. Facts are rounded for kids —
              check NASA for exact numbers.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {planets.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  className={`text-left transition ${
                    selectedId === p.id
                      ? "ring-2 ring-sky-400/60"
                      : "hover:ring-1 hover:ring-white/20"
                  } glass group rounded-2xl p-5`}
                >
                  <div
                    className="h-2 w-2 rounded-full shadow-lg ring-2 ring-white/20"
                    style={{
                      backgroundColor: p.color,
                      boxShadow: `0 0 20px ${p.color}`,
                    }}
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold text-white group-hover:text-sky-100">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {p.category.replace("_", " ")}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm text-slate-400">
                    {p.summary}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <ScienceSection />
        <ScaleSection />
        <MissionsSection />
        <DwarfSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
