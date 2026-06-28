"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Download, MoreVertical } from "lucide-react";

export type PayoutHistory = {
  id: string;
  payoutId: string;
  date: string;
  amount: number;
  method: string;
  status: "Completed" | "Pending";
};

export const dummyPayoutData: PayoutHistory[] = [
  {
    id: "1",
    payoutId: "#PAY1023",
    date: "Feb 28, 2026",
    amount: 1200,
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: "2",
    payoutId: "#PAY1022",
    date: "Feb 19, 2026",
    amount: 850,
    method: "PayPal",
    status: "Completed",
  },
  {
    id: "3",
    payoutId: "#PAY1021",
    date: "Feb 04, 2026",
    amount: 650,
    method: "Bank Transfer",
    status: "Pending",
  },
];

export const InstructorPayoutHistoryTable = () => {
  const columns: ColumnDef<PayoutHistory>[] = [
    {
      key: "payoutId",
      header: "Payout ID",
      cell: (item) => <span className="text-[#333333] font-medium">{item.payoutId}</span>,
    },
    {
      key: "date",
      header: "Date",
      cell: (item) => <span className="text-gray-600">{item.date}</span>,
    },
    {
      key: "amount",
      header: "Amount",
      cell: (item) => <span className="text-gray-600">${item.amount.toLocaleString()}</span>,
    },
    {
      key: "method",
      header: "Method",
      cell: (item) => <span className="text-gray-600">{item.method}</span>,
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-3 py-1 text-[13px] rounded-full font-medium ${
            item.payoutId === "#PAY1023"
              ? "bg-[#F3E8FF] text-[#A855F7]"
              : item.payoutId === "#PAY1022"
              ? "bg-[#DBEAFE] text-[#3B82F6]"
              : "bg-[#FEE2E2] text-[#EF4444]"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      cell: () => (
        <button className="text-gray-800 hover:text-black transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      ),
    },
  ];

  const footerContent = (
    <div className="flex gap-4">
      <Button variant="secondary" className="bg-[#F6F6F6] shadow-none! border-0! hover:bg-gray-200 text-gray-700 text-sm gap-2">
        <Download className="w-4 h-4" /> Export Quizzes
      </Button>
      <Button variant="secondary" className="bg-[#F6F6F6] shadow-none! border-0! hover:bg-gray-200 text-gray-700 text-sm gap-2">
        <Download className="w-4 h-4" /> Export Result
      </Button>
    </div>
  );

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Payouts</h2>
      <DataTable
        data={dummyPayoutData}
        columns={columns}
        keyExtractor={(item) => item.id}
        selectable
        footerContent={footerContent}
      />
    </div>
  );
};
