"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  OrderStatusBadge,
  PaymentStatusBadge,
  EnrollmentStatusBadge,
  OrderActions,
  mockOrders,
} from "./orders-data";

export const OrdersList = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.course.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="md:hidden mt-2 flex flex-col gap-0">
      {/* Search bar — sits on the page background */}
      <div className="px-0 pb-3">
        <div className="relative flex gap-4 items-center">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-400 pointer-events-none" />
          <Input
            placeholder="Search for students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 pr-12 rounded-xl border-none bg-white h-12 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 shadow-none"
          />
          {/* Three-dot action beside search */}
          <div className="bg-white rounded-lg p-2">
            <OrderActions />
          </div>
        </div>
      </div>

      {/* White card containing the section header + list */}
      <div className="bg-white rounded-2xl overflow-hidden">
        {/* Section header inside the card */}
        <div className="px-4 pt-4 pb-3">
          <h2 className="text-[17px] font-semibold text-gray-900 leading-tight">
            Orders
          </h2>
          <p className="text-[13px] text-gray-400 mt-0.5">
            Manage Orders content, pricing, and availability
          </p>
        </div>

        {/* Order cards */}
        <div className="flex flex-col p-2 gap-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-start gap-3 px-4 py-4 rounded-xl bg-[#F6F6F6]"
            >
              {/* Avatar */}
              <Avatar className="size-10 shrink-0 mt-0.5">
                <AvatarImage src={order.user.avatar} alt={order.user.name} />
                <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                  {order.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Row 1: Order ID + Course Name + Menu */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-0">
                    {/* Order ID & Course on same line, space-between */}
                    <div className="flex items-center justify-between w-full gap-3">
                      <span className="text-[14.5px] font-semibold text-gray-900 whitespace-nowrap">
                        {order.orderId}
                      </span>
                      <span className="text-[13px] text-gray-900 text-right leading-tight">
                        {order.course}
                      </span>
                    </div>

                    {/* Row 2: Amount • Payment Method */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[13px] font-medium text-gray-500">
                        {order.amount}
                      </span>
                      <span className="text-gray-800 text-[15px] font-medium">
                        •
                      </span>
                      <span className="text-[14px] text-gray-800 font-medium">
                        {order.paymentMethod}
                      </span>
                    </div>

                    {/* Row 3: Status badges */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <OrderStatusBadge status={order.orderStatus} />
                      <PaymentStatusBadge status={order.paymentStatus} />
                      <EnrollmentStatusBadge status={order.enrollmentStatus} />
                    </div>
                  </div>

                  {/* Three-dot menu */}
                  <div className="shrink-0 -mt-1 -mr-2">
                    <OrderActions orderId={order.id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-4 border-t border-gray-100">
          <span className="text-gray-900 text-[14px]">Page 1 of 5</span>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 text-gray-900 text-[14px] hover:text-black transition-colors">
              <ChevronLeft className="size-4" /> Prev.
            </button>
            <button className="flex items-center gap-1 text-gray-900 text-[14px] hover:text-black transition-colors">
              Next <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
