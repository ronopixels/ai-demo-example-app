import { ButtonNative } from "@/components/ui/button";
import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";

export default function DashboardReportsPage() {
  return (
    <>
      <DashboardTopbar
        title="Reports"
        description="Scheduled exports and snapshots — connect your warehouse."
      >
        <ButtonNative type="button" variant="outline" disabled>
          Export CSV (demo)
        </ButtonNative>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-8 p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <DashboardStatCard title="MRR" value="$42.8k" change="+3.2%" changeTone="positive" />
          <DashboardStatCard title="NRR" value="118%" change="+2 pt" changeTone="positive" />
          <DashboardStatCard title="Support SLA" value="94%" change="-1 pt" changeTone="negative" />
        </div>
        <div className="min-h-[200px] rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-900/40" />
      </div>
    </>
  );
}
