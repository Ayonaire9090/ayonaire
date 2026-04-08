import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";

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
}

export const mockUsers: UserData[] = [
  { id: "1", name: "Jerome Bell", uniqueId: "STU-1823", email: "ryanhen@gmail.com", status: "Deactivate", enrollments: 12, avatar: "https://i.pravatar.cc/150?img=11", role: "student" },
  { id: "2", name: "Jenny Wilson", uniqueId: "STU-1990", email: "isabella@gmail.com", status: "Suspended", enrollments: 8, avatar: "https://i.pravatar.cc/150?img=5", role: "student" },
  { id: "3", name: "Dianne Russell", uniqueId: "STU-2104", email: "bessieco@gmail.com", status: "Suspended", enrollments: 16, avatar: "https://i.pravatar.cc/150?img=9", role: "student" },
  { id: "4", name: "Dianne Russell", uniqueId: "STU-2215", email: "robbert@gmail.com", status: "Suspended", enrollments: 10, avatar: "https://i.pravatar.cc/150?img=20", role: "student" },
  { id: "5", name: "Eleanor Pena", uniqueId: "STU-2330", email: "leslie@gmail.com", status: "Delete", enrollments: 11, avatar: "https://i.pravatar.cc/150?img=32", role: "student" },
  { id: "6", name: "Guy Hawkins", uniqueId: "STU-1990", email: "hawkins@gmail.com", status: "Suspended", enrollments: 8, avatar: "https://i.pravatar.cc/150?img=53", role: "student" },
  { id: "7", name: "Albert Flores", uniqueId: "STU-2219", email: "albert@gmail.com", status: "Active", enrollments: 10, avatar: "https://i.pravatar.cc/150?img=60", role: "student" },
  { id: "8", name: "Sarah Johnson", uniqueId: "INS-1001", email: "sarah.j@gmail.com", status: "Active", enrollments: 24, avatar: "https://i.pravatar.cc/150?img=44", role: "instructor" },
  { id: "9", name: "Michael Chen", uniqueId: "INS-1002", email: "m.chen@gmail.com", status: "Active", enrollments: 18, avatar: "https://i.pravatar.cc/150?img=12", role: "instructor" },
  { id: "10", name: "Lisa Park", uniqueId: "INS-1003", email: "lisa.park@gmail.com", status: "Suspended", enrollments: 6, avatar: "https://i.pravatar.cc/150?img=23", role: "instructor" },
];

export function StatusBadge({ status }: { status: UserStatus }) {
  const getColors = (s: UserStatus) => {
    switch (s) {
      case "Deactivate": return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Suspended": return "bg-[#E6F6EC] text-[#24A164]";
      case "Active": return "bg-[#FFEBE6] text-[#FF7A59]";
      case "Delete": return "bg-[#FFE9E9] text-[#FF5A5F]";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium focus:outline-none transition-colors ${getColors(status)}`}>
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
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
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
