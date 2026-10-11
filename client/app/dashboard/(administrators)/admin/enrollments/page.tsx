import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { EnrollmentsManager } from "./_components/enrollments-manager";

export default function AdminEnrolmentsPage() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-8">
      <DashboardHeader
        title="Enrollments"
        subTitle="Manage your platform enrollments"
      />
      <EnrollmentsManager />
    </div>
  );
}
