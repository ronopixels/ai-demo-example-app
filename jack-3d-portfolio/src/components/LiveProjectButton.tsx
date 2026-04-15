import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function LiveProjectButton({ className = "", ...props }: Props) {
  return (
    <button
      type="button"
      className={[
        "rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:px-10 sm:py-3.5 sm:text-base",
        "transition-colors hover:bg-[#D7E2EA]/10",
        className,
      ].join(" ")}
      {...props}
    >
      Live Project
    </button>
  );
}
