import { cn } from "@/lib/utils";
import { BarChart2, DollarSign, LucideIcon, UserPlus } from "lucide-react";
import React from "react";

const BasicAnalytics: CourseRevenueAnalyticsCardProps[] = [
  {
    icon: BarChart2,
    iconBgColor: "bg-[#F3E8FF]",
    iconColor: "text-[#A855F7]",
    title: "Total Revenue",
    value: "$13,955.00",
    description: "+12.5% from last month",
  },
  {
    icon: UserPlus,
    iconBgColor: "bg-[#E0F2FE]",
    iconColor: "text-[#0EA5E9]",
    title: "Total Enrollments",
    value: "245",
    description: "+8.2% from last month",
  },
  {
    icon: DollarSign,
    iconBgColor: "bg-[#FFEDD5]",
    iconColor: "text-[#F97316]",
    title: "Avg. Course Price",
    value: "$55.60",
    description: "Steady performance",
  },
];

interface InstructorCourseRevenueAnalyticsProps {
  analytics?: typeof BasicAnalytics;
  className?: string;
}
export const InstructorCourseRevenueAnalytics = ({
  analytics = BasicAnalytics,
  className,
}: InstructorCourseRevenueAnalyticsProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 gap-6 w-full mb-6",
        className,
      )}
    >
      {analytics.map((analytics, index) => (
        <CourseRevenueAnalyticsCard
          key={index}
          icon={analytics.icon}
          iconBgColor={analytics.iconBgColor}
          iconColor={analytics.iconColor}
          title={analytics.title}
          value={analytics.value}
          description={analytics.description}
        />
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
  description: string;
}

const CourseRevenueAnalyticsCard = ({
  icon: Icon,
  iconBgColor,
  iconColor,
  title,
  value,
  description,
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
        <p className="text-sm font-medium text-[#10B981]">{description}</p>
      </div>
    </div>
  );
};
