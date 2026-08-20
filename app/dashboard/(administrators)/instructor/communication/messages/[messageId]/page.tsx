"use client";

import { useParams } from "next/navigation";

import { SidebarInset } from "@/components/ui/sidebar";
import { InstructorMessagesSidebarContent } from "../_components/student-messages-sidebar-content";
import { InstructorMessagesHeader } from "../_components/instructor-messages-header";
import { InstructorGroupMessagesHeader } from "../_components/instructor-group-messages-header";
import { InstructorMessageList } from "../_components/instructor-message-list";
import { InstructorMessageComposer } from "../_components/instructor-message-composer";
import type { ComposerAttachment } from "../_components/instructor-message-composer";
import { InstructorGroupSidebar } from "../_components/instructor-group-sidebar";
import { useGetRooms } from "@/hooks/api/use-rooms";
import { useGetMessages, useSendMessageMutation } from "@/hooks/api/use-messages";
import { useAuthStore } from "@/store/auth.store";

export default function InstructorMessageDetails() {
  const params = useParams();
  const roomId = params.messageId as string;
  const currentUserId = useAuthStore((s) => s.user?._id);

  const { data: roomsData, isLoading: roomsLoading } = useGetRooms();
  const room = roomsData?.data?.find((r) => r.id === roomId);

  const { data: messagesData, isLoading: messagesLoading, isError: messagesError } =
    useGetMessages(roomId);
  const messages = messagesData?.data?.messages ?? [];

  const sendMessageMutation = useSendMessageMutation();

  const handleSend = (text: string, attachment?: ComposerAttachment) => {
    const formData = new FormData();
    formData.append("roomId", roomId);
    formData.append("text", text);
    if (attachment) formData.append(attachment.kind, attachment.file);
    sendMessageMutation.mutate(formData);
  };

  if (roomsLoading || messagesLoading) {
    return (
      <>
        <InstructorMessagesSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0 flex flex-col h-dvh overflow-hidden">
          <InstructorMessagesHeader />
          <div className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </SidebarInset>
      </>
    );
  }

  if (!room || messagesError) {
    return (
      <>
        <InstructorMessagesSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0 flex flex-col h-dvh overflow-hidden">
          <InstructorMessagesHeader />
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Conversation not found</p>
          </div>
        </SidebarInset>
      </>
    );
  }

  const isGroup = room.isGroup;

  return (
    <>
      <InstructorMessagesSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0">
        <InstructorMessagesHeader />

        {/* Chat header */}
        <InstructorGroupMessagesHeader room={room} currentUserId={currentUserId} />

        {/* Chat content wrapper */}
        <div className="flex-1 flex lg:flex-row min-h-0 overflow-hidden relative">
          {/* Main chat column */}
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Messages list */}
            <InstructorMessageList messages={messages} currentUserId={currentUserId} />
            {/* Message composer */}
            <InstructorMessageComposer isGroup={isGroup} onSend={handleSend} />
          </div>

          {/* Right sidebar for group messages */}
          {isGroup && (
            <div className="hidden lg:block w-[320px] xl:w-[350px] shrink-0 border-l border-gray-100 overflow-y-auto bg-white h-full">
              <InstructorGroupSidebar room={room} messages={messages} />
            </div>
          )}
        </div>
      </SidebarInset>
    </>
  );
}
