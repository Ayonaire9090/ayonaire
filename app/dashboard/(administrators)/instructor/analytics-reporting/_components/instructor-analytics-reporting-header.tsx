import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorStudentDataFilters } from "../../_components/instructor-student-data-filters";
import { InstructorDashboardButton } from "../../_components/instructor-dashboard-button";
import { ArrowDown } from "lucide-react";

export const InstructorAnalyticsReportingHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-end lg:justify-between items-start lg:items-center gap-2">
      <InstructorStudentDataFilters />
      <div className="flex items-center gap-2">
        <DashboardSearch />
        <InstructorDashboardButton title="Download Reports" icon={ArrowDown} />
      </div>
    </div>
  );
};
