import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardListIcon } from "@/components/dashboard/dashboard-list-icon";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoTeamMembers, getDemoTeamMember } from "@/data/dashboard-demo";
import { routes } from "@/routes";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return demoTeamMembers.map((m) => ({ id: m.id }));
}

export default async function DashboardTeamMemberPage({ params }: Props) {
  const { id } = await params;
  const member = getDemoTeamMember(id);
  if (!member) notFound();

  return (
    <>
      <DashboardTopbar title={member.name} description={`${member.role} · ${member.email}`}>
        <Link
          href={routes.dashboard.team}
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          All members
        </Link>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <DashboardListIcon variant="user" className="size-10" />
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Demo profile — no actions wired.</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="text-zinc-500 dark:text-zinc-400">Role:</span> {member.role}
              </li>
              <li>
                <span className="text-zinc-500 dark:text-zinc-400">Email:</span> {member.email}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
