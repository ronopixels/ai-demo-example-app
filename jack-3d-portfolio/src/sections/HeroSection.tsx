import { motion } from "framer-motion";
import { ContactButton } from "@/components/ContactButton";
import { Magnet } from "@/components/Magnet";
import { HERO_PORTRAIT } from "@/data/content";

const nav = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <motion.nav
        className="flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {nav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
      </motion.nav>

      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="overflow-hidden px-6 md:px-10">
          <motion.h1
            className="hero-heading mt-6 w-full whitespace-nowrap font-black uppercase leading-none tracking-tight sm:mt-4 md:-mt-5 text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Hi, i&apos;m jack
          </motion.h1>
        </div>

        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="pointer-events-auto absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
        >
          <motion.img
            src={HERO_PORTRAIT}
            alt=""
            className="w-full select-none"
            draggable={false}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </Magnet>

        <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
          <motion.p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ContactButton href="#contact" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
