// Shared types and mock data for orders — NO "use client" directive
// This file is safe to import from both server and client components.

import { format } from "date-fns";
import { Payment as PaymentRecord, OrderRecord } from "@/lib/api/endpoints/payments";

// Types

export type OrderStatus =
  | "Pending Payment"
  | "Processing"
  | "On Hold"
  | "Completed"
  | "Cancelled";

export type PaymentStatus =
  | "Paid"
  | "Un Paid"
  | "Verified"
  | "Pending Verification";

export type EnrollmentStatus =
  | "Not Enrolled"
  | "Pending Enrollment"
  | "Access Granted"
  | "Access Revoked";

export interface BillingAddress {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  country: string;
  state: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  country: string;
  state: string;
  phone: string;
}

export interface OrderNote {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  isPrivate: boolean;
}

export interface OrderData {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  orderId: string;
  course: string;
  amount: string;
  paymentMethod: string;
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  enrollmentStatus: EnrollmentStatus;
  // Extended fields for details page
  dateCreated: string;
  transactionId: string;
  customerNote: string;
  billing: BillingAddress;
  shipping: ShippingAddress;
  notes: OrderNote[];
}

//Defaults

const defaultBilling: BillingAddress = {
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  postcode: "",
  country: "",
  state: "",
  email: "",
  phone: "",
};

const defaultShipping: ShippingAddress = {
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  postcode: "",
  country: "",
  state: "",
  phone: "",
};

// Maps the real Payment record (confirmed 2026-07-14 against the live
// Swagger spec) onto this UI's richer OrderData shape. paymentStatus and
// enrollmentStatus have no independent backend field - the backend only has
// one payment status (pending/successful/failed) - so those two dimensions
// are collapsed from that single source rather than fabricating independent
// values. orderStatus DOES have its own backend field though (bulkEditOrders
// accepts completed/onhold/cancelled/processing flags for it), so it's read
// from `orderStatus` directly and only falls back to deriving from `status`
// when that field is empty/unrecognized.
//
// billing/shipping/notes have no confirmed read path yet (edit-order
// accepts billingAddress/shippingAddress but single-order's response
// shape for reading them back is unverified - our test account isn't
// admin-role) - defaulted to empty until that's confirmed.
function normalizeOrderStatus(raw?: string): OrderStatus | null {
  const key = raw?.toLowerCase().replace(/[^a-z]/g, "");
  switch (key) {
    case "completed":
      return "Completed";
    case "processing":
      return "Processing";
    case "onhold":
      return "On Hold";
    case "cancelled":
    case "canceled":
      return "Cancelled";
    case "pending":
    case "pendingpayment":
      return "Pending Payment";
    default:
      return null;
  }
}

function deriveOrderStatuses(
  status?: string,
  orderStatus?: string,
): {
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  enrollmentStatus: EnrollmentStatus;
} {
  const resolvedOrderStatus = normalizeOrderStatus(orderStatus);

  if (status === "success") {
    return {
      orderStatus: resolvedOrderStatus ?? "Completed",
      paymentStatus: "Paid",
      enrollmentStatus: "Access Granted",
    };
  }
  if (status === "failed") {
    return {
      orderStatus: resolvedOrderStatus ?? "Cancelled",
      paymentStatus: "Un Paid",
      enrollmentStatus: "Not Enrolled",
    };
  }
  return {
    orderStatus: resolvedOrderStatus ?? "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
  };
}

export function mapPaymentRecordToOrderData(payment: PaymentRecord): OrderData {
  const student =
    typeof payment.student === "string" ? null : payment.student;
  const course = typeof payment.course === "string" ? null : payment.course;
  const { orderStatus, paymentStatus, enrollmentStatus } = deriveOrderStatuses(
    payment.status,
    payment.orderStatus,
  );

  return {
    id: payment._id,
    user: {
      name: student?.name ?? "Unknown Student",
      avatar: "/assets/images/user1.png",
    },
    orderId: `#${payment._id.slice(-6).toUpperCase()}`,
    course: course?.title ?? "Unknown Course",
    amount: `${payment.currency ?? "NGN"} ${payment.amount?.toLocaleString() ?? 0}`,
    paymentMethod: payment.channel ?? "-",
    orderStatus,
    paymentStatus,
    enrollmentStatus,
    dateCreated: payment.createdAt
      ? format(new Date(payment.createdAt), "yyyy-MM-dd")
      : "-",
    transactionId: payment.reference ?? "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [],
  };
}

// Maps the single-order response (GET /payment/single-order/:orderId) onto
// OrderData for the order detail page. billing/shipping stay defaulted empty
// since the backend returns them as an untyped Record<string, unknown> with
// no confirmed field names (see comment above) - notes are safe to map
// directly since OrderNote is a confirmed, well-typed backend shape.
export function mapOrderRecordToOrderData(order: OrderRecord): OrderData {
  const student = typeof order.student === "string" ? null : order.student;
  const course = typeof order.course === "string" ? null : order.course;
  const { orderStatus, paymentStatus, enrollmentStatus } = deriveOrderStatuses(
    order.status,
    order.orderStatus,
  );

  return {
    id: order._id,
    user: {
      name: student?.name ?? "Unknown Student",
      avatar: "/assets/images/user1.png",
    },
    orderId: `#${order._id.slice(-6).toUpperCase()}`,
    course: course?.title ?? "Unknown Course",
    amount: `${order.currency ?? "NGN"} ${order.amount?.toLocaleString() ?? 0}`,
    paymentMethod: order.channel ?? "-",
    orderStatus,
    paymentStatus,
    enrollmentStatus,
    dateCreated: order.createdAt
      ? format(new Date(order.createdAt), "yyyy-MM-dd")
      : "-",
    transactionId: order.reference ?? "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: (order.notes ?? []).map((note, index) => ({
      id: String(index),
      content: note.content,
      author:
        typeof note.author === "string"
          ? note.author
          : (note.author?.name ?? "Admin"),
      createdAt: note.createdAt
        ? format(new Date(note.createdAt), "MMM d yyyy 'at' h:mmaaa")
        : "",
      isPrivate: note.isPrivate,
    })),
  };
}

