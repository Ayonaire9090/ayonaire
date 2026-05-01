import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PaymentAnalytics } from "./_components/payment-analytics";
import { AdminPaymentsTable } from "./_components/payments-table";
import { AdminPaymentsList } from "./_components/payments-list";

export default async function AdminPaymentsPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Payments"
        subTitle="View transaction history and revenue analytics"
      />
      {/* Analytics */}
      <PaymentAnalytics />

      <div className="hidden lg:block w-full">
        <AdminPaymentsTable />
      </div>
      <div className="block lg:hidden w-full">
        <AdminPaymentsList />
      </div>
    </div>
  );
}
