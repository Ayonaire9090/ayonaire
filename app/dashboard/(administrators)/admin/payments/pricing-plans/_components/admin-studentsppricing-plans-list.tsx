"use client";

import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { DataList } from "@/components/ui/data-list";
import { mapPricingPlanRecordToPricingPlan } from "./pricing-plans-data";
import { PricingPlansFilters } from "./pricing-plans-filters";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { useGetPricingPlans, useDeletePricingPlanMutation } from "@/hooks/api/use-payments";

export const AdminStudentsPricingPlansList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useGetPricingPlans();
  const deletePlan = useDeletePricingPlanMutation();

  const plans = useMemo(
    () => (data?.data ?? []).map(mapPricingPlanRecordToPricingPlan),
    [data],
  );
  const filteredPlans = plans.filter((p) =>
    p.course.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleDelete = (planId: string) => {
    if (!window.confirm("Delete this pricing plan? This cannot be undone.")) return;
    deletePlan.mutate(planId, {
      onSuccess: () => toast.success("Pricing plan deleted"),
      onError: (err) =>
        toast.error(err instanceof Error ? err.message : "Failed to delete pricing plan"),
    });
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-[#ECFDF5] text-[#10B981]";
      case "Pending":
        return "bg-[#FFF8E6] text-[#F59E0B]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <PricingPlansFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading pricing plans...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load pricing plans.</p>
      ) : (
        <DataList
          data={filteredPlans}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            return (
              <div className="flex flex-col w-full gap-4">
                {/* Top Row */}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarFallback>{item.course.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[16px] font-semibold text-gray-900 leading-tight">
                        {item.course}
                      </span>
                      <span className="text-[13px] text-gray-500 font-medium flex items-center gap-1.5 flex-wrap">
                        <span className="capitalize">{item.duration}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="capitalize">{item.planType}</span>
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
                        onClick={() => toast.info("Editing a pricing plan isn't available yet.")}
                      >
                        Edit
                      </AppDropdownItem>
                      <AppDropdownSeparator />
                      <AppDropdownItem variant="danger-menu" onClick={() => handleDelete(item.id)}>
                        Delete
                      </AppDropdownItem>
                    </AppDropdown>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-center w-full mt-1">
                  <span className="text-[18px] font-bold text-gray-900">{item.price}</span>
                  <span className="text-[14px] text-gray-500 font-medium">{item.accessType}</span>
                </div>
              </div>
            );
          }}
        />
      )}
    </div>
  );
};
