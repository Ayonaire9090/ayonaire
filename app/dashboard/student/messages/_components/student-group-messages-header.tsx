"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Video, SlidersHorizontal, MoreVertical } from "lucide-react";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StudentGroupSidebar } from "./student-group-sidebar";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";

interface StudentGroupMessagesHeaderProps {
  messageImage?: string;
  messageHeadingTitle?: string;
  messageHeadingDescription?: string;
  type?: "group" | "individual";
  online?: boolean;
  lastSeen?: string;
  room?: RoomRecord;
}

function notAvailable(feature: string) {
  toast.info(`${feature} isn't available yet — coming in a future update.`);
}

export const StudentGroupMessagesHeader = ({
  messageImage = "/assets/persons/mr-ayo.png",
  messageHeadingTitle = "2.0- Ultimate Data Science",
  messageHeadingDescription = "Click here for more info",
  type = "group",
  online = false,
  lastSeen,
  room,
}: StudentGroupMessagesHeaderProps) => {
  const [open, setOpen] = useState(false);

  if (type === "individual") {
    return (
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={messageImage} />
              <AvatarFallback>{messageHeadingTitle[0]}</AvatarFallback>
            </Avatar>
            {online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#4ADE80] border-2 border-white" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-900 text-[15px]">
              {messageHeadingTitle}
            </span>
            <span className="text-xs text-gray-500">
              {online ? (
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] inline-block" />
                  Active
                </span>
              ) : lastSeen ? (
                `Last seen ${lastSeen}`
              ) : (
                "Offline"
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => notAvailable("Voice calls")}
            className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors"
          >
            <Phone className="w-4 h-4 fill-current" />
          </button>
          <button
            onClick={() => notAvailable("Video calls")}
            className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors"
          >
            <Video className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>
    );
  }

  // Group header
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-transparent bg-gray-200 rounded-lg">
          <AvatarImage src={messageImage} className="rounded-lg" />
          <AvatarFallback className="rounded-lg">AY</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-gray-900 text-[15px]">
            {messageHeadingTitle}
          </span>
          <span className="text-sm text-gray-500">
            {messageHeadingDescription}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-500">
        <button
          onClick={() => notAvailable("Voice calls")}
          className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors"
        >
          <Phone className="w-4 h-4 fill-current" />
        </button>
        <button
          onClick={() => notAvailable("Video calls")}
          className="flex items-center justify-center size-9 bg-[#F6F6F6] hover:bg-gray-200 text-black rounded-full transition-colors"
        >
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
            {room && <StudentGroupSidebar room={room} />}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
