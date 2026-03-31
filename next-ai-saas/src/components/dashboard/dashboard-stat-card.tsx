import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type DashboardStatCardProps = {
  title: string;
  value: string;
  /** e.g. "+12% vs last week" */
  change?: string;
  /** Positive = good (green), negative = red */
  changeTone?: "positive" | "negative" | "neutral";
  className?: string;
};

export function DashboardStatCard({
  title,
  value,
  change,
  changeTone = "neutral",
  className,
}: DashboardStatCardProps) {
  const toneClass =
    changeTone === "positive"
      ? "text-emerald-600 dark:text-emerald-400"
      : changeTone === "negative"
        ? "text-red-600 dark:text-red-400"
        : "text-zinc-500 dark:text-zinc-400";

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{value}</p>
        {change ? <p className={cn("mt-1 text-xs", toneClass)}>{change}</p> : null}
      </CardContent>
    </Card>
  );
}
