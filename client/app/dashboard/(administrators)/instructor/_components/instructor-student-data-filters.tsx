"use client";
import {
  DashboardDataFilters,
  FilterDefinition,
} from "@/components/dashboard/dashboard-data-filters";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const studentFilters: FilterDefinition[] = [
  {
    placeholder: "Filter by Courses",
    options: [
      { label: "Course 1", value: "course1" },
      { label: "Course 2", value: "course2" },
    ],
  },
  {
    placeholder: "Filter by Batch",
    options: [
      { label: "Batch 1", value: "batch1" },
      { label: "Batch 2", value: "batch2" },
    ],
  },
  {
    placeholder: "Filter by Status",
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
  },
];

export const InstructorStudentDataFilters = () => {
  return (
    <div className="flex justify-between items-center gap-3 overflow-x-auto hide-scrollbar">
      <DashboardDataFilters filters={studentFilters} />
      <Button
        variant="outline"
        className={`py-3! flex items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                text-white focus:outline-0! shadow-0!`}
      >
        <p className="text-sm flex items-center gap-2">
          <Filter />
          Apply Filters
        </p>
      </Button>
    </div>
  );
};
