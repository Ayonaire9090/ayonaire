import { format } from "date-fns";
import { NotificationRecord } from "@/lib/api/endpoints/notifications";

export type HistoryLog = {
  id: string;
  dateSent: string;
  recipients: number;
  success: number;
  failed: number;
  status: "Success" | "Partial" | "Failed" | "Queued";
};

function deriveStatus(notification: NotificationRecord): HistoryLog["status"] {
  if (notification.status !== "sent" && !notification.sentAt) return "Queued";
  const { successCount, failedCount } = notification.stats ?? {
    successCount: 0,
    failedCount: 0,
  };
  if (failedCount === 0) return "Success";
  if (successCount === 0) return "Failed";
  return "Partial";
}

export function mapNotificationToHistoryLog(
  notification: NotificationRecord,
): HistoryLog {
  const { successCount = 0, failedCount = 0 } = notification.stats ?? {};
  const sentDate = notification.sentAt ?? notification.createdAt;

  return {
    id: notification._id,
    dateSent: sentDate ? format(new Date(sentDate), "yyyy-MM-dd hh:mm a") : "-",
    recipients: successCount + failedCount,
    success: successCount,
    failed: failedCount,
    status: deriveStatus(notification),
  };
}
