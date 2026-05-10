import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { AdminSystemSettingsSidebar } from "./_components/admin-system-settings-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Save } from "lucide-react";

export default function AdminSystemSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4 h-full">
      <DashboardHeader
        title="System Settings"
        subTitle="Configure your LMS platform core settings and preferences."
      />
      {/* Search and save button */}
      <div className="flex justify-between items-center">
        <DashboardSearch
          placeholder="Search system settings..."
          className="w-full lg:w-[400px]"
        />
        <AdminDashboardButton
          title="Save Changes"
          icon={Save}
          className="bg-primary text-white px-6 py-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        <div className="hidden lg:block w-[260px] shrink-0">
          <AdminSystemSettingsSidebar />
        </div>
        <div className="flex-1 w-full min-w-0">{children}</div>
      </div>
    </div>
  );
}
