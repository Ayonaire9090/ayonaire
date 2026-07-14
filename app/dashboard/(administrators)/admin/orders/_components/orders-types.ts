// Shared types and mock data for orders — NO "use client" directive
// This file is safe to import from both server and client components.

import { format } from "date-fns";
import { Payment as PaymentRecord } from "@/lib/api/endpoints/payments";

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
// Swagger spec) onto this UI's richer OrderData shape. The backend only
// has one status field (pending/successful/failed), while this UI wants
// three separate dimensions (order/payment/enrollment status) - collapsed
// from that single source of truth rather than fabricating independent
// values for each.
//
// billing/shipping/notes have no confirmed read path yet (edit-order
// accepts billingAddress/shippingAddress but single-order's response
// shape for reading them back is unverified - our test account isn't
// admin-role) - defaulted to empty until that's confirmed.
function deriveOrderStatuses(status?: string): {
  orderStatus: OrderStatus;
  paymentStatus: PaymentStatus;
  enrollmentStatus: EnrollmentStatus;
} {
  if (status === "successful") {
    return {
      orderStatus: "Completed",
      paymentStatus: "Paid",
      enrollmentStatus: "Access Granted",
    };
  }
  if (status === "failed") {
    return {
      orderStatus: "Cancelled",
      paymentStatus: "Un Paid",
      enrollmentStatus: "Not Enrolled",
    };
  }
  return {
    orderStatus: "Pending Payment",
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

//Mock Data (kept for the order detail page until billing/shipping/notes
// read paths are confirmed - see mapPaymentRecordToOrderData above for the
// real-data path used by the list pages)

export const mockOrders: OrderData[] = [
  {
    id: "1",
    user: { name: "Jhon Doe", avatar: "https://i.pravatar.cc/150?img=11" },
    orderId: "#32024",
    course: "AI Engineering 1.0",
    amount: "₦97,000.00",
    paymentMethod: "Paystack",
    orderStatus: "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-02-23",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "2",
    user: { name: "Jane Smith", avatar: "https://i.pravatar.cc/150?img=5" },
    orderId: "#32025",
    course: "DS & Gen 1.0",
    amount: "₦85,000.00",
    paymentMethod: "Flutterwave",
    orderStatus: "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-02-24",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "3",
    user: { name: "Emeka Okafor", avatar: "https://i.pravatar.cc/150?img=12" },
    orderId: "#32026",
    course: "UI/UX Design 1.0",
    amount: "₦75,000.00",
    paymentMethod: "Bank Transfer",
    orderStatus: "Processing",
    paymentStatus: "Pending Verification",
    enrollmentStatus: "Pending Enrollment",
    dateCreated: "2026-02-20",
    transactionId: "TXN-2026-0320",
    customerNote: "Please confirm my payment receipt.",
    billing: {
      firstName: "Emeka",
      lastName: "Okafor",
      company: "TechNaija Ltd",
      address1: "12 Ogui Road",
      address2: "Suite 4B",
      city: "Enugu",
      postcode: "400001",
      country: "Nigeria",
      state: "Enugu",
      email: "emeka@technaija.ng",
      phone: "+2348012345678",
    },
    shipping: {
      firstName: "Emeka",
      lastName: "Okafor",
      company: "",
      address1: "12 Ogui Road",
      address2: "",
      city: "Enugu",
      postcode: "400001",
      country: "Nigeria",
      state: "Enugu",
      phone: "+2348012345678",
    },
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 20 2026 at 3:45pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "4",
    user: { name: "Amina Bello", avatar: "https://i.pravatar.cc/150?img=25" },
    orderId: "#32027",
    course: "PM & AI for PM 1.0",
    amount: "₦110,000.00",
    paymentMethod: "Paystack",
    orderStatus: "Processing",
    paymentStatus: "Pending Verification",
    enrollmentStatus: "Pending Enrollment",
    dateCreated: "2026-02-18",
    transactionId: "PSK-20260218-440",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "5",
    user: {
      name: "Chidi Nwachukwu",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    orderId: "#32028",
    course: "Cloud Computing 1.0",
    amount: "₦120,000.00",
    paymentMethod: "Paystack",
    orderStatus: "On Hold",
    paymentStatus: "Verified",
    enrollmentStatus: "Access Revoked",
    dateCreated: "2026-02-15",
    transactionId: "PSK-20260215-112",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "6",
    user: { name: "Fatima Aliyu", avatar: "https://i.pravatar.cc/150?img=32" },
    orderId: "#32029",
    course: "DevOp Engineering 1.0",
    amount: "₦95,000.00",
    paymentMethod: "Flutterwave",
    orderStatus: "On Hold",
    paymentStatus: "Verified",
    enrollmentStatus: "Access Revoked",
    dateCreated: "2026-02-14",
    transactionId: "FLW-20260214-887",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "7",
    user: { name: "Tunde Adeyemi", avatar: "https://i.pravatar.cc/150?img=8" },
    orderId: "#37036",
    course: "AI Engineering 1.0",
    amount: "₦97,000.00",
    paymentMethod: "Paystack",
    orderStatus: "Completed",
    paymentStatus: "Paid",
    enrollmentStatus: "Access Granted",
    dateCreated: "2026-02-23",
    transactionId: "PSK-20260223-990",
    customerNote: "Looking forward to the course!",
    billing: {
      firstName: "Tunde",
      lastName: "Adeyemi",
      company: "",
      address1: "45 Allen Avenue",
      address2: "Flat 3",
      city: "Lagos",
      postcode: "101001",
      country: "Nigeria",
      state: "Lagos",
      email: "tunde@email.com",
      phone: "+2348031234567",
    },
    shipping: {
      firstName: "Tunde",
      lastName: "Adeyemi",
      company: "",
      address1: "45 Allen Avenue",
      address2: "Flat 3",
      city: "Lagos",
      postcode: "101001",
      country: "Nigeria",
      state: "Lagos",
      phone: "+2348031234567",
    },
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "8",
    user: { name: "Ngozi Eze", avatar: "https://i.pravatar.cc/150?img=47" },
    orderId: "#32031",
    course: "Backend Dev 1.0",
    amount: "₦88,000.00",
    paymentMethod: "Bank Transfer",
    orderStatus: "Completed",
    paymentStatus: "Paid",
    enrollmentStatus: "Access Granted",
    dateCreated: "2026-02-10",
    transactionId: "BNK-20260210-221",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "9",
    user: { name: "Kelechi Agu", avatar: "https://i.pravatar.cc/150?img=60" },
    orderId: "#32032",
    course: "Frontend Dev 1.0",
    amount: "₦80,000.00",
    paymentMethod: "Paystack",
    orderStatus: "Cancelled",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-02-08",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "10",
    user: { name: "Uche Obi", avatar: "https://i.pravatar.cc/150?img=55" },
    orderId: "#32033",
    course: "Cyber Security 1.0",
    amount: "₦105,000.00",
    paymentMethod: "Flutterwave",
    orderStatus: "Cancelled",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-02-05",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "11",
    user: { name: "Bola Ogundimu", avatar: "https://i.pravatar.cc/150?img=33" },
    orderId: "#32034",
    course: "Software Engineering 1.0",
    amount: "₦115,000.00",
    paymentMethod: "Paystack",
    orderStatus: "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-02-03",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "12",
    user: { name: "Musa Garba", avatar: "https://i.pravatar.cc/150?img=18" },
    orderId: "#32035",
    course: "DA & AI Automation 1.0",
    amount: "₦90,000.00",
    paymentMethod: "Bank Transfer",
    orderStatus: "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-02-01",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "13",
    user: { name: "Ola Bankole", avatar: "https://i.pravatar.cc/150?img=22" },
    orderId: "#32036",
    course: "Business Analytics & AI for BA 1.0",
    amount: "₦92,000.00",
    paymentMethod: "Paystack",
    orderStatus: "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-01-28",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
  {
    id: "14",
    user: { name: "Ada Chukwu", avatar: "https://i.pravatar.cc/150?img=44" },
    orderId: "#32037",
    course: "AI Engineering 1.0",
    amount: "₦97,000.00",
    paymentMethod: "Flutterwave",
    orderStatus: "Pending Payment",
    paymentStatus: "Un Paid",
    enrollmentStatus: "Not Enrolled",
    dateCreated: "2026-01-25",
    transactionId: "",
    customerNote: "",
    billing: defaultBilling,
    shipping: defaultShipping,
    notes: [
      {
        id: "n1",
        content: "Order details manually sent to customer.",
        author: "Ayonaire Academy",
        createdAt: "Feb 23 2026 at 10:18pm",
        isPrivate: false,
      },
    ],
  },
];
