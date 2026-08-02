"use client";

import { useMemo } from "react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetPricingPlans } from "@/hooks/api/use-payments";

export const PricingPlansStats = () => {
  const { data } = useGetPricingPlans();
  const plans = data?.data ?? [];

  const stats = useMemo(() => {
    const active = plans.filter((p) => p.status === "active").length;
    const pending = plans.length - active;
    return [
      { title: "All", number: String(plans.length) },
      { title: "Active", number: String(active) },
      { title: "Pending", number: String(pending) },
    ];
  }, [plans]);

  return <StatsSummary data={stats} />;
};
