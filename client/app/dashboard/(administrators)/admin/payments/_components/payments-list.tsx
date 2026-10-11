"use client";

import React, { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { mapPaymentRecordToPayment } from "./payments-data";
import { PaymentsFilters } from "./payments-filters";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import { useGetAllPayments } from "@/hooks/api/use-payments";

export const AdminPaymentsList = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const { data, isLoading, isError } = useGetAllPayments();
  const payments = (data?.data?.data ?? []).map(mapPaymentRecordToPayment);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
      <PaymentsFilters selectedCount={selectedIds.size} />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load payments. Please try again.
        </div>
      ) : payments.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No payments found.
        </div>
      ) : (
      <DataList
        data={payments}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          const isSelected = selectedIds.has(item.id);
          return (
            <div className="flex w-full items-start gap-4">
              <div className="pt-2">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => toggleSelection(item.id)}
                  className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
              </div>
              <div className="flex flex-col w-full gap-4">
                {/* Top Row */}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage src={item.avatar} />
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[16px] font-bold text-gray-900 leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[14px] text-gray-500 font-medium">
                        {item.transactionId} • {item.date}
                      </span>
                    </div>
                  </div>
                  <MoreVertical className="size-5 text-gray-400 cursor-pointer" />
                </div>
                
                {/* Bottom Row */}
                <div className="flex justify-between items-center w-full mt-1">
                  <div className="flex items-center gap-4">
                    <span className="text-[18px] font-bold text-gray-900">{item.amount}</span>
                    <span className="text-[14px] text-gray-500 font-medium">{item.course}</span>
                  </div>
                  <span className={`px-4 py-1 rounded-full text-xs font-semibold ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      />
      )}
    </div>
  );
};
