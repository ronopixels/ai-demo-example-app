import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "@/components/auth/register-form";
import { routes } from "@/routes";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create a Nexsas demo account — connect your auth provider for production.",
  openGraph: {
    title: `Sign up · ${siteConfig.name}`,
    description: "Create a demo account for the Nexsas template.",
  },
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create account"
      description="Demo form only — no accounts are stored. Wire sign-up to your backend when ready."
    >
      <RegisterForm />
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
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
