"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { OrdersTable } from "./_components/orders-table";
import { OrdersList } from "./_components/orders-list";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Plus } from "lucide-react";
import { useGetAllPayments } from "@/hooks/api/use-payments";
import { mapPaymentRecordToOrderData } from "./_components/orders-data";

export default function AdminOrdersPage() {
  const { data } = useGetAllPayments();
  const orders = (data?.data?.data ?? []).map(mapPaymentRecordToOrderData);

  const summaryData = [
    { title: "All", number: String(orders.length) },
    {
      title: "Completed",
      number: String(orders.filter((o) => o.orderStatus === "Completed").length),
    },
    {
      title: "Pending Payment",
      number: String(
        orders.filter((o) => o.orderStatus === "Pending Payment").length,
      ),
    },
    {
      title: "Cancelled",
      number: String(orders.filter((o) => o.orderStatus === "Cancelled").length),
    },
  ];

  return (
    <div className="flex flex-col gap-0 pb-8">
      <DashboardHeader
        title="Orders"
        subTitle="Manage Orders content, pricing, and availability"
      />
      <div className="w-full flex justify-between items-start">
        <StatsSummary data={summaryData} />
        <AdminDashboardButton title="Add New Order" icon={Plus} />
      </div>

      {/* Desktop */}
      <OrdersTable />

      {/* Mobile */}
      <OrdersList />
    </div>
  );
}
