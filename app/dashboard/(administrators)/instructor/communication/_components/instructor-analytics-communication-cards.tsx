"use client";

import { LayoutGrid, LucideIcon, Pen, Send } from "lucide-react";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";

export const InstructorAnalyticsCommunicationCards = () => {
  const { data } = useGetAnnouncements();
  const announcements = data?.data ?? [];
  // Backend has no draft state - every created announcement counts as
  // "Sent", so Drafts is always 0 until that's supported.
  const analytics: InstructorDashboardAnalyticsCardProps[] = [
    {
      icon: LayoutGrid,
      title: "Total Announcements",
      description: String(announcements.length),
      iconColor: "text-[#A855F7]",
      iconBackground: "bg-[#A855F7]/10",
    },
    {
      icon: Send,
      title: "Sent",
      description: String(announcements.length),
      iconColor: "text-[#197FE6]",
      iconBackground: "bg-[#197FE6]/10",
    },
    {
      icon: Pen,
      title: "Drafts",
      description: "0",
      iconColor: "text-[#F86432]",
      iconBackground: "bg-[#F86432]/10",
    },
  ];

  return (
    <div className="flex items-center overflow-x-auto gap-4 hide-scrollbar lg:grid lg:grid-cols-3">
      {analytics.map((analytic, index) => (
        <InstructorAnalyticsCommunicationCard
          key={index}
          title={analytic.title}
          description={analytic.description}
          icon={analytic.icon}
          iconColor={analytic.iconColor}
          iconBackground={analytic.iconBackground}
        />
      ))}
    </div>
  );
};

interface InstructorDashboardAnalyticsCardProps {
  title: string;
  icon: LucideIcon;
  description?: string;
  iconColor?: string;
  iconBackground?: string;
}

const InstructorAnalyticsCommunicationCard = ({
  title,
  icon: Icon,
  description,
  iconColor,
  iconBackground,
}: InstructorDashboardAnalyticsCardProps) => {
  return (
    <div className="flex justify-center items-center lg:justify-start rounded-[16px]! p-4 lg:p-6 space-y-3 bg-white h-32 min-w-[70%] lg:min-w-full">
      <div className="flex justify-center items-center lg:justify-start gap-4">
        {Icon && (
          <Icon
            className={`size-10 ${iconColor} ${iconBackground} p-2 rounded-md`}
          />
        )}
        <div className="flex flex-col">
          <h2 className="text-gray-500 font-medium">{title}</h2>
          <h3 className="font-bold text-xl">{description}</h3>
        </div>
      </div>
    </div>
  );
};
