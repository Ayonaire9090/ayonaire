"use client";

import { Search } from "lucide-react";

export const PricingPlansFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full mb-6 gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-[20px] font-bold text-gray-900">
          Manage Pricing Plans
        </h2>
        <span className="text-[14px] text-gray-500">
          Recent Manage pricing planson your platform
        </span>
      </div>
      <div className="flex items-center gap-3 self-end lg:self-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by student...."
            className="pl-9 pr-4 py-2.5 bg-[#F6F6F6] rounded-full text-[14px] border-none outline-none focus:ring-1 focus:ring-gray-200 w-[200px] md:w-[260px]"
          />
        </div>
      </div>
    </div>
  );
};
