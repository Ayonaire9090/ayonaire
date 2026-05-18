"use client";

import React from "react";
import { Search, ChevronDown, Download, UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface GradingFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const GradingFilters = ({
  searchQuery,
  setSearchQuery,
}: GradingFiltersProps) => {
  return (
    <div className="w-full flex flex-col px-0 md:px-0">
      {/* Top action bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 bg-white md:bg-transparent rounded-xl md:rounded-none px-4 md:px-0 mb-2 md:mb-0">
        {/* Left side: Status and Search */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          {/* Status Dropdown */}
          <div className="hidden md:block">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="h-10 px-0 bg-white! text-gray-500 font-normal hover:text-gray-900 shadow-none text-[14px]">
                  Status <ChevronDown className="ml-1 size-4 text-gray-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-[150px] p-2">
                <div className="flex flex-col gap-1">
                  <button className="text-left px-3 py-2 text-[14px] hover:bg-gray-100 rounded-md">
                    Draft
                  </button>
                  <button className="text-left px-3 py-2 text-[14px] hover:bg-gray-100 rounded-md">
                    Final
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-400 pointer-events-none" />
            <Input
              placeholder="Search courses, instructors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 rounded-full border-gray-200 bg-white h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary shadow-none!"
            />
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
          <Button
            variant="outline"
            className="flex-1 sm:flex-none h-11 px-6 border-[#FF6A3D] text-[#FF6A3D] hover:bg-[#FF6A3D]/5 font-medium rounded-xl text-[14px]"
          >
            <Download className="mr-2 size-4" />
            Export Session
          </Button>
          <Button className="flex-1 sm:flex-none h-11 px-6 bg-[#FF6A3D] text-white hover:bg-[#FF6A3D]/90 font-medium rounded-xl text-[14px] shadow-none">
            <UploadCloud className="mr-2 size-4" />
            Publish
          </Button>
        </div>
      </div>

      {/* Stats row */}
    </div>
  );
};
