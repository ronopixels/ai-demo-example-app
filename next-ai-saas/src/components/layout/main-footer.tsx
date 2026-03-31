import Link from "next/link";
import { siteConfig } from "@/constants/site-config";
import { routes } from "@/routes";
import { defaultSocialLinks, footerColumns } from "@/data/footer-links";
import { SocialLinks } from "@/components/common/social-links";
import { cn } from "@/lib/cn";

export function MainFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href={routes.home}
              className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              {siteConfig.description}
            </p>
            <div className="mt-4">
              <SocialLinks links={[...defaultSocialLinks]} />
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href={routes.marketing.terms}
              className="hover:text-zinc-900 dark:hover:text-zinc-300"
            >
              Terms
            </Link>
            <Link
              href={routes.marketing.privacy}
              className="hover:text-zinc-900 dark:hover:text-zinc-300"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
