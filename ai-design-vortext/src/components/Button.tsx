import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center px-7 py-3 rounded-full font-medium text-sm transition-colors whitespace-nowrap";

const variants = {
  primary:
    "bg-[#051A24] text-white hover:bg-[#0D212C] shadow-[0_4px_14px_rgba(5,26,36,0.28),0_2px_6px_rgba(5,26,36,0.18)]",
  secondary:
    "bg-white text-[#051A24] shadow-[0_4px_24px_rgba(5,26,36,0.1),0_2px_10px_rgba(5,26,36,0.06)] hover:bg-vortex-light",
  tertiary:
    "bg-white text-[#051A24] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(5,26,36,0.08),0_4px_20px_rgba(5,26,36,0.08)] hover:bg-vortex-light",
} as const;

export type ButtonVariant = keyof typeof variants;

type Common = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type AsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsAnchor = Common &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = AsButton | AsAnchor;

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "", ...rest } = props;
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AsAnchor;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
