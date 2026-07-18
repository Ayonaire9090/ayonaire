"use client";

import React from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { ChevronDown, X } from "lucide-react";
import {
  OrderData,
  OrderStatusBadge,
  PaymentStatusBadge,
  EnrollmentStatusBadge,
  OrderActions,
  mapPaymentRecordToOrderData,
} from "./orders-data";
import { useGetAllPayments } from "@/hooks/api/use-payments";

//Shared Popover Header

function FilterPopoverHeader({ title }: { title: string }) {
  return (
    <div className="flex items-start justify-between p-5 pb-4">
      <span className="text-[20px] font-bold text-gray-900 leading-tight">
        {title}
      </span>
      <PopoverClose asChild>
        <button className="size-9 flex items-center justify-center bg-[#EBEBEB] rounded-full hover:bg-gray-300 transition-colors shrink-0 mt-0.5">
          <X className="size-[16px] text-gray-700" />
        </button>
      </PopoverClose>
    </div>
  );
}

//Checkbox Filter Row

function CheckboxItem({
  label,
  checked,
  onToggle,
  danger,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3.5 w-full px-5 py-3 hover:bg-white/60 transition-colors text-left rounded-xl"
    >
      <div
        className={`size-5 rounded-[5px] border-2 flex items-center justify-center shrink-0 transition-colors ${
          checked ? "bg-primary border-primary" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <svg
            className="size-3 text-white"
            viewBox="0 0 12 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 5 4.5 8.5 11 1" />
          </svg>
        )}
      </div>
      <span
        className={`text-[15px] font-normal ${
          danger ? "text-red-500" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

//Main Component

export const OrdersTable = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  // Filter states (multi-select checkboxes)
  const [selectedOrderStatuses, setSelectedOrderStatuses] = React.useState<
    Set<string>
  >(new Set());
  const [selectedPaymentStatuses, setSelectedPaymentStatuses] = React.useState<
    Set<string>
  >(new Set());
  const [selectedEnrollmentStatuses, setSelectedEnrollmentStatuses] =
    React.useState<Set<string>>(new Set());
  const [selectedBulkActions, setSelectedBulkActions] = React.useState<
    Set<string>
  >(new Set());

  const toggleSet = (
    set: Set<string>,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string,
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const { data, isLoading, isError } = useGetAllPayments();
  const orders: OrderData[] = (data?.data?.data ?? []).map(
    mapPaymentRecordToOrderData,
  );

  const filteredOrders = orders.filter(
    (order) =>
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.course.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const tableColumns: ColumnDef<OrderData>[] = [
    {
      key: "user",
      header: "User",
      cell: (order) => (
        <div className="flex items-center gap-3 min-w-[140px]">
          <Avatar className="size-9 shrink-0">
            <AvatarImage src={order.user.avatar} alt={order.user.name} />
            <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
              {order.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-900 text-[14px] whitespace-nowrap">
            {order.user.name}
          </span>
        </div>
      ),
    },
    {
      key: "orderId",
      header: "Order ID",
      cell: (order) => (
        <span className="text-gray-500 text-[14px] whitespace-nowrap">
          {order.orderId}
        </span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (order) => (
        <span className="text-gray-700 font-medium text-[14px] whitespace-nowrap">
          {order.course}
        </span>
      ),
    },
    {
      key: "amount",
      header: "Amount",
      cell: (order) => (
        <span className="text-gray-700 font-medium text-[14px] whitespace-nowrap">
          {order.amount}
        </span>
      ),
    },
    {
      key: "paymentMethod",
      header: "Payment Method",
      cell: (order) => (
        <span className="text-gray-500 text-[14px] whitespace-nowrap">
          {order.paymentMethod}
        </span>
      ),
    },
    {
      key: "orderStatus",
      header: "Order Status",
      cell: (order) => <OrderStatusBadge status={order.orderStatus} />,
    },
    {
      key: "paymentStatus",
      header: "Payment Status",
      cell: (order) => <PaymentStatusBadge status={order.paymentStatus} />,
    },
    {
      key: "enrollmentStatus",
      header: <div className="flex items-center gap-1">Enrollment Status</div>,
      cell: (order) => (
        <EnrollmentStatusBadge status={order.enrollmentStatus} />
      ),
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "pr-4",
      className: "pr-4",
      cell: (order) => <OrderActions orderId={order.id} />,
    },
  ];

  const bulkActionItems = [
    "Mark as Completed",
    "Put on Hold",
    "Cancel Orders",
    "Revoke Access",
    "Refund Orders",
    "Transfer Enrollment",
    "Delete Orders",
  ];

  const orderStatusItems = [
    "Pending Payment",
    "Processing",
    "On Hold",
    "Completed",
    "Cancelled",
  ];

  const paymentStatusItems = [
    "Unpaid",
    "Pending Verification",
    "Paid",
    "Verified",
  ];

  const enrollmentStatusItems = [
    "Pending Payment",
    "Processing",
    "On Hold",
    "Completed",
    "Cancelled",
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto mt-6 bg-white rounded-xl p-2 lg:p-4">
      {/* Header Row */}
      <div className="w-full flex flex-col xl:flex-row xl:items-start xl:justify-between pb-6 gap-4">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
            Orders
          </h2>
          <p className="text-[15px] text-gray-500">
            Manage Orders content, pricing, and availability
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Search */}
          <div className="relative w-full sm:w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
            <Input
              placeholder="Search students...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
            />
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-2 pb-4">
        {/* Bulk Action */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Bulk Action{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[300px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            {/* Selected count */}
            {selectedBulkActions.size > 0 && (
              <div className="px-5 pt-4 pb-0">
                <span className="text-primary font-semibold text-[14px]">
                  ({selectedBulkActions.size}) Selected
                </span>
              </div>
            )}
            <FilterPopoverHeader title="Bulk actions" />
            <div className="pb-3 flex flex-col gap-0.5">
              {bulkActionItems.map((action) => (
                <CheckboxItem
                  key={action}
                  label={action}
                  checked={selectedBulkActions.has(action)}
                  onToggle={() =>
                    toggleSet(
                      selectedBulkActions,
                      setSelectedBulkActions,
                      action,
                    )
                  }
                  danger={action === "Delete Orders"}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Filter (static) */}
        <Button
          variant="outline"
          className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
        >
          Filter <ChevronDown className="ml-1 size-4 text-gray-500" />
        </Button>

        {/* Order Status */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Order Status{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Order Status" />
            <div className="pb-3 flex flex-col gap-0.5">
              {orderStatusItems.map((s) => (
                <CheckboxItem
                  key={s}
                  label={s}
                  checked={selectedOrderStatuses.has(s)}
                  onToggle={() =>
                    toggleSet(
                      selectedOrderStatuses,
                      setSelectedOrderStatuses,
                      s,
                    )
                  }
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Payment Status */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Payment Status{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Payment Status" />
            <div className="pb-3 flex flex-col gap-0.5">
              {paymentStatusItems.map((s) => (
                <CheckboxItem
                  key={s}
                  label={s}
                  checked={selectedPaymentStatuses.has(s)}
                  onToggle={() =>
                    toggleSet(
                      selectedPaymentStatuses,
                      setSelectedPaymentStatuses,
                      s,
                    )
                  }
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Enrollment Status */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Enrollment Status{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Enrollment Status" />
            <div className="pb-3 flex flex-col gap-0.5">
              {enrollmentStatusItems.map((s) => (
                <CheckboxItem
                  key={s}
                  label={s}
                  checked={selectedEnrollmentStatuses.has(s)}
                  onToggle={() =>
                    toggleSet(
                      selectedEnrollmentStatuses,
                      setSelectedEnrollmentStatuses,
                      s,
                    )
                  }
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* All Batch */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              All Batch <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="All Batch" />
            <div className="pb-4 flex flex-col gap-1">
              {["Jan 2026", "Feb 2026", "March 2026"].map((b) => (
                <PopoverClose key={b} asChild>
                  <button className="text-left px-5 py-3 text-[15px] text-gray-500 hover:bg-white/60 rounded-xl transition-colors">
                    {b}
                  </button>
                </PopoverClose>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* All Course */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              All Course <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[320px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6] max-h-[420px] overflow-y-auto"
          >
            <FilterPopoverHeader title="All Course" />
            <div className="pb-4 flex flex-col gap-1">
              {[
                "AI Engineering 1.0",
                "DS & Gen 1.0",
                "DA & AI Automation 1.0",
                "UI/UX Design 1.0",
                "PM & AI for PM 1.0",
                "Cloud Computing 1.0",
                "DevOp Engineering 1.0",
                "Cyber Security 1.0",
                "Software Engineering 1.0",
                "Frontend Dev 1.0",
                "Backend Dev 1.0",
                "Business Analytics & AI for BA 1.0",
              ].map((c) => (
                <PopoverClose key={c} asChild>
                  <button className="text-left px-5 py-3 text-[15px] text-gray-500 hover:bg-white/60 rounded-xl transition-colors">
                    {c}
                  </button>
                </PopoverClose>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Apply Button */}
        <Button className="h-10 px-5 bg-primary text-white font-medium rounded-[8px] text-[14px] hover:bg-primary/90">
          Apply
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load orders. Please try again.
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
            No orders found.
          </div>
        ) : (
          <DataTable
            data={filteredOrders}
            columns={tableColumns}
            keyExtractor={(o) => o.id}
            selectable
          />
        )}
      </div>
    </div>
  );
};
