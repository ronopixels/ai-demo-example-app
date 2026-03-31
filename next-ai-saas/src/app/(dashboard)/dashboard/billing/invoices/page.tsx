import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoInvoices } from "@/data/dashboard-demo";
import { routes } from "@/routes";

export default function DashboardInvoicesPage() {
  return (
    <>
      <DashboardTopbar
        title="Invoice history"
        description="Paid and open invoices — demo rows only."
      >
        <Link
          href={routes.dashboard.billing}
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          Back to billing
        </Link>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoInvoices.map((inv) => (
            <li key={inv.id} className="flex items-center gap-3 px-4 py-4">
              <DashboardListIcon variant="card" />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{inv.number}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {inv.date} · {inv.amount}
                </p>
              </div>
              <Badge variant="success">{inv.status}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
