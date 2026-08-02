import { format } from "date-fns";
import { NotificationRecord } from "@/lib/api/endpoints/notifications";

export type GlobalReminder = {
  id: string;
  templateName: string;
  type: string;
  channel: string;
  status: "Active" | "Inactive";
  lastEdited: string;
};

export function mapNotificationToGlobalReminder(
  notification: NotificationRecord,
): GlobalReminder {
  return {
    id: notification._id,
    templateName: notification.name,
    type: notification.type || "Reminder",
    channel: notification.channel || "In-App",
    status: notification.status === "active" ? "Active" : "Inactive",
    lastEdited: notification.createdAt
      ? format(new Date(notification.createdAt), "MMM dd, yyyy")
      : "-",
  };
}
