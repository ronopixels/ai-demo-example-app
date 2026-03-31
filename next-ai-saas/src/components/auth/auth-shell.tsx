import type { ReactNode } from "react";
import Link from "next/link";
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
  return (
    <div
      className={cn(
        "flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black",
        className
      )}
    >
      <div className="mb-8 text-center">
        <Link
          href={routes.home}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteConfig.name}
        </Link>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
