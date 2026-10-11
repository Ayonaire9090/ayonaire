"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, Menu, Search } from "lucide-react";
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
  const { state, toggleSidebar, isMobile, setOpenMobile } = useSidebar();
  const isCollapsed = state === "collapsed" && !isMobile;
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const [search, setSearch] = React.useState("");

  const { data: roomsData, isLoading } = useGetRooms();
  const rooms = roomsData?.data ?? [];
  const allConversations = rooms.map((room) => ({
    conv: mapRoomToConversation(room, user?._id),
    preview: lastMessagePreview(room),
    timestamp: lastMessageTimestamp(room),
  }));
  const groupCount = allConversations.filter(({ conv }) => conv.type === "group").length;
  const conversations = allConversations
    .filter(({ conv }) => conv.type === "group")
    .filter(({ conv }) =>
      search.trim()
        ? conv.title.toLowerCase().includes(search.trim().toLowerCase())
        : true,
    );

  return (
    <Sidebar className="bg-white border-r border-gray-200" {...props}>
      <SidebarHeader className="bg-white border-b border-gray-100 px-3 py-4">
        {isCollapsed ? (
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/logos/logo-dark.png"
              width={34}
              height={34}
              alt="Ayonaire"
              className="object-contain"
            />
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Toggle Sidebar"
            >
              {isMobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 items-center gap-2 rounded-full bg-[#F15D23] px-4 text-sm font-semibold text-white shadow-sm">
                Chatrooms
                <span className="flex size-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#F15D23]">
                  {groupCount}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-2.5">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search conversations"
                className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="bg-[#FBFBFB] pt-2">
        <div className="flex flex-col gap-2 px-2 pb-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : conversations.length === 0 ? (
            !isCollapsed && (
              <p className="px-4 py-6 text-sm text-gray-400 text-center">
                {search.trim() ? `No results for "${search.trim()}".` : "No chatrooms yet."}
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
                  "flex items-start gap-3 rounded-lg p-3 transition-all",
                  isActive ? "bg-[#F1F2F6] shadow-sm" : "bg-white hover:bg-gray-50",
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
                        className="rounded-lg object-cover"
                      />
                    </div>
                    {!isCollapsed && (
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="mb-1 flex items-center justify-between gap-2">
                          <span className="truncate text-sm font-semibold text-gray-900">
                            {conv.title}
                          </span>
                          <span className="shrink-0 text-[11px] text-gray-400">{timestamp}</span>
                        </div>
                        <p className="truncate text-[13px] font-medium text-gray-500">
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
