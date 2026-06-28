import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorDashboardButton } from "../../_components/instructor-dashboard-button";
import { ArrowDown, ArrowUp, CheckCircle, Clock, Wallet } from "lucide-react";
import {
  CourseRevenueAnalyticsCardProps,
  InstructorCourseRevenueAnalytics,
} from "../course-revenue/_components/instructor-course-revenue-analytics";
import { Button } from "@/components/ui/button";
import { InstructorPayoutHistoryTable } from "./_components/instructor-payout-history-table";
import { InstructorPayoutHistoryList } from "./_components/instructor-payout-history-list";

const PayoutAnalytics: CourseRevenueAnalyticsCardProps[] = [
  {
    icon: Wallet,
    iconBgColor: "bg-[#A855F7]/10",
    iconColor: "text-[#A855F7]",
    title: "Total Revenue",
    value: "$13,955.00",
    description: "+12.5% from last month",
  },
  {
    icon: Clock,
    iconBgColor: "bg-[#F86432]/10",
    iconColor: "text-[#F86432]",
    title: "Total Enrollments",
    value: "245",
    description: "+8.2% from last month",
  },
  {
    icon: CheckCircle,
    iconBgColor: "bg-[#009F42]/10",
    iconColor: "text-[#009F42]",
    title: "Avg. Course Price",
    value: "$55.60",
    description: "Steady performance",
  },
];
export default function InstructorPayoutHistoryPage() {
  return (
    <>
      <DashboardHeader
        title="Payout History"
        subTitle="Track all your earnings and payment history."
      />
      <div className="flex justify-between items-center">
        <DashboardSearch />
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className={`py-5! hidden md:flex items-center cursor-pointer justify-center gap-2 
                            rounded-lg bg-transparent! border border-gray-400! shadow-none! 
                            text-gray-600 focus:outline-0! shadow-0! hover:border-gray-800! hover:text-gray-800!`}
          >
            <ArrowUp className="size-5 text-gray-600" />
            <p className="text-sm text-gray-600">Export Report</p>
          </Button>
          <InstructorDashboardButton
            title="Download Statements"
            icon={ArrowDown}
          />
        </div>
      </div>
      <InstructorCourseRevenueAnalytics
        analytics={PayoutAnalytics}
        className="flex overflow-x-auto lg:overflow-x-hidden lg:grid-cols-3 hide-scrollbar"
      />
      <div className="hidden lg:block">
        <InstructorPayoutHistoryTable />
      </div>
      <div className="block lg:hidden">
        <InstructorPayoutHistoryList />
      </div>
    </>
  );
}
