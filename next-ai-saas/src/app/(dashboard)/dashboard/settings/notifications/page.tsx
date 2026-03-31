import { DashboardTopbar } from "@/components/dashboard/dashboard-topbar";
import { NotificationPrefsForm } from "@/components/dashboard/notification-prefs-form";

export default function DashboardSettingsNotificationsPage() {
  return (
    <>
      <DashboardTopbar
        title="Notification preferences"
        description="Email and in-app categories — demo toggles only."
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="max-w-lg rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <NotificationPrefsForm />
        </div>
      </div>
    </>
  );
}
