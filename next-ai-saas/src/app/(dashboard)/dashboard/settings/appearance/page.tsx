import Link from "next/link";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { routes } from "@/routes";

export default function DashboardSettingsAppearancePage() {
  return (
    <>
      <DashboardTopbar
        title="Appearance"
        description="Theme and density — marketing shell owns the global theme toggle today."
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="max-w-lg rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
          <p>
            Use the <strong className="text-zinc-900 dark:text-zinc-100">theme toggle</strong> in the marketing navbar
            when previewing from the public site. For a dashboard-only toggle, add a client control here and persist to{" "}
            <code className="rounded bg-zinc-100 px-1 text-xs dark:bg-zinc-800">localStorage</code> or your user
            settings API.
          </p>
          <p className="mt-4">
            <Link href={routes.home} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
              View marketing site →
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
