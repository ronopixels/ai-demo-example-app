import { Input } from "@/components/ui/input";
import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";

export default function DashboardSettingsProfilePage() {
  return (
    <>
      <DashboardTopbar
        title="Profile"
        description="Account details — connect your user store."
      />
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="max-w-md space-y-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="space-y-2">
            <label htmlFor="profile-name" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Display name
            </label>
            <Input id="profile-name" name="name" defaultValue="Alex Doe" readOnly />
          </div>
          <div className="space-y-2">
            <label htmlFor="profile-email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Email
            </label>
            <Input id="profile-email" name="email" type="email" defaultValue="alex@acme.test" readOnly />
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Read-only demo — enable edits when you add mutations.</p>
        </div>
      </div>
    </>
  );
}
