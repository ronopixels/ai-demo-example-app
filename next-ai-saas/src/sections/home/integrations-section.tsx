import { SectionHeading } from "@/components/common/section-heading";
import { cn } from "@/lib/cn";

export type IntegrationItem = { id: string; name: string };

export type IntegrationsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly IntegrationItem[];
  className?: string;
};

export function IntegrationsSection({
  eyebrow,
  title,
  description,
  items,
  className,
}: IntegrationsSectionProps) {
  return (
    <section className={cn("border-y border-zinc-200 py-16 dark:border-zinc-800", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex aspect-square items-center justify-center rounded-xl border border-zinc-200 bg-white text-center text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-zinc-700"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
