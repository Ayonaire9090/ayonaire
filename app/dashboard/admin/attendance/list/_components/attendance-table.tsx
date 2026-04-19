"use client";

import React, { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { ChevronDown, X } from "lucide-react";
import {
  AttendanceData,
  AttendanceStatusBadge,
  ApprovalStatusBadge,
  AttendanceActions,
  mockAttendance,
} from "./attendance-data";

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
  danger,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  danger?: boolean;
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
      <span
        className={`text-[15px] font-normal ${
          danger ? "text-red-500" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export const AttendanceTable = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedBulkActions, setSelectedBulkActions] = useState<Set<string>>(
    new Set(),
  );
  const [selectedAttendanceStatuses, setSelectedAttendanceStatuses] = useState<
    Set<string>
  >(new Set());
  const [selectedApprovalStatuses, setSelectedApprovalStatuses] = useState<
    Set<string>
  >(new Set());

  const toggleSet = (
    set: Set<string>,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string,
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const filteredAttendance = mockAttendance.filter(
    (item) =>
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.session.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getProgressColor = (percent: number) => {
    if (percent >= 80) return "bg-[#24A164]";
    if (percent >= 70) return "bg-[#F59E0B]";
    return "bg-[#E5383B]";
  };

  const tableColumns: ColumnDef<AttendanceData>[] = [
    {
      key: "className",
      header: "Class Name",
      cell: (item) => (
        <span className="text-gray-900 text-[14px] font-medium whitespace-nowrap">
          {item.className}
        </span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => (
        <span className="text-gray-600 text-[13px] leading-tight max-w-[120px] block">
          {item.course}
        </span>
      ),
    },
    {
      key: "session",
      header: "Session",
      cell: (item) => (
        <span className="text-gray-600 text-[13px] whitespace-nowrap">
          {item.session}
        </span>
      ),
    },
    {
      key: "datetime",
      header: "Date / Time",
      cell: (item) => (
        <div className="flex flex-col gap-0.5">
          <span className="text-gray-500 text-[13px] whitespace-nowrap">
            {item.date}
          </span>
          <span className="text-gray-500 text-[13px] whitespace-nowrap">
            {item.time}
          </span>
        </div>
      ),
    },
    {
      key: "instructor",
      header: "Instructor",
      cell: (item) => (
        <div className="flex items-center gap-2">
          <Avatar className="size-8 shrink-0">
            <AvatarImage
              src={item.instructor.avatar}
              alt={item.instructor.name}
            />
            <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
              {item.instructor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-600 text-[13px] max-w-[120px] leading-tight">
            {item.instructor.name}
          </span>
        </div>
      ),
    },
    {
      key: "pa",
      header: "P / A",
      cell: (item) => (
        <div className="flex items-center gap-1.5 bg-[#F6F6F6] rounded-full px-2 py-1 w-fit">
          <span className="text-[#24A164] text-[13px] font-semibold">
            {item.present}
          </span>
          <span className="text-gray-400 text-[13px]">/</span>
          <span className="text-[#FF7A1A] text-[13px] font-semibold">
            {item.absent}
          </span>
        </div>
      ),
    },
    {
      key: "attendancePercent",
      header: "Attendance %",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-1.5 bg-gray-200 rounded-full overflow-hidden flex shrink-0">
            <div
              className={`h-full rounded-full ${getProgressColor(
                item.attendancePercent,
              )}`}
              style={{ width: `${item.attendancePercent}%` }}
            />
          </div>
          <span
            className={`text-[14px] font-bold ${
              item.attendancePercent >= 80
                ? "text-[#24A164]"
                : item.attendancePercent >= 70
                  ? "text-[#F59E0B]"
                  : "text-[#E5383B]"
            }`}
          >
            {item.attendancePercent}%
          </span>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <AttendanceStatusBadge status={item.status} />,
    },
    {
      key: "approval",
      header: "Approval",
      cell: (item) => <ApprovalStatusBadge status={item.approval} />,
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "pr-4",
      className: "pr-4",
      cell: (item) => <AttendanceActions id={item.id} />,
    },
  ];

  const bulkActionItems = [
    "Approve Attendance",
    "Reject Attendance",
    "Request Correction",
    "Delete Records",
  ];

  const attendanceStatusItems = ["Recorded", "Edited", "Missing"];
  const approvalStatusItems = ["Pending", "Approved", "Rejected"];

  return (
    <div className="hidden md:block w-full overflow-x-auto mt-6 bg-white rounded-xl p-2 lg:p-4">
      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-2 pb-4">
        {/* Search */}
        <div className="relative w-full sm:w-[240px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
          <Input
            placeholder="Search Attendance"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
          />
        </div>

        {/* Bulk Action */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Bulk Action{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[300px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            {selectedBulkActions.size > 0 && (
              <div className="px-5 pt-4 pb-0">
                <span className="text-primary font-semibold text-[14px]">
                  ({selectedBulkActions.size}) Selected
                </span>
              </div>
            )}
            <FilterPopoverHeader title="Bulk actions" />
            <div className="px-5 pb-2">
              <span className="text-[15px] font-semibold text-gray-900">
                Bulk actions
              </span>
            </div>
            <div className="pb-3 flex flex-col gap-0.5">
              {bulkActionItems.map((action) => (
                <CheckboxItem
                  key={action}
                  label={action}
                  checked={selectedBulkActions.has(action)}
                  onToggle={() =>
                    toggleSet(
                      selectedBulkActions,
                      setSelectedBulkActions,
                      action,
                    )
                  }
                  danger={action === "Delete Records"}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Apply Cohort */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Apply Cohort{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Apply Cohort" />
            <div className="pb-4 flex flex-col gap-1">
              {["Cohort 1", "Cohort 2", "Cohort 3"].map((b) => (
                <PopoverClose key={b} asChild>
                  <button className="text-left px-5 py-3 text-[15px] text-gray-500 hover:bg-white/60 rounded-xl transition-colors">
                    {b}
                  </button>
                </PopoverClose>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Instructor */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Instructor <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Instructor" />
            <div className="pb-4 flex flex-col gap-1">
              {["Dr. Sarah Ahmed", "Prof. James Wilson", "Emily Chen"].map(
                (b) => (
                  <PopoverClose key={b} asChild>
                    <button className="text-left px-5 py-3 text-[15px] text-gray-500 hover:bg-white/60 rounded-xl transition-colors">
                      {b}
                    </button>
                  </PopoverClose>
                ),
              )}
            </div>
          </PopoverContent>
        </Popover>

        {/* Date Range */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Date Range <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Date Range" />
            <div className="pb-4 flex flex-col gap-1">
              {["Today", "Last 7 Days", "Last 30 Days"].map((b) => (
                <PopoverClose key={b} asChild>
                  <button className="text-left px-5 py-3 text-[15px] text-gray-500 hover:bg-white/60 rounded-xl transition-colors">
                    {b}
                  </button>
                </PopoverClose>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Attendance Status */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Attendance Status{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Attendance Status" />
            <div className="pb-3 flex flex-col gap-0.5">
              {attendanceStatusItems.map((s) => (
                <CheckboxItem
                  key={s}
                  label={s}
                  checked={selectedAttendanceStatuses.has(s)}
                  onToggle={() =>
                    toggleSet(
                      selectedAttendanceStatuses,
                      setSelectedAttendanceStatuses,
                      s,
                    )
                  }
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Approval Status */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px]"
            >
              Approval Status{" "}
              <ChevronDown className="ml-1.5 size-4 text-gray-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] bg-[#F6F6F6]"
          >
            <FilterPopoverHeader title="Approval Status" />
            <div className="pb-3 flex flex-col gap-0.5">
              {approvalStatusItems.map((s) => (
                <CheckboxItem
                  key={s}
                  label={s}
                  checked={selectedApprovalStatuses.has(s)}
                  onToggle={() =>
                    toggleSet(
                      selectedApprovalStatuses,
                      setSelectedApprovalStatuses,
                      s,
                    )
                  }
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* Apply Button */}
        <Button className="h-10 px-5 bg-primary text-white font-medium rounded-[8px] text-[14px] hover:bg-primary/90">
          Apply
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <DataTable
          data={filteredAttendance}
          columns={tableColumns}
          keyExtractor={(o) => o.id}
          selectable
        />
      </div>
    </div>
  );
};
