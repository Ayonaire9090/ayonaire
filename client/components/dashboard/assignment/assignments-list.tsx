"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { Assignment, mapAssignmentRecordToAssignment } from "./assignments-data";
import { AssignmentsActions } from "./assignments-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { AssignmentsFilters } from "./assignments-filters";
import { useGetAssignments } from "@/hooks/api/use-assignments";

const getTypeStyle = (type: string) => {
  switch (type) {
    case "Project":
      return "bg-[#FFF8E6] text-[#F59E0B]";
    case "Quiz":
      return "bg-[#F3E8FF] text-[#A855F7]";
    case "File":
      return "bg-[#EFF6FF] text-[#3B82F6]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-[#FFF8E6] text-[#F59E0B]";
    case "Closed":
      return "bg-black text-white";
    case "Draft":
      return "bg-[#EFF6FF] text-[#3B82F6]";
    case "Archived":
      return "bg-[#ECFDF5] text-[#10B981]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const getProgressBarColor = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-[#F97316]";
    case "Closed":
      return "bg-[#A855F7]";
    case "Draft":
      return "bg-[#3B82F6]";
    case "Archived":
      return "bg-[#10B981]";
    default:
      return "bg-gray-300";
  }
};

interface AssignmentsListProps {
  type?: "instructor" | "admin";
}

export const AssignmentsList = ({ type = "admin" }: AssignmentsListProps) => {
  const { data, isLoading, isError } = useGetAssignments();
  const assignments: Assignment[] = (data?.assignments ?? []).map(mapAssignmentRecordToAssignment);

  return (
    <>
      {type === "admin" && <AssignmentsFilters />}
      <div className="w-full bg-white p-4 rounded-xl">
        <h2 className="text-[24px] font-bold text-gray-900 leading-tight pb-4">
          Assignments
        </h2>
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load assignments. Please try again.
          </div>
        ) : assignments.length === 0 ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
            No assignments found.
          </div>
        ) : (
          <DataList
            data={assignments}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              const percentage = Math.min(
                100,
                Math.round((item.submittedCount / Math.max(item.totalStudents, 1)) * 100),
              );
              const barColor = getProgressBarColor(item.status);

              return (
                <div className="flex w-full items-start gap-4">
                  <div className="pt-1">
                    <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[16px] font-medium text-gray-900 leading-tight">
                          {item.title}
                        </span>
                        <span className="text-[15px] text-gray-500">
                          {item.totalStudents}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-medium text-gray-700">
                            {item.course}
                          </span>
                          <AssignmentsActions assignmentId={item.id} status={item.status} />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${barColor} rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span
                        className={`text-[16px] font-medium ${barColor.replace("bg-", "text-")}`}
                      >
                        {item.submittedCount} / {item.totalStudents}
                      </span>
                    </div>

                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeStyle(item.type)}`}
                        >
                          {item.type}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(item.status)}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <span className="text-[13px] text-gray-500 font-medium">
                        {item.dueDate}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        )}
      </div>
    </>
  );
};
