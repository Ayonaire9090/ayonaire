import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorDashboardRecentActivityFeed } from "../_components/instructor-dashboard-recent-activity-feed";
import { NotificationsFilterBar } from "./_components/notifications-filter-bar";

export default function InstrutorNotificationsPage() {
  return (
    <>
      <DashboardHeader
        title="Notifications"
        subTitle="Stay updated with your students' progress"
      />
      <NotificationsFilterBar />
      <InstructorDashboardRecentActivityFeed
        showBadge
        title="Notifications"
        className="w-full mb-4 lg:mb-8"
      />
    </>
  );
}
