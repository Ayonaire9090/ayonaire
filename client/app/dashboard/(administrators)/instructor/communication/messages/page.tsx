"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { MessageCircle } from "lucide-react";
import { InstructorMessagesSidebarContent } from "./_components/student-messages-sidebar-content";
import { InstructorMessagesHeader } from "./_components/instructor-messages-header";

export default function InstructorMessagesPage() {
  return (
    <>
      <InstructorMessagesSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] pb-[72px] md:pb-0">
        <InstructorMessagesHeader />

        {/* Empty state — no conversation selected */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-gray-300" />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Your Messages
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-sm">
              Select a conversation from the sidebar to start chatting, or
              create a new message.
            </p>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
