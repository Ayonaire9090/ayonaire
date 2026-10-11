"use client";

import { cn } from "@/lib/utils";
import { BarChart2, DollarSign, LucideIcon, UserPlus } from "lucide-react";
import React, { useMemo } from "react";
import { useInstructorAnalytics } from "../../../analytics-reporting/_components/instructor-analytics-data";

interface InstructorCourseRevenueAnalyticsProps {
  analytics?: CourseRevenueAnalyticsCardProps[];
  className?: string;
}

// Real course-revenue figures, derived the same way as the analytics-
// reporting page (no dedicated backend endpoint exists). Callers that need
// different cards (e.g. the payout-history page) can still pass an
// `analytics` override.
export function useCourseRevenueAnalyticsCards(): CourseRevenueAnalyticsCardProps[] {
  const { courses, totalRevenue, totalStudents, isLoading } = useInstructorAnalytics();

  const avgPrice = useMemo(() => {
    const priced = courses.filter((c) => typeof c.price === "number");
    if (priced.length === 0) return null;
    return priced.reduce((sum, c) => sum + (c.price ?? 0), 0) / priced.length;
  }, [courses]);

  return [
    {
      icon: BarChart2,
      iconBgColor: "bg-[#F3E8FF]",
      iconColor: "text-[#A855F7]",
      title: "Total Revenue",
      value: isLoading ? "-" : `$${totalRevenue.toLocaleString()}`,
    },
    {
      icon: UserPlus,
      iconBgColor: "bg-[#E0F2FE]",
      iconColor: "text-[#0EA5E9]",
      title: "Total Enrollments",
      value: isLoading ? "-" : String(totalStudents),
    },
    {
      icon: DollarSign,
      iconBgColor: "bg-[#FFEDD5]",
      iconColor: "text-[#F97316]",
      title: "Avg. Course Price",
      value: isLoading || avgPrice == null ? "-" : `$${avgPrice.toFixed(2)}`,
    },
  ];
}

export const InstructorCourseRevenueAnalytics = ({
  analytics,
  className,
}: InstructorCourseRevenueAnalyticsProps) => {
  const derivedAnalytics = useCourseRevenueAnalyticsCards();
  const resolvedAnalytics = analytics ?? derivedAnalytics;

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mb-6",
        className,
      )}
    >
      {resolvedAnalytics.map((card, index) => (
        <CourseRevenueAnalyticsCard key={index} {...card} />
      ))}
    </div>
  );
};

export interface CourseRevenueAnalyticsCardProps {
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  title: string;
  value: string;
  description?: string;
}

const CourseRevenueAnalyticsCard = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  value,
}: CourseRevenueAnalyticsCardProps) => {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-2xl w-full max-sm:min-w-[90%]">
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${iconBgColor} ${iconColor}`}
      >
        {Icon && <Icon />}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-[#111827]">{value}</h3>
      </div>
    </div>
  );
};
