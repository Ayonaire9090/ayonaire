import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { NotificationInbox } from "@/components/dashboard/notification-inbox";

export default function AdminNotificationInboxPage() {
  return <><DashboardHeader title="Notifications" subTitle="Your notification inbox" /><NotificationInbox /></>;
}
