"use client";

import { useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useGetRooms } from "@/hooks/api/use-rooms";

function getInitials(name?: string) {
  return (name ?? "Room")
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ProfileSidebarContent() {
  const [membersOpen, setMembersOpen] = useState(true);
  const { data, isLoading, isError } = useGetRooms();

  const rooms = data?.data ?? [];
  const activeRoom = rooms.find((room) => room.isGroup) ?? rooms[0];
  const members = useMemo(
    () => activeRoom?.participants ?? [],
    [activeRoom?.participants],
  );
  const joinedAvatars = members.slice(0, 3);

  return (
    <div className="p-5 md:p-6">
      <div className="flex flex-col items-center">
        <Avatar className="size-[80px] md:size-[100px] border-4 border-orange-100">
          <AvatarImage src={activeRoom?.profile?.url} alt={activeRoom?.name ?? "Room"} />
          <AvatarFallback className="text-2xl font-bold bg-orange-100 text-orange-600">
            {getInitials(activeRoom?.name)}
          </AvatarFallback>
        </Avatar>

        <h3 className="text-[16px] md:text-[17px] font-bold text-gray-900 mt-3 text-center">
          {activeRoom?.name ?? "No room yet"}
        </h3>

        {activeRoom?.description && (
          <p className="mt-1 text-center text-[12px] text-gray-400">
            {activeRoom.description}
          </p>
        )}

        <div className="flex items-center gap-1 mt-2">
          <div className="flex -space-x-2">
            {joinedAvatars.map((member) => (
              <Avatar key={member.id} className="size-6 border-2 border-white">
                <AvatarImage src={member.profile?.url} alt={member.name} />
                <AvatarFallback className="text-[10px]">
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-[12px] text-gray-400 ml-1">
            {members.length > 0
              ? `${members.length} member${members.length === 1 ? "" : "s"}`
              : "No members yet"}
          </span>
        </div>
      </div>

      <button
        onClick={() => setMembersOpen(!membersOpen)}
        className="flex items-center justify-between w-full py-4 mt-4 border-t border-gray-100"
      >
        <span className="text-[15px] font-medium text-gray-700">
          Room Members
        </span>
        <ChevronDown
          className={cn(
            "size-5 text-gray-400 transition-transform duration-200",
            membersOpen && "rotate-180",
          )}
        />
      </button>

      {membersOpen && (
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <div className="py-6 text-center text-[13px] text-gray-400">
              Loading rooms...
            </div>
          ) : isError ? (
            <div className="py-6 text-center text-[13px] text-red-500">
              Failed to load rooms.
            </div>
          ) : members.length === 0 ? (
            <div className="py-6 text-center text-[13px] text-gray-400">
              You are not in any rooms yet.
            </div>
          ) : (
            members.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-3 py-2.5 px-1 rounded-lg"
              >
                <Avatar className="size-10">
                  <AvatarImage src={member.profile?.url} alt={member.name} />
                  <AvatarFallback className="text-sm font-medium bg-gray-100">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-[14px] font-medium text-gray-800">
                  {member.name}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export function ProfileSidebar() {
  return (
    <div className="hidden lg:block bg-white rounded-xl h-fit">
      <ProfileSidebarContent />
    </div>
  );
}

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
        <SheetTitle className="sr-only">Room Members</SheetTitle>
        <ProfileSidebarContent />
      </SheetContent>
    </Sheet>
  );
}
