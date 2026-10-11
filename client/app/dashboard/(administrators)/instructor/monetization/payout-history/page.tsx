"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorDashboardButton } from "../../_components/instructor-dashboard-button";
import { ArrowDown, ArrowUp, Clock, Wallet } from "lucide-react";
import {
  CourseRevenueAnalyticsCardProps,
  InstructorCourseRevenueAnalytics,
} from "../course-revenue/_components/instructor-course-revenue-analytics";
import { Button } from "@/components/ui/button";
import { InstructorPayoutHistoryTable } from "./_components/instructor-payout-history-table";
import { InstructorPayoutHistoryList } from "./_components/instructor-payout-history-list";
import { useInstructorAnalytics } from "../../analytics-reporting/_components/instructor-analytics-data";

function usePayoutAnalyticsCards(): CourseRevenueAnalyticsCardProps[] {
  const { totalRevenue, totalStudents, isLoading } = useInstructorAnalytics();

  return [
    {
      icon: Wallet,
      iconBgColor: "bg-[#A855F7]/10",
      iconColor: "text-[#A855F7]",
      title: "Total Revenue",
      value: isLoading ? "-" : `$${totalRevenue.toLocaleString()}`,
    },
    {
      icon: Clock,
      iconBgColor: "bg-[#F86432]/10",
      iconColor: "text-[#F86432]",
      title: "Total Enrollments",
      value: isLoading ? "-" : String(totalStudents),
    },
  ];
}

export default function InstructorPayoutHistoryPage() {
  const PayoutAnalytics = usePayoutAnalyticsCards();

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
