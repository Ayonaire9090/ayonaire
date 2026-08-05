"use client";

import { useMemo } from "react";
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
      { title: "All", number: String(purchases.length) },
      { title: "Completed", number: String(completed) },
      { title: "Pending", number: String(pending) },
    ];
  }, [purchases]);

  return <StatsSummary data={stats} />;
};
