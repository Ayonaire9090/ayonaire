import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PricingPlansStats } from "./_components/pricing-plans-stats";
import { AdminStudentsPricingPlansTable } from "./_components/admin-studentsppricing-plans-table";
import { AdminStudentsPricingPlansList } from "./_components/admin-studentsppricing-plans-list";
import { PaymentsTabs } from "../_components/payments-tabs";

export default async function AdminPaymentsStudentsPricingPlansPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Manage Pricing Plans"
        subTitle="Pricing plans available on your platform"
      />
      <PaymentsTabs />
      <PricingPlansStats />
      <div className="hidden lg:block w-full">
        <AdminStudentsPricingPlansTable />
      </div>
      <div className="block lg:hidden w-full">
        <AdminStudentsPricingPlansList />
      </div>
    </div>
  );
}
