import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { DataList } from "@/components/ui/data-list";

interface EnrollmentsListProps {
  onEnrollClick: () => void;
}

export const EnrollmentsList = ({ onEnrollClick }: EnrollmentsListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isBulkOpen, setIsBulkOpen] = useState(false);

  // Mock columns since we have no data yet
  const columns: ColumnDef<any>[] = [
    { key: "studentName", header: "Student Name", cell: () => null },
    { key: "course", header: "Course", cell: () => null },
    { key: "date", header: "Date", cell: () => null },
    { key: "status", header: "Status", cell: () => null },
    { key: "action", header: "Action", cell: () => null },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Mobile-only header action - if needed to align with the visual on mobile */}
      <div className="flex md:hidden justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 hidden">Enrollments</h2>
        <div className="ml-auto">
          <Button
            onClick={onEnrollClick}
            className="bg-[#F06B30] hover:bg-[#F06B30]/90 text-white gap-2 flex items-center shadow-none border-0"
          >
            <Plus className="size-4" /> Enroll Students
          </Button>
        </div>
      </div>

      <div className="w-full bg-white rounded-xl p-4 md:p-6 flex flex-col min-h-[600px]">
        {/* Top Controls Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
              <Input
                placeholder="Search students...."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none w-full"
              />
            </div>

            {/* Filters Button */}
            <Button
              variant="outline"
              className="h-11 px-4 rounded-lg border-gray-200 text-gray-700 font-medium flex items-center gap-2 shrink-0 bg-[#F6F6F6]/50 md:bg-white"
            >
              <Image
                src="/assets/icons/filters.svg"
                alt="Filters"
                width={18}
                height={18}
              />
              Filters
            </Button>

            {/* Bulk Action Popover */}
            <Popover open={isBulkOpen} onOpenChange={setIsBulkOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 px-4 rounded-lg border-gray-200 text-gray-700 font-medium flex items-center gap-2 shrink-0 bg-[#F6F6F6]/50 md:bg-white data-[state=open]:bg-gray-100"
                >
                  Bulk Action
                  <ChevronDown className="size-4 text-gray-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[200px] p-2 rounded-xl shadow-lg border-gray-100"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-gray-50">
                    <span className="font-semibold text-[15px] text-gray-900">
                      Bulk actions
                    </span>
                    <button
                      onClick={() => setIsBulkOpen(false)}
                      className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                  <button className="text-left px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors">
                    Approve
                  </button>
                  <button className="text-left px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors">
                    Cancel
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {/* Apply Button */}
            <Button className="h-11 px-6 rounded-lg bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium shrink-0 hidden md:flex">
              Apply
            </Button>
          </div>

          {/* Desktop Enroll Students Button */}
          <div className="hidden md:block">
            <Button
              onClick={onEnrollClick}
              className="h-11 px-5 rounded-lg bg-[#F06B30] hover:bg-[#F06B30]/90 text-white gap-2 font-medium shadow-none"
            >
              <Plus className="size-[18px]" /> Enroll Students
            </Button>
          </div>
        </div>

        {/* Data Views */}
        <div className="flex-1 mt-6">
          <div className="hidden md:block">
            <DataTable
              data={[]}
              columns={columns}
              keyExtractor={(item: any) => item.id || ""}
              selectable
            />
          </div>
          <div className="block md:hidden">
            <DataList
              data={[]}
              keyExtractor={(item: any) => item.id || ""}
              renderItem={(item: any) => <div />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
