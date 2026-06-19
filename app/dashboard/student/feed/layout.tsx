"use client";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";

export default function StudentFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StudentFeedSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <StudentDashboardHeader />

        {children}
      </SidebarInset>
    </>
  );
}
