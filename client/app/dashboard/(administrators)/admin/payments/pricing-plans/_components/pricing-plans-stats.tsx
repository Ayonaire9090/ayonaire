"use client";

import { useMemo } from "react";
import { Layers, CheckCircle2, Clock } from "lucide-react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetPricingPlans } from "@/hooks/api/use-payments";

export const PricingPlansStats = () => {
  const { data } = useGetPricingPlans();
  const plans = data?.data ?? [];

  const stats = useMemo(() => {
    const active = plans.filter((p) => p.status === "active").length;
    const pending = plans.length - active;
    return [
      { title: "All", number: String(plans.length), icon: Layers, iconBg: "bg-[#3B82F6]" },
      { title: "Active", number: String(active), icon: CheckCircle2, iconBg: "bg-[#24A164]" },
      { title: "Pending", number: String(pending), icon: Clock, iconBg: "bg-[#F59E0B]" },
    ];
  }, [plans]);

  return <StatsSummary data={stats} />;
};
