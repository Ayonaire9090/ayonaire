"use client";

import { Layers, CheckCircle2, FileEdit, Clock, Lock } from "lucide-react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetCourses } from "@/hooks/api/use-courses";
import { mapCourseToCourseData } from "./courses-data";

export const CoursesSummary = () => {
  const { data } = useGetCourses();
  const courses = (data?.courses ?? []).map(mapCourseToCourseData);

  const summaryData = [
    { title: "All", number: String(courses.length), icon: Layers, iconBg: "bg-[#3B82F6]" },
    {
      title: "Active",
      number: String(courses.filter((c) => c.status === "Active").length),
      icon: CheckCircle2,
      iconBg: "bg-[#24A164]",
    },
    {
      title: "Draft",
      number: String(courses.filter((c) => c.status === "Draft").length),
      icon: FileEdit,
      iconBg: "bg-[#F59E0B]",
    },
    {
      title: "Pending",
      number: String(courses.filter((c) => c.status === "Pending").length),
      icon: Clock,
      iconBg: "bg-[#8B5CF6]",
    },
    {
      title: "Private",
      number: String(courses.filter((c) => c.status === "Private").length),
      icon: Lock,
      iconBg: "bg-gray-500",
    },
  ];

  return <StatsSummary data={summaryData} />;
};
