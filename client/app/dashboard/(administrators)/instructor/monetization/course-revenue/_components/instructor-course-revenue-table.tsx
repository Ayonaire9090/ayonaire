"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Download, MoreVertical } from "lucide-react";
import { Course } from "@/lib/api/endpoints/courses";
import { useInstructorAnalytics } from "../../../analytics-reporting/_components/instructor-analytics-data";

export type CourseRevenue = {
  id: string;
  courseName: string;
  studentsEnrolled: number;
  price: number;
  totalRevenue: number;
  status: Course["status"];
};

export function useCourseRevenueRows(): { rows: CourseRevenue[]; isLoading: boolean } {
  const { perCourse, isLoading } = useInstructorAnalytics();
  return {
    rows: perCourse.map((c) => ({
      id: c.course._id,
      courseName: c.course.title,
      studentsEnrolled: c.enrollmentCount,
      price: c.course.price ?? 0,
      totalRevenue: c.revenue,
      status: c.course.status,
    })),
    isLoading,
  };
}

const statusStyle: Record<string, string> = {
  Active: "bg-[#DBEAFE] text-[#3B82F6]",
  Draft: "bg-[#FEE2E2] text-[#EF4444]",
  Archived: "bg-[#F3E8FF] text-[#A855F7]",
};

export const InstructorCourseRevenueTable = () => {
  const { rows, isLoading } = useCourseRevenueRows();

  const columns: ColumnDef<CourseRevenue>[] = [
    {
      key: "courseName",
      header: "Course Name",
      cell: (item) => (
        <span className="text-[#333333] font-medium">{item.courseName}</span>
      ),
    },
    {
      key: "studentsEnrolled",
      header: "Students Enrolled",
      cell: (item) => (
        <span className="text-gray-600">{item.studentsEnrolled}</span>
      ),
    },
    {
      key: "price",
      header: "Price",
      cell: (item) => <span className="text-gray-600">${item.price}</span>,
    },
    {
      key: "totalRevenue",
      header: "Total Revenue",
      cell: (item) => (
        <span className="text-gray-600">
          ${item.totalRevenue.toLocaleString()}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-3 py-1 text-[13px] rounded-full font-medium ${
            statusStyle[item.status ?? ""] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {item.status ?? "-"}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      cell: () => (
        <button className="text-gray-800 hover:text-black transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      ),
    },
  ];

  const footerContent = (
    <div className="flex gap-4">
      <Button
        variant="secondary"
        className="bg-[#F6F6F6] shadow-none! border-0! hover:bg-gray-200 text-gray-700 text-sm gap-2"
      >
        <Download className="w-4 h-4" /> Export Revenue
      </Button>
    </div>
  );

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl mb-6">
      {isLoading ? (
        <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="text-sm text-gray-400 py-6 text-center">No courses yet</p>
      ) : (
        <DataTable
          data={rows}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable
          footerContent={footerContent}
        />
      )}
    </div>
  );
};
