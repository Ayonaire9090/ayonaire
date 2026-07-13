"use client";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { Button } from "@/components/ui/button";
import { Archive, ChevronDown, Rocket } from "lucide-react";
import { InstructorDashboardAnalyticsCards } from "../_components/instructor-dashboard-analytics-cards";
import { BookOpen, NotebookPen } from "lucide-react";
import { InstructorCourseList } from "./_components/instructor-course-list";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useAuthStore } from "@/store/auth.store";

export default function InstrutorCoursesPage() {
  const user = useAuthStore((state) => state.user);
  const { data, isLoading, isError } = useGetCourses();

  // Filtered client-side since coursesApi.getAll() has no instructor-scoped
  // param yet - assumes course.instructor is populated with an _id to match
  // against the logged-in user. Needs backend confirmation.
  const myCourses = (data?.data ?? []).filter((course) => {
    const instructorId =
      typeof course.instructor === "string"
        ? course.instructor
        : course.instructor?._id;
    return instructorId === user?._id;
  });

  const analytics = [
    {
      heading: "Total Courses",
      title: String(myCourses.length),
      icon: BookOpen,
      rate: "",
      description: "",
    },
    {
      heading: "Published",
      title: String(
        myCourses.filter((c) => c.status?.toLowerCase() === "active" || c.status?.toLowerCase() === "published").length,
      ),
      icon: Rocket,
      rate: "",
      description: "",
    },
    {
      heading: "Drafts",
      title: String(
        myCourses.filter((c) => c.status?.toLowerCase() === "draft").length,
      ),
      icon: NotebookPen,
      rate: "",
      description: "",
    },
    {
      heading: "Archived",
      title: String(
        myCourses.filter((c) => c.status?.toLowerCase() === "archived").length,
      ),
      icon: Archive,
      rate: "",
      description: "",
    },
  ];

  return (
    <>
      <DashboardHeader
        title="My Courses"
        subTitle={`You have ${myCourses.length} course${myCourses.length === 1 ? "" : "s"}`}
      />
      <div className="flex justify-between items-center gap-3">
        <DashboardSearch placeholder="search by course title or description" />
        <Button className="bg-white! shadow-none! p-4! rounded-full text-gray-800 text-md hover:bg-gray-100 font-normal px-2 h-9 gap-1.5">
          Filter
          <ChevronDown className="size-4" strokeWidth={1.5} />
        </Button>
      </div>

      <InstructorDashboardAnalyticsCards analytics={analytics} />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load courses. Please try again.
        </div>
      ) : (
        <InstructorCourseList courses={myCourses} />
      )}
    </>
  );
}
