"use client";

import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { DataList } from "@/components/ui/data-list";
import { mapPurchaseRecordToStudentPurchase } from "./student-purchases-data";
import { StudentPurchasesFilters } from "./student-purchases-filters";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { useGetStudentPurchases } from "@/hooks/api/use-payments";

export const AdminStudentPurchasesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useGetStudentPurchases();

  const purchases = useMemo(
    () => (data?.purchases ?? []).map(mapPurchaseRecordToStudentPurchase),
    [data],
  );
  const filteredPurchases = purchases.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.course.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#ECFDF5] text-[#10B981]";
      case "Pending":
        return "bg-[#FFF8E6] text-[#F59E0B]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <StudentPurchasesFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading purchases...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load purchases.</p>
      ) : (
        <DataList
          data={filteredPurchases}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            return (
              <div className="flex flex-col w-full gap-4">
                {/* Top Row */}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5 flex-wrap">
                        <span>{item.email}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{item.date}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                    <AppDropdown
                      variant="white"
                      align="end"
                      trigger={<MoreVertical className="size-5 text-gray-900 cursor-pointer" />}
                    >
                      <AppDropdownItem
                        variant="menu"
                        onClick={() => toast.info("Editing a purchase record isn't available yet.")}
                      >
                        Edit
                      </AppDropdownItem>
                      <AppDropdownSeparator />
                      <AppDropdownItem
                        variant="danger-menu"
                        onClick={() => toast.info("Deleting a purchase record isn't available yet.")}
                      >
                        Delete
                      </AppDropdownItem>
                    </AppDropdown>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center w-full mt-1">
                  <span className="text-[18px] font-bold text-gray-900">{item.amount}</span>
                  <span className="text-[14px] text-gray-500 font-medium">{item.course}</span>
                </div>
              </div>
            );
          }}
        />
      )}
    </div>
  );
};
