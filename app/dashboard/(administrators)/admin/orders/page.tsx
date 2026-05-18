import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { OrdersTable } from "./_components/orders-table";
import { OrdersList } from "./_components/orders-list";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Plus } from "lucide-react";

const mockSummaryData = [
  { title: "All", number: "44" },
  { title: "Completed", number: "8" },
  { title: "Processing", number: "4" },
  { title: "Pending Payment", number: "14" },
  { title: "On Hold", number: "4" },
  { title: "Cancelled", number: "10" },
];

export default function AdminOrdersPage() {
  return (
    <div className="flex flex-col gap-0 pb-8">
      <DashboardHeader
        title="Orders"
        subTitle="Manage Orders content, pricing, and availability"
      />
      <div className="w-full flex justify-between items-start">
        <StatsSummary data={mockSummaryData} />
        <AdminDashboardButton title="Add New Order" icon={Plus} />
      </div>

      {/* Desktop */}
      <OrdersTable />

      {/* Mobile */}
      <OrdersList />
    </div>
  );
}
