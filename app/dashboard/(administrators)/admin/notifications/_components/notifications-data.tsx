"use client";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoreVertical } from "lucide-react";
import { toast } from "sonner";
import { NotificationRecord } from "@/lib/api/endpoints/notifications";
import {
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
  useSendNotificationMutation,
} from "@/hooks/api/use-notifications";

export type NotificationStatus =
  | "Active"
  | "Draft"
  | "Scheduled"
  | "Sent"
  | "Inactive";

export interface NotificationData {
  id: string;
  name: string;
  type: string;
  recipients: string;
  course: string;
  status: NotificationStatus;
}

function toDisplayStatus(status: string): NotificationStatus {
  const normalized = status?.toLowerCase();
  switch (normalized) {
    case "active":
      return "Active";
    case "scheduled":
      return "Scheduled";
    case "sent":
      return "Sent";
    case "inactive":
      return "Inactive";
    case "draft":
    default:
      return "Draft";
  }
}

function toBackendStatus(status: NotificationStatus): string {
  return status.toLowerCase();
}

export function mapNotificationToNotificationData(
  notification: NotificationRecord,
): NotificationData {
  const course =
    notification.course && typeof notification.course !== "string"
      ? notification.course.title
      : "-";

  const recipients =
    notification.recipientType === "student"
      ? "Students"
      : notification.recipientType === "instructor"
        ? "Instructors"
        : notification.recipientType === "all"
          ? "All Users"
          : (notification.recipientType ?? "All Users");

  return {
    id: notification._id,
    name: notification.name,
    type: notification.type || notification.channel || "Notification",
    recipients,
    course,
    status: toDisplayStatus(notification.status),
  };
}

const statusStyles: Record<NotificationStatus, string> = {
  Active: "bg-[#FFF5EA] text-[#F59E0B]",
  Draft: "bg-[#E6F6EC] text-[#24A164]",
  Scheduled: "bg-[#FFE9E9] text-[#FF5A5F]",
  Sent: "bg-[#E6F6EC] text-[#24A164]",
  Inactive: "bg-gray-100 text-gray-600",
};

export const NotificationStatusBadge = ({
  status,
  notificationId,
}: {
  status: NotificationStatus;
  notificationId: string;
}) => {
  const updateNotification = useUpdateNotificationMutation();
  const sendNotification = useSendNotificationMutation();

  const setStatus = (next: NotificationStatus) => {
    if (next === "Sent") {
      sendNotification.mutate(notificationId, {
        onSuccess: () => toast.success("Notification sent"),
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to send notification"),
      });
      return;
    }

    updateNotification.mutate(
      { id: notificationId, payload: { status: toBackendStatus(next) } },
      {
        onSuccess: () => toast.success(`Notification marked ${next.toLowerCase()}`),
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to update status"),
      },
    );
  };

  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium focus:outline-none transition-colors ${statusStyles[status]}`}
        >
          {status}
          <ChevronDown className="size-3.5" />
        </button>
      }
    >
      <AppDropdownItem variant={status === "Active" ? "active-badge" : "badge"} onClick={() => setStatus("Active")}>
        Active
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Draft" ? "active-badge" : "badge"} onClick={() => setStatus("Draft")}>
        Draft
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Scheduled" ? "active-badge" : "badge"} onClick={() => setStatus("Scheduled")}>
        Scheduled
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Sent" ? "active-badge" : "badge"} onClick={() => setStatus("Sent")}>
        Sent
      </AppDropdownItem>
      <AppDropdownItem variant={status === "Inactive" ? "active-badge" : "badge"} onClick={() => setStatus("Inactive")}>
        Inactive
      </AppDropdownItem>
    </AppDropdown>
  );
};

export const NotificationActions = ({ notificationId }: { notificationId: string }) => {
  const deleteNotification = useDeleteNotificationMutation();
  const createDuplicateSource = notificationId;

  const handleDelete = () => {
    if (!window.confirm("Delete this notification? This cannot be undone.")) return;
    deleteNotification.mutate(createDuplicateSource, {
      onSuccess: () => toast.success("Notification deleted"),
      onError: (err) =>
        toast.error(err instanceof Error ? err.message : "Failed to delete notification"),
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
      <AppDropdownItem variant="menu" onClick={() => toast.info("Editing a notification isn't available yet.")}>
        Edit
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu" onClick={() => toast.info("Duplicating a notification isn't available yet.")}>
        Duplicate
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu" onClick={handleDelete}>Delete</AppDropdownItem>
    </AppDropdown>
  );
};
