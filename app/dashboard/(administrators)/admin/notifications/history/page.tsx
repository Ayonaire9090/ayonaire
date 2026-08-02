"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { FilterLogs } from "./_components/filter-logs";
import { HistoryCards } from "./_components/history-cards";
import { HistoryLogsTable } from "./_components/history-logs-table";
import { HistoryLogsList } from "./_components/history-logs-list";

export default function AdminNotificationHistoryPage() {
  return (
    <div className="w-full">
      <DashboardHeader
        title="Notification History"
        subTitle="Delivery logs and stats for every notification that's been sent"
      />

      <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
        <DashboardSearch />
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
