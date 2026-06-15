"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
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

export default function StudentFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <StudentFeedSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <StudentDashboardHeader />

        {children}

        {/* Mobile bottom navigation */}
        <MobileDashboardFooter items={studentFooterNav} maxVisible={4} />
      </SidebarInset>
    </SidebarProvider>
  );
}
