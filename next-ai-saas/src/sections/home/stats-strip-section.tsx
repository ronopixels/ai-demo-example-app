import { cn } from "@/lib/cn";

export type StatItem = { label: string; value: string };

export type StatsStripSectionProps = {
  stats: readonly StatItem[];
  className?: string;
};

export function StatsStripSection({ stats, className }: StatsStripSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200 bg-zinc-100/80 py-10 dark:border-zinc-800 dark:bg-zinc-900/40",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="text-center sm:text-left">
              <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
