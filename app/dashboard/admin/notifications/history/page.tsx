"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Check } from "lucide-react";
import { FilterLogs } from "./_components/filter-logs";
import { HistoryCards } from "./_components/history-cards";
import { HistoryLogsTable } from "./_components/history-logs-table";
import { HistoryLogsList } from "./_components/history-logs-list";

export default function AdminNotificationHistoryPage() {
  return (
    <div className="w-full">
      <DashboardHeader
        title="Notification History"
        subTitle={
          <>
            <div className="flex flex-row gap-2 flex-wrap">
              <div className="text-gray-800 font-semibold">
                Notification:{" "}
                <span className="text-primary font-normal">
                  Assignment Reminder
                </span>
              </div>
              <div className="text-gray-800 font-semibold">
                Type: <span className="text-primary font-normal">Reminder</span>
              </div>
              <div className="text-gray-800 font-semibold">
                Course:{" "}
                <span className="text-primary font-normal">Math 101</span>
              </div>
            </div>
          </>
        }
      />

      <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
        <DashboardSearch />
        <AdminDashboardButton title="Mark all as read" icon={Check} />
      </div>

      <div className="w-full flex flex-col gap-8">
        <FilterLogs />
        <HistoryCards />
        <HistoryLogsTable />
        <HistoryLogsList />
      </div>
    </div>
  );
}
