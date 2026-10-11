"use client";

import { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { HistoryLog, mapNotificationToHistoryLog } from "./history-data";
import { MoreVertical } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useGetNotifications } from "@/hooks/api/use-notifications";

const getStatusBadge = (status: HistoryLog["status"]) => {
  switch (status) {
    case "Success":
      return (
        <span className="px-3 py-1 bg-[#EAF9F0] text-[#009F42] rounded-full text-[12px] font-medium">
          Success
        </span>
      );
    case "Partial":
      return (
        <span className="px-3 py-1 bg-[#FFF4E5] text-[#F59E0B] rounded-full text-[12px] font-medium">
          Partial
        </span>
      );
    case "Failed":
      return (
        <span className="px-3 py-1 bg-[#FEE2E2] text-[#EF4444] rounded-full text-[12px] font-medium">
          Failed
        </span>
      );
    case "Queued":
      return (
        <span className="px-3 py-1 bg-[#F1F5F9] text-[#64748B] rounded-full text-[12px] font-medium">
          Queued
        </span>
      );
    default:
      return null;
  }
};

export const HistoryLogsList = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const { data } = useGetNotifications();
  const logs = (data?.notifications ?? []).map(mapNotificationToHistoryLog);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 md:hidden bg-white rounded-xl p-2">
      <DataList
        data={logs}
        keyExtractor={(item) => item.id}
        itemClassName="flex-col items-stretch gap-0"
        renderItem={(item) => (
          <div className="flex w-full items-start gap-4">
            <Checkbox
              className="mt-1 rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              checked={selectedItems.has(item.id)}
              onCheckedChange={() => toggleItem(item.id)}
            />
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-gray-900 font-medium text-[15px]">
                    {item.dateSent}
                  </span>
                  <span className="text-gray-500 text-[14px]">
                    {item.recipients}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(item.status)}
                  <button
                    onClick={() => toast.info("Log detail view isn't available yet.")}
                    className="text-gray-500 hover:text-black transition-colors -mr-2"
                  >
                    <MoreVertical className="size-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between w-[90%] md:w-full mt-2">
                <div className="text-[15px]">
                  <span className="text-gray-900 font-semibold">Success</span>
                  <span className="text-gray-500 ml-1">{item.success}</span>
                </div>
                <div className="text-[15px]">
                  <span className="text-gray-500 font-medium">Failed</span>
                  <span className="text-gray-500 ml-1">{item.failed}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      />

      <div className="flex items-center gap-3 mt-2 px-1">
        <Button
          variant="secondary"
          onClick={() => toast.info("Resending notifications isn't available yet.")}
          className="bg-[#F6F6F6] flex-1 text-gray-500 hover:bg-gray-200 h-12 rounded-lg font-medium"
        >
          Resend selected
        </Button>
        <Button
          onClick={() => toast.info("Exporting logs isn't available yet.")}
          className="bg-[#FF6A3D] flex-1 hover:bg-[#ff5b29] text-white h-12 rounded-lg font-medium"
        >
          Export Logs
        </Button>
      </div>
    </div>
  );
};
