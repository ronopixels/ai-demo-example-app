import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoNotifications } from "@/data/dashboard-demo";

export default function DashboardNotificationsPage() {
  return (
    <>
      <DashboardTopbar
        title="Notifications"
        description="In-app feed — push to email or Slack in production."
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoNotifications.map((n) => (
            <li
              key={n.id}
              className={`flex gap-3 px-4 py-4 ${n.read ? "opacity-70" : "bg-zinc-50/80 dark:bg-zinc-900/40"}`}
            >
              <DashboardListIcon variant="bell" className="mt-0.5" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{n.title}</p>
                <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">{n.body}</p>
                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">{n.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
