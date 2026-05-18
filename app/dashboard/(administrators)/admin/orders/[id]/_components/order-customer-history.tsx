import React from "react";
import { ChevronUp, HelpCircle } from "lucide-react";

export const OrderCustomerHistory = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4 cursor-pointer">
        <h3 className="text-[15px] font-semibold text-gray-900">
          Customer history
        </h3>
        <ChevronUp className="size-4 text-gray-400" />
      </div>

      <div className="flex flex-col gap-5 bg-[#FBFBFB] p-5 rounded-2xl">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[14px] text-gray-800 font-semibold">
            Total orders
            <HelpCircle fill="gray" className="size-5 text-white" />
          </div>
          <span className="text-[14px] text-gray-500">5</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[14px] text-gray-800 font-semibold">
            Total revenue value
            <HelpCircle fill="gray" className="size-5 text-white" />
          </div>
          <span className="text-[14px] text-gray-500">₦291,000.00</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-[14px] text-gray-800 font-semibold">
            Aiverage order value
            <HelpCircle fill="gray" className="size-5 text-white" />
          </div>
          <span className="text-[14px] text-gray-500">₦50,200.00</span>
        </div>
      </div>
    </div>
  );
};
