import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/cn";

export type ProductPreviewSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  className?: string;
};

export function ProductPreviewSection({
  eyebrow,
  title,
  description,
  bullets,
  className,
}: ProductPreviewSectionProps) {
  return (
    <section className={cn("py-16 dark:bg-zinc-950/40", className)}>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={description}
            align="left"
            className="max-w-xl"
          />
          <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-emerald-600 dark:text-emerald-400" aria-hidden>
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-inner dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950"
          aria-hidden
        >
          <div className="absolute inset-4 rounded-lg border border-dashed border-zinc-300/80 dark:border-zinc-600 dark:text-zinc-500">
            <div className="flex h-full items-center justify-center p-4 text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Product screenshot placeholder
              <br />
              <span className="mt-1 block font-normal text-zinc-400 dark:text-zinc-500">
                Replace with /public or CMS image
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
