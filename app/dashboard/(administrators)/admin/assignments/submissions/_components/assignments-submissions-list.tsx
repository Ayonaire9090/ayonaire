"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import {
  SubmissionRecord,
  mapSubmissionRecord,
} from "./assignments-submissions-data";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreVertical, FileText } from "lucide-react";
import { useGetAllSubmissions } from "@/hooks/api/use-assignments";

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Graded":
    case "Submitted":
      return "bg-[#E6F6EC] text-[#24A164]";
    case "Pending":
    case "Late":
      return "bg-[#FFF4E5] text-[#FF9E2A]";
    case "Critical":
      return "bg-[#FEECEB] text-[#F34141]";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const AssignmentsSubmissionsList = () => {
  const { data } = useGetAllSubmissions();
  const submissions = (data?.submissions ?? []).map(mapSubmissionRecord);

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <DataList
        data={submissions}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <div className="flex w-full items-start gap-4">
            <div className="pt-1">
              <Checkbox className="rounded-[4px] border-gray-300 data-[state=checked]:bg-[#24A164] data-[state=checked]:border-[#24A164]" />
            </div>
            <div className="flex flex-col w-full gap-4">
              {/* Top Row */}
              <div className="flex justify-between items-start gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] font-medium text-gray-900 leading-tight">
                    {item.studentName}
                  </span>
                  <span className="text-[14px] text-gray-500">
                    {item.studentId}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-normal text-gray-900">
                      {item.cohort}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreVertical className="size-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-end w-full pt-2">
                <div className="flex items-center gap-2 flex-wrap pb-1">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[13px] font-medium ${getStatusStyle(
                      item.submissionStatus,
                    )}`}
                  >
                    {item.submissionStatus}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[13px] font-medium ${getStatusStyle(
                      item.gradeStatus,
                    )}`}
                  >
                    {item.gradeStatus}
                  </span>
                  <button className="text-[#24A164] hover:bg-[#E6F6EC] p-1 rounded-md transition-colors border border-transparent hover:border-[#24A164]/20">
                    <FileText className="size-4" />
                  </button>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-[14px] text-gray-500 text-right">
                    {item.score}
                  </span>
                  <span className="text-[13px] text-gray-400 font-normal text-right">
                    {item.submittedOn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};
