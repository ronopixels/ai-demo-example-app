import { SectionHeading } from "@/components/common/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type AnalyticsMetric = {
  label: string;
  value: string;
  change: string;
  tone: "positive" | "negative" | "neutral";
};

export type AnalyticsPreviewSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  metrics: readonly AnalyticsMetric[];
  className?: string;
};

export function AnalyticsPreviewSection({
  eyebrow,
  title,
  description,
  metrics,
  className,
}: AnalyticsPreviewSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={description} align="center" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {metrics.map((m) => (
            <Card key={m.label}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {m.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{m.value}</p>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    m.tone === "positive" && "text-emerald-600 dark:text-emerald-400",
                    m.tone === "negative" && "text-red-600 dark:text-red-400",
                    m.tone === "neutral" && "text-zinc-500 dark:text-zinc-400"
                  )}
                >
                  {m.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
