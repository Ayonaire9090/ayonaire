"use client";

import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { mapPurchaseRecordToStudentPurchase, StudentPurchase } from "./student-purchases-data";
import { StudentPurchasesFilters } from "./student-purchases-filters";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Edit, Trash2 } from "lucide-react";
import { useGetStudentPurchases } from "@/hooks/api/use-payments";

export const AdminStudentPurchasesTable = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
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

  const columns: ColumnDef<StudentPurchase>[] = [
    {
      key: "studentName",
      header: "Student Name",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
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
          <button
            onClick={() => toast.info("Editing a purchase record isn't available yet.")}
            className="p-1 hover:bg-gray-100 rounded-md text-gray-500 transition-colors"
          >
            <Edit className="size-4" />
          </button>
          <button
            onClick={() => toast.info("Deleting a purchase record isn't available yet.")}
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
      <StudentPurchasesFilters searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading purchases...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load purchases.</p>
      ) : (
        <DataTable
          data={filteredPurchases}
          columns={columns}
          keyExtractor={(item) => item.id}
          selectable={true}
          onSelectionChange={(ids) => setSelectedIds(ids)}
        />
      )}
    </div>
  );
};
