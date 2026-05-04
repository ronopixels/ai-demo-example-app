import { lazy, Suspense, useCallback, useState } from "react";
import type { LessonId } from "../data/lessons";
import { lessons } from "../data/lessons";
import { SelectionPanel } from "./SelectionPanel";
import { KidLessonPanel } from "./labs/KidLessonPanel";

const SolarSystemCanvas = lazy(async () => {
  const m = await import("./SolarSystemCanvas");
  return { default: m.SolarSystemCanvas };
});
const ScaleComparisonCanvas = lazy(async () => {
  const m = await import("./labs/ScaleComparisonCanvas");
  return { default: m.ScaleComparisonCanvas };
});
const OrbitRaceCanvas = lazy(async () => {
  const m = await import("./labs/OrbitRaceCanvas");
  return { default: m.OrbitRaceCanvas };
});
const EarthMoonLabCanvas = lazy(async () => {
  const m = await import("./labs/EarthMoonLabCanvas");
  return { default: m.EarthMoonLabCanvas };
});

function CanvasFallback() {
  return (
    <div className="relative flex aspect-[4/3] min-h-[280px] w-full items-center justify-center bg-black/50 md:min-h-[420px]">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
        <p className="text-sm font-medium text-sky-200/90">Loading 3D lesson…</p>
      </div>
    </div>
  );
}

type Props = {
  selectedId: string | null;
  onSelectId: (id: string | null) => void;
};

export function InteractiveLessonsSection({ selectedId, onSelectId }: Props) {
  const [lessonId, setLessonId] = useState<LessonId>("tour");
  const [moonPick, setMoonPick] = useState<"earth" | "moon" | null>(null);
  const handleMoonPick = useCallback((k: "earth" | "moon" | null) => {
    setMoonPick(k);
  }, []);

  const canvasClass = "relative aspect-[4/3] w-full min-h-[280px] md:min-h-[420px]";

  return (
    <section
      id="interactive-labs"
      className="scroll-mt-24 border-b border-white/5 px-4 py-10 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-100">
              <span aria-hidden>🧑‍🚀</span> Interactive lessons
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Four 3D adventures
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
              Pick a mission below — each one has its own WebGL world, kid-friendly steps, and a tiny quiz so learning
              feels like a game.
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {lessons.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => {
                setLessonId(l.id);
                setMoonPick(null);
              }}
              className={`flex min-h-[48px] items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition ${
                lessonId === l.id
                  ? "border-sky-400/60 bg-sky-500/20 text-white shadow-lg shadow-sky-500/10"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg" aria-hidden>
                {l.emoji}
              </span>
              {l.title}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="canvas-glow relative overflow-hidden rounded-3xl border border-sky-500/25 bg-black/40 ring-1 ring-white/10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-violet-600/10" />
            <Suspense fallback={<CanvasFallback />}>
              {lessonId === "tour" && (
                <SolarSystemCanvas
                  className={canvasClass}
                  selectedId={selectedId}
                  onSelectId={onSelectId}
                />
              )}
              {lessonId === "sizes" && <ScaleComparisonCanvas className={canvasClass} />}
              {lessonId === "race" && <OrbitRaceCanvas className={canvasClass} />}
              {lessonId === "moon" && (
                <EarthMoonLabCanvas className={canvasClass} onPick={handleMoonPick} />
              )}
            </Suspense>
            <p className="relative border-t border-white/10 bg-black/55 px-4 py-3 text-center text-xs text-slate-400">
              {lessonId === "tour" && "Drag to orbit · Scroll to zoom · Click a world"}
              {lessonId === "sizes" && "Drag to spin the parade — planets bounce gently"}
              {lessonId === "race" && "Drag to fly around the race track — who laps fastest?"}
              {lessonId === "moon" && "Drag to explore · Tap Earth or the Moon for facts"}
            </p>
          </div>

          {lessonId === "tour" ? (
            <SelectionPanel selectedId={selectedId} onSelect={onSelectId} />
          ) : (
            <KidLessonPanel key={lessonId} lessonId={lessonId} moonPick={moonPick} />
          )}
        </div>
      </div>
    </section>
  );
}
