"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";
import {
  InstructorData,
  InstructorStatusBadge,
  mapInstructorProfileToInstructorData,
} from "./instructors-data";

export const InstructorsTable = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data, isLoading, isError } = useGetAllInstructorProfiles();
  const instructors: InstructorData[] = (data?.data ?? []).map(
    mapInstructorProfileToInstructorData,
  );

  const filtered = instructors.filter(
    (i) =>
      i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const columns: ColumnDef<InstructorData>[] = [
    {
      key: "name",
      header: "Name",
      cell: (item) => (
        <div className="flex flex-col">
          <span className="font-medium text-[15px] text-gray-900">
            {item.name}
          </span>
          <span className="text-[13px] text-gray-400">{item.email}</span>
        </div>
      ),
    },
    {
      key: "expertise",
      header: "Expertise",
      cell: (item) => (
        <span className="text-gray-600 text-[15px]">{item.expertise}</span>
      ),
    },
    {
      key: "category",
      header: "Category",
      cell: (item) => (
        <span className="text-gray-600 text-[15px]">{item.category}</span>
      ),
    },
    {
      key: "joined",
      header: "Joined",
      cell: (item) => (
        <span className="text-gray-600 text-[15px]">{item.joined}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <InstructorStatusBadge status={item.status} />,
    },
    {
      key: "actions",
      header: "",
      cell: (item) => (
        <button
          onClick={() => router.push(`/dashboard/admin/instructors/${item.userId}`)}
          disabled={!item.userId}
          className="text-[13px] font-medium text-[#F06B30] hover:underline disabled:opacity-40 disabled:no-underline"
        >
          View Profile
        </button>
      ),
    },
  ];

  return (
    <div className="hidden md:block w-full overflow-x-auto mt-6 bg-white rounded-xl p-2 lg:p-4">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between pb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
            All Instructors
          </h2>
          <p className="text-[15px] text-gray-500">
            Manage instructor profiles and status
          </p>
        </div>
        <div className="relative w-full sm:w-[280px]">
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
        <DataTable
          data={filtered}
          columns={columns}
          keyExtractor={(i) => i.id}
        />
      )}
    </div>
  );
};
