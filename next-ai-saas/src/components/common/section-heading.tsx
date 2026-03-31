import { cn } from "@/lib/cn";

export type SectionHeadingProps = {
  /** Small label above the title */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-2",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{eyebrow}</p>
      ) : null}
      <Tag className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        {title}
      </Tag>
      {subtitle ? (
        <p className="text-pretty text-base text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
