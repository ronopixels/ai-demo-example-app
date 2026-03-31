import { cn } from "@/lib/cn";

export type LogoStripSectionProps = {
  eyebrow: string;
  logos: readonly string[];
  className?: string;
};

export function LogoStripSection({ eyebrow, logos, className }: LogoStripSectionProps) {
  return (
    <section className={cn("border-b border-zinc-200 py-12 dark:border-zinc-800", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">{eyebrow}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-10 min-w-[100px] items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
