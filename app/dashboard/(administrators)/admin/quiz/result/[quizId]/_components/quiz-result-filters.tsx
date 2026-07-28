"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search, X } from "lucide-react";
import { QuizResultFilterState } from "./quiz-result-data";

// Filter Popover Header
const FilterPopoverHeader = ({ title }: { title: string }) => {
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
};

// Checkbox Filter Row
const CheckboxItem = ({
  label,
  checked,
  onToggle,
  danger,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  danger?: boolean;
}) => {
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
      <span
        className={`text-[15px] font-normal ${
          danger ? "text-red-500" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

interface QuizResultFiltersProps {
  filters: QuizResultFilterState;
  onFiltersChange: (filters: QuizResultFilterState) => void;
}

export const QuizResultFilters = ({
  filters,
  onFiltersChange,
}: QuizResultFiltersProps) => {
  const toggleValue = (
    key: "statuses" | "passFail",
    option: string,
  ) => {
    const current = filters[key];
    const next = current.includes(option)
      ? current.filter((v) => v !== option)
      : [...current, option];
    onFiltersChange({ ...filters, [key]: next });
  };

  const popoverContentClasses =
    "w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-white lg:bg-[#F6F6F6]";
  const buttonClasses =
    "h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-500 font-normal hover:bg-gray-50 rounded-[8px] shadow-none text-[15px] shrink-0";

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 py-4 w-full">
      {/* Right Side Search */}
      <div className="relative w-full lg:w-[350px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search student by name or email..."
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
          className="pl-[42px] rounded-full border-none bg-white lg:bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-50 hover:bg-gray-50 transition-colors shadow-none w-full"
        />
      </div>

      {/* Left Side Filters */}
      <div className="flex overflow-x-auto hide-scrollbar items-center justify-between lg:justify-end gap-3 lg:gap-2 w-full pr-1">
        {/* Status */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={buttonClasses}>
              Status
              {filters.statuses.length > 0
                ? ` (${filters.statuses.length})`
                : ""}
              <ChevronDown className="ml-1.5 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className={popoverContentClasses}>
            <FilterPopoverHeader title="Status" />
            <div className="pb-3 flex flex-col gap-0.5">
              {["Graded", "Pending"].map((status) => (
                <CheckboxItem
                  key={status}
                  label={status}
                  checked={filters.statuses.includes(status)}
                  onToggle={() => toggleValue("statuses", status)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Pass/Fail */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={buttonClasses}>
              Pass/Fail
              {filters.passFail.length > 0
                ? ` (${filters.passFail.length})`
                : ""}
              <ChevronDown className="ml-1.5 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className={popoverContentClasses}>
            <FilterPopoverHeader title="Pass/Fail" />
            <div className="pb-3 flex flex-col gap-0.5">
              {["Pass", "Fail"].map((option) => (
                <CheckboxItem
                  key={option}
                  label={option}
                  checked={filters.passFail.includes(option)}
                  onToggle={() => toggleValue("passFail", option)}
                  danger={option === "Fail"}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
