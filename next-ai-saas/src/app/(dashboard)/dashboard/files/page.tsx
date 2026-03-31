import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoFiles } from "@/data/dashboard-demo";

export default function DashboardFilesPage() {
  return (
    <>
      <DashboardTopbar
        title="Files"
        description="Knowledge base and uploads — wire S3 or your storage layer."
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoFiles.map((f) => (
            <li key={f.id} className="flex items-center gap-3 px-4 py-3">
              <DashboardListIcon variant="file" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{f.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {f.type} · {f.size} · {f.updated}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
