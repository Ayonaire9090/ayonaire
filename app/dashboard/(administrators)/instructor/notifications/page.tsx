import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { NotificationInbox } from "@/components/dashboard/notification-inbox";

export default function InstrutorNotificationsPage() {
  return (
    <>
      <DashboardHeader
        title="Notifications"
        subTitle="Stay updated with your students' progress"
      />
      <NotificationInbox />
    </>
  );
}
