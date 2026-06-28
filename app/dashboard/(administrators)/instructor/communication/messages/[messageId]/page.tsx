"use client";

import { useParams } from "next/navigation";
import { getConversationById } from "../_data/mock-messages";

import { SidebarInset } from "@/components/ui/sidebar";
import { InstructorMessagesSidebarContent } from "../_components/student-messages-sidebar-content";
import { InstructorMessagesHeader } from "../_components/instructor-messages-header";
import { InstructorGroupMessagesHeader } from "../_components/instructor-group-messages-header";
import { InstructorMessageList } from "../_components/instructor-message-list";
import { InstructorMessageComposer } from "../_components/instructor-message-composer";
import { InstructorGroupSidebar } from "../_components/instructor-group-sidebar";

export default function InstructorMessageDetails() {
  const params = useParams();
  const messageId = params.messageId as string;
  const conversation = getConversationById(messageId);

  if (!conversation) {
    return (
      <>
        <InstructorMessagesSidebarContent
          variant="sidebar"
          collapsible="icon"
        />
        <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0 flex flex-col h-dvh overflow-hidden">
          <InstructorMessagesHeader />
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Conversation not found</p>
          </div>
        </SidebarInset>
      </>
    );
  }

  const isGroup = conversation.type === "group";

  return (
    <>
      <InstructorMessagesSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0">
        <InstructorMessagesHeader />

        {/* Chat header */}
        <InstructorGroupMessagesHeader
          messageImage={conversation.avatar}
          messageHeadingTitle={
            isGroup
              ? conversation.course || conversation.title
              : conversation.title
          }
          messageHeadingDescription={
            isGroup ? "Click here for more info" : undefined
          }
          type={conversation.type}
          online={conversation.online}
          lastSeen={conversation.lastSeen}
        />
        {/* Chat content wrapper */}
        <div className="flex-1 flex lg:flex-row min-h-0 overflow-hidden relative">
          {/* Main chat column */}
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Messages list */}
            <InstructorMessageList
              messages={conversation.messages}
              isGroup={isGroup}
            />
            {/* Message composer */}
            <InstructorMessageComposer isGroup={isGroup} />
          </div>

          {/* Right sidebar for group messages */}
          {isGroup && (
            <div className="hidden lg:block w-[320px] xl:w-[350px] shrink-0 border-l border-gray-100 overflow-y-auto bg-white h-full">
              <InstructorGroupSidebar />
            </div>
          )}
        </div>
      </SidebarInset>
    </>
  );
}
