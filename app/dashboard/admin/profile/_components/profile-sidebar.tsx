"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface Member {
  name: string;
  avatar: string;
}

const members: Member[] = [
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
  {
    name: "Aditya",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const joinedAvatars = [
  "https://randomuser.me/api/portraits/men/22.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
];

/** The actual sidebar content, reused in both desktop and mobile sheet */
function ProfileSidebarContent() {
  const [chatSettingsOpen, setChatSettingsOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(true);

  return (
    <div className="p-5 md:p-6">
      {/* Community avatar */}
      <div className="flex flex-col items-center">
        <Avatar className="size-[80px] md:size-[100px] border-4 border-orange-100">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="Community"
          />
          <AvatarFallback className="text-2xl font-bold bg-orange-100 text-orange-600">
            DS
          </AvatarFallback>
        </Avatar>

        <h3 className="text-[16px] md:text-[17px] font-bold text-gray-900 mt-3 text-center">
          2.0- Ultimate Data Science
        </h3>

        {/* Joined avatars */}
        <div className="flex items-center gap-1 mt-2">
          <div className="flex -space-x-2">
            {joinedAvatars.map((src, i) => (
              <Avatar key={i} className="size-6 border-2 border-white">
                <AvatarImage src={src} alt={`Member ${i + 1}`} />
                <AvatarFallback className="text-[10px]">M</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-[12px] text-gray-400 ml-1">
            and others joined this room
          </span>
        </div>
      </div>

      {/* Chat Settings */}
      <button
        onClick={() => setChatSettingsOpen(!chatSettingsOpen)}
        className="flex items-center justify-between w-full py-4 mt-4 border-t border-gray-100"
      >
        <span className="text-[15px] font-medium text-gray-700">
          Chat Settings
        </span>
        <ChevronDown
          className={cn(
            "size-5 text-gray-400 transition-transform duration-200",
            chatSettingsOpen && "rotate-180"
          )}
        />
      </button>

      {chatSettingsOpen && (
        <div className="pb-4 pl-2 text-[13px] text-gray-400">
          Chat settings options will appear here.
        </div>
      )}

      {/* Members */}
      <button
        onClick={() => setMembersOpen(!membersOpen)}
        className="flex items-center justify-between w-full py-4 border-t border-gray-100"
      >
        <span className="text-[15px] font-medium text-gray-700">Members</span>
        <ChevronDown
          className={cn(
            "size-5 text-gray-400 transition-transform duration-200",
            membersOpen && "rotate-180"
          )}
        />
      </button>

      {membersOpen && (
        <div className="flex flex-col gap-1">
          {/* Add Member */}
          <button className="flex items-center gap-3 py-2.5 px-1 rounded-lg hover:bg-gray-50 transition-colors w-full">
            <div className="size-10 rounded-full bg-[#2d2d3f] flex items-center justify-center">
              <Plus className="size-5 text-white" />
            </div>
            <span className="text-[14px] font-medium text-primary">
              Add Member
            </span>
          </button>

          {/* Member list */}
          {members.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-3 py-2.5 px-1 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Avatar className="size-10">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="text-sm font-medium bg-gray-100">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className="text-[14px] font-medium text-gray-800">
                {member.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** Desktop: inline sidebar card */
export function ProfileSidebar() {
  return (
    <div className="hidden lg:block bg-white rounded-xl h-fit">
      <ProfileSidebarContent />
    </div>
  );
}

/** Mobile: Sheet sliding in from the right + trigger button */
export function ProfileSidebarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden fixed bottom-24 right-4 z-40 size-12 rounded-full bg-primary text-white border-0 shadow-lg hover:bg-primary/90 hover:text-white"
        >
          <MessageCircle className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[320px] sm:max-w-[360px] p-0 overflow-y-auto"
      >
        <SheetTitle className="sr-only">Community Sidebar</SheetTitle>
        <ProfileSidebarContent />
      </SheetContent>
    </Sheet>
  );
}
