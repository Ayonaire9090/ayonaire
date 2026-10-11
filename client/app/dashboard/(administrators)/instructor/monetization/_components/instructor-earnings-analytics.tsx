"use client";
import { ChartColumn, DollarSign, Wallet } from "lucide-react";
import {
  InstructorDashboardAnalyticsCardProps,
  InstructorDashboardAnalyticsCards,
} from "../../_components/instructor-dashboard-analytics-cards";
import {
  getMonthlyRevenue,
  useInstructorAnalytics,
} from "../../analytics-reporting/_components/instructor-analytics-data";

export const InstructorEarningsAnalytics = () => {
  const { totalRevenue, payments, isLoading } = useInstructorAnalytics();
  const monthlyRevenue = getMonthlyRevenue(payments, 1)[0]?.value ?? 0;

  // "Pending Payouts" has no known backend source yet - there's no payout
  // ledger, only a lifetime instructorPayouts aggregate on the platform-wide
  // payment analytics endpoint - so it falls back to "-" instead of a
  // guessed figure.
  const analytics: InstructorDashboardAnalyticsCardProps[] = [
    {
      heading: "Total Earnings",
      title: isLoading ? "-" : `$${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      description: "Lifetime revenue across all courses",
      iconBackground: true,
    },
    {
      heading: "Monthly Earnings",
      title: isLoading ? "-" : `$${monthlyRevenue.toLocaleString()}`,
      icon: ChartColumn,
      description: "Revenue generated this month",
      iconBackground: true,
    },
    {
      heading: "Pending Payouts",
      title: "-",
      icon: Wallet,
      description: "Not available yet",
      iconBackground: true,
    },
  ];

  return (
    <InstructorDashboardAnalyticsCards columns="grid-cols-3" analytics={analytics} />
  );
};
