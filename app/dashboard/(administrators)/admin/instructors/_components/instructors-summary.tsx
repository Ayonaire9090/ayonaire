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
      title: "Active",
      number: String(
        instructors.filter((i) => i.status === "Active").length,
      ),
    },
    {
      title: "Pending",
      number: String(
        instructors.filter((i) => i.status === "Pending").length,
      ),
    },
    {
      title: "Suspended",
      number: String(
        instructors.filter((i) => i.status === "Suspended").length,
      ),
    },
  ];

  return <StatsSummary data={summaryData} />;
};
