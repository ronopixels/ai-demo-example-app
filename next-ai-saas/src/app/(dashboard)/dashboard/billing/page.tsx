import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BillingPlanCard } from "@/components/dashboard/billing-plan-card";
import { DashboardStatCard } from "@/components/dashboard/dashboard-stat-card";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { routes } from "@/routes";

export default function DashboardBillingPage() {
  return (
    <>
      <DashboardTopbar
        title="Billing"
        description="Subscription and usage — Stripe Customer Portal when wired."
      >
        <Button href={routes.dashboard.billingInvoices} variant="outline">
          Invoice history
        </Button>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-8 p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <BillingPlanCard
            planName="Pro"
            priceLabel="$29 / month"
            renewalLabel="Renews on Apr 12, 2026"
            status="active"
            manageBillingHref={routes.dashboard.billing}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <DashboardStatCard title="Credits used" value="8,120" change="of 12,450" changeTone="neutral" />
            <DashboardStatCard title="Overage" value="$0" change="None this period" changeTone="positive" />
          </div>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          <Link href={routes.dashboard.billingInvoices} className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100">
            View invoices →
          </Link>
        </p>
      </div>
    </>
  );
}
