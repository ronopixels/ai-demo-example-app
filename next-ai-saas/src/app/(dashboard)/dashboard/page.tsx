import { BillingPlanCard } from "@/components/dashboard/billing-plan-card";
import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { WorkflowCard } from "@/components/dashboard/workflow-card";
import { routes } from "@/routes";

export default function DashboardOverviewPage() {
  return (
    <>
      <DashboardTopbar
        title="Overview"
        description="Demo metrics and widgets — replace with real data when you wire your backend."
      />
      <div className="flex flex-1 flex-col gap-8 p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardStatCard
            title="AI credits"
            value="12,450"
            change="+8% vs last week"
            changeTone="positive"
          />
          <DashboardStatCard
            title="Active workflows"
            value="24"
            change="+2 new"
            changeTone="positive"
          />
          <DashboardStatCard
            title="Avg. latency"
            value="420 ms"
            change="-3% vs last week"
            changeTone="positive"
          />
          <DashboardStatCard
            title="Failed runs"
            value="3"
            change="+1 vs yesterday"
            changeTone="negative"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <BillingPlanCard
            planName="Pro"
            priceLabel="$29 / month"
            renewalLabel="Renews on Apr 12, 2026"
            status="active"
            manageBillingHref={routes.dashboard.billing}
          />
          <WorkflowCard
            title="Lead enrichment"
            description="Pull firmographics and score leads nightly."
            status="running"
            lastRunLabel="Last run · 2 min ago"
            href={routes.dashboard.workflow}
          />
        </div>
      </div>
    </>
  );
}
