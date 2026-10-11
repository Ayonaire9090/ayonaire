"use client";

import { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical, ClipboardList, FileQuestionMark } from "lucide-react";
import {
  getSubmissionStatusColor,
  useInstructorSubmissions,
  useInstructorStudentQuizAttempts,
} from "./instructor-performance-data";
import { Checkbox } from "@/components/ui/checkbox";

export const InstructorStudentPerformanceResultsList = ({ studentId }: { studentId?: string }) => {
  const [activeTab, setActiveTab] = useState<"assignments" | "quizzes" | "projects">("assignments");
  const { rows, isLoading } = useInstructorSubmissions(studentId);
  const { rows: quizRows, isLoading: quizLoading } = useInstructorStudentQuizAttempts(studentId);

  const renderContent = () => {
    if (activeTab === "quizzes") {
      if (!studentId) {
        return (
          <div className="bg-white rounded-2xl w-full p-8 flex flex-col items-center justify-center min-h-[300px]">
            <h3 className="text-lg font-bold text-gray-500">No student selected</h3>
            <p className="text-gray-400 mt-2 text-center text-sm">
              Select a student to view their quiz attempt history.
            </p>
          </div>
        );
      }
      return (
        <div className="bg-white rounded-2xl w-full p-4">
          <div className="flex items-center gap-2 mb-4 px-1">
            <FileQuestionMark className="size-6 text-[#FF5A1F]" />
            <h2 className="text-lg font-bold text-[#1f2937]">Quiz Attempts</h2>
          </div>
          {quizLoading ? (
            <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
          ) : quizRows.length === 0 ? (
            <p className="text-sm text-gray-400 py-6 text-center">No quiz attempts yet</p>
          ) : (
            <DataList
              data={quizRows}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <div className="flex w-full items-start justify-between gap-4">
                  <div className="flex flex-col">
                    <h4 className="font-medium text-gray-900 text-[15px]">{item.quizTitle}</h4>
                    <span className="text-[13px] text-gray-500">{item.submissionDate}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${getSubmissionStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>
                    <span className="text-[14px] font-medium text-black">{item.score}%</span>
                  </div>
                </div>
              )}
            />
          )}
        </div>
      );
    }

    if (activeTab === "assignments") {
      return (
        <div className="bg-white rounded-2xl w-full p-4">
          <div className="flex items-center gap-2 mb-4 px-1">
            <ClipboardList className="size-6 text-[#FF5A1F]" />
            <h2 className="text-lg font-bold text-[#1f2937]">Recent Assignments</h2>
          </div>
          {isLoading ? (
            <p className="text-sm text-gray-400 py-6 text-center">Loading…</p>
          ) : rows.length === 0 ? (
            <p className="text-sm text-gray-400 py-6 text-center">No assignments yet</p>
          ) : (
            <DataList
              data={rows}
              keyExtractor={(item) => item.id}
              renderItem={(item) => (
                <div className="flex w-full items-start gap-4">
                  <Checkbox className="rounded-[4px] border-gray-300 bg-white mt-1 shrink-0" />
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <h4 className="font-medium text-gray-900 text-[15px]">
                          {item.lesson}
                        </h4>
                        <span className="text-[13px] text-gray-500">{item.student}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] text-gray-600">{item.submissionDate}</span>
                        <AppDropdown
                          trigger={
                            <button className="-mr-2 -mt-1 p-1 hover:bg-gray-200 rounded-full transition-colors">
                              <MoreVertical className="size-5 text-black" />
                            </button>
                          }
                        >
                          <AppDropdownItem>View</AppDropdownItem>
                          <AppDropdownItem>Grade now</AppDropdownItem>
                        </AppDropdown>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${getSubmissionStatusColor(item.status)}`}
                      >
                        {item.status}
                      </span>
                      <span className="text-[14px] font-medium text-black">
                        Grade <span className="text-gray-500 font-normal">{item.grade}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            />
          )}
        </div>
      );
    }

    return (
      <div className="bg-white rounded-2xl w-full p-8 flex flex-col items-center justify-center min-h-[300px]">
        <h3 className="text-lg font-bold text-gray-500 capitalize">No {activeTab} yet</h3>
        <p className="text-gray-400 mt-2 text-center text-sm">There are no {activeTab} to display at this time.</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex overflow-x-auto hide-scrollbar border-b border-gray-200 mb-6 w-full">
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 whitespace-nowrap ${activeTab === "assignments" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("assignments")}
        >
          Assignments
        </button>
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 whitespace-nowrap ${activeTab === "quizzes" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("quizzes")}
        >
          Quizzes
        </button>
        <button
          className={`px-4 py-3 font-semibold text-[15px] transition-colors border-b-2 whitespace-nowrap ${activeTab === "projects" ? "border-[#FF5A1F] text-[#FF5A1F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>
      {renderContent()}
    </div>
  );
};
