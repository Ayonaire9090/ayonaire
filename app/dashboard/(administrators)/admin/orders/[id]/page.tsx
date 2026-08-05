"use client";

import { useParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { mapOrderRecordToOrderData } from "../_components/orders-types";
import { OrderDetailsManager } from "./_components/order-details-manager";
import { useGetSingleOrder } from "@/hooks/api/use-payments";

export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleOrder(id);
  const rawOrder = data?.data;
  const order = rawOrder ? mapOrderRecordToOrderData(rawOrder) : null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-gray-400">
        Loading order...
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-red-500">
        Failed to load this order. It may not exist.
      </div>
    );
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
