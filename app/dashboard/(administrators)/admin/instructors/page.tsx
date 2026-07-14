import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorsSummary } from "./_components/instructors-summary";
import { InstructorsTable } from "./_components/instructors-table";
import { InstructorsList } from "./_components/instructors-list";

export default function AdminInstructorsPage() {
  return (
    <>
      <DashboardHeader
        title="Instructor Management"
        subTitle="Manage instructors on your platform"
      />

      <InstructorsSummary />

      {/* For Desktop */}
      <InstructorsTable />

      {/* For Mobile */}
      <InstructorsList />
    </>
  );
}
