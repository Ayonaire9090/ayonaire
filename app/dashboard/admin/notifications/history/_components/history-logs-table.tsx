"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { HistoryLog, historyLogsData } from "./mock-data";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const getStatusBadge = (status: HistoryLog["status"]) => {
  switch (status) {
    case "Success":
      return (
        <span className="px-3 py-1 bg-[#EAF9F0] text-[#009F42] rounded-full text-xs font-medium">
          Success
        </span>
      );
    case "Partial":
      return (
        <span className="px-3 py-1 bg-[#FFF4E5] text-[#F59E0B] rounded-full text-xs font-medium">
          Partial
        </span>
      );
    case "Failed":
      return (
        <span className="px-3 py-1 bg-[#FEE2E2] text-[#EF4444] rounded-full text-xs font-medium">
          Failed
        </span>
      );
    case "Queued":
      return (
        <span className="px-3 py-1 bg-[#F1F5F9] text-[#64748B] rounded-full text-xs font-medium">
          Queued
        </span>
      );
    default:
      return null;
  }
};

const columns: ColumnDef<HistoryLog>[] = [
  {
    key: "dateSent",
    header: "Date Sent",
    cell: (item) => (
      <span className="text-gray-900 text-sm font-medium">{item.dateSent}</span>
    ),
  },
  {
    key: "recipients",
    header: "Recipients",
    cell: (item) => (
      <span className="text-gray-600 text-sm">{item.recipients}</span>
    ),
  },
  {
    key: "success",
    header: "Success",
    cell: (item) => (
      <span className="text-gray-600 text-sm">{item.success}</span>
    ),
  },
  {
    key: "failed",
    header: "Failed",
    cell: (item) => (
      <span className="text-gray-600 text-sm">{item.failed}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    cell: (item) => getStatusBadge(item.status),
  },
  {
    key: "actions",
    header: "Actions",
    cell: () => (
      <button className="text-gray-500 hover:text-black transition-colors">
        <MoreVertical className="size-5" />
      </button>
    ),
  },
];

export const HistoryLogsTable = () => {
  return (
    <div className="w-full flex-col bg-white p-4 rounded-xl gap-4 hidden md:flex">
      <DataTable
        data={historyLogsData}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable={true}
      />

      <div className="flex items-center gap-4 mt-2">
        <Button
          variant="secondary"
          className="bg-[#F6F6F6] text-gray-500 hover:bg-gray-200 min-w-[160px] h-12 rounded-lg font-medium"
        >
          Resend selected
        </Button>
        <Button className="bg-[#FF6A3D] hover:bg-[#ff5b29] text-white min-w-[160px] h-12 rounded-lg font-medium">
          Export Logs
        </Button>
      </div>
    </div>
  );
};
