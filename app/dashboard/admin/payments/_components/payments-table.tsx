"use client";

import React, { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { mockPayments, Payment } from "./payments-data";
import { PaymentsFilters } from "./payments-filters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AdminPaymentsTable = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

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

  const columns: ColumnDef<Payment>[] = [
    {
      key: "name",
      header: "Name",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarImage src={item.avatar} />
            <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-gray-900">{item.name}</span>
        </div>
      ),
    },
    {
      key: "transactionId",
      header: "Transaction ID",
      cell: (item) => <span className="text-gray-500 font-medium">{item.transactionId}</span>,
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => <span className="text-gray-500 font-medium">{item.course}</span>,
    },
    {
      key: "amount",
      header: "Amount",
      cell: (item) => <span className="font-bold text-gray-900 text-[15px]">{item.amount}</span>,
    },
    {
      key: "date",
      header: "Date",
      cell: (item) => <span className="text-gray-500 font-medium">{item.date}</span>,
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
  ];

  return (
    <div className="w-full bg-white p-6 rounded-[24px]">
      <PaymentsFilters selectedCount={selectedIds.size} />
      <DataTable
        data={mockPayments}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable={true}
        onSelectionChange={(ids) => setSelectedIds(ids)}
      />
    </div>
  );
};
