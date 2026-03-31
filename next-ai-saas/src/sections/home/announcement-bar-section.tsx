import Link from "next/link";
import { cn } from "@/lib/cn";

export type AnnouncementBarSectionProps = {
  message: string;
  href: string;
  linkLabel: string;
  className?: string;
};

export function AnnouncementBarSection({
  message,
  href,
  linkLabel,
  className,
}: AnnouncementBarSectionProps) {
  return (
    <div
      className={cn(
        "border-b border-zinc-200 bg-zinc-100/90 dark:border-zinc-800 dark:bg-zinc-900/80",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-2.5 text-center text-sm text-zinc-800 dark:text-zinc-200 sm:justify-between sm:text-left">
        <p className="text-pretty">{message}</p>
        <Link
          href={href}
          className="shrink-0 font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          {linkLabel} →
        </Link>
      </div>
    </div>
  );
}
