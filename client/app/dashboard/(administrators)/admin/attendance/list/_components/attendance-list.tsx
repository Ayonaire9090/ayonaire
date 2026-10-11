"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AttendanceStatusBadge,
  ApprovalStatusBadge,
  AttendanceActions,
  mapAttendanceSessionToData,
} from "./attendance-data";
import { useGetAttendanceSessions } from "@/hooks/api/use-attendance";

export const AttendanceList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetAttendanceSessions();
  const attendanceData = (data?.sessions ?? []).map(mapAttendanceSessionToData);

  const filteredAttendance = attendanceData.filter(
    (item) =>
      item.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.session.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.instructor.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="md:hidden mt-2 flex flex-col gap-0 w-full">
      {/* Search & Action bar */}
      <div className="px-0 pb-3">
        <div className="relative flex gap-4 items-center w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-400 pointer-events-none" />
          <Input
            placeholder="Search Attendance"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 pl-11 pr-4 rounded-xl border-none bg-white h-12 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 shadow-none"
          />
        </div>
      </div>

      {/* Horizontal scrollable filters for mobile */}
      <div className="px-0 pb-4 flex flex-col gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
          <Button
            variant="outline"
            className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px] shrink-0"
          >
            Bulk Action <ChevronDown className="ml-1.5 size-4 text-gray-400" />
          </Button>

          <Button
            variant="outline"
            className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px] shrink-0"
          >
            Apply Cohort <ChevronDown className="ml-1.5 size-4 text-gray-400" />
          </Button>

          <Button
            variant="outline"
            className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px] shrink-0"
          >
            Instructor <ChevronDown className="ml-1.5 size-4 text-gray-400" />
          </Button>

          <Button
            variant="outline"
            className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px] shrink-0"
          >
            Date Range <ChevronDown className="ml-1.5 size-4 text-gray-400" />
          </Button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
          <Button
            variant="outline"
            className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px] shrink-0"
          >
            Attendance Status{" "}
            <ChevronDown className="ml-1.5 size-4 text-gray-400" />
          </Button>

          <Button
            variant="outline"
            className="h-10 px-4 bg-white lg:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none text-[14px] shrink-0"
          >
            Approval Status{" "}
            <ChevronDown className="ml-1.5 size-4 text-gray-400" />
          </Button>

          <Button className="h-10 px-6 bg-[#FF6A3D] text-white font-medium rounded-[8px] text-[14px] hover:bg-[#FF6A3D]/90 transition-colors shadow-none border-none shrink-0 w-[100px]">
            Apply
          </Button>
        </div>
      </div>

      {/* White card containing the list */}
      <div className="bg-white rounded-[20px] overflow-hidden w-full">
        {/* Section header inside the card */}
        <div className="px-5 pt-5 pb-3">
          <h2 className="text-[18px] font-bold text-gray-900 leading-tight">
            Attendance
          </h2>
          <p className="text-[14px] text-gray-500 mt-0.5">
            Manage Orders content, pricing, and availability
          </p>
        </div>

        {/* List items */}
        <div className="flex flex-col p-2 gap-4">
          {filteredAttendance.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-4 py-4 rounded-xl bg-[#F6F6F6]"
            >
              <div className="flex items-start justify-between gap-3">
                {/* Left side: Avatar + Instructor info */}
                <div className="flex items-center gap-3">
                  <Avatar className="size-[42px] shrink-0 mt-1">
                    <AvatarImage
                      src={item.instructor.avatar}
                      alt={item.instructor.name}
                    />
                    <AvatarFallback className="text-[13px] font-medium bg-primary/10 text-primary">
                      {item.instructor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-semibold text-gray-800">
                      {item.instructor.name}
                    </span>
                    <span className="text-[13px] text-gray-500 font-medium whitespace-nowrap">
                      {item.session}
                    </span>
                  </div>
                </div>

                {/* Right side: Course Name + 3 dots */}
                <div className="flex items-start gap-1">
                  <div className="flex flex-col items-end pt-1">
                    <span className="text-[14px] text-gray-700 font-medium text-right">
                      {item.course} {item.className}
                    </span>
                  </div>
                  <div className="-mt-1 -mr-2">
                    <AttendanceActions id={item.id} />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Badges and Date */}
              <div className="flex items-center gap-2 mt-4 ml-[54px] flex-wrap">
                <AttendanceStatusBadge status={item.status} />
                <ApprovalStatusBadge status={item.approval} />

                {/* P/A */}
                <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-2 py-1 w-fit">
                  <span className="text-[#24A164] text-[13px] font-semibold">
                    {item.present}
                  </span>
                  <span className="text-gray-400 text-[13px]">/</span>
                  <span className="text-[#FF7A1A] text-[13px] font-semibold">
                    {item.absent}
                  </span>
                </div>

                {/* Date/Time */}
                <span className="text-[12px] text-gray-500 ml-auto whitespace-nowrap">
                  {item.date} {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 mt-2">
          <span className="text-gray-900 text-[14px]">Page 1 of 5</span>
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 text-gray-900 text-[14px] hover:text-black transition-colors">
              <ChevronLeft className="size-4" /> Prev.
            </button>
            <button className="flex items-center gap-1 text-gray-900 text-[14px] hover:text-black transition-colors">
              Next <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
