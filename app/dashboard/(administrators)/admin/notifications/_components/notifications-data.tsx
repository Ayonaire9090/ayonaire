"use client";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoreVertical } from "lucide-react";
import React from "react";

export type NotificationStatus = "Active" | "Draft" | "Scheduled" | "Sent" | "Inactive";
export type NotificationType = "Reminder" | "Email";

export interface NotificationData {
  id: string;
  name: string;
  type: NotificationType;
  recipients: string;
  course: string;
  status: NotificationStatus;
}

export const mockNotifications: NotificationData[] = [
  {
    id: "1",
    name: "Assignment Reminder",
    type: "Reminder",
    recipients: "Students",
    course: "AI Eng 1.0",
    status: "Active",
  },
  {
    id: "2",
    name: "Instructor Feedback",
    type: "Email",
    recipients: "Instructors",
    course: "-",
    status: "Draft",
  },
  {
    id: "3",
    name: "Weekly Newsletter",
    type: "Email",
    recipients: "All Users",
    course: "-",
    status: "Scheduled",
  },
  {
    id: "4",
    name: "Course Completion Alert",
    type: "Reminder",
    recipients: "Students",
    course: "Data Sci 2.0",
    status: "Sent",
  },
  {
    id: "5",
    name: "New Course Announcement",
    type: "Email",
    recipients: "All Users",
    course: "-",
    status: "Inactive",
  },
];

const statusStyles: Record<NotificationStatus, string> = {
  Active: "bg-[#FFF5EA] text-[#F59E0B]",
  Draft: "bg-[#E6F6EC] text-[#24A164]",
  Scheduled: "bg-[#FFE9E9] text-[#FF5A5F]",
  Sent: "bg-[#FFE9E9] text-[#FF5A5F]",
  Inactive: "bg-[#FFF5EA] text-[#F59E0B]",
};

export const NotificationStatusBadge = ({
  status,
}: {
  status: NotificationStatus;
}) => {
  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium focus:outline-none transition-colors ${statusStyles[status]}`}
        >
          {status}
        </button>
      }
    >
      <AppDropdownItem variant={status === "Active" ? "active-badge" : "badge"}>
        Active
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Draft" ? "active-badge" : "badge"}>
        Draft
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Scheduled" ? "active-badge" : "badge"}>
        Scheduled
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Sent" ? "active-badge" : "badge"}>
        Sent
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Inactive" ? "active-badge" : "badge"}>
        Inactive
      </AppDropdownItem>
    </AppDropdown>
  );
};

export const NotificationActions = () => {
  return (
    <AppDropdown
      variant="white"
      align="end"
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-transparent"
        >
          <MoreVertical className="size-[18px] text-black" />
        </Button>
      }
    >
      <AppDropdownItem variant="menu">Edit</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu">Duplicate</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu">Delete</AppDropdownItem>
    </AppDropdown>
  );
};
