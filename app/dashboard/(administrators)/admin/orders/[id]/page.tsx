import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { mockOrders } from "../_components/orders-types";
import { notFound } from "next/navigation";
import { OrderDetailsManager } from "./_components/order-details-manager";

export default async function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  // Find the order from the shared mock data (replace with real DB query)
  const order = mockOrders.find((o) => o.id === id);

  if (!order) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-0 pb-4">
      <DashboardHeader
        title={
          <>
            Order <span className="text-primary">{order.orderId}</span> details
          </>
        }
        subTitle={`Manage and edit details for order ${order.orderId}`}
      />
      <div className="mt-4 bg-white p-4 md:p-6 rounded-2xl">
        <OrderDetailsManager order={order} />
      </div>
    </div>
  );
}
