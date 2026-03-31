import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type WorkflowCardProps = {
  title: string;
  description?: string;
  status: "running" | "idle" | "failed";
  lastRunLabel: string;
  href?: string;
  className?: string;
};

const statusVariant: Record<WorkflowCardProps["status"], "success" | "secondary" | "destructive"> = {
  running: "success",
  idle: "secondary",
  failed: "destructive",
};

export function WorkflowCard({
  title,
  description,
  status,
  lastRunLabel,
  href,
  className,
}: WorkflowCardProps) {
  const titleNode = href ? (
    <Link href={href} className="hover:underline">
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
        <div>
          <CardTitle className="text-base">{titleNode}</CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </div>
        <Badge variant={statusVariant[status]}>{status}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{lastRunLabel}</p>
      </CardContent>
    </Card>
  );
}
