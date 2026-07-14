"use client";

import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";
import { mapAnnouncementToAnnouncementData } from "./announcements-data";

export const AnnouncementsSummary = () => {
  const { data } = useGetAnnouncements();
  const announcements = (data?.data?.announcement ?? []).map(mapAnnouncementToAnnouncementData);

  const summaryData = [
    { title: "All", number: String(announcements.length) },
    {
      title: "Published",
      number: String(
        announcements.filter((a) => a.status === "Published").length,
      ),
    },
    {
      title: "Draft",
      number: String(
        announcements.filter((a) => a.status === "Draft").length,
      ),
    },
    {
      title: "Scheduled",
      number: String(
        announcements.filter((a) => a.status === "Scheduled").length,
      ),
    },
  ];

  return <StatsSummary data={summaryData} />;
};
