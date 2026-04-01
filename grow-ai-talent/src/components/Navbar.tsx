import { ChevronDown } from "lucide-react";

import logoUrl from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const navItemClass =
  "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-base text-foreground/90 transition-colors hover:text-foreground";

export function Navbar() {
  return (
    <header className="w-full px-8 py-5">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
        <a href="/" className="justify-self-start">
          <img src={logoUrl} alt="Grow AI Talent" className="h-8 w-auto" height={32} />
        </a>

        <nav className="justify-self-center hidden items-center gap-1 md:flex" aria-label="Main">
          <button type="button" className={navItemClass}>
            Features
            <ChevronDown className="size-4 opacity-80" strokeWidth={2} aria-hidden />
          </button>
          <button type="button" className={navItemClass}>
            Solutions
          </button>
          <button type="button" className={navItemClass}>
            Plans
          </button>
          <button type="button" className={navItemClass}>
            Learning
            <ChevronDown className="size-4 opacity-80" strokeWidth={2} aria-hidden />
          </button>
        </nav>

        <div className="justify-self-end">
          <Button
            variant="heroSecondary"
            size="sm"
            className="h-auto rounded-full px-4 py-2 text-sm font-normal"
          >
            Sign Up
          </Button>
        </div>
      </div>

      <div
        className="mt-[3px] h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        aria-hidden
      />
    </header>
  );
}
