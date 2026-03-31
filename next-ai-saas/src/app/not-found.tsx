import Link from "next/link";
import { routes } from "@/routes";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="text-center text-zinc-600 dark:text-zinc-400">
        This page does not exist.
      </p>
      <Link
        href={routes.home}
        className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
      >
        Back to home
      </Link>
    </div>
  );
}
