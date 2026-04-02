import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/data/site";

export function Header() {
  const reduced = useReducedMotion();
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur-md"
      initial={reduced === true ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: reduced === true ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Container className="flex h-[90px] items-center justify-between gap-4 lg:h-[90px]">
        <a href="#" className="flex shrink-0 items-center py-2">
          <img
            src="/images/logo.svg"
            alt="Positivus"
            width={220}
            height={56}
            className="h-9 w-auto"
          />
        </a>
        <nav className="text-lead hidden items-center gap-6 font-normal text-dark xl:flex xl:gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-dark/70"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-lead rounded-btn border border-dark px-[35px] py-5 text-center transition-colors hover:bg-muted"
          >
            Request a quote
          </a>
        </nav>
        <a
          href="#contact"
          className="text-p rounded-btn border border-dark px-4 py-3 font-normal xl:hidden"
        >
          Quote
        </a>
      </Container>
    </motion.header>
  );
}
