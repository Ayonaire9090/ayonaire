"use client";

import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";
import { mapInstructorProfileToInstructorData } from "./instructors-data";

export const InstructorsSummary = () => {
  const { data } = useGetAllInstructorProfiles();
  const instructors = (data?.data ?? []).map(
    mapInstructorProfileToInstructorData,
  );

  const summaryData = [
    { title: "All", number: String(instructors.length) },
    {
      title: "Approved",
      number: String(
        instructors.filter((i) => i.status === "Approved").length,
      ),
    },
    {
      title: "Pending",
      number: String(
        instructors.filter((i) => i.status === "Pending").length,
      ),
    },
    {
      title: "Rejected",
      number: String(
        instructors.filter((i) => i.status === "Rejected").length,
      ),
    },
  ];

  return <StatsSummary data={summaryData} />;
};
