"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAttendanceReportsContext } from "./attendance-reports-context";

// Shared Popover Header
function FilterPopoverHeader({ title }: { title: string }) {
  return (
    <div className="flex items-start justify-between p-5 pb-4">
      <span className="text-[20px] font-bold text-gray-900 leading-tight">
        {title}
      </span>
      <PopoverClose asChild>
        <button className="size-9 flex items-center justify-center bg-[#EBEBEB] rounded-full hover:bg-gray-300 transition-colors shrink-0 mt-0.5">
          <X className="size-[16px] text-gray-700" />
        </button>
      </PopoverClose>
    </div>
  );
}

// Checkbox Filter Row
function CheckboxItem({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3.5 w-full px-5 py-3 hover:bg-white/60 transition-colors text-left rounded-xl"
    >
      <div
        className={`size-5 rounded-[5px] border-2 flex items-center justify-center shrink-0 transition-colors ${
          checked ? "bg-primary border-primary" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <svg
            className="size-3 text-white"
            viewBox="0 0 12 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 5 4.5 8.5 11 1" />
          </svg>
        )}
      </div>
      <span className="text-[15px] font-normal text-gray-600">{label}</span>
    </button>
  );
}

const basicFilters = [
  "Report Type",
  "Course Filter",
  "Class / Cohort Filter",
  "Instructor Filter",
  "Student Filter",
  "Date Range",
  "Attendance % Filter",
  "Status Filter",
  "Absenteeism Filter",
];

const advancedFilterFields = [
  "Class Name",
  "Course Name",
  "Student Name",
  "Instructor",
  "Status",
];

export const AttendanceReportsFilters = () => {
  const [showAdvanced, setShowAdvanced] = useState(true);
  const { selectedFilters, toggleFilter } = useAttendanceReportsContext();

  return (
    <div className="flex flex-col gap-6 w-full bg-white rounded-2xl p-5 lg:p-6 pb-6">
      {/* Basic Filter Row */}
      <div className="grid grid-cols-2 lg:flex flex-wrap items-center gap-2.5">
        {basicFilters.map((filterName) => (
          <Popover key={filterName}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 overflow-hidden bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
              >
                {filterName}{" "}
                <ChevronDown className="ml-1.5 size-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
            >
              <FilterPopoverHeader title={filterName} />
              <div className="pb-3 flex flex-col gap-0.5">
                {["Option 1", "Option 2", "Option 3"].map((option) => (
                  <CheckboxItem
                    key={option}
                    label={option}
                    checked={(selectedFilters[filterName] || new Set()).has(
                      option,
                    )}
                    onToggle={() => toggleFilter(filterName, option)}
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between w-full pt-2 border-t border-gray-100 mt-2">
        <Button
          variant="ghost"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 hover:bg-transparent px-0 text-[24px] font-semibold text-gray-900"
        >
          <SlidersHorizontal className="size-4 text-primary" />
          Advanced Filters
          {showAdvanced ? (
            <ChevronUp className="size-4 text-gray-400 ml-1" />
          ) : (
            <ChevronDown className="size-4 text-gray-400 ml-1" />
          )}
        </Button>
      </div>

      {/* Advanced Filters Section */}
      {showAdvanced && (
        <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advancedFilterFields.map((field) => {
              const selectedCount = (selectedFilters[field] || new Set()).size;
              return (
                <div key={field} className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-gray-700">
                    {field}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-11 bg-white border-gray-200 rounded-[10px] text-[14px] font-normal text-left justify-between px-3 shadow-sm hover:bg-gray-50 text-gray-600"
                      >
                        <span className="truncate">
                          {selectedCount > 0
                            ? `Selected (${selectedCount})`
                            : `Select ${field}`}
                        </span>
                        <ChevronDown className="size-4 text-gray-400 shrink-0 ml-2" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
                    >
                      <FilterPopoverHeader title={field} />
                      <div className="pb-3 flex flex-col gap-0.5">
                        {["Option 1", "Option 2", "Option 3"].map((option) => (
                          <CheckboxItem
                            key={option}
                            label={option}
                            checked={(selectedFilters[field] || new Set()).has(
                              option,
                            )}
                            onToggle={() => toggleFilter(field, option)}
                          />
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-end w-full mt-6 pt-6 border-t border-gray-200">
            <Button className="h-11 px-8 rounded-[10px] bg-primary hover:bg-primary/90 text-white font-medium text-[15px] shadow-sm transition-all hover:shadow-md">
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
