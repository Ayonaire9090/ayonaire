"use client";
import { ChartColumn, DollarSign, Wallet } from "lucide-react";
import {
  InstructorDashboardAnalyticsCardProps,
  InstructorDashboardAnalyticsCards,
} from "../../_components/instructor-dashboard-analytics-cards";

const BasicAnalytics: InstructorDashboardAnalyticsCardProps[] = [
  {
    heading: "Total Earnings",
    title: "$124,500.50",
    icon: DollarSign,
    rate: "+12.5%",
    description: "Lifetime revenue accross all courses",
    iconBackground: true,
  },
  {
    heading: "Monthly Earnings",
    title: "$8,240.00",
    icon: ChartColumn,
    rate: "+8.2%",
    description: "revenue generated this month",
    iconBackground: true,
  },
  {
    heading: "Pending Payouts",
    title: "$1,250.75",
    icon: Wallet,
    rate: "-2.5%",
    description: "Available for withdrawal in 3 days",
    iconBackground: true,
  },
];
export const InstructorEarningsAnalytics = () => {
  return (
    <InstructorDashboardAnalyticsCards
      columns="grid-cols-3"
      analytics={BasicAnalytics}
    />
  );
};
