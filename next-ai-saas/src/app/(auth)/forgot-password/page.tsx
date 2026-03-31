import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Reset your Nexsas demo password — template UI only.",
  openGraph: {
    title: `Forgot password · ${siteConfig.name}`,
    description: "Request a password reset link (demo).",
  },
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Forgot password"
      description="Enter your email and we’ll send a reset link (demo — no email is sent)."
    >
      <ForgotPasswordForm />
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Remember your password?{" "}
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
