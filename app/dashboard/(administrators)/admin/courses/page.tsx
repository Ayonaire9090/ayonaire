import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsSummary } from "../../../../../components/dashboard/stats-summary";
import { CoursesTable } from "./_components/courses-table";
import { CoursesList } from "./_components/courses-list";

const mockSummaryData = [
  { title: "All", number: "44" },
  { title: "Active", number: "20" },
  { title: "Pending Cancellation", number: "1" },
  { title: "Pending Payment", number: "3" },
  { title: "On Hold", number: "4" },
  { title: "Cancelled", number: "16" },
];

export default async function AdminCoursesPage() {
  return (
    <>
      <DashboardHeader
        title="Course Management"
        subTitle="Manage course content, pricing, and availability"
      />

      <StatsSummary data={mockSummaryData} />

      {/* For Desktop */}
      <CoursesTable />

      {/* For Mobile */}
      <CoursesList />
    </>
  );
}
