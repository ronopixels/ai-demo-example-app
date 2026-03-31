import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import { routes } from "@/routes";

export default function SignInPage() {
  return (
    <AuthShell
      title="Sign in"
      description="Demo form only — connect your auth provider when ready."
    >
      <LoginForm />
      <p className="mt-2 text-right text-sm">
        <Link
          href={routes.auth.forgotPassword}
          className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Forgot password?
        </Link>
      </p>
      <p className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        No account?{" "}
        <Link
          href={routes.auth.signUp}
          className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Sign up
        </Link>
      </p>
    </AuthShell>
  );
}
