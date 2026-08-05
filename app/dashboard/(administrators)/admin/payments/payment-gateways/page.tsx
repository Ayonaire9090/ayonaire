import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PaymentGatewayList } from "./_components/payment-gateway-list";
import { PaymentsTabs } from "../_components/payments-tabs";

export default async function AdminPaymentGatewaysPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <DashboardHeader
        title="Payment Gateway Integration"
        subTitle="Manage and connect payment providers for course purchases"
      />
      <PaymentsTabs />
      <PaymentGatewayList />
    </div>
  );
}
