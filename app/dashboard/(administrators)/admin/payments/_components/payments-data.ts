import { format } from "date-fns";
import { Payment as PaymentRecord } from "@/lib/api/endpoints/payments";

export interface Payment {
  id: string;
  name: string;
  transactionId: string;
  course: string;
  amount: string;
  date: string;
  status: "Completed" | "Pending";
  avatar: string;
}

// "Failed" payments are shown as "Pending" here since this UI's status only
// has two values - there's no third visual state for a failed transaction.
// Worth revisiting once this is confirmed with real data.
export function mapPaymentRecordToPayment(payment: PaymentRecord): Payment {
  const student =
    typeof payment.student === "string" ? null : payment.student;
  const course = typeof payment.course === "string" ? null : payment.course;

  return {
    id: payment._id,
    name: student?.name ?? "Unknown Student",
    transactionId: payment.reference ?? "-",
    course: course?.title ?? "Unknown Course",
    amount: `${payment.currency ?? "NGN"} ${payment.amount}`,
    date: payment.createdAt
      ? format(new Date(payment.createdAt), "MMM d, yyyy")
      : "-",
    status: payment.status === "successful" ? "Completed" : "Pending",
    avatar: "/assets/images/user1.png",
  };
}
