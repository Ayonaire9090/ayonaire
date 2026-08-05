"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import {
  NotificationData,
  NotificationStatusBadge,
  NotificationActions,
} from "./notifications-data";

interface NotificationsListProps {
  data: NotificationData[];
}

export const NotificationsList = ({ data }: NotificationsListProps) => {
  return (
    <div className="md:hidden mt-2">
      <DataList
        data={data}
        itemClassName="flex-col !items-stretch !p-5"
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <div className="flex flex-col gap-3">
            {/* Top row */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="size-5 mt-0.5 rounded-[5px] border-2 bg-white border-gray-300 flex items-center justify-center shrink-0 transition-colors" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-[16px] text-gray-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[14px] text-gray-500">{item.type}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <NotificationStatusBadge status={item.status} notificationId={item.id} />
                <div className="mt-0.5">
                  <NotificationActions notificationId={item.id} />
                </div>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between text-[15px] pl-9">
              <span className="text-gray-900">{item.recipients}</span>
              <span className="text-gray-500">{item.course}</span>
            </div>
          </div>
        )}
      />
    </div>
  );
};
