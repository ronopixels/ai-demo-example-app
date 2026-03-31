import Image from "next/image";
import { cn } from "@/lib/cn";

export type AvatarProps = {
  src?: string | null;
  alt: string;
  /** Shown when `src` is missing */
  fallback?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizePx = { sm: 32, md: 40, lg: 56 } as const;

const sizeMap = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-base",
} as const;

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]).join("").toUpperCase().slice(0, 2) || "?";
}

export function Avatar({ src, alt, fallback, className, size = "md" }: AvatarProps) {
  const px = sizePx[size];
  const label = fallback ?? initials(alt);

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-200 font-medium text-zinc-700 ring-2 ring-white dark:bg-zinc-700 dark:text-zinc-100 dark:ring-zinc-950",
        sizeMap[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={px}
          height={px}
          className="size-full object-cover"
        />
      ) : (
        <span aria-hidden>{label}</span>
      )}
    </span>
  );
}
