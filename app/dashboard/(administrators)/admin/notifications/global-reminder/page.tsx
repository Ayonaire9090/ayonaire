"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { toast } from "sonner";
import { NotificationsGlobalReminderTable } from "./_components/notifications-global-reminder-table";
import { NotificationsGlobalReminderList } from "./_components/notifications-global-reminder-list";
import { DefaultRecurringSettings } from "./_components/default-recurring-settings";
import { DefaultRecipientConfigurations } from "./_components/default-recipient-configurations";
import { AutomatedTriggers } from "./_components/automated-triggers";
import { CourseActivityNotifications } from "./_components/course-activity-notifications";

export default function AdminHistoryGlobalReminderPage() {
  return (
    <div className="w-full">
      <DashboardHeader
        title="Global Reminder Settings"
        subTitle="Manage reusable templates, recurring rules, and automated triggers."
      />

      <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
        <DashboardSearch />
        <div className="hidden md:flex items-center gap-2">
          <AdminDashboardButton
            className="bg-transparent! border-gray-300! text-gray-600!"
            title="Discard"
            onClick={() => toast.info("No unsaved changes to discard.")}
          />
          <AdminDashboardButton
            title="Save Settings"
            onClick={() =>
              toast.info(
                "Saving default recurring/recipient/trigger settings isn't available yet.",
              )
            }
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        {/* Reminder List & Table */}
        <NotificationsGlobalReminderTable />
        <NotificationsGlobalReminderList />

        {/* Default Recurring Settings */}
        <DefaultRecurringSettings />

        {/* Default Recipient Configurations */}
        <DefaultRecipientConfigurations />

        {/* Automated Triggers */}
        <AutomatedTriggers />

        {/* Course Activity Notifications */}
        <CourseActivityNotifications />
      </div>
    </div>
  );
}
