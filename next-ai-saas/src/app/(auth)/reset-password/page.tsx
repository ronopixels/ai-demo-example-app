import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password for your account (Nexsas template demo).",
  openGraph: {
    title: `Reset password · ${siteConfig.name}`,
    description: "Choose a new password (demo UI).",
  },
};

export default function ResetPasswordPage() {
  return (
    <AuthShell
      title="Reset password"
      description="Use the link from your email in production. This page is a standalone UI demo."
    >
      <ResetPasswordForm />
      <div className="mt-6 flex flex-col gap-3">
        <Button href={routes.auth.signIn} variant="outline" className="w-full">
          Back to sign in
        </Button>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Need a link?{" "}
          <Link
            href={routes.auth.forgotPassword}
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
          >
            Forgot password
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
