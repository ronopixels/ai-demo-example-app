"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/constants/site-config";
import { routes } from "@/routes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/cn";

export type AuthShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function AuthShell({ title, description, children, className }: AuthShellProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={cn(
        "flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black",
        className
      )}
    >
      <motion.div
        className="mb-8 text-center"
        initial={reduce ? false : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href={routes.home}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteConfig.name}
        </Link>
      </motion.div>
      <motion.div
        className="w-full max-w-md"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, delay: reduce ? 0 : 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {description ? <CardDescription>{description}</CardDescription> : null}
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
