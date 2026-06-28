import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorDashboardButton } from "../_components/instructor-dashboard-button";
import { DollarSign } from "lucide-react";
import { InstructorEarningsAnalytics } from "./_components/instructor-earnings-analytics";
import { InstructorRevenueGrowth } from "./_components/instructor-revenue-growth";
import { InstructorPerformanceAnalytics } from "./_components/instructor-performance-analytics";
import { InstructorNextPayoutAnalytics } from "./_components/instructor-next-payout-analytics";

export default function InstrutorMonetizationPage() {
  return (
    <>
      <DashboardHeader
        title="Earnings Dashboard"
        subTitle="Track your revenue, manage payouts, and view your overall financial performance as an instructor."
      />

      <div className="flex justify-between items-center">
        <DashboardSearch />
        <InstructorDashboardButton
          icon={DollarSign}
          title="Widthdrawals & Funds"
        />
      </div>
      <InstructorEarningsAnalytics />
      <InstructorRevenueGrowth />
      <InstructorPerformanceAnalytics />
      <InstructorNextPayoutAnalytics />
    </>
  );
}
