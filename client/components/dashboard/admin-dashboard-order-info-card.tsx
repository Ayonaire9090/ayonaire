"use client";

import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    <div className="w-full bg-white rounded-xl p-2 lg:p-4">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div>
          <h3 className="text-[18px] font-semibold text-gray-900">
            Recent Orders
          </h3>
          <p className="mt-1 text-[14px] text-gray-500">
            Latest payment transactions on your platform
          </p>
        </div>
        <Link
          href="/dashboard/admin/orders"
          className="shrink-0 text-[14px] font-medium text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white">
        <Table className="min-w-[560px] border-none">
          <TableHeader className="bg-[#FAFAFA]">
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="h-11 pl-4 text-[13px] font-medium text-gray-500">
                Order ID
              </TableHead>
              <TableHead className="h-11 text-[13px] font-medium text-gray-500">
                Course
              </TableHead>
              <TableHead className="h-11 text-[13px] font-medium text-gray-500">
                Status
              </TableHead>
              <TableHead className="h-11 text-[13px] font-medium text-gray-500">
                Amount
              </TableHead>
              <TableHead className="h-11 pr-4 text-right text-[13px] font-medium text-gray-500">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.length === 0 ? (
              <TableRow className="border-none hover:bg-transparent">
                <TableCell
                  colSpan={5}
                  className="py-10 text-center text-[14px] text-gray-400"
                >
                  No orders yet
                </TableCell>
              </TableRow>
            ) : (
              payments.map((order) => {
                const status = toOrderStatus(order.status);
                return (
                  <TableRow
                    key={order._id}
                    className="border-b border-gray-100 last:border-0 bg-white hover:bg-gray-50/70 transition-colors"
                  >
                    <TableCell className="py-3 pl-4">
                      <Link
                        href={`/dashboard/admin/orders/${order._id}`}
                        className="text-[14px] font-semibold text-gray-900 hover:text-primary"
                      >
                        #{order._id.slice(-6).toUpperCase()}
                      </Link>
                    </TableCell>
                    <TableCell className="py-3">
                      <span className="block max-w-[180px] truncate text-[14px] font-medium text-gray-700">
                        {order.course?.title ?? "Course purchase"}
                      </span>
                    </TableCell>
                    <TableCell className="py-3">
                      <span
                        className={`inline-flex rounded-full px-4 py-1.5 text-[12px] font-semibold ${statusStyles[status]}`}
                      >
                        {status}
                      </span>
                    </TableCell>
                    <TableCell className="py-3 text-[14px] font-bold text-gray-900">
                      {(order.currency ?? "NGN") + " " + order.amount.toLocaleString()}
                    </TableCell>
                    <TableCell className="py-3 pr-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            aria-label={`Open actions for order ${order._id.slice(-6).toUpperCase()}`}
                            className="inline-flex size-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                          >
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
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
