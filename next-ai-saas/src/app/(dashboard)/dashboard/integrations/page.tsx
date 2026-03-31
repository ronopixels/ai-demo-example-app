import { Badge } from "@/components/ui/badge";
import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoIntegrations } from "@/data/dashboard-demo";

const statusVariant = {
  connected: "success" as const,
  error: "destructive" as const,
};

export default function DashboardIntegrationsPage() {
  return (
    <>
      <DashboardTopbar
        title="Integrations"
        description="OAuth and API connections — status is illustrative only."
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoIntegrations.map((i) => (
            <li key={i.id} className="flex items-start gap-3 px-4 py-4">
              <DashboardListIcon variant="plugs" className="mt-0.5" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">{i.name}</p>
                  <Badge variant={statusVariant[i.status]}>{i.status}</Badge>
                </div>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{i.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
