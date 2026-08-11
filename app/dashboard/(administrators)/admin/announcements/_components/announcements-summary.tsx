"use client";

import { Layers, CheckCircle2, FileEdit, Clock } from "lucide-react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";
import { mapAnnouncementToAnnouncementData } from "./announcements-data";

export const AnnouncementsSummary = () => {
  const { data } = useGetAnnouncements();
  const announcements = (data?.data?.announcement ?? []).map(mapAnnouncementToAnnouncementData);

  const summaryData = [
    { title: "All", number: String(announcements.length), icon: Layers, iconBg: "bg-[#3B82F6]" },
    {
      title: "Published",
      number: String(
        announcements.filter((a) => a.status === "Published").length,
      ),
      icon: CheckCircle2,
      iconBg: "bg-[#24A164]",
    },
    {
      title: "Draft",
      number: String(
        announcements.filter((a) => a.status === "Draft").length,
      ),
      icon: FileEdit,
      iconBg: "bg-[#F59E0B]",
    },
    {
      title: "Scheduled",
      number: String(
        announcements.filter((a) => a.status === "Scheduled").length,
      ),
      icon: Clock,
      iconBg: "bg-[#8B5CF6]",
    },
  ];

  return <StatsSummary data={summaryData} />;
};
