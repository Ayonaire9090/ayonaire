"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { OrderData, BillingAddress, ShippingAddress } from "../../_components/orders-types";
import { useEditOrderMutation } from "@/hooks/api/use-payments";

import { OrderSidebar } from "./order-sidebar";
import { Button } from "@/components/ui/button";
import { OrderGeneralSection } from "./order-general-section";
import { OrderBillingSection } from "./order-billing-section";
import { OrderShippingSection } from "./order-shipping-section";
import { OrderItemsSummary } from "./order-items-summary";

interface OrderDetailsManagerProps {
  order: OrderData;
}

export const OrderDetailsManager = ({ order }: OrderDetailsManagerProps) => {
  const [billing, setBilling] = useState<BillingAddress>(order.billing);
  const [shipping, setShipping] = useState<ShippingAddress>(order.shipping);
  const editOrder = useEditOrderMutation();

  const handleUpdate = () => {
    editOrder.mutate(
      {
        orderId: order.id,
        billingAddress: { ...billing },
        shippingAddress: { ...shipping },
      },
      {
        onSuccess: () => toast.success("Order updated"),
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to update order"),
      },
    );
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start mt-4">
      {/* Main Content Area */}
      <div className="flex flex-col gap-10 flex-1 w-full max-w-full">
        {/* General Section */}
        <OrderGeneralSection order={order} />

        {/* Addresses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <OrderBillingSection
            order={order}
            billing={billing}
            onBillingChange={setBilling}
          />
          <OrderShippingSection
            order={order}
            shipping={shipping}
            onShippingChange={setShipping}
          />
        </div>

        {/* ITEMS SUMMARY ON DESKTOP (md and above) */}
        <div className="hidden md:block w-full">
           <OrderItemsSummary order={order} />
        </div>

        {/* Update Button */}
        <div>
          <Button
            onClick={handleUpdate}
            disabled={editOrder.isPending}
            className="h-12 px-8 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-xl font-medium shadow-none"
          >
            {editOrder.isPending ? "Updating..." : "Update"}
          </Button>
        </div>
      </div>

      {/* Sidebar Area */}
      <div className="w-full lg:w-[320px] flex flex-col gap-6 shrink-0 pt-4 lg:pt-0">
        <OrderSidebar order={order} />

        {/* ITEMS SUMMARY ON MOBILE (below md) */}
        <div className="block md:hidden">
           <OrderItemsSummary order={order} />
        </div>
      </div>
    </div>
  );
};
