"use client";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown, MoreVertical } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useBulkEditOrdersMutation } from "@/hooks/api/use-payments";

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
export { mapPaymentRecordToOrderData, mapOrderRecordToOrderData } from "./orders-types";

//Local type aliases (for use inside this file only)
import type {
  OrderStatus,
  PaymentStatus,
  EnrollmentStatus,
} from "./orders-types";

//Order Status Badge
// Backed by a real field: bulkEditOrders accepts completed/onhold/cancelled/
// processing flags for a single orderId, so changing this actually persists.

const orderStatusStyles: Record<OrderStatus, string> = {
  "Pending Payment": "bg-[#FFF3EA] text-[#FF7A1A]",
  Processing: "bg-[#EAF0FF] text-[#3B6EF5]",
  "On Hold": "bg-[#FFF5EA] text-[#F59E0B]",
  Completed: "bg-[#E6F6EC] text-[#24A164]",
  Cancelled: "bg-[#FFEBE9] text-[#E5383B]",
};

const ORDER_STATUS_FLAGS: Partial<Record<OrderStatus, "completed" | "onhold" | "cancelled" | "processing">> = {
  Completed: "completed",
  Processing: "processing",
  "On Hold": "onhold",
  Cancelled: "cancelled",
};

export const OrderStatusBadge = ({
  status,
  orderId,
}: {
  status: OrderStatus;
  orderId: string;
}) => {
  const bulkEdit = useBulkEditOrdersMutation();

  const setStatus = (next: OrderStatus) => {
    const flag = ORDER_STATUS_FLAGS[next];
    if (!flag) return;
    bulkEdit.mutate(
      { orderIds: [orderId], [flag]: true },
      {
        onSuccess: () => toast.success(`Order marked ${next.toLowerCase()}`),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update order status"),
      },
    );
  };

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
      <AppDropdownItem variant={status === "Completed" ? "active-badge" : "badge"} onClick={() => setStatus("Completed")}>Completed</AppDropdownItem>
      <AppDropdownItem variant={status === "Processing" ? "active-badge" : "badge"} onClick={() => setStatus("Processing")}>Processing</AppDropdownItem>
      <AppDropdownItem variant={status === "On Hold" ? "active-badge" : "badge"} onClick={() => setStatus("On Hold")}>On Hold</AppDropdownItem>
      <AppDropdownItem variant={status === "Cancelled" ? "active-badge" : "badge"} onClick={() => setStatus("Cancelled")}>Cancelled</AppDropdownItem>
    </AppDropdown>
  );
};

//Payment Status Badge
// Read-only: the backend has no separate "payment status" field an admin can
// set independently - it's derived from the transaction's actual outcome.
const paymentStatusStyles: Record<PaymentStatus, string> = {
  Paid: "bg-[#E6F6EC] text-[#24A164]",
  "Un Paid": "bg-[#FFEBE9] text-[#E5383B]",
  Verified: "bg-[#EAF0FF] text-[#3B6EF5]",
  "Pending Verification": "bg-[#FFF5EA] text-[#F59E0B]",
};

export const PaymentStatusBadge = ({ status }: { status: PaymentStatus }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-medium whitespace-nowrap ${paymentStatusStyles[status]}`}
    >
      {status}
    </span>
  );
};

//Enrollment Status Badge
// Read-only: enrollment access follows automatically from payment success -
// there's no direct admin-settable field for it either.

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
    <span
      className={`text-[13px] font-medium whitespace-nowrap ${enrollmentStatusStyles[status]}`}
    >
      {status}
    </span>
  );
};

//Order Actions
export const OrderActions = ({ orderId }: { orderId?: string }) => {
  const router = useRouter();
  const bulkEdit = useBulkEditOrdersMutation();

  const handleDelete = () => {
    if (!orderId) return;
    if (!window.confirm("Delete this order? This cannot be undone.")) return;
    bulkEdit.mutate(
      { orderIds: [orderId], delete: true },
      {
        onSuccess: () => toast.success("Order deleted"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete order"),
      },
    );
  };

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
      <AppDropdownItem variant="danger-menu" onClick={handleDelete}>Delete</AppDropdownItem>
    </AppDropdown>
  );
};
