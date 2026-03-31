import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { VerifyEmailActions } from "@/components/auth/verify-email-actions";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Verify email",
  description: "Confirm your email address to continue (Nexsas template demo).",
  openGraph: {
    title: `Verify email · ${siteConfig.name}`,
    description: "Email verification step (demo).",
  },
};

export default function VerifyEmailPage() {
  return (
    <AuthShell
      title="Verify your email"
      description="We sent a link to your inbox. Click it to verify your account — demo only, no message is sent."
    >
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        Wrong address? Update it in your profile after you wire authentication.
      </p>
      <div className="mt-6">
        <VerifyEmailActions />
      </div>
      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <Link
          href={routes.auth.signIn}
          className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Back to sign in
        </Link>
      </p>
    </AuthShell>
  );
}
