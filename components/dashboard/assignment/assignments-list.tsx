"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import {
  mockAssignments,
  mockInstructorAssignments,
} from "./assignments-data";
import { AssignmentsActions } from "./assignments-actions";
import { InstructorAssignmentsActions } from "./instructor-assignments-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AssignmentsFilters } from "./assignments-filters";

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
      return "bg-[#F97316]"; // Orange
    case "Closed":
      return "bg-[#A855F7]"; // Purple
    case "Draft":
      return "bg-[#3B82F6]"; // Blue
    case "Archived":
      return "bg-[#10B981]"; // Green
    default:
      return "bg-gray-300";
  }
};

const getInstructorStatusStyle = (status: string) => {
  switch (status) {
    case "Graded":
      return "bg-[#ECFDF5] text-[#10B981]";
    case "Late":
      return "bg-[#FEE2E2] text-[#EF4444]";
    case "Submitted":
      return "bg-[#EFF6FF] text-[#3B82F6]";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

interface AssignmentsListProps {
  type?: "instructor" | "admin";
}
export const AssignmentsList = ({ type = "admin" }: AssignmentsListProps) => {
  if (type === "admin") {
    return (
      <>
        <AssignmentsFilters />
        <div className="w-full bg-white p-4 rounded-xl">
          <h2 className="text-[24px] font-bold text-gray-900 leading-tight pb-4">
            Assignments
          </h2>
          <DataList
            data={mockAssignments}
            keyExtractor={(item) => item.id}
            renderItem={(item) => {
              const percentage = Math.min(
                100,
                Math.round((item.submittedCount / item.totalStudents) * 100),
              );
              const barColor = getProgressBarColor(item.status);

              return (
                <div className="flex w-full items-start gap-4">
                  <div className="pt-1">
                    <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                  </div>
                  <div className="flex flex-col w-full gap-4">
                    {/* Top Row */}
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
                          <AssignmentsActions assignmentId={item.id} />
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex items-center gap-3 w-full">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${barColor} rounded-full`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span
                        className={`text-[16px] font-medium ${barColor.replace(
                          "bg-",
                          "text-",
                        )}`}
                      >
                        {item.submittedCount} / {item.totalStudents}
                      </span>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeStyle(
                            item.type,
                          )}`}
                        >
                          {item.type}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                            item.status,
                          )}`}
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
        </div>
      </>
    );
  } else if (type === "instructor") {
    return (
      <div className="w-full bg-white p-4 rounded-xl">
        <DataList
          data={mockInstructorAssignments}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            return (
              <div className="flex w-full items-start gap-4">
                <div className="pt-1">
                  <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                </div>
                <div className="flex flex-col w-full gap-3">
                  {/* Top Row */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={item.studentAvatar} alt={item.studentName} />
                        <AvatarFallback>{item.studentName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-[16px] font-medium text-gray-900 leading-tight">
                        {item.studentName}
                      </span>
                    </div>
                    <InstructorAssignmentsActions assignmentId={item.id} />
                  </div>

                  {/* File and Date */}
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-[14px] text-gray-700 font-medium">
                      {item.submittedFile}
                    </span>
                    <span className="text-[13px] text-gray-500 font-medium">
                      Submitted: {item.submissionDate}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center mt-1">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getInstructorStatusStyle(
                        item.status,
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};
