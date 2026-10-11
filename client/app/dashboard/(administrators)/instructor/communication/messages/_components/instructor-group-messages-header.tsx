"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Video, SlidersHorizontal } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { InstructorGroupSidebar } from "./instructor-group-sidebar";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";

interface InstructorGroupMessagesHeaderProps {
  room: RoomRecord;
  currentUserId?: string;
}

export const InstructorGroupMessagesHeader = ({
  room,
  currentUserId,
}: InstructorGroupMessagesHeaderProps) => {
  const [open, setOpen] = useState(false);

  if (!room.isGroup) {
    const other =
      room.participants.find((p) => p.id !== currentUserId) ??
      room.participants[0];
    const title = other?.name ?? "Unknown";

    return (
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={other?.profile?.url} />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-gray-900 text-[15px]">
              {title}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors">
            <Phone className="w-4 h-4 fill-current" />
          </button>
          <button className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors">
            <Video className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>
    );
  }

  // Group header
  const title = room.name ?? "Untitled Group";
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-transparent bg-gray-200 rounded-lg">
          <AvatarImage src={room.profile?.url} className="rounded-lg" />
          <AvatarFallback className="rounded-lg">
            {title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900 text-[15px]">
            {title}
          </span>
          {room.description && (
            <span className="text-sm text-gray-500">{room.description}</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-500">
        <button className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors">
          <Phone className="w-4 h-4 fill-current" />
        </button>
        <button className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors">
          <Video className="w-4 h-4 fill-current" />
        </button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors ml-1 lg:hidden">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[320px] sm:max-w-[360px] p-0 overflow-y-auto"
          >
            <SheetTitle className="sr-only">Group Details Sidebar</SheetTitle>
            <InstructorGroupSidebar room={room} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
