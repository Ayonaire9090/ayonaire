"use client";

import React, { useState } from "react";
import { OrderData } from "../../_components/orders-types";
import { AppSelect } from "@/components/ui/app-select";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export const OrderGeneralSection = ({ order }: { order: OrderData }) => {
  const [date, setDate] = useState<Date | undefined>(
    order.dateCreated ? new Date(order.dateCreated) : new Date(),
  );

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium text-gray-900">General</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-[15px] font-semibold text-gray-900">
            Date created
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <div className="relative cursor-pointer">
                <input
                  type="text"
                  readOnly
                  placeholder="Select date"
                  value={date ? format(date, "dd/MM/yyyy") : ""}
                  className="w-full px-4 pr-11 h-12 bg-[#FBFBFB] border border-gray-200 hover:border-gray-300 rounded-xl text-[15px] text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/30 shadow-none cursor-pointer"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <CalendarIcon className="size-5" />
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-xl" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="bg-[#FBFBFB]"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AppSelect
          label="Status"
          value={order.orderStatus}
          className="border-gray-200 bg-[#FBFBFB]"
          options={[
            { label: "Pending Payment", value: "Pending Payment" },
            { label: "Processing", value: "Processing" },
            { label: "On Hold", value: "On Hold" },
            { label: "Completed", value: "Completed" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
        />
        <AppSelect
          label="Customer"
          value={order.user?.name || "Guest"}
          className="border-gray-200 bg-[#FBFBFB]"
          options={[
            {
              label: order.user?.name || "Guest",
              value: order.user?.name || "Guest",
            },
          ]}
        />
      </div>
    </div>
  );
};
