import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { NotificationInbox } from "@/components/dashboard/notification-inbox";

export default function StudentNotificationsPage() {
  return <><DashboardHeader title="Notifications" subTitle="Stay up to date" /><NotificationInbox /></>;
}
