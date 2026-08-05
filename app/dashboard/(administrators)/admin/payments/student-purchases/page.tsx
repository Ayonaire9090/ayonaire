import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentPurchasesStats } from "./_components/student-purchases-stats";
import { AdminStudentPurchasesTable } from "./_components/student-purchases-table";
import { AdminStudentPurchasesList } from "./_components/students-purchases-list";
import { PaymentsTabs } from "../_components/payments-tabs";

export default async function AdminPaymentsStudentsPurchasesPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Student Purchases"
        subTitle="Recent student purchases on your platform"
      />
      <PaymentsTabs />
      <StudentPurchasesStats />
      <div className="hidden lg:block w-full">
        <AdminStudentPurchasesTable />
      </div>
      <div className="block lg:hidden w-full">
        <AdminStudentPurchasesList />
      </div>
    </div>
  );
}
