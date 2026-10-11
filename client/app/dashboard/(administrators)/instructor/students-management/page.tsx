import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorStudentDataFilters } from "../_components/instructor-student-data-filters";
import { InstructorStudentCourseSummaryAnalytics } from "./_components/instructor-student-course-summary-analytics";
import { InstructorStudentManagementTable } from "./_components/instructor-student-management-table";
import { InstructorStudentManagementList } from "./_components/instructor-student-management-list";

export default function InstrutorStudentsManagementPage() {
  return (
    <>
      <DashboardHeader
        title="Students Management"
        subTitle="Monitor academic performance and student engagement across all active cohorts."
      />
      <InstructorStudentDataFilters />
      <InstructorStudentCourseSummaryAnalytics />

      <div className="hidden lg:block mb-8">
        <InstructorStudentManagementTable />
      </div>
      <div className="block lg:hidden">
        <InstructorStudentManagementList />
      </div>
    </>
  );
}
