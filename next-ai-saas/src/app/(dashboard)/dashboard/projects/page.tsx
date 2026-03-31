import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoProjects } from "@/data/dashboard-demo";
import { routes } from "@/routes";

export default function DashboardProjectsPage() {
  return (
    <>
      <DashboardTopbar
        title="Projects"
        description="Workspaces group workflows, prompts, and access — demo list only."
      />
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {demoProjects.map((p) => (
            <Card key={p.id} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">
                  <Link href={routes.dashboard.root} className="hover:underline">
                    {p.name}
                  </Link>
                </CardTitle>
                <CardDescription>{p.description}</CardDescription>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Updated {p.updatedAt}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
