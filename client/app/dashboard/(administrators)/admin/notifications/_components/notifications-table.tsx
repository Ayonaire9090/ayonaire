"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  NotificationData,
  NotificationStatusBadge,
  NotificationActions,
} from "./notifications-data";

interface NotificationsTableProps {
  data: NotificationData[];
}

export const NotificationsTable = ({ data }: NotificationsTableProps) => {
  const tableColumns: ColumnDef<NotificationData>[] = [
    {
      key: "name",
      header: "Name",
      cell: (item) => (
        <span className="font-medium text-gray-900 text-[15px] whitespace-nowrap">
          {item.name}
        </span>
      ),
    },
    {
      key: "type",
      header: "Type",
      cell: (item) => (
        <span className="text-gray-600 text-[15px] whitespace-nowrap">
          {item.type}
        </span>
      ),
    },
    {
      key: "recipients",
      header: "Recipients",
      cell: (item) => (
        <span className="text-gray-600 text-[15px] whitespace-nowrap">
          {item.recipients}
        </span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => (
        <span className="text-gray-500 text-[15px] whitespace-nowrap">
          {item.course}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <NotificationStatusBadge status={item.status} notificationId={item.id} />
      ),
    },
    {
      key: "action",
      header: "Actions",
      headerClassName: "pr-4",
      className: "pr-4",
      cell: (item) => <NotificationActions notificationId={item.id} />,
    },
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto">
      <DataTable
        data={data}
        columns={tableColumns}
        keyExtractor={(item) => item.id}
        selectable
      />
    </div>
  );
};
