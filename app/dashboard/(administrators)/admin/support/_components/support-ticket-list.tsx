"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Eye } from "lucide-react";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { useGetSupportTickets } from "@/hooks/api/use-support";
import { SupportTicket } from "@/lib/api/endpoints/support";
import { SupportTicketDetail } from "./support-ticket-detail";

const statusStyles: Record<string, string> = {
  open: "bg-[#FEE2E2] text-[#EF4444]",
  "in-progress": "bg-[#FFF4E5] text-[#F59E0B]",
  resolved: "bg-[#EAF9F0] text-[#009F42]",
  closed: "bg-gray-100 text-gray-600",
};

const priorityStyles: Record<string, string> = {
  high: "bg-[#FEE2E2] text-[#EF4444]",
  medium: "bg-[#FFF4E5] text-[#F59E0B]",
  low: "bg-gray-100 text-gray-600",
};

export const SupportTicketList = () => {
  const [activeTicketId, setActiveTicketId] = useState<string | null>(null);
  const { data, isLoading, isError } = useGetSupportTickets({ limit: 100 });
  const tickets = data?.tickets ?? [];

  const columns: ColumnDef<SupportTicket>[] = [
    {
      key: "subject",
      header: "Subject",
      cell: (item) => (
        <span className="font-medium text-gray-900 text-[15px]">{item.subject}</span>
      ),
    },
    {
      key: "user",
      header: "From",
      cell: (item) => (
        <span className="text-gray-600 text-[15px]">
          {typeof item.user === "string" ? item.user : item.user.name}
        </span>
      ),
    },
    {
      key: "category",
      header: "Category",
      cell: (item) => <span className="text-gray-600 text-[15px]">{item.category}</span>,
    },
    {
      key: "priority",
      header: "Priority",
      cell: (item) => (
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${priorityStyles[item.priority] ?? "bg-gray-100 text-gray-600"}`}
        >
          {item.priority}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${statusStyles[item.status] ?? "bg-gray-100 text-gray-600"}`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "createdAt",
      header: "Created",
      cell: (item) => (
        <span className="text-gray-500 text-[15px]">
          {item.createdAt ? format(new Date(item.createdAt), "d MMM yyyy") : "-"}
        </span>
      ),
    },
    {
      key: "actions",
      header: "",
      headerClassName: "w-12",
      cell: (item) => (
        <button
          onClick={() => setActiveTicketId(item._id)}
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="View ticket"
        >
          <Eye className="size-[18px]" />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 flex flex-col gap-4">
      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading tickets...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load tickets.</p>
      ) : tickets.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-400">No support tickets yet</p>
      ) : (
        <DataTable data={tickets} columns={columns} keyExtractor={(item) => item._id} />
      )}

      <SupportTicketDetail
        ticketId={activeTicketId}
        onOpenChange={(open) => !open && setActiveTicketId(null)}
      />
    </div>
  );
};
