import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const btnClass =
  "inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base outline outline-[2px] outline-offset-[-3px] outline-white shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1] bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] transition-opacity hover:opacity-90";

type Props =
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export function ContactButton(props: Props) {
  if ("href" in props && props.href) {
    const { href, className = "", ...rest } = props;
    return (
      <a href={href} className={`${btnClass} ${className}`} {...rest}>
        Contact Me
      </a>
    );
  }
  const { className = "", ...rest } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={`${btnClass} ${className}`} {...rest}>
      Contact Me
    </button>
  );
}
