import Link from "next/link";
import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoTeamMembers } from "@/data/dashboard-demo";
import { routes } from "@/routes";

export default function DashboardTeamPage() {
  return (
    <>
      <DashboardTopbar
        title="Team"
        description="Members and roles — connect your identity provider."
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoTeamMembers.map((m) => (
            <li key={m.id}>
              <Link
                href={`${routes.dashboard.team}/${m.id}`}
                className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <DashboardListIcon variant="user" />
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">{m.name}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {m.role} · {m.email}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
