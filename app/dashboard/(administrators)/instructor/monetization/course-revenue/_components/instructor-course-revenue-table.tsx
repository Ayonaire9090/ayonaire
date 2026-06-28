"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Download, MoreVertical } from "lucide-react";

export type CourseRevenue = {
  id: string;
  courseName: string;
  studentsEnrolled: number;
  price: number;
  totalRevenue: number;
  status: "Active" | "Draft";
};

export const dummyRevenueData: CourseRevenue[] = [
  {
    id: "1",
    courseName: "AI for Beginners",
    studentsEnrolled: 120,
    price: 49,
    totalRevenue: 5880,
    status: "Active",
  },
  {
    id: "2",
    courseName: "Data Science Bootcamp",
    studentsEnrolled: 80,
    price: 79,
    totalRevenue: 6320,
    status: "Active",
  },
  {
    id: "3",
    courseName: "UI/UX Fundamentals",
    studentsEnrolled: 45,
    price: 39,
    totalRevenue: 1755,
    status: "Draft",
  },
];

export const InstructorCourseRevenueTable = () => {
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
            item.courseName === "AI for Beginners"
              ? "bg-[#F3E8FF] text-[#A855F7]"
              : item.courseName === "Data Science Bootcamp"
                ? "bg-[#DBEAFE] text-[#3B82F6]"
                : "bg-[#FEE2E2] text-[#EF4444]"
          }`}
        >
          {item.status}
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
        <Download className="w-4 h-4" /> Export Quizzes
      </Button>
      <Button
        variant="secondary"
        className="bg-[#F6F6F6] shadow-none! border-0! hover:bg-gray-200 text-gray-700 text-sm gap-2"
      >
        <Download className="w-4 h-4" /> Export Result
      </Button>
    </div>
  );

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl mb-6">
      <DataTable
        data={dummyRevenueData}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable
        footerContent={footerContent}
      />
    </div>
  );
};
