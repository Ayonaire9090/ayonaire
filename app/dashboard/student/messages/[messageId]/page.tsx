"use client";

import { useParams } from "next/navigation";
import { getConversationById } from "../_data/mock-messages";
import { StudentGroupMessagesHeader } from "../_components/student-group-messages-header";
import { StudentMessageList } from "../_components/student-message-list";
import { StudentMessageComposer } from "../_components/student-message-composer";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { StudentMessagesSidebarContent } from "../_components/student-messages-sidebar-content";
import { StudentGroupSidebar } from "../_components/student-group-sidebar";
import { StudentDashboardHeader } from "../../_components/student-dashboard-header";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import {
  LayoutTemplate,
  Video,
  Briefcase,
  BookOpen,
  MessageSquare,
  Presentation,
} from "lucide-react";

const studentFooterNav = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutTemplate },
  { title: "Workshop", url: "/dashboard/student/workshop", icon: Video },
  {
    title: "Job Fair",
    url: "/dashboard/student/job-sessions",
    icon: Briefcase,
  },
  { title: "Courses", url: "/dashboard/student/courses", icon: BookOpen },
  {
    title: "Messages",
    url: "/dashboard/student/messages",
    icon: MessageSquare,
  },
  {
    title: "Career",
    url: "/dashboard/student/career-accelarator",
    icon: Presentation,
  },
];

export default function StudentMessageDetails() {
  const params = useParams();
  const messageId = params.messageId as string;
  const conversation = getConversationById(messageId);

  if (!conversation) {
    return (
      <SidebarProvider defaultOpen={false}>
        <StudentMessagesSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0 flex flex-col h-dvh overflow-hidden">
          <StudentDashboardHeader />
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400">Conversation not found</p>
          </div>
          <MobileDashboardFooter items={studentFooterNav} maxVisible={4} />
        </SidebarInset>
      </SidebarProvider>
    );
  }

  const isGroup = conversation.type === "group";

  return (
    <SidebarProvider defaultOpen={false}>
      <StudentMessagesSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0">
        <StudentDashboardHeader />

        {/* Chat header */}
        <StudentGroupMessagesHeader
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
            <StudentMessageList
              messages={conversation.messages}
              isGroup={isGroup}
            />
            {/* Message composer */}
            <StudentMessageComposer isGroup={isGroup} />
          </div>

          {/* Right sidebar for group messages */}
          {isGroup && (
            <div className="hidden lg:block w-[320px] xl:w-[350px] shrink-0 border-l border-gray-100 overflow-y-auto bg-white h-full">
              <StudentGroupSidebar />
            </div>
          )}
        </div>

        <MobileDashboardFooter items={studentFooterNav} maxVisible={4} />
      </SidebarInset>
    </SidebarProvider>
  );
}
