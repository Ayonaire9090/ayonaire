"use client";

import { useMemo } from "react";
import { format } from "date-fns";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { useGetEmailBroadcastHistory } from "@/hooks/api/use-notifications";
import { NotificationRecord } from "@/lib/api/endpoints/notifications";

interface BroadcastRow {
  id: string;
  subject: string;
  recipients: number;
  success: number;
  failed: number;
  sentAt: string;
}

function mapToRow(notification: NotificationRecord): BroadcastRow {
  const { successCount = 0, failedCount = 0 } = notification.stats ?? {};
  const sentAt = notification.sentAt ?? notification.createdAt;
  return {
    id: notification._id,
    subject: notification.name,
    recipients: successCount + failedCount,
    success: successCount,
    failed: failedCount,
    sentAt: sentAt ? format(new Date(sentAt), "d MMM yyyy, hh:mm a") : "-",
  };
}

const columns: ColumnDef<BroadcastRow>[] = [
  {
    key: "subject",
    header: "Subject",
    cell: (item) => (
      <span className="font-medium text-gray-900 text-[15px]">{item.subject}</span>
    ),
  },
  {
    key: "sentAt",
    header: "Sent",
    cell: (item) => <span className="text-gray-600 text-[15px]">{item.sentAt}</span>,
  },
  {
    key: "recipients",
    header: "Recipients",
    cell: (item) => <span className="text-gray-600 text-[15px]">{item.recipients}</span>,
  },
  {
    key: "success",
    header: "Delivered",
    cell: (item) => <span className="text-[#24A164] text-[15px]">{item.success}</span>,
  },
  {
    key: "failed",
    header: "Failed",
    cell: (item) => <span className="text-[#EF4444] text-[15px]">{item.failed}</span>,
  },
];

export const EmailBroadcastHistory = () => {
  const { data, isLoading, isError } = useGetEmailBroadcastHistory();
  const rows = useMemo(
    () => (data?.notifications ?? []).map(mapToRow),
    [data],
  );

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900">Broadcast History</h2>
      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading history...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">
          Failed to load broadcast history.
        </p>
      ) : rows.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-400">
          No email broadcasts sent yet
        </p>
      ) : (
        <DataTable data={rows} columns={columns} keyExtractor={(item) => item.id} />
      )}
    </div>
  );
};
