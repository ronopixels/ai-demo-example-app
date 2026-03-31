import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import { cn } from "@/lib/cn";

export type CtaSectionProps = {
  title: string;
  description?: string;
  className?: string;
};

export function CtaSection({ title, description, className }: CtaSectionProps) {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl px-4 py-16 sm:px-6",
        className
      )}
    >
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-12 text-center dark:border-zinc-800 dark:bg-zinc-900/40 sm:px-12">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-3 max-w-xl text-pretty text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={routes.auth.signUp}>Start free</Button>
          <Button href={routes.marketing.contact} variant="outline">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
}
