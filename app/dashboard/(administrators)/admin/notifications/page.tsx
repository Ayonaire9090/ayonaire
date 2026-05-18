"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Search, ChevronDown, X, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { NotificationsTable } from "./_components/notifications-table";
import { NotificationsList } from "./_components/notifications-list";
import { mockNotifications } from "./_components/notifications-data";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { useRouter } from "next/navigation";

function FilterPopoverHeader({ title }: { title: string }) {
  return (
    <div className="flex items-start justify-between p-5 pb-4">
      <span className="text-[20px] font-bold text-gray-900 leading-tight">
        {title}
      </span>
      <PopoverClose asChild>
        <button className="size-9 flex items-center justify-center bg-[#EBEBEB] rounded-full hover:bg-gray-300 transition-colors shrink-0 mt-0.5">
          <X className="size-[16px] text-gray-700" />
        </button>
      </PopoverClose>
    </div>
  );
}

function CheckboxItem({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3.5 w-full px-5 py-3 hover:bg-white/60 transition-colors text-left rounded-xl"
    >
      <div
        className={`size-5 rounded-[5px] border-2 flex items-center justify-center shrink-0 transition-colors ${
          checked ? "bg-primary border-primary" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <svg
            className="size-3 text-white"
            viewBox="0 0 12 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 5 4.5 8.5 11 1" />
          </svg>
        )}
      </div>
      <span className="text-[15px] font-normal text-gray-600">{label}</span>
    </button>
  );
}

export default function AdminNotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(
    new Set(),
  );
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());

  const toggleSet = (
    set: Set<string>,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string,
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const filteredNotifications = mockNotifications.filter(
    (n) =>
      n.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.recipients.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="pb-8">
      {/* Header */}
      <DashboardHeader
        title="Notifications & Reminders"
        subTitle="Manage system alerts and communication logs"
      />

      <div className="bg-white rounded-xl p-2 lg:p-4 mt-8 md:mt-6">
        {/* Filter Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-6 overflow-x-auto hide-scrollbar">
          {/* Search */}
          <div className="relative w-full sm:w-[280px] shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
            <Input
              placeholder="Search courses, instructors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-1">
            {/* All Types */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 px-6 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none shrink-0 text-[14px]"
                >
                  All types{" "}
                  <ChevronDown className="ml-2 size-4 text-gray-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
              >
                <FilterPopoverHeader title="All Types" />
                <div className="pb-3 flex flex-col gap-0.5">
                  {["Announcement", "Reminder", "Email"].map((t) => (
                    <CheckboxItem
                      key={t}
                      label={t}
                      checked={selectedTypes.has(t)}
                      onToggle={() =>
                        toggleSet(selectedTypes, setSelectedTypes, t)
                      }
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* All Status */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 px-6 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none shrink-0 text-[14px]"
                >
                  All status{" "}
                  <ChevronDown className="ml-2 size-4 text-gray-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
              >
                <FilterPopoverHeader title="All Status" />
                <div className="pb-3 flex flex-col gap-0.5">
                  {["Active", "Draft", "Scheduled", "Sent", "Inactive"].map(
                    (s) => (
                      <CheckboxItem
                        key={s}
                        label={s}
                        checked={selectedStatuses.has(s)}
                        onToggle={() =>
                          toggleSet(selectedStatuses, setSelectedStatuses, s)
                        }
                      />
                    ),
                  )}
                </div>
              </PopoverContent>
            </Popover>

            {/* All User */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 px-6 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none shrink-0 text-[14px]"
                >
                  All User <ChevronDown className="ml-2 size-4 text-gray-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
              >
                <FilterPopoverHeader title="All User" />
                <div className="pb-3 flex flex-col gap-0.5">
                  {["Students", "Instructors", "All Users"].map((u) => (
                    <CheckboxItem
                      key={u}
                      label={u}
                      checked={selectedUsers.has(u)}
                      onToggle={() =>
                        toggleSet(selectedUsers, setSelectedUsers, u)
                      }
                    />
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Add a Notification Button */}
            {/* We are directing to /create page beacuse the designs required that */}
            <AdminDashboardButton
              onClick={() =>
                router.push("/dashboard/admin/notifications/create")
              }
              title="Create a Notification"
              icon={Plus}
            />
          </div>
        </div>

        {/* Data Views */}
        <NotificationsTable data={filteredNotifications} />
        <NotificationsList data={filteredNotifications} />

        {/* Bottom Actions */}
        <div className="mt-6 grid grid-cols-2 md:flex justify-end gap-3">
          <Button
            variant="outline"
            className="h-11 px-6 sm:px-10 bg-[#F6F6F6] border border-[#EBEBEB] text-gray-600 font-medium hover:bg-gray-200 rounded-[8px] text-[15px]"
          >
            Delete
          </Button>
          <Button className="h-11 px-6 sm:px-10 bg-primary hover:bg-[#E04818] text-white font-medium rounded-[8px] text-[15px] border-none shadow-none">
            Send now
          </Button>
        </div>
      </div>
    </div>
  );
}
