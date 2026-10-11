"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";
import {
  InstructorStatusBadge,
  mapInstructorProfileToInstructorData,
} from "./instructors-data";

export const InstructorsList = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data, isLoading, isError } = useGetAllInstructorProfiles();
  const instructors = (data?.data ?? []).map(
    mapInstructorProfileToInstructorData,
  );

  const filtered = instructors.filter(
    (i) =>
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="md:hidden mt-2 bg-white rounded-xl p-2 lg:p-4">
      <div className="w-full flex flex-col gap-4 pb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 mb-1">
            All Instructors
          </h2>
          <p className="text-[15px] text-gray-500">
            Manage instructor profiles and status
          </p>
        </div>
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
          <Input
            placeholder="Search instructors...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load instructors. Please try again.
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No instructors found.
        </div>
      ) : (
        <DataList
          data={filtered}
          keyExtractor={(i) => i.id}
          renderItem={(item) => (
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-[15px] text-gray-900">
                  {item.name}
                </span>
                <InstructorStatusBadge status={item.status} />
              </div>
              <span className="text-[14px] text-gray-500">{item.email}</span>
              <div className="flex items-center justify-between text-[13px] text-gray-400">
                <span>{item.expertise}</span>
                <span>{item.joined}</span>
              </div>
            </div>
          )}
        />
      )}
    </div>
  );
};
