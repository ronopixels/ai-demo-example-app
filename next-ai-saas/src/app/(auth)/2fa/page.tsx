import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { TwoFactorForm } from "@/components/auth/two-factor-form";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Two-step verification",
  description: "Enter your authenticator code (Nexsas template demo).",
  openGraph: {
    title: `2FA · ${siteConfig.name}`,
    description: "Two-factor authentication step (demo).",
  },
};

export default function TwoFactorPage() {
  return (
    <AuthShell
      title="Two-step verification"
      description="Enter the code from your authenticator app. Demo only — any 6 digits submits."
    >
      <TwoFactorForm />
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <Link
          href={routes.auth.signIn}
          className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Use a different account
        </Link>
      </p>
    </AuthShell>
  );
}
