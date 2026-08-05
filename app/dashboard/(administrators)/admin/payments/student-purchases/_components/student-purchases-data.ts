import { format } from "date-fns";

export interface StudentPurchase {
  id: string;
  name: string;
  email: string;
  course: string;
  amount: string;
  paymentMethod: string;
  date: string;
  status: "Completed" | "Pending";
}

// The backend's /payment/student-purchases response is untyped (`any[]`) in
// lib/api/endpoints/payments.ts - no confirmed schema. It's served by the
// same payment.service.ts as getAllPayments/getSingleOrder though, so this
// mapper follows that sibling endpoint's confirmed shape (student/course as
// populated objects, amount/currency/channel/status/createdAt) defensively,
// falling back gracefully if a field is missing.
export function mapPurchaseRecordToStudentPurchase(purchase: any): StudentPurchase {
  const student = purchase?.student;
  const course = purchase?.course;

  return {
    id: purchase?._id ?? purchase?.id ?? crypto.randomUUID(),
    name: (typeof student === "object" ? student?.name : undefined) ?? "Unknown Student",
    email: (typeof student === "object" ? student?.email : undefined) ?? "",
    course: (typeof course === "object" ? course?.title : undefined) ?? "Unknown Course",
    amount: `${purchase?.currency ?? "NGN"} ${Number(purchase?.amount ?? 0).toLocaleString()}`,
    paymentMethod: purchase?.channel ?? "-",
    date: purchase?.createdAt ? format(new Date(purchase.createdAt), "MMM d, yyyy") : "-",
    status: purchase?.status === "success" ? "Completed" : "Pending",
  };
}
