"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
};

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
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
    </motion.div>
  );
}
