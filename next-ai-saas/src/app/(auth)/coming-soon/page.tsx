import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { WaitlistForm } from "@/components/auth/waitlist-form";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "Join the waitlist — Nexsas template demo.",
  openGraph: {
    title: `Coming soon · ${siteConfig.name}`,
    description: "Waitlist signup (demo).",
  },
};

export default function ComingSoonPage() {
  return (
    <AuthShell
      title="Something great is coming"
      description="Leave your email and we’ll let you know when we launch. Demo form — nothing is stored."
    >
      <WaitlistForm />
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Have access already?{" "}
        <Link
          href={routes.auth.signIn}
          className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
