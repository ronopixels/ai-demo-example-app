import Link from "next/link";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { demoAiChats } from "@/data/dashboard-demo";
import { routes } from "@/routes";

export default function DashboardAiAssistantPage() {
  return (
    <>
      <DashboardTopbar
        title="AI Assistant"
        description="Chats are demo-only — wire your model and thread storage."
      />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <ul className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
          {demoAiChats.map((chat) => (
            <li key={chat.id}>
              <Link
                href={`${routes.dashboard.aiAssistant}/${chat.id}`}
                className="block px-4 py-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <p className="font-medium text-zinc-900 dark:text-zinc-50">{chat.title}</p>
                <p className="mt-0.5 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400">{chat.preview}</p>
                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">{chat.updatedAt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
