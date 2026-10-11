import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorDashboardButton } from "../../_components/instructor-dashboard-button";
import { ArrowDown } from "lucide-react";
import { InstructorCourseRevenueFilters } from "./_components/instructor-course-revenue-filters";
import { InstructorCourseRevenueTable } from "./_components/instructor-course-revenue-table";
import { InstructorCourseRevenueList } from "./_components/instructor-course-revenue-list";
import { InstructorCourseRevenueAnalytics } from "./_components/instructor-course-revenue-analytics";

export default function InstructorCourseRevenuePage() {
  return (
    <>
      <DashboardHeader
        title="Course Revenue"
        subTitle="Detailed breakdown of your educational earnings and performance."
      />
      <div className="flex justify-between items-center">
        <DashboardSearch />
        <InstructorDashboardButton
          title="Export Revenue Report"
          icon={ArrowDown}
        />
      </div>
      <InstructorCourseRevenueFilters />
      <div className="hidden lg:block">
        <InstructorCourseRevenueTable />
      </div>
      <div className="block lg:hidden">
        <InstructorCourseRevenueList />
      </div>
      <InstructorCourseRevenueAnalytics />
    </>
  );
}
