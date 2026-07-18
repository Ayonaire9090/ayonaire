"use client";

import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetCourses } from "@/hooks/api/use-courses";
import { mapCourseToCourseData } from "./courses-data";

export const CoursesSummary = () => {
  const { data } = useGetCourses();
  const courses = (data?.courses ?? []).map(mapCourseToCourseData);

  const summaryData = [
    { title: "All", number: String(courses.length) },
    {
      title: "Active",
      number: String(courses.filter((c) => c.status === "Active").length),
    },
    {
      title: "Draft",
      number: String(courses.filter((c) => c.status === "Draft").length),
    },
    {
      title: "Pending",
      number: String(courses.filter((c) => c.status === "Pending").length),
    },
    {
      title: "Private",
      number: String(courses.filter((c) => c.status === "Private").length),
    },
  ];

  return <StatsSummary data={summaryData} />;
};
