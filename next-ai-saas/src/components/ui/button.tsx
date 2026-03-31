import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  default:
    "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200",
  outline:
    "border border-zinc-300 bg-transparent hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900",
  ghost: "border border-transparent bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900",
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Button(
  props: Common &
    ({ href: string } & Omit<React.ComponentProps<typeof Link>, "children" | "className">)
) {
  const { variant = "default", className, children, href, ...linkProps } = props;
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100",
        variants[variant],
        className
      )}
      {...linkProps}
    >
      {children}
    </Link>
  );
}

export function ButtonNative(
  props: Common & Omit<React.ComponentProps<"button">, "children" | "className">
) {
  const { variant = "default", className, children, type = "button", ...btnProps } = props;
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100",
        variants[variant],
        className
      )}
      {...btnProps}
    >
      {children}
    </button>
  );
}
