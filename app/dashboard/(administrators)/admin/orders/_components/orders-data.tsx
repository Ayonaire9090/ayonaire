"use client";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoreVertical } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

// Re-export types & data from the server-safe file so existing imports keep working
export type {
  OrderStatus,
  PaymentStatus,
  EnrollmentStatus,
  BillingAddress,
  ShippingAddress,
  OrderNote,
  OrderData,
} from "./orders-types";
export { mockOrders, mapPaymentRecordToOrderData } from "./orders-types";

//Local type aliases (for use inside this file only)
import type {
  OrderStatus,
  PaymentStatus,
  EnrollmentStatus,
} from "./orders-types";

//Order Status Badge

const orderStatusStyles: Record<OrderStatus, string> = {
  "Pending Payment": "bg-[#FFF3EA] text-[#FF7A1A]",
  Processing: "bg-[#EAF0FF] text-[#3B6EF5]",
  "On Hold": "bg-[#FFF5EA] text-[#F59E0B]",
  Completed: "bg-[#E6F6EC] text-[#24A164]",
  Cancelled: "bg-[#FFEBE9] text-[#E5383B]",
};

export const OrderStatusBadge = ({ status }: { status: OrderStatus }) => {
  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap focus:outline-none transition-colors ${orderStatusStyles[status]}`}
        >
          {status}
          <ChevronDown className="size-3.5" />
        </button>
      }
    >
      <AppDropdownItem variant="badge">Completed</AppDropdownItem>
      <AppDropdownItem variant="badge">Processing</AppDropdownItem>
      <AppDropdownItem variant="active-badge">Pending Payment</AppDropdownItem>
      <AppDropdownItem variant="badge">On Hold</AppDropdownItem>
      <AppDropdownItem variant="badge">Cancelled</AppDropdownItem>
    </AppDropdown>
  );
};

//Payment Status Badge
const paymentStatusStyles: Record<PaymentStatus, string> = {
  Paid: "bg-[#E6F6EC] text-[#24A164]",
  "Un Paid": "bg-[#FFEBE9] text-[#E5383B]",
  Verified: "bg-[#EAF0FF] text-[#3B6EF5]",
  "Pending Verification": "bg-[#FFF5EA] text-[#F59E0B]",
};

export const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap focus:outline-none transition-colors ${paymentStatusStyles[status]}`}
        >
          {status}
          <ChevronDown className="size-3.5" />
        </button>
      }
    >
      <AppDropdownItem variant="badge">Paid</AppDropdownItem>
      <AppDropdownItem variant="badge">Unpaid</AppDropdownItem>
      <AppDropdownItem variant="active-badge">Verified</AppDropdownItem>
      <AppDropdownItem variant="badge">Pending Verification</AppDropdownItem>
    </AppDropdown>
  );
};

//Enrollment Status Badge

const enrollmentStatusStyles: Record<EnrollmentStatus, string> = {
  "Not Enrolled": "text-[#E5383B]",
  "Pending Enrollment": "text-[#F59E0B]",
  "Access Granted": "text-[#24A164]",
  "Access Revoked": "text-[#3B6EF5]",
};

export const EnrollmentStatusBadge = ({
  status,
}: {
  status: EnrollmentStatus;
}) => {
  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`text-[13px] font-medium whitespace-nowrap focus:outline-none transition-colors ${enrollmentStatusStyles[status]}`}
        >
          {status}
        </button>
      }
    >
      <AppDropdownItem variant="active-badge">Not Enrolled</AppDropdownItem>
      <AppDropdownItem variant="badge">Pending Enrollment</AppDropdownItem>
      <AppDropdownItem variant="badge">Access Granted</AppDropdownItem>
      <AppDropdownItem variant="badge">Access Revoked</AppDropdownItem>
    </AppDropdown>
  );
};

//Order Actions
export const OrderActions = ({ orderId }: { orderId?: string }) => {
  const router = useRouter();

  return (
    <AppDropdown
      variant="white"
      align="end"
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-transparent"
        >
          <MoreVertical className="size-[18px] text-black" />
        </Button>
      }
    >
      <AppDropdownItem
        variant="menu"
        onClick={() =>
          orderId && router.push(`/dashboard/admin/orders/${orderId}`)
        }
      >
        View
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem
        variant="menu"
        onClick={() =>
          orderId && router.push(`/dashboard/admin/orders/${orderId}`)
        }
      >
        Edit
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu">Delete</AppDropdownItem>
    </AppDropdown>
  );
};
