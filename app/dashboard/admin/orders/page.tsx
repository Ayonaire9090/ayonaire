import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatsSummary } from "@/components/dashboard/stats-summary";

const mockSummaryData = [
  { title: "All", number: "44" },
  { title: "Active", number: "20" },
  { title: "Pending Cancellation", number: "1" },
  { title: "Pending Payment", number: "3" },
  { title: "On Hold", number: "4" },
  { title: "Cancelled", number: "16" },
];

export default function AdminOrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardHeader title="Orders" subTitle="Manage your platform orders" />
      <StatsSummary data={mockSummaryData} />
    </div>
  );
}
