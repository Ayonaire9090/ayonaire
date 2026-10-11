"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorDashboardEditProfileButton } from "./_components/instructor-dashboard-edit-profile-button";
import { InstructorDashboardAnalyticsCards } from "./_components/instructor-dashboard-analytics-cards";
import { InstructorDashboardQuickActions } from "./_components/instructor-dashboard-quick-actions";
import { InstructorDashboardRecentActivityFeed } from "./_components/instructor-dashboard-recent-activity-feed";
import { InstructorDashboardAssignedCourses } from "./_components/instructor-dashboard-assigned-courses";
import { useAuthStore } from "@/store/auth.store";

export default function InstructorDashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <DashboardHeader
        title={`Welcome Back, ${user?.name ?? "Instructor"}`}
        subTitle="Here's an overview of your courses and activity today."
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
