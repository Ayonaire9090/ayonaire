import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { format } from "date-fns";
import { UserProfile } from "@/lib/api/types";
import {
  useSuspendUserMutation,
  useDeactivateUserMutation,
  useActivateUserMutation,
  useDeleteUserMutation,
} from "@/hooks/api/use-admin";

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

export function StatusBadge({ status, userId }: { status: UserStatus; userId: string }) {
  const suspend = useSuspendUserMutation();
  const deactivate = useDeactivateUserMutation();
  const activate = useActivateUserMutation();

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

  const run = (action: "activate" | "deactivate" | "suspend", label: string) => {
    const mutation = action === "activate" ? activate : action === "deactivate" ? deactivate : suspend;
    mutation.mutate(userId, {
      onSuccess: () => toast.success(`User ${label}`),
      onError: (err) => toast.error(err instanceof Error ? err.message : `Failed to ${action} user`),
    });
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
      <AppDropdownItem variant="badge" onClick={() => run("activate", "activated")}>
        Active
      </AppDropdownItem>
      <AppDropdownItem variant="badge" onClick={() => run("deactivate", "deactivated")}>
        Deactivate
      </AppDropdownItem>
      <AppDropdownItem variant="active-badge" onClick={() => run("suspend", "suspended")}>
        Suspend
      </AppDropdownItem>
    </AppDropdown>
  );
}

export function UserActions({ userId }: { userId: string }) {
  const router = useRouter();
  const deleteUser = useDeleteUserMutation();

  const handleDelete = () => {
    if (!window.confirm("Delete this user? This cannot be undone.")) return;
    deleteUser.mutate(userId, {
      onSuccess: () => toast.success("User deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete user"),
    });
  };

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
      <AppDropdownItem
        variant="menu"
        onClick={() => router.push(`/dashboard/admin/users/${userId}`)}
      >
        View User Profile
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem
        variant="menu"
        onClick={() => router.push(`/dashboard/admin/users/${userId}`)}
      >
        Edit
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu" onClick={handleDelete}>
        Delete User
      </AppDropdownItem>
    </AppDropdown>
  );
}
