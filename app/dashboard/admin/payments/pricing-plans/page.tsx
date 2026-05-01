import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { AdminStudentsPricingPlansTable } from "./_components/admin-studentsppricing-plans-table";
import { AdminStudentsPricingPlansList } from "./_components/admin-studentsppricing-plans-list";

export default async function AdminPaymentsStudentsPricingPlansPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Manage Pricing Plans"
        subTitle="Recent Manage pricing planson your platform"
      />
      <StatsSummary />
      <div className="hidden lg:block w-full">
        <AdminStudentsPricingPlansTable />
      </div>
      <div className="block lg:hidden w-full">
        <AdminStudentsPricingPlansList />
      </div>
    </div>
  );
}
