"use client";

import { Search, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PaymentsFiltersProps {
  selectedCount: number;
}

export const PaymentsFilters = ({ selectedCount }: PaymentsFiltersProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full mb-6 gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] font-bold text-gray-900">
          Transaction History
        </h2>
        <span className="text-[14px] text-gray-500">
          Recent payment transactions on your platform
        </span>
      </div>
      <div className="flex items-center gap-3 self-end lg:self-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search transaction...."
            className="pl-9 pr-4 py-2.5 bg-[#F6F6F6] rounded-full text-[14px] border-none outline-none focus:ring-1 focus:ring-gray-200 w-[200px] md:w-[260px]"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-center size-10 rounded-xl bg-[#FEF2F2] text-[#EF4444] hover:bg-red-100 transition-colors">
              <Trash2 className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-32 rounded-xl p-2 shadow-lg border border-gray-100 bg-white"
          >
            <DropdownMenuItem className="text-[14px] cursor-pointer rounded-lg text-gray-700 py-2 hover:bg-gray-50 focus:bg-gray-50">
              Remove All
            </DropdownMenuItem>
            <div className="h-px bg-gray-100 my-1"></div>
            <DropdownMenuItem className="text-[14px] cursor-pointer rounded-lg text-gray-700 py-2 hover:bg-gray-50 focus:bg-gray-50">
              Select
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
