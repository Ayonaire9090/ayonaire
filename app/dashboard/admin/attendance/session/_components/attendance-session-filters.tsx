"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Search, X } from "lucide-react";
import { useAttendanceSessionContext } from "./attendance-session-context";

// Filter Popover Header
export const FilterPopoverHeader = ({ title }: { title: string }) => {
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
export const CheckboxItem = ({
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

export const AttendanceSessionFilters = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedBulkActions,
    setSelectedBulkActions,
    selectedSessions,
    setSelectedSessions,
    selectedStatuses,
    setSelectedStatuses,
    selectedSources,
    setSelectedSources,
    toggleSet,
  } = useAttendanceSessionContext();

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6">
      {/* Left Side Filters */}
      <div className="flex lg:flex-wrap overflow-x-auto lg:overflow-x-hidden hide-scrollbar items-center gap-2">
        {/* Bulk Action */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-500 font-normal hover:bg-gray-50 rounded-[8px] shadow-none text-[15px]"
            >
              Bulk Action{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-white lg:bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Bulk actions" />
            <div className="pb-3 flex flex-col gap-0.5">
              {["Mark Present", "Mark Absent", "Delete"].map((action) => (
                <CheckboxItem
                  key={action}
                  label={action}
                  checked={selectedBulkActions.has(action)}
                  onToggle={() => toggleSet(setSelectedBulkActions, action)}
                  danger={action === "Delete"}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Session Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-500 font-normal hover:bg-gray-50 rounded-[8px] shadow-none text-[15px]"
            >
              Session Filter{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-white lg:bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Session Filter" />
            <div className="pb-3 flex flex-col gap-0.5">
              {["Session 1", "Session 2"].map((action) => (
                <CheckboxItem
                  key={action}
                  label={action}
                  checked={selectedSessions.has(action)}
                  onToggle={() => toggleSet(setSelectedSessions, action)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Status Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-500 font-normal hover:bg-gray-50 rounded-[8px] shadow-none text-[15px]"
            >
              Status Filter{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-white lg:bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Status Filter" />
            <div className="pb-3 flex flex-col gap-0.5">
              {["Present", "Absent", "Late", "Unmarked"].map((action) => (
                <CheckboxItem
                  key={action}
                  label={action}
                  checked={selectedStatuses.has(action)}
                  onToggle={() => toggleSet(setSelectedStatuses, action)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Source Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-500 font-normal hover:bg-gray-50 rounded-[8px] shadow-none text-[15px]"
            >
              Source Filter{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-white lg:bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Source Filter" />
            <div className="pb-3 flex flex-col gap-0.5">
              {["Device", "Manual"].map((action) => (
                <CheckboxItem
                  key={action}
                  label={action}
                  checked={selectedSources.has(action)}
                  onToggle={() => toggleSet(setSelectedSources, action)}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Apply Button */}
        <Button className="h-10 px-6 bg-[#FF6B35] text-white font-medium rounded-[8px] text-[15px] hover:bg-[#FF6B35]/90 border-none shadow-none">
          Apply
        </Button>
      </div>

      {/* Right Side Search */}
      <div className="relative w-full lg:w-auto shrink-0 min-w-[320px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <Input
          placeholder="Search by: Student name Student ID Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-[42px] rounded-full border-none bg-white lg:bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-50 hover:bg-gray-50 transition-colors shadow-none"
        />
      </div>
    </div>
  );
};
