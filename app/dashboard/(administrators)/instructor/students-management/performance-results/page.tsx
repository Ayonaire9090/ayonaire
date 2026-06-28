import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorStudentDataFilters } from "../../_components/instructor-student-data-filters";
import { InstructorStudentPerformanceResultsTable } from "./instructor-student-performance-results-table";
import { InstructorStudentPerformanceResultsList } from "./instructor-student-performance-results-list";
import { InstructorStudentPerformanceQuizResults } from "./instructor-student-performance-quiz-results";

export default function InstructorStudentPerformanceResults() {
  return (
    <>
      <DashboardHeader
        title="Performance Results"
        subTitle="Track your student's academic progress, grades, and upcoming tasks."
      />
      <InstructorStudentDataFilters />

      <div className="hidden lg:block mb-8 mt-6">
        <InstructorStudentPerformanceResultsTable />
      </div>
      <div className="block lg:hidden mt-6">
        <InstructorStudentPerformanceResultsList />
      </div>
      <InstructorStudentPerformanceQuizResults />
    </>
  );
}
