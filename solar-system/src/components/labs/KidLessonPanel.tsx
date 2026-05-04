import { useState } from "react";
import type { LessonId } from "../../data/lessons";
import { getLesson } from "../../data/lessons";

type Props = {
  lessonId: LessonId;
  moonPick: "earth" | "moon" | null;
};

const moonFacts: Record<"earth" | "moon", string> = {
  earth:
    "Earth is our home — liquid water, a thick atmosphere, and a magnetic field help protect life from harsh space weather.",
  moon: "The Moon is airless and gray, but it shapes tides, steadies Earth’s tilt a little, and is the farthest place humans have walked!",
};

export function KidLessonPanel({ lessonId, moonPick }: Props) {
  const lesson = getLesson(lessonId);
  const [quizIndex, setQuizIndex] = useState<number | null>(null);
  const [celebrate, setCelebrate] = useState(false);

  const handlePick = (i: number) => {
    setQuizIndex(i);
    if (i === lesson.quiz.correctIndex) {
      setCelebrate(true);
      window.setTimeout(() => setCelebrate(false), 2200);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/10 via-sky-500/10 to-violet-600/15 p-5 ring-1 ring-white/10">
        {celebrate && (
          <div
            className="pointer-events-none absolute inset-0 flex animate-pop items-center justify-center bg-amber-400/20 text-4xl"
            aria-hidden
          >
            ✨🌟✨
          </div>
        )}
        <p className="text-xs font-bold uppercase tracking-wider text-amber-200/90">Kid mission</p>
        <h3 className="mt-1 flex items-center gap-2 font-display text-xl font-semibold text-white">
          <span className="animate-bounce-gentle text-2xl" aria-hidden>
            {lesson.emoji}
          </span>
          {lesson.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">{lesson.tagline}</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Your steps</p>
        <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-slate-200">
          {lesson.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </div>

      <div className="rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-200">Try this challenge</p>
        <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
          {lesson.tryThis.map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-fuchsia-300" aria-hidden>
                ★
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {lessonId === "moon" && moonPick && (
        <div className="animate-pop rounded-2xl border border-sky-400/40 bg-sky-500/10 p-4 text-sm leading-relaxed text-slate-100">
          <p className="font-display text-sm font-semibold text-white">
            {moonPick === "earth" ? "Earth fact" : "Moon fact"}
          </p>
          <p className="mt-2">{moonFacts[moonPick]}</p>
        </div>
      )}

      <div className="rounded-2xl border border-white/10 bg-void/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-200">Mini quiz</p>
        <p className="mt-2 font-medium text-white">{lesson.quiz.question}</p>
        <div className="mt-3 grid gap-2">
          {lesson.quiz.options.map((opt, i) => {
            const picked = quizIndex === i;
            const correct = i === lesson.quiz.correctIndex;
            const wrong = picked && !correct;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => handlePick(i)}
                className={`rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition ${
                  picked && correct
                    ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-50"
                    : wrong
                      ? "border-rose-400/50 bg-rose-500/15 text-rose-100"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-sky-400/40 hover:bg-sky-500/10"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {quizIndex !== null && quizIndex === lesson.quiz.correctIndex && (
          <p className="mt-3 text-sm font-medium text-emerald-300">{lesson.quiz.praise}</p>
        )}
        {quizIndex !== null && quizIndex !== lesson.quiz.correctIndex && (
          <p className="mt-3 text-sm text-rose-200/90">Nice try — pick another answer!</p>
        )}
      </div>
    </div>
  );
}
