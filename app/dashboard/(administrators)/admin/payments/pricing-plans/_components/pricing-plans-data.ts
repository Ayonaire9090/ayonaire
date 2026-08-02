import { PricingPlan as PricingPlanRecord } from "@/lib/api/endpoints/payments";

export interface PricingPlan {
  id: string;
  planType: string;
  course: string;
  price: string;
  duration: string;
  accessType: string;
  status: "Active" | "Pending";
}

export function mapPricingPlanRecordToPricingPlan(
  plan: PricingPlanRecord,
): PricingPlan {
  const course = typeof plan.course === "string" ? null : plan.course;

  return {
    id: plan._id,
    planType: plan.planType || "one-time",
    course: course?.title ?? "Unknown Course",
    price: `$${plan.price?.toLocaleString() ?? 0}`,
    duration: plan.duration || "-",
    accessType: plan.accessType || "-",
    status: plan.status === "active" ? "Active" : "Pending",
  };
}
