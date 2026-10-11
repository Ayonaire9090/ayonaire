"use client";

import React, { useState } from "react";
import { DataList } from "@/components/ui/data-list";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Trash2, Eye } from "lucide-react";
import { useGetAnnouncements } from "@/hooks/api/use-announcements";
import { mapAnnouncementToCommunicationItem } from "./instructor-communication-data";

export const InstructorAnalyticsCommunicationList = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const { data, isLoading, isError } = useGetAnnouncements();
  const communications = (data?.data?.announcement ?? []).map(
    mapAnnouncementToCommunicationItem,
  );

  const toggleSelectAll = () => {
    setSelectedIds((prev) => {
      if (prev.size === communications.length) {
        return new Set();
      } else {
        return new Set(communications.map((item) => item.id));
      }
    });
  };

  const toggleSelectItem = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const isAllSelected =
    selectedIds.size === communications.length && communications.length > 0;

  return (
    <div className="bg-white rounded-[16px] p-4 border border-gray-100/50 mb-4">
      {/* Top Toolbar */}
      <div className="flex items-center gap-4 text-gray-600 text-sm font-semibold mb-6 overflow-x-auto py-1 hide-scrollbar">
        <button
          onClick={toggleSelectAll}
          className="px-4 py-1.5 border border-gray-200 hover:border-gray-300 rounded-full text-gray-700 bg-white transition-all whitespace-nowrap"
        >
          {selectedIds.size} Selected
        </button>
        <button className="hover:text-gray-900 transition-colors whitespace-nowrap">
          Delete
        </button>
        <button className="hover:text-gray-900 transition-colors whitespace-nowrap">
          Send to Multiple
        </button>
        <button className="hover:text-gray-900 transition-colors whitespace-nowrap">
          Important
        </button>
      </div>

      {/* Data List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load announcements. Please try again.
        </div>
      ) : communications.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No announcements yet.
        </div>
      ) : (
      <DataList
        data={communications}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          const isSelected = selectedIds.has(item.id);
          const isSent = item.status === "Sent";

          return (
            <div className="flex items-start gap-3 w-full">
              {/* Checkbox */}
              <div className="pt-1">
                <Checkbox
                  className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  checked={isSelected}
                  onCheckedChange={() => toggleSelectItem(item.id)}
                />
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Top Section: Title & Description (Left) / Course & Action (Right) */}
                <div className="flex justify-between items-start gap-4">
                  {/* Left Block */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-semibold text-gray-900 text-sm leading-snug">
                      {item.title}
                    </span>
                    <span className="text-gray-400 text-xs mt-1 leading-normal font-normal">
                      {item.description}
                    </span>
                  </div>

                  {/* Right Block */}
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="font-semibold text-gray-900 text-base text-right leading-snug max-w-[120px] wrap-break-word">
                      {item.course}
                    </span>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 hover:bg-gray-200 rounded-full transition-colors outline-none shrink-0">
                          <MoreVertical className="size-5 text-gray-600" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-36 bg-white border border-gray-100 rounded-lg p-1"
                      >
                        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
                          <Eye className="size-4 text-gray-400" />
                          <span>View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md cursor-pointer transition-colors">
                          <Trash2 className="size-4 text-red-500" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Bottom Section: Status (Left) / Views (Center) / Date (Right) */}
                <div className="flex items-center justify-between mt-1 text-xs">
                  {/* Status badge */}
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full font-semibold ${
                      isSent
                        ? "bg-[#A855F7]/10 text-[#A855F7]"
                        : "bg-[#10B981]/10 text-[#10B981]"
                    }`}
                  >
                    {item.status}
                  </span>

                  {/* Views */}
                  <span className="text-gray-500 font-medium">
                    Views{" "}
                    <span className="text-gray-900 font-bold ml-1">
                      {item.views}
                    </span>
                  </span>

                  {/* Date */}
                  <span className="text-gray-500 font-medium">
                    {item.dateCreated}
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      />
      )}
    </div>
  );
};
