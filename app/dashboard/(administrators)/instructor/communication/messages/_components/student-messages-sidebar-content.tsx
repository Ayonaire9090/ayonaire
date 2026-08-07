"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, Menu, ChevronsUpDown, MessageSquarePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { format } from "date-fns";
import { useGetRooms } from "@/hooks/api/use-rooms";
import { useAuthStore } from "@/store/auth.store";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";
import { CreateGroupModal } from "./create-group-modal";

function otherParticipant(room: RoomRecord, currentUserId?: string) {
  return room.participants.find((p) => p.id !== currentUserId) ?? room.participants[0];
}

function roomDisplayTitle(room: RoomRecord, currentUserId?: string) {
  if (room.isGroup) return room.name ?? "Untitled Group";
  return otherParticipant(room, currentUserId)?.name ?? "Unknown";
}

function roomAvatar(room: RoomRecord, currentUserId?: string) {
  if (room.isGroup) return room.profile?.url ?? "/assets/logos/logo-dark.png";
  return otherParticipant(room, currentUserId)?.profile?.url;
}

export function InstructorMessagesSidebarContent({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar, open, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;
  const pathname = usePathname();
  const currentUserId = useAuthStore((s) => s.user?._id);
  const { data, isLoading, isError } = useGetRooms();
  const rooms = data?.data ?? [];
  const [isCreateGroupOpen, setIsCreateGroupOpen] = React.useState(false);

  const isPinned = open;

  return (
    <Sidebar className="bg-white border-r border-gray-200" {...props}>
      <SidebarHeader className="bg-transparent border-b border-gray-100 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex items-center",
                isCollapsed
                  ? "flex-col justify-center gap-4 mt-2"
                  : "justify-between p-1.5 bg-white rounded-[10px]",
              )}
            >
              <a
                href="/dashboard"
                className="shrink-0 flex items-center justify-center gap-2"
              >
                {isCollapsed ? (
                  <Image
                    src="/assets/logos/logo-dark.png"
                    width={32}
                    height={32}
                    alt="logo"
                    className="object-contain"
                  />
                ) : (
                  <>
                    <Image
                      src="/assets/logos/full-logo-dark.svg"
                      width={120}
                      height={40}
                      alt="logo"
                    />
                  </>
                )}
              </a>
              <button
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="Toggle Sidebar"
              >
                {isMobile ? (
                  <X className="w-5 h-5" />
                ) : !isPinned && !isCollapsed ? (
                  <X className="w-5 h-5" />
                ) : isCollapsed ? (
                  <Menu className="w-5 h-5" />
                ) : (
                  <ChevronsUpDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>

        {!isCollapsed && (
          <div className="mt-2 space-y-4">
            <div className="flex gap-2">
              <button className="flex-1 text-center text-[13px] font-medium py-2 rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors">
                Chatroom
              </button>
              <button className="flex-1 text-center text-[13px] font-medium py-2 rounded-lg bg-[#F15D23] text-white">
                Inbox
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Chat with Admin
              </button>
              <button
                onClick={() => setIsCreateGroupOpen(true)}
                className="ml-auto p-1.5 text-gray-500 hover:text-black transition-colors"
              >
                <MessageSquarePlus className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="bg-transparent pt-2">
        <div className="flex flex-col gap-1 pb-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-10">
              <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isError ? (
            <p className="px-4 py-6 text-sm text-red-500">
              Failed to load conversations.
            </p>
          ) : rooms.length === 0 ? (
            <p className="px-4 py-6 text-sm text-gray-400">
              No conversations yet.
            </p>
          ) : (
            rooms.map((room) => {
              const isActive = pathname.includes(room.id);
              const title = roomDisplayTitle(room, currentUserId);
              const avatar = roomAvatar(room, currentUserId);
              const lastMsg = room.lastMessage;

              return (
                <Link
                  key={room.id}
                  href={`/dashboard/instructor/communication/messages/${room.id}`}
                  className={cn(
                    "flex items-start gap-3 p-3 transition-colors",
                    isActive ? "bg-[#F6F6F6]" : "hover:bg-gray-50",
                    isCollapsed && "justify-center px-0",
                  )}
                >
                  {room.isGroup ? (
                    <>
                      <div className="relative shrink-0">
                        <Image
                          src={avatar ?? "/assets/logos/logo-dark.png"}
                          width={40}
                          height={40}
                          alt={title}
                          className="rounded-md object-cover"
                        />
                      </div>
                      {!isCollapsed && (
                        <div className="flex-1 min-w-0 flex flex-col justify-center h-10">
                          <span className="text-sm font-medium text-gray-900 truncate">
                            {title}
                          </span>
                          {room.description && (
                            <p className="text-[13px] font-medium text-gray-500 truncate">
                              {room.description}
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="relative shrink-0">
                        <Avatar className="w-10 h-10 rounded-xl!">
                          <AvatarImage src={avatar} />
                          <AvatarFallback>{title[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                      {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline mb-0.5">
                            <span className="text-[15px] font-medium text-gray-900">
                              {title}
                            </span>
                            {lastMsg && (
                              <span className="text-xs text-gray-400 shrink-0 ml-2">
                                {format(new Date(lastMsg.createdAt), "h:mm a")}
                              </span>
                            )}
                          </div>
                          <p className="text-[13px] text-gray-500 line-clamp-2 leading-tight">
                            {lastMsg?.text ??
                              (lastMsg?.hasMedia
                                ? "Sent a photo"
                                : lastMsg?.hasFile
                                  ? "Sent a file"
                                  : "No messages yet")}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </Link>
              );
            })
          )}
        </div>
      </SidebarContent>

      <CreateGroupModal isOpen={isCreateGroupOpen} onClose={() => setIsCreateGroupOpen(false)} />
    </Sidebar>
  );
}
