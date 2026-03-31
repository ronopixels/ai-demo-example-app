import Link from "next/link";
import { ButtonNative } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { routes } from "@/routes";

export default function DashboardSettingsSecurityPage() {
  return (
    <>
      <DashboardTopbar
        title="Security"
        description="Password, sessions, and 2FA — wire your auth provider."
      />
      <div className="flex flex-1 flex-col gap-8 p-6">
        <section className="max-w-md space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Password</h2>
          <div className="space-y-2">
            <label htmlFor="current-pw" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Current password
            </label>
            <Input id="current-pw" type="password" autoComplete="current-password" readOnly placeholder="••••••••" />
          </div>
          <ButtonNative type="button" disabled className="w-full sm:w-auto">
            Update password (demo)
          </ButtonNative>
        </section>
        <section className="max-w-md rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Two-step verification</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Add TOTP or security keys when you integrate auth.
          </p>
          <p className="mt-3 text-sm">
            <Link
              href={routes.auth.twoFactor}
              className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            >
              Open 2FA demo screen →
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
