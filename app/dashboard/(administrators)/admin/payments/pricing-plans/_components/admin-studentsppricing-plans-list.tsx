"use client";

import React from "react";
import { DataList } from "@/components/ui/data-list";
import { PricingPlan, mapPricingPlanRecordToPricingPlan } from "./pricing-plans-data";
import { PricingPlansFilters } from "./pricing-plans-filters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import { useGetPricingPlans } from "@/hooks/api/use-payments";

export const AdminStudentsPricingPlansList = () => {
  const { data, isLoading, isError } = useGetPricingPlans();
  const plans: PricingPlan[] = (data?.data ?? []).map(
    mapPricingPlanRecordToPricingPlan,
  );

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
      <PricingPlansFilters />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load pricing plans. Please try again.
        </div>
      ) : plans.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No pricing plans found.
        </div>
      ) : (
      <DataList
        data={plans}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          return (
            <div className="flex flex-col w-full gap-4">
              {/* Top Row */}
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage src={item.avatar} />
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
                  <MoreVertical className="size-5 text-gray-900 cursor-pointer" />
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
