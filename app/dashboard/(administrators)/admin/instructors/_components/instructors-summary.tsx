"use client";

import { Layers, CheckCircle2, Clock, XCircle } from "lucide-react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";
import { mapInstructorProfileToInstructorData } from "./instructors-data";

export const InstructorsSummary = () => {
  const { data } = useGetAllInstructorProfiles();
  const instructors = (data?.data ?? []).map(
    mapInstructorProfileToInstructorData,
  );

  const summaryData = [
    { title: "All", number: String(instructors.length), icon: Layers, iconBg: "bg-[#3B82F6]" },
    {
      title: "Approved",
      number: String(
        instructors.filter((i) => i.status === "Approved").length,
      ),
      icon: CheckCircle2,
      iconBg: "bg-[#24A164]",
    },
    {
      title: "Pending",
      number: String(
        instructors.filter((i) => i.status === "Pending").length,
      ),
      icon: Clock,
      iconBg: "bg-[#F59E0B]",
    },
    {
      title: "Rejected",
      number: String(
        instructors.filter((i) => i.status === "Rejected").length,
      ),
      icon: XCircle,
      iconBg: "bg-[#E5383B]",
    },
  ];

  return <StatsSummary data={summaryData} />;
};
