import type { ReactNode } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader>
        {icon ? (
          <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-zinc-100 text-lg dark:bg-zinc-800">
            {icon}
          </div>
        ) : null}
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
