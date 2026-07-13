"use client";

import { Calendar as CalendarIcon, RefreshCw } from "lucide-react";
import React from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const WorkshopDateFilter = ({
  date,
  onDateChange,
}: {
  date: DateRange | undefined;
  onDateChange: (date: DateRange | undefined) => void;
}) => {
  return (
    <div className="flex items-center gap-3 w-[95%] mx-auto lg:w-auto lg:mx-0">
      <Popover>
        <PopoverTrigger asChild>
          <button className="flex items-center bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 flex-1 sm:flex-none sm:w-[320px] cursor-pointer hover:bg-gray-50/50 transition-colors">
            <span
              className={cn(
                "text-xs sm:text-sm w-full min-w-0 text-left truncate select-none",
                date?.from ? "text-gray-600" : "text-gray-400",
              )}
            >
              {date?.from ? format(date.from, "MMM dd, yyyy") : "Start date"}
            </span>
            <span className="text-gray-300 mx-1 sm:mx-2 select-none">-</span>
            <span
              className={cn(
                "text-xs sm:text-sm w-full min-w-0 text-right sm:text-left truncate select-none",
                date?.to ? "text-gray-600" : "text-gray-400",
              )}
            >
              {date?.to ? format(date.to, "MMM dd, yyyy") : "End date"}
            </span>
            <CalendarIcon className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2 shrink-0 hidden sm:block" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            autoFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
      <button
        className="p-2 sm:p-2.5 bg-white border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-colors shrink-0"
        onClick={() => onDateChange(undefined)}
      >
        <RefreshCw size={18} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};
