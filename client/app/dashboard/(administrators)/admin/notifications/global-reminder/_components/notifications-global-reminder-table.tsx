"use client";

import React, { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  GlobalReminder,
  mapNotificationToGlobalReminder,
} from "./global-reminder-data";
import { ChevronDown, MoreVertical } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useGetNotifications } from "@/hooks/api/use-notifications";

const getStatusBadge = (status: GlobalReminder["status"], type: string) => {
  if (status === "Active") {
    if (type === "Email") {
      return (
        <span className="px-3 py-1 bg-[#EAF9F0] text-[#009F42] rounded-full text-xs font-medium">
          Active
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-[#FFF4E5] text-[#F59E0B] rounded-full text-xs font-medium">
        Active
      </span>
    );
  }
  return (
    <span className="px-3 py-1 bg-[#FEE2E2] text-[#EF4444] rounded-full text-xs font-medium">
      {status}
    </span>
  );
};

const columns: ColumnDef<GlobalReminder>[] = [
  {
    key: "templateName",
    header: "Template Name",
    cell: (item) => (
      <span className="text-gray-900 text-sm font-medium">
        {item.templateName}
      </span>
    ),
  },
  {
    key: "type",
    header: "Type",
    cell: (item) => <span className="text-gray-600 text-sm">{item.type}</span>,
  },
  {
    key: "channel",
    header: "Channel",
    cell: (item) => (
      <span className="text-gray-600 text-sm">{item.channel}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    cell: (item) => getStatusBadge(item.status, item.type),
  },
  {
    key: "lastEdited",
    header: "Last Edited",
    cell: (item) => (
      <span className="text-gray-600 text-sm">{item.lastEdited}</span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-gray-500 hover:text-black transition-colors outline-none cursor-pointer">
            <MoreVertical className="size-5" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[160px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
        >
          <DropdownMenuItem
            className="cursor-pointer text-gray-700 hover:bg-gray-200"
            onClick={() => toast.info("Editing a template isn't available yet.")}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
            onClick={() => toast.info("Deleting a template isn't available yet.")}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const NotificationsGlobalReminderTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading } = useGetNotifications({ isRecurringTemplate: "true" });
  const reminders = (data?.notifications ?? []).map(mapNotificationToGlobalReminder);

  const filteredReminders = reminders.filter(
    (reminder) =>
      reminder.templateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.channel.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full flex-col bg-white p-4 rounded-xl hidden md:flex gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-[22px] font-semibold text-gray-900">
          Global Notification Templates
        </h1>
        <p className="text-gray-500 text-[15px]">
          Create and manage templates used across all automation rules.
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Enable (Uncomment) when needed */}
        {/* <div className="relative w-full max-w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
          <Input
            placeholder="Search courses, instructors, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 rounded-full border-none bg-white h-11 text-[14px] placeholder:text-gray-400 focus-visible:ring-0 shadow-sm"
          />
        </div> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-2 px-4 h-11 bg-[#F6F6F6] hover:bg-gray-50 transition-colors rounded-lg text-gray-600 text-[14px] font-medium outline-none">
              All types
              <ChevronDown className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[140px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
          >
            <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
              Reminder
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
              Email
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-2 px-4 h-11 bg-[#F6F6F6] hover:bg-gray-50 transition-colors rounded-lg text-gray-600 text-[14px] font-medium outline-none">
              All status
              <ChevronDown className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[140px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
          >
            <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
              Active
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
              Inactive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between gap-2 px-4 h-11 bg-[#F6F6F6] hover:bg-gray-50 transition-colors rounded-lg text-gray-600 text-[14px] font-medium outline-none">
              Bulk Action
              <ChevronDown className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[140px] bg-[#F6F6F6] border-none shadow-sm rounded-xl"
          >
            <DropdownMenuItem className="cursor-pointer text-gray-700 hover:bg-gray-200">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 focus:text-red-600 focus:bg-red-50">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading templates...</p>
      ) : (
        <DataTable
          data={filteredReminders}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
        />
      )}
    </div>
  );
};
