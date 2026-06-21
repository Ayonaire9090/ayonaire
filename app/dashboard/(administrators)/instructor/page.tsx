import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorDashboardEditProfileButton } from "./_components/instructor-dashboard-edit-profile-button";
import { InstructorDashboardAnalyticsCards } from "./_components/instructor-dashboard-analytics-cards";
import { InstructorDashboardQuickActions } from "./_components/instructor-dashboard-quick-actions";
import { InstructorDashboardRecentActivityFeed } from "./_components/instructor-dashboard-recent-activity-feed";
import { InstructorDashboardAssignedCourses } from "./_components/instructor-dashboard-assigned-courses";

export default function InstructorDashboardPage() {
  return (
    <>
      <DashboardHeader
        title="Welcome Back, Dr.Sarah"
        subTitle="You have 12 active courses and 28 pending assignments to review today."
      />

      <div className="pb-3">
        <InstructorDashboardEditProfileButton />
        <InstructorDashboardAnalyticsCards />
        <InstructorDashboardQuickActions />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
          <InstructorDashboardRecentActivityFeed />
          <InstructorDashboardAssignedCourses />
        </div>
      </div>
    </>
  );
}
