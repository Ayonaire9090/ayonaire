"use client";

import React, { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { Search, Plus } from "lucide-react";
import {
  AnnouncementStatusBadge,
  AnnouncementActions,
  mapAnnouncementToAnnouncementData,
} from "./announcements-data";
import { Input } from "@/components/ui/input";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnnouncementBanner } from "./announcement-banner";
import { CreateAnnouncementModal } from "./create-announcement-modal";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";

export const AnnouncementsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useGetAnnouncements();
  const announcements = (data?.data?.announcement ?? []).map(mapAnnouncementToAnnouncementData);

  return (
    <div className="md:hidden mt-2 bg-white rounded-xl p-2 lg:p-4 relative">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between pb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
            All Announcements
          </h2>
          <p className="text-[15px] text-gray-500">
            Manage your unread and broadcasted announcements
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 mt-4">
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
            <Input
              placeholder="Search announcements...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load announcements. Please try again.
        </div>
      ) : announcements.length === 0 ? (
        <AnnouncementBanner />
      ) : (
      <DataList
        data={announcements.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
        keyExtractor={(c) => c.id}
        renderItem={(item) => (
          <div className="w-full flex items-start justify-between gap-3 relative">
            <div className="flex items-start gap-4">
              <Avatar className="size-[46px] shrink-0">
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {item.title.charAt(0)}
                </AvatarFallback>
                {/* Fallback avatar image */}
                <AvatarImage src="/assets/images/user1.png" alt="Avatar" />
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-medium text-gray-900 leading-tight">
                  {item.title}
                </span>
                <div className="flex items-center text-[13px] text-gray-500 gap-1.5 mt-0.5">
                  <span>{item.audience}</span>
                  <span className="text-[16px] leading-0">•</span>
                  <span>{item.date}</span>
                </div>
                <span className="text-[14px] text-gray-900 font-normal mt-1">
                  {item.course}
                </span>
              </div>
            </div>

            <div className="shrink-0 -mt-1">
              <AnnouncementStatusBadge status={item.status} />
            </div>
          </div>
        )}
      />
      )}

      {/* Mobile-only float action */}
      <div className="md:hidden fixed flex justify-center items-center right-3 top-[50%] translate-y-[-50%] z-90">
        <AdminDashboardButton
          icon={Plus}
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <CreateAnnouncementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
