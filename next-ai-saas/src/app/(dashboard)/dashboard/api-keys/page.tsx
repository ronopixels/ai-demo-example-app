import { ButtonNative } from "@/components/ui/button";
import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoApiKeys } from "@/data/dashboard-demo";

export default function DashboardApiKeysPage() {
  return (
    <>
      <DashboardTopbar
        title="API keys"
        description="Rotate and scope keys — nothing here is real."
      >
        <ButtonNative type="button" variant="outline" disabled>
          Create key (demo)
        </ButtonNative>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoApiKeys.map((k) => (
            <li key={k.id} className="flex items-center gap-3 px-4 py-4">
              <DashboardListIcon variant="key" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{k.name}</p>
                <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                  {k.prefix}••••••••
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">Created {k.createdAt}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
