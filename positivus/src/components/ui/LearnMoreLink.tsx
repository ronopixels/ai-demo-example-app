type Variant = "light" | "dark";

const arrows: Record<Variant, string> = {
  light: "/images/arrow-icon-dark.svg",
  dark: "/images/arrow-icon-white.svg",
};

type Props = { href?: string; variant: Variant };

export function LearnMoreLink({ href = "#", variant }: Props) {
  const isDark = variant === "dark";
  return (
    <a
      href={href}
      className={`text-lead inline-flex items-center gap-[15px] font-normal ${
        isDark ? "text-white" : "text-dark"
      }`}
    >
      <span className="relative h-[41px] w-[41px] shrink-0" aria-hidden>
        <img src={arrows[variant]} alt="" width={41} height={41} className="block" />
      </span>
      Learn more
    </a>
  );
}
