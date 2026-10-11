"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";

// Shared Popover Item for single selection
const SelectItem = ({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left px-4 py-2.5 rounded-[8px] text-[15px] transition-colors ${
        selected
          ? "bg-[#5B5B5B] text-white/90 font-medium"
          : "bg-transparent text-gray-900 hover:bg-black/5"
      }`}
    >
      {label}
    </button>
  );
};

export const AssignmentsSubmissionsFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [submissionFilter, setSubmissionFilter] = useState("All Submissions");
  const [gradeFilter, setGradeFilter] = useState("All Grades");

  const submissionOptions = [
    "Not Submitted",
    "All Submissions",
    "Submitted",
    "Late",
    "Graded",
  ];

  const gradeOptions = ["All Grades", "Panding", "Graded"];

  const actionOptions = ["Publish", "Edit", "Delete"];

  // Reusable button styles
  const buttonVariant =
    "h-11 px-0 bg-white lg:bg-[#F6F6F6] border-none text-gray-500 font-normal hover:bg-transparent shadow-none text-[15px] shrink-0 flex items-center justify-between min-w-[120px]";

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 py-4 w-full">
      {/* Left Side Filters (Dropdowns) */}
      <div className="flex order-2 lg:order-1 overflow-x-auto hide-scrollbar items-center gap-6 w-full lg:w-auto pr-1">
        {/* All Submissions */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={buttonVariant}>
              {submissionFilter}
              <ChevronDown className="ml-2 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[200px] p-2 rounded-[16px] border-gray-100 shadow-md bg-[#F4F4F4]"
          >
            <div className="flex flex-col gap-1">
              {submissionOptions.map((option) => (
                <SelectItem
                  key={option}
                  label={option}
                  selected={submissionFilter === option}
                  onSelect={() => setSubmissionFilter(option)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* All Grades */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={buttonVariant}>
              {gradeFilter}
              <ChevronDown className="ml-2 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[180px] p-2 rounded-[16px] border-gray-100 shadow-md bg-[#F4F4F4]"
          >
            <div className="flex flex-col gap-1">
              {gradeOptions.map((option) => (
                <SelectItem
                  key={option}
                  label={option}
                  selected={gradeFilter === option}
                  onSelect={() => setGradeFilter(option)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Action */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={buttonVariant}>
              Action
              <ChevronDown className="ml-2 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[180px] p-2 rounded-[16px] border-gray-100 shadow-md bg-[#F4F4F4]"
          >
            <div className="flex flex-col gap-1">
              {actionOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {}}
                  className="w-full text-left px-4 py-2.5 rounded-[8px] text-[15px] bg-transparent text-gray-900 hover:bg-black/5 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Right Side Search */}
      <div className="order-1 lg:order-2 relative w-full lg:w-[350px] shrink-0">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-[42px] rounded-full border border-gray-200 bg-white lg:bg-[#F4F4F4] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-primary shadow-none w-full"
        />
      </div>
    </div>
  );
};
