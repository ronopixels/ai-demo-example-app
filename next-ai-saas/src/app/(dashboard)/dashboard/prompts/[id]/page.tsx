import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoPrompts, getDemoPrompt } from "@/data/dashboard-demo";
import { routes } from "@/routes";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return demoPrompts.map((p) => ({ id: p.id }));
}

export default async function DashboardPromptDetailPage({ params }: Props) {
  const { id } = await params;
  const prompt = getDemoPrompt(id);
  if (!prompt) notFound();

  return (
    <>
      <DashboardTopbar title={prompt.title} description="Prompt template (demo)">
        <Link
          href={routes.dashboard.prompts}
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          All prompts
        </Link>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 font-mono text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200">
          {prompt.description}
        </div>
      </div>
    </>
  );
}
