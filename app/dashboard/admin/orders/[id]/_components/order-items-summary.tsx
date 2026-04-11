import React from "react";
import { OrderData } from "../../_components/orders-types";
import { HelpCircle } from "lucide-react";

export const OrderItemsSummary = ({ order }: { order: OrderData }) => {
  return (
    <div className="flex flex-col bg-[#FBFBFB] rounded-2xl border border-gray-100 p-5 mt-4">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 pb-12 text-[14px] font-medium text-gray-400">
        <div>Item</div>
        <div className="text-center">Price</div>
        <div className="text-center">Qty</div>
        <div className="text-right">Total</div>
      </div>

      {/* Subtotals Area */}
      <div className="flex flex-col items-end w-full">
        <div className="w-[80%] md:w-[60%] lg:w-[300px] flex flex-col">
          <div className="flex justify-between items-center py-2.5">
            <span className="text-[14px] text-gray-500">Items Subtotal</span>
            <span className="text-[14px] font-semibold text-gray-900">
              ₦00.00
            </span>
          </div>

          <div className="flex justify-between items-center py-2.5">
            <span className="text-[14px] text-gray-500">Order Total</span>
            <span className="text-[14px] font-semibold text-gray-900">
              ₦00.00
            </span>
          </div>

          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className="flex justify-between items-center py-2.5">
            <span className="text-[14px] text-gray-500">Paid:</span>
            <span className="text-[14px] font-semibold text-gray-900">
              ₦00.00
            </span>
          </div>

          <div className="flex justify-between items-center py-2.5 text-[14px] text-gray-500">
            <span>Feb 23 2026</span>
          </div>

          <div className="h-px w-full bg-gray-200 my-2"></div>

          <div className="flex items-center gap-2 justify-end py-2 text-[13px] text-gray-500">
            <HelpCircle className="size-4" />
            <span>This order is no longer editable</span>
          </div>
        </div>
      </div>
    </div>
  );
};
