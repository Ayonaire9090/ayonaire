import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorAnalyticsReportingHeader } from "./_components/instructor-analytics-reporting-header";
import { InstructorAnalyticsOverviewCards } from "./_components/instructor-analytics-overview-cards";
import { InstructorMainStudentOverviewAnalytics } from "./_components/instructor-main-student-overview-analytics";
import { InstructorStudentAnalyticsOverviewTable } from "./_components/instructor-student-analytics-overview-table";
import { InstructorStudentAnalyticsOverviewList } from "./_components/instructor-student-analytics-overview-list";

export default function InstrutorAnalyticsReportingPage() {
  return (
    <>
      <DashboardHeader
        title="Analytics Overview"
        subTitle="Real-time performance data across your courses"
      />
      <InstructorAnalyticsReportingHeader />
      <InstructorAnalyticsOverviewCards />
      <InstructorMainStudentOverviewAnalytics />
      <div className="hidden lg:block">
        <InstructorStudentAnalyticsOverviewTable />
      </div>
      <div className="block lg:hidden">
        <InstructorStudentAnalyticsOverviewList />
      </div>
    </>
  );
}
