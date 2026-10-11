"use client";

import { useState } from "react";
import { toast } from "sonner";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { AdminSystemSettingsSidebar } from "./_components/admin-system-settings-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { AlertCircle, CheckCircle2, Loader2, Save } from "lucide-react";
import { useGetAllSettings } from "@/hooks/api/use-settings";

export default function AdminSystemSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: allSettings, isLoading, isError } = useGetAllSettings();
  const loadedCategories = Object.keys(allSettings?.data ?? {}).length;

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
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <AdminDashboardButton
          title="Save Changes"
          icon={Save}
          className="bg-primary text-white px-6 py-2 rounded-lg"
          onClick={() => toast.info("Each setting saves individually when you toggle or edit it.")}
        />
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm text-gray-600">
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
            <span>Loading saved settings...</span>
          </>
        ) : isError ? (
          <>
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span>Unable to load the full settings snapshot.</span>
          </>
        ) : (
          <>
            <CheckCircle2 className="h-4 w-4 text-[#24A164]" />
            <span>
              {loadedCategories} settings{" "}
              {loadedCategories === 1 ? "category" : "categories"} loaded.
            </span>
          </>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        <div className="hidden lg:block w-[260px] shrink-0">
          <AdminSystemSettingsSidebar searchQuery={searchQuery} />
        </div>
        <div className="flex-1 w-full min-w-0">{children}</div>
      </div>
    </div>
  );
}
