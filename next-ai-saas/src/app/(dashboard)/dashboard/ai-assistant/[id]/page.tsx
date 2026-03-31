import Link from "next/link";
import { notFound } from "next/navigation";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoAiChats, getDemoAiChat } from "@/data/dashboard-demo";
import { routes } from "@/routes";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return demoAiChats.map((c) => ({ id: c.id }));
}

export default async function DashboardAiChatPage({ params }: Props) {
  const { id } = await params;
  const chat = getDemoAiChat(id);
  if (!chat) notFound();

  return (
    <>
      <DashboardTopbar
        title={chat.title}
        description={`Last activity · ${chat.updatedAt}`}
      >
        <Link
          href={routes.dashboard.aiAssistant}
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          All chats
        </Link>
      </DashboardTopbar>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">You</p>
          <p className="mt-1">{chat.preview}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">Assistant</p>
          <p className="mt-1">
            Demo response — connect your LLM route to stream real answers. Thread id: <code className="text-xs">{id}</code>
          </p>
        </div>
      </div>
    </>
  );
}
