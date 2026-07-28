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
import { useGetRooms } from "@/hooks/api/use-rooms";
import { useAuthStore } from "@/store/auth.store";
import {
  mapRoomToConversation,
  lastMessagePreview,
  lastMessageTimestamp,
} from "../_data/message-data";

export function StudentMessagesSidebarContent({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state, toggleSidebar, open, isMobile, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);

  const isPinned = open;

  const { data: roomsData, isLoading } = useGetRooms();
  const rooms = roomsData?.data ?? [];
  const conversations = rooms.map((room) => ({
    conv: mapRoomToConversation(room, user?._id),
    preview: lastMessagePreview(room),
    timestamp: lastMessageTimestamp(room),
  }));

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
              <button className="ml-auto p-1.5 text-gray-500 hover:text-black transition-colors">
                <MessageSquarePlus className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="bg-transparent pt-2">
        <div className="flex flex-col gap-1 pb-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : conversations.length === 0 ? (
            !isCollapsed && (
              <p className="px-4 py-6 text-sm text-gray-400 text-center">
                No conversations yet.
              </p>
            )
          ) : (
          conversations.map(({ conv, preview, timestamp }) => {
            const isActive = pathname.includes(conv.id);

            return (
              <Link
                key={conv.id}
                href={`/dashboard/student/messages/${conv.id}`}
                onClick={() => {
                  // On mobile the conversation list lives inside the
                  // off-canvas Sheet - close it so the selected thread
                  // (rendered underneath) becomes visible.
                  if (isMobile) setOpenMobile(false);
                }}
                className={cn(
                  "flex items-start gap-3 p-3 transition-colors",
                  isActive ? "bg-[#F6F6F6]" : "hover:bg-gray-50",
                  isCollapsed && "justify-center px-0",
                )}
              >
                {conv.type === "group" ? (
                  <>
                    <div className="relative shrink-0">
                      <Image
                        src={conv.avatar}
                        width={40}
                        height={40}
                        alt={conv.title}
                        className="rounded-md object-cover"
                      />
                    </div>
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0 flex flex-col justify-center h-10">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900 truncate">
                            {conv.title}
                          </span>
                        </div>
                        <p className="text-[13px] font-medium text-gray-900 truncate">
                          {preview}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="relative shrink-0">
                      <Avatar className="w-10 h-10 rounded-xl!">
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback>{conv.title[0]}</AvatarFallback>
                      </Avatar>
                      <span
                        className={cn(
                          "absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white",
                          conv.online
                            ? "bg-[#4ADE80]"
                            : "bg-white border-gray-300",
                        )}
                      />
                    </div>
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <span className="text-[15px] font-medium text-gray-900">
                            {conv.title}
                          </span>
                          <span className="text-xs text-gray-400 shrink-0 ml-2">
                            {timestamp}
                          </span>
                        </div>
                        <p className="text-[13px] text-gray-500 line-clamp-2 leading-tight">
                          {preview}
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
    </Sidebar>
  );
}
