import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";

export default function DashboardAnalyticsPage() {
  return (
    <>
      <DashboardTopbar
        title="Analytics"
        description="Demo metrics — connect PostHog, Mixpanel, or your warehouse."
      />
      <div className="flex flex-1 flex-col gap-8 p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardStatCard title="Page views" value="48.2k" change="+12% vs last week" changeTone="positive" />
          <DashboardStatCard title="Sign-ups" value="1,204" change="+4% vs last week" changeTone="positive" />
          <DashboardStatCard title="Activation" value="62%" change="+1 pt" changeTone="positive" />
          <DashboardStatCard title="Churn" value="2.1%" change="+0.2 pt" changeTone="negative" />
        </div>
        <div className="flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Chart placeholder — drop in your charting library.</p>
        </div>
      </div>
    </>
  );
}
