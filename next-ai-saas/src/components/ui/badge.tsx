import { cn } from "@/lib/cn";

const variants = {
  default: "border-transparent bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
  secondary: "border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  outline: "border-zinc-300 text-zinc-900 dark:border-zinc-600 dark:text-zinc-100",
  success: "border-transparent bg-emerald-600 text-white dark:bg-emerald-500",
  destructive: "border-transparent bg-red-600 text-white dark:bg-red-500",
} as const;

export type BadgeProps = React.ComponentProps<"span"> & {
  variant?: keyof typeof variants;
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
