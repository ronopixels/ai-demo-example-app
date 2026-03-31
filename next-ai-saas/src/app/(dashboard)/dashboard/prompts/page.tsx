import Link from "next/link";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoPrompts } from "@/data/dashboard-demo";
import { routes } from "@/routes";

export default function DashboardPromptsPage() {
  return (
    <>
      <DashboardTopbar
        title="Prompt library"
        description="Reusable system prompts — swap for your CMS or versioned store."
      />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoPrompts.map((p) => (
            <li key={p.id}>
              <Link
                href={`${routes.dashboard.prompts}/${p.id}`}
                className="block px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{p.title}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
