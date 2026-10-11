import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorStudentDataFilters } from "../../_components/instructor-student-data-filters";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorCourseDetailedAnalyticsTable } from "./_components/instructor-student-course-detailed-analytics-table";
import { InstructorCourseDetailedAnalyticsList } from "./_components/instructor-student-course-detailed-analytics-list";

export default function InstructorStudentAnalyticsOverviewByCoursePage() {
  return (
    <>
      <DashboardHeader
        title="Analytics Overview"
        subTitle="Real-time performance data across your courses"
      />
      <div className="flex flex-col lg:flex-row gap-3  justify-between items-center">
        <InstructorStudentDataFilters />
        <DashboardSearch />
      </div>
      <div className="hidden lg:block">
        <InstructorCourseDetailedAnalyticsTable />
      </div>
      <div className="block lg:hidden">
        <InstructorCourseDetailedAnalyticsList />
      </div>
    </>
  );
}
