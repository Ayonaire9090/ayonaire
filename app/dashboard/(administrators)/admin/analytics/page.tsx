import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AnalyticsStatCards } from "./_components/analytics-stat-cards";
import { AnalyticsRevenueChart } from "./_components/analytics-revenue-chart";
import { AnalyticsEnrollmentChart } from "./_components/analytics-enrollment-chart";
import { AnalyticsCourseBreakdown } from "./_components/analytics-course-breakdown";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Analytics"
        subTitle="Platform-wide performance across revenue, users, courses and enrollments"
      />

      <AnalyticsStatCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <AnalyticsRevenueChart />
        <AnalyticsEnrollmentChart />
      </div>

      <AnalyticsCourseBreakdown />
    </div>
  );
}
