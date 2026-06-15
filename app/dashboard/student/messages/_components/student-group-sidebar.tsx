"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Plus, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const attachments = [
  {
    id: 1,
    name: "Very important file.figma",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    iconUrl: "/assets/icons/figma.svg",
    fallbackColor: "bg-pink-500",
  },
  {
    id: 2,
    name: "Some file. scratch",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    iconUrl: "/assets/icons/scratch.svg",
    fallbackColor: "bg-yellow-500",
  },
  {
    id: 3,
    name: "List of someting. xd",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    iconUrl: "/assets/icons/xd.svg",
    fallbackColor: "bg-purple-600",
  },
  {
    id: 4,
    name: "Very important fil.svg",
    size: "7.5 MB",
    date: "3.22.22, 11:15 AM",
    iconUrl: "/assets/icons/svg.svg",
    fallbackColor: "bg-yellow-400",
  },
];

const members = [
  {
    name: "Novita",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Milie Nose",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ikhsan SD",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  { name: "Aditya", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
];

export const StudentGroupSidebar = () => {
  const [attachmentsOpen, setAttachmentsOpen] = useState(true);
  const [membersOpen, setMembersOpen] = useState(true);

  return (
    <div className="p-5 md:p-6 bg-white min-h-full flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[17px] font-semibold text-gray-900">Activity</h2>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-8">
        <Avatar className="size-20 mb-3 border-2 border-white shadow-sm">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Killan James"
          />
          <AvatarFallback className="bg-orange-100 text-orange-600 font-bold text-xl">
            KJ
          </AvatarFallback>
        </Avatar>
        <h3 className="text-[16px] font-bold text-gray-900">Killan James</h3>
        <p className="text-sm text-gray-500 font-medium">@killan james</p>
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
                <div
                  className={cn(
                    "size-10 rounded-full flex items-center justify-center shrink-0 bg-[#2d2d3f]",
                  )}
                >
                  {/* Mock icons for files, falling back to a colored circle if missing */}
                  <div
                    className={cn("size-5 rounded-sm", file.fallbackColor)}
                  />
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

            {members.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3 py-2 px-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Avatar className="size-10 shrink-0 border border-gray-100">
                  <AvatarImage src={member.avatar} alt={member.name} />
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
