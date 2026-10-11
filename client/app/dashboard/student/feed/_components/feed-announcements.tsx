"use client";

import { Sparkles } from "lucide-react";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";
import { Announcement } from "@/lib/api/endpoints/announcements";

const formatAnnouncementDate = (dateString?: string) => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const FeedAnnouncements = () => {
  const { data, isLoading, isError } = useGetAnnouncements();
  const announcements = (data?.data?.announcement ?? []).filter(
    (a) => a.status === "published",
  );

  return (
    <div className="w-full bg-white p-4 lg:p-5 lg:rounded-2xl flex flex-col gap-4 border border-gray-100/50">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-black shrink-0" />
          <h2 className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
            Latest Announcements
          </h2>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="py-16 text-center text-[15px] text-red-500">
          Failed to load announcements. Please try again.
        </div>
      ) : announcements.length === 0 ? (
        <div className="py-16 text-center text-[15px] text-gray-500">
          No announcements yet.
        </div>
      ) : (
        announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))
      )}
    </div>
  );
};

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <div className="bg-[#F8F9FA] rounded-2xl p-4 border-l-3 border-l-[#F86432] flex flex-col gap-1">
      <p className="text-gray-900 font-semibold text-base leading-relaxed">
        {announcement.title}
      </p>
      <span className="text-gray-500 leading-relaxed">{announcement.summary}</span>
      {formatAnnouncementDate(announcement.createdAt) && (
        <span className="text-gray-400 text-sm font-normal mt-1 block">
          {formatAnnouncementDate(announcement.createdAt)}
        </span>
      )}
    </div>
  );
};
