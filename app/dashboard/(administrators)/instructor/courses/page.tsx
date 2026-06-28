"use client";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Button } from "@/components/ui/button";
import { Archive, ChevronDown, Rocket } from "lucide-react";
import { InstructorDashboardAnalyticsCards } from "../_components/instructor-dashboard-analytics-cards";
import { BookOpen, NotebookPen } from "lucide-react";
import { InstructorCourseList } from "./_components/instructor-course-list";

const BasicAnalytics = [
  {
    heading: "Total Courses",
    title: "12",
    icon: BookOpen,
    rate: "",
    description: "",
  },
  {
    heading: "Published",
    title: "8",
    icon: Rocket,
    rate: "",
    description: "",
  },
  {
    heading: "Drafts",
    title: "3",
    icon: NotebookPen,
    rate: "",
    description: "",
  },
  {
    heading: "Archived",
    title: "3",
    icon: Archive,
    rate: "",
    description: "",
  },
];

export default function InstrutorCoursesPage() {
  return (
    <>
      <DashboardHeader
        title="My Courses"
        subTitle="You have 12 active courses across 4 categories"
      />
      <div className="flex justify-between items-center gap-3">
        <DashboardSearch placeholder="search by course title or description" />
        <Button className="bg-white! shadow-none! p-4! rounded-full text-gray-800 text-md hover:bg-gray-100 font-normal px-2 h-9 gap-1.5">
          Filter
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </Button>
      </div>

      <InstructorDashboardAnalyticsCards analytics={BasicAnalytics} />
      <InstructorCourseList />
    </>
  );
}
