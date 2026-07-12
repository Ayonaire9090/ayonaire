import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CoursesTable } from "./_components/courses-table";
import { CoursesList } from "./_components/courses-list";
import { CoursesSummary } from "./_components/courses-summary";

export default function AdminCoursesPage() {
  return (
    <>
      <DashboardHeader
        title="Course Management"
        subTitle="Manage course content, pricing, and availability"
      />

      <CoursesSummary />

      {/* For Desktop */}
      <CoursesTable />

      {/* For Mobile */}
      <CoursesList />
    </>
  );
}
