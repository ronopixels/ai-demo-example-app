import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { WorkflowCard } from "@/components/dashboard/workflow-card";
import { routes } from "@/routes";

export default function DashboardWorkflowPage() {
  return (
    <>
      <DashboardTopbar
        title="Workflow automation"
        description="Schedule and monitor jobs — demo cards only."
      >
        <Button href={routes.dashboard.workflowBuilder} variant="outline">
          Open builder
        </Button>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <WorkflowCard
            title="Lead enrichment"
            description="Pull firmographics and score leads nightly."
            status="running"
            lastRunLabel="Last run · 2 min ago"
            href={routes.dashboard.workflowBuilder}
          />
          <WorkflowCard
            title="Weekly digest"
            description="Email summary of top signals."
            status="idle"
            lastRunLabel="Last run · Mar 24"
          />
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Builder UI:{" "}
          <Link href={routes.dashboard.workflowBuilder} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            {routes.dashboard.workflowBuilder}
          </Link>
        </p>
      </div>
    </>
  );
}
