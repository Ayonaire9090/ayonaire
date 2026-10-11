"use client";

import { useMemo } from "react";
import { Layers, CheckCircle2, Clock } from "lucide-react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetStudentPurchases } from "@/hooks/api/use-payments";
import { mapPurchaseRecordToStudentPurchase } from "./student-purchases-data";

export const StudentPurchasesStats = () => {
  const { data } = useGetStudentPurchases();
  const purchases = useMemo(
    () => (data?.purchases ?? []).map(mapPurchaseRecordToStudentPurchase),
    [data],
  );

  const stats = useMemo(() => {
    const completed = purchases.filter((p) => p.status === "Completed").length;
    const pending = purchases.length - completed;
    return [
      { title: "All", number: String(purchases.length), icon: Layers, iconBg: "bg-[#3B82F6]" },
      { title: "Completed", number: String(completed), icon: CheckCircle2, iconBg: "bg-[#24A164]" },
      { title: "Pending", number: String(pending), icon: Clock, iconBg: "bg-[#F59E0B]" },
    ];
  }, [purchases]);

  return <StatsSummary data={stats} />;
};
