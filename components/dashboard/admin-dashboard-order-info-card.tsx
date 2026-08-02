"use client";

import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetAllPayments } from "@/hooks/api/use-payments";

type OrderStatus = "PAID" | "PENDING" | "FAILED";

const statusStyles: Record<OrderStatus, string> = {
  PAID: "bg-emerald-50 text-emerald-500",
  PENDING: "bg-orange-50 text-orange-500",
  FAILED: "bg-red-50 text-red-500",
};

function toOrderStatus(status: string): OrderStatus {
  if (status === "success") return "PAID";
  if (status === "failed") return "FAILED";
  return "PENDING";
}

export const AdminDashboardOrderInfoCard = () => {
  const { data } = useGetAllPayments({ limit: 3, sortBy: "createdAt", order: "desc" });
  const payments = data?.data?.data ?? [];

  return (
    <div className="rounded-2xl bg-white overflow-hidden py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-5">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
        <Link
          href="/dashboard/admin/orders"
          className="text-sm font-medium text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto relative">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F6F6F6] relative w-full">
              <th className="text-left text-base font-semibold text-gray-900 py-4 px-5">
                Order ID
              </th>
              <th className="text-left text-base font-semibold text-gray-900 py-4 px-4">
                Status
              </th>
              <th className="text-left text-base font-semibold text-gray-900 py-4 px-4">
                Amount
              </th>
              <th className="text-right text-base font-semibold text-gray-900 py-4 px-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 px-5 text-center text-sm text-gray-400">
                  No orders yet
                </td>
              </tr>
            ) : (
              payments.map((order, index) => {
                const status = toOrderStatus(order.status);
                return (
                  <tr
                    key={order._id}
                    className={
                      index < payments.length - 1 ? "border-b border-gray-50" : ""
                    }
                  >
                    <td className="py-5 px-5 text-base font-semibold text-gray-900">
                      #{order._id.slice(-6).toUpperCase()}
                    </td>
                    <td className="py-5 px-4">
                      <span
                        className={`text-xs font-semibold px-4 py-1.5 rounded-full ${statusStyles[status]}`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="py-5 px-4 text-base font-bold text-gray-900">
                      {(order.currency ?? "NGN") + " " + order.amount.toLocaleString()}
                    </td>
                    <td className="py-5 px-5 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="text-gray-400 hover:text-gray-600 transition-colors">
                            <MoreVertical className="size-5 inline-block" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          sideOffset={8}
                          className="w-40 rounded-xl border-0 bg-[#F2F2F2] shadow-sm p-2 space-y-1"
                        >
                          <DropdownMenuItem asChild>
                            <Link
                              href={`/dashboard/admin/orders/${order._id}`}
                              className="px-3 py-2 cursor-pointer text-[15px] font-medium text-gray-900 hover:bg-white focus:bg-white rounded-lg"
                            >
                              View detail
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="px-3 py-2 cursor-pointer text-[15px] font-medium text-gray-900 hover:bg-white focus:bg-white rounded-lg"
                            onClick={() => toast.info("Editing an order isn't available yet.")}
                          >
                            Edit order
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="px-3 py-2 cursor-pointer text-[15px] font-medium text-[#EF4444] hover:bg-white focus:bg-white hover:text-[#EF4444] focus:text-[#EF4444] rounded-lg"
                            onClick={() => toast.info("Deleting an order isn't available yet.")}
                          >
                            Delete order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
