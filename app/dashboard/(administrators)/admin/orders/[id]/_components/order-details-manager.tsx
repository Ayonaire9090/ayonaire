"use client";

import React, { useState } from "react";
import { OrderData } from "../../_components/orders-types";

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
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start mt-4">
      {/* Main Content Area */}
      <div className="flex flex-col gap-10 flex-1 w-full max-w-full">
        {/* General Section */}
        <OrderGeneralSection order={order} />

        {/* Addresses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <OrderBillingSection order={order} />
          <OrderShippingSection order={order} />
        </div>

        {/* ITEMS SUMMARY ON DESKTOP (md and above) */}
        <div className="hidden md:block w-full">
           <OrderItemsSummary order={order} />
        </div>

        {/* Update Button */}
        <div>
          <Button className="h-12 px-8 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-xl font-medium shadow-none">
            Update
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
