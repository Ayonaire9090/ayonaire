"use client";

import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  PricingPlan,
  mapPricingPlanRecordToPricingPlan,
} from "./pricing-plans-data";
import { PricingPlansFilters } from "./pricing-plans-filters";
import { Edit, Trash2 } from "lucide-react";
import { useGetPricingPlans, useDeletePricingPlanMutation } from "@/hooks/api/use-payments";

export const AdminStudentsPricingPlansTable = () => {
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

  const columns: ColumnDef<PricingPlan>[] = [
    {
      key: "planType",
      header: "Plan Type",
      cell: (item) => <span className="font-semibold text-gray-900">{item.planType}</span>,
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => <span className="text-gray-500 font-medium">{item.course}</span>,
    },
    {
      key: "price",
      header: "Price",
      cell: (item) => <span className="font-bold text-gray-900 text-[15px]">{item.price}</span>,
    },
    {
      key: "duration",
      header: "Duration",
      cell: (item) => <span className="text-gray-500 font-medium">{item.duration}</span>,
    },
    {
      key: "accessType",
      header: "Access Type",
      cell: (item) => <span className="text-gray-500 font-medium">{item.accessType}</span>,
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span className={`px-4 py-1.5 rounded-full text-[12px] font-semibold ${getStatusStyle(item.status)}`}>
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => toast.info("Editing a pricing plan isn't available yet.")}
            className="p-1 hover:bg-gray-100 rounded-md text-gray-500 transition-colors"
          >
            <Edit className="size-4" />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="p-1 hover:bg-red-50 rounded-md text-gray-500 hover:text-red-500 transition-colors"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-[24px]">
      <PricingPlansFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading pricing plans...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load pricing plans.</p>
      ) : (
        <DataTable
          data={filteredPlans}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={false}
        />
      )}
    </div>
  );
};
