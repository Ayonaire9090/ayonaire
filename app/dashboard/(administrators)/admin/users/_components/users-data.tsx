import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";
import { format } from "date-fns";
import { UserProfile } from "@/lib/api/types";

export type UserStatus = "Active" | "Suspended" | "Deactivate" | "Delete";
export type UserRole = "student" | "instructor";

export interface UserData {
  id: string;
  name: string;
  uniqueId: string;
  email: string;
  status: UserStatus;
  enrollments: number;
  avatar: string;
  role: UserRole;
  coursesCount?: string;
  batch?: string;
  joined?: string;
  lastActive?: string;
}

function normalizeUserStatus(status: UserProfile["status"]): UserStatus {
  switch (status) {
    case "suspended":
      return "Suspended";
    case "inactive":
      return "Deactivate";
    case "active":
    default:
      return "Active";
  }
}

// Fields with no backend equivalent yet (enrollments, coursesCount, batch,
// lastActive) fall back to placeholders rather than guessed values.
export function mapUserProfileToUserData(user: UserProfile): UserData {
  const role: UserRole = user.role === "instructor" ? "instructor" : "student";
  const prefix = role === "instructor" ? "INS" : "STU";

  return {
    id: user._id,
    name: user.name,
    uniqueId: `${prefix}-${user._id.slice(-6).toUpperCase()}`,
    email: user.email,
    status: normalizeUserStatus(user.status),
    enrollments: 0,
    avatar: user.profile?.url || "/assets/images/user1.png",
    role,
    coursesCount: role === "instructor" ? "-" : undefined,
    batch: role === "instructor" ? "-" : undefined,
    joined: user.createdAt ? format(new Date(user.createdAt), "yyyy-MM-dd") : "-",
    lastActive: role === "instructor" ? "-" : undefined,
  };
}

export function StatusBadge({ status }: { status: UserStatus }) {
  const getColors = (s: string) => {
    switch (s) {
      case "Deactivate":
        return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Suspended":
        return "bg-[#FFE9E9] text-[#FF5A5F]";
      case "Active":
        return "bg-[#E6F6EC] text-[#24A164]";
      case "Delete":
        return "bg-[#FFE9E9] text-[#FF5A5F]";
      case "Pending":
        return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Rejected":
        return "bg-[#FFE9E9] text-[#FF5A5F]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium focus:outline-none transition-colors ${getColors(status)}`}
        >
          {status}
        </button>
      }
    >
      <AppDropdownItem variant="badge">Active</AppDropdownItem>
      <AppDropdownItem variant="badge">Deactivate</AppDropdownItem>
      <AppDropdownItem variant="badge">Delete</AppDropdownItem>
      <AppDropdownItem variant="active-badge">suspended</AppDropdownItem>
    </AppDropdown>
  );
}

export function UserActions() {
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
      <AppDropdownItem variant="menu">View User Profile</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu">Duplicate</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu">Edit</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu">Delete User</AppDropdownItem>
    </AppDropdown>
  );
}
