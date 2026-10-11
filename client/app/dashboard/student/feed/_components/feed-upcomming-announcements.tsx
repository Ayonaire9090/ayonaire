"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";

const formatAnnouncementDate = (dateString?: string) => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const FeedUpcomingAnnouncements = () => {
  const { data, isLoading, isError } = useGetAnnouncements();
  const announcements = (data?.data?.announcement ?? [])
    .filter((a) => a.status === "published")
    .slice(0, 2);

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
        <Link
          href="/dashboard/student/feed/announcements"
          className="text-[#F86432] text-sm font-medium hover:underline cursor-pointer"
        >
          View all
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-6">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="py-6 text-center text-sm text-red-500">
          Failed to load announcements.
        </div>
      ) : announcements.length === 0 ? (
        <div className="py-6 text-center text-sm text-gray-500">
          No announcements yet.
        </div>
      ) : (
        announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-[#F8F9FA] rounded-2xl p-4 border-l-4 border-l-[#F86432] flex flex-col min-w-0"
          >
            <p className="text-gray-900 font-semibold text-sm sm:text-base leading-relaxed line-clamp-2">
              {announcement.title}
            </p>
            <p className="text-gray-600 font-medium text-sm leading-relaxed line-clamp-2 mt-1">
              {announcement.summary}
            </p>
            {formatAnnouncementDate(announcement.createdAt) && (
              <span className="text-gray-400 text-sm font-normal mt-2 block">
                {formatAnnouncementDate(announcement.createdAt)}
              </span>
            )}
          </div>
        ))
      )}
    </div>
  );
};
