import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { mainNav } from "@/data/navigation";
import { routes } from "@/routes";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/cn";

export function MainNavbar({ className }: { className?: string }) {
  const mobileItems = [
    ...mainNav.map((l) => ({ label: l.label, href: l.href })),
    { label: "Sign in", href: routes.auth.signIn },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={routes.home}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <Button href={routes.auth.signIn} variant="outline" className="h-9 px-4 text-sm">
              Sign in
            </Button>
          </div>
          <MobileMenu items={mobileItems} />
        </div>
      </div>
    </header>
  );
}
