import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { routes } from "@/routes";

export default function DashboardWorkflowBuilderPage() {
  return (
    <>
      <DashboardTopbar
        title="Workflow builder"
        description="Visual editor placeholder — define triggers, steps, and outputs in production."
      >
        <Button href={routes.dashboard.workflow} variant="outline">
          Back to workflows
        </Button>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="max-w-md space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-2">
            <label htmlFor="wf-name" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Workflow name
            </label>
            <Input id="wf-name" name="name" defaultValue="Untitled workflow" />
          </div>
          <div className="space-y-2">
            <label htmlFor="wf-trigger" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Trigger (demo)
            </label>
            <Input id="wf-trigger" name="trigger" placeholder="Cron · Webhook · Event" readOnly />
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Non-functional preview.{" "}
            <Link href={routes.dashboard.workflow} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
              Return to list
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
