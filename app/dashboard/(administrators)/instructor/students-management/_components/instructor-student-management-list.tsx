"use client";

import { DataList } from "@/components/ui/data-list";
import { AppDropdown, AppDropdownItem } from "@/components/ui/app-dropdown";
import { MoreVertical, Download } from "lucide-react";
import { DUMMY_STUDENTS, getStatusColor, getProgressColor } from "./dummy-data";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export const InstructorStudentManagementList = () => {
  const footerContent = (
    <div className="flex justify-between items-center w-full mt-2">
      <Button variant="outline" className="border-gray-200 text-gray-500 shadow-none hover:bg-gray-50 h-11 px-3 sm:px-4 rounded-xl font-medium shrink-0">
        <Download className="size-5" />
        <span className="hidden sm:inline">Export Students</span>
      </Button>
      <div className="flex items-center gap-2 sm:gap-3">
        <Button variant="outline" className="border-gray-200 text-gray-500 shadow-none hover:bg-gray-50 h-11 px-3 sm:px-5 rounded-xl font-medium text-[13px] sm:text-sm">
          Send Announcement
        </Button>
        <Button className="h-11 px-4 sm:px-6 rounded-xl bg-[#FF5A1F] hover:bg-[#E04D19] text-white shadow-none border-none font-medium text-[13px] sm:text-sm">
          Send Message
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl p-4 w-full">
      <DataList
        data={DUMMY_STUDENTS}
        keyExtractor={(item) => item.id}
        footerContent={footerContent}
        renderItem={(item) => (
          <div className="flex w-full items-start gap-4">
            <Checkbox className="rounded-[4px] border-gray-300 bg-white mt-1" />
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-medium text-gray-900 text-[15px]">
                    {item.name}
                  </h4>
                  <p className="text-[13px] text-gray-500">{item.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 text-[15px]">
                    {item.course}
                  </span>
                  <AppDropdown
                    trigger={
                      <button className="-mr-2 p-1 hover:bg-gray-200 rounded-full transition-colors">
                        <MoreVertical className="size-5 text-black" />
                      </button>
                    }
                  >
                    <AppDropdownItem>View</AppDropdownItem>
                    <AppDropdownItem>Grade now</AppDropdownItem>
                    <AppDropdownItem>Download</AppDropdownItem>
                  </AppDropdown>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-white overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.progress}%`,
                      backgroundColor: getProgressColor(item.status),
                    }}
                  />
                </div>
                <span
                  className={`text-[15px] font-medium`}
                  style={{ color: getProgressColor(item.status) }}
                >
                  {item.progress}%
                </span>
              </div>

              <div className="flex justify-between items-center mt-1">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                >
                  {item.status === "Submitted" ? "Submited" : item.status}
                </span>
                <div className="text-[14px]">
                  <span className="font-medium text-black">Marks </span>
                  <span className="text-gray-500">{item.quizScore}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};
