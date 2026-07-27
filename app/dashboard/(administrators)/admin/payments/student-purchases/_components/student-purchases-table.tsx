"use client";

import React, { useState } from "react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { StudentPurchase, mapPurchaseRecordToStudentPurchase } from "./student-purchases-data";
import { StudentPurchasesFilters } from "./student-purchases-filters";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Trash2 } from "lucide-react";
import { useGetStudentPurchases } from "@/hooks/api/use-payments";

export const AdminStudentPurchasesTable = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const { data, isLoading, isError } = useGetStudentPurchases();
  const purchases: StudentPurchase[] = (data?.purchases ?? []).map(
    mapPurchaseRecordToStudentPurchase,
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

  const columns: ColumnDef<StudentPurchase>[] = [
    {
      key: "studentName",
      header: "Student Name",
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
      key: "email",
      header: "Email",
      cell: (item) => <span className="text-gray-500 font-medium">{item.email}</span>,
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
      key: "paymentMethod",
      header: "Payment Method",
      cell: (item) => <span className="text-gray-500 font-medium">{item.paymentMethod}</span>,
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
    {
      key: "actions",
      header: "Actions",
      cell: () => (
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded-md text-gray-500 transition-colors">
            <Edit className="size-4" />
          </button>
          <button className="p-1 hover:bg-red-50 rounded-md text-gray-500 hover:text-red-500 transition-colors">
            <Trash2 className="size-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-[24px]">
      <StudentPurchasesFilters />
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load student purchases. Please try again.
        </div>
      ) : purchases.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No student purchases found.
        </div>
      ) : (
        <DataTable
          data={purchases}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
          onSelectionChange={(ids) => setSelectedIds(ids)}
        />
      )}
    </div>
  );
};
