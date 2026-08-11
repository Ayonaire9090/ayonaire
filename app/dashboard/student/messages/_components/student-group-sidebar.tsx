"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Plus, UserRound, CalendarDays, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";

// No backend endpoint lists files shared in a room (RoomLastMessage only
// exposes hasMedia/hasFile booleans on the latest message, not a full
// history), so this panel stays mock until that endpoint exists.
const attachments = [
  {
    id: 1,
    name: "Very important file.figma",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    fallbackColor: "bg-pink-500",
  },
  {
    id: 2,
    name: "Some file. scratch",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    fallbackColor: "bg-yellow-500",
  },
  {
    id: 3,
    name: "List of someting. xd",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    fallbackColor: "bg-purple-600",
  },
  {
    id: 4,
    name: "Very important fil.svg",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    fallbackColor: "bg-yellow-400",
  },
];

export const StudentGroupSidebar = ({ room }: { room: RoomRecord }) => {
  const [infoOpen, setInfoOpen] = useState(true);
  const [attachmentsOpen, setAttachmentsOpen] = useState(true);
  const [membersOpen, setMembersOpen] = useState(true);
  const title = room.name ?? "Untitled Group";

  const creatorName =
    room.participants.find((p) => p.id === room.roomCreator)?.name ??
    "Unknown";
  let createdAtLabel: string | null = null;
  try {
    createdAtLabel = format(new Date(room.createdAt), "MMM d, yyyy");
  } catch {
    createdAtLabel = null;
  }

  return (
    <div className="p-5 md:p-6 bg-white min-h-full flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[17px] font-semibold text-gray-900">Activity</h2>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-8">
        <Avatar className="size-20 mb-3 border-2 border-white shadow-sm">
          <AvatarImage src={room.profile?.url} alt={title} />
          <AvatarFallback className="bg-orange-100 text-orange-600 font-bold text-xl">
            {title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-[16px] font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 font-medium">
          {room.participants.length} member
          {room.participants.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Channel Info */}
      <div className="mb-6">
        <button
          onClick={() => setInfoOpen(!infoOpen)}
          className="flex items-center justify-between w-full py-2 mb-2 group"
        >
          <span className="text-[15px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
            Channel Info
          </span>
          <ChevronDown
            className={cn(
              "size-5 text-gray-400 transition-transform duration-200",
              infoOpen && "rotate-180",
            )}
          />
        </button>

        {infoOpen && (
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-start gap-3">
              <UserRound className="size-4 text-gray-400 mt-0.5 shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400">Created by</p>
                <p className="text-[13px] font-medium text-gray-900 truncate">
                  {creatorName}
                </p>
              </div>
            </div>
            {createdAtLabel && (
              <div className="flex items-start gap-3">
                <CalendarDays className="size-4 text-gray-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] text-gray-400">Date created</p>
                  <p className="text-[13px] font-medium text-gray-900">
                    {createdAtLabel}
                  </p>
                </div>
              </div>
            )}
            {room.description && (
              <div className="flex items-start gap-3">
                <FileText className="size-4 text-gray-400 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] text-gray-400">Description</p>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Attachments */}
      <div className="mb-6">
        <button
          onClick={() => setAttachmentsOpen(!attachmentsOpen)}
          className="flex items-center justify-between w-full py-2 mb-2 group"
        >
          <span className="text-[15px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
            Attachments
          </span>
          <ChevronDown
            className={cn(
              "size-5 text-gray-400 transition-transform duration-200",
              attachmentsOpen && "rotate-180",
            )}
          />
        </button>

        {attachmentsOpen && (
          <div className="flex flex-col gap-4 mt-2">
            {attachments.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="size-10 rounded-full flex items-center justify-center shrink-0 bg-[#2d2d3f]">
                  <div className={cn("size-5 rounded-sm", file.fallbackColor)} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-medium text-gray-900 truncate group-hover:text-primary transition-colors">
                    {file.name}
                  </span>
                  <span className="text-[12px] text-gray-400">
                    {file.size} {file.date}
                  </span>
                </div>
              </div>
            ))}
            <button className="text-[13px] text-[#4F46E5] font-medium text-left mt-1 hover:underline">
              View all
            </button>
          </div>
        )}
      </div>

      {/* Members */}
      <div>
        <button
          onClick={() => setMembersOpen(!membersOpen)}
          className="flex items-center justify-between w-full py-2 mb-2 group"
        >
          <span className="text-[15px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
            Members
          </span>
          <ChevronDown
            className={cn(
              "size-5 text-gray-400 transition-transform duration-200",
              membersOpen && "rotate-180",
            )}
          />
        </button>

        {membersOpen && (
          <div className="flex flex-col gap-1 mt-2">
            <button className="flex items-center gap-3 py-2 px-1 rounded-lg hover:bg-gray-50 transition-colors w-full group">
              <div className="size-10 rounded-full bg-[#2d2d3f] flex items-center justify-center shrink-0">
                <Plus className="size-5 text-white" />
              </div>
              <span className="text-[14px] font-medium text-[#4F46E5] group-hover:text-[#3730a3] transition-colors">
                Add Member
              </span>
            </button>

            {room.participants.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-3 py-2 px-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Avatar className="size-10 shrink-0 border border-gray-100">
                  <AvatarImage src={member.profile?.url} alt={member.name} />
                  <AvatarFallback className="text-sm font-medium bg-gray-100">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-[14px] font-medium text-gray-900">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
