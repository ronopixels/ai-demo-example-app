import { ArrowUpRight } from "lucide-react";

import logoUrl from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#cta" },
] as const;

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex w-full justify-center px-4">
      <div className="flex w-full max-w-6xl items-center justify-between gap-4">
        <a href="#home" className="shrink-0">
          <img src={logoUrl} alt="Studio" width={48} height={48} className="size-12 rounded-lg object-cover" />
        </a>

        <div className="liquid-glass flex flex-1 items-center justify-center rounded-full py-1.5 pl-3 pr-1.5 sm:flex-none sm:gap-1">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button
            size="sm"
            className="ml-auto shrink-0 gap-1.5 rounded-full bg-white text-black hover:bg-white/90 md:ml-2"
            asChild
          >
            <a href="#cta">
              Get Started
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
