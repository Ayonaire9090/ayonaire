"use client";

import {
  BookOpen,
  LayoutTemplate,
  MessageSquare,
  Video,
  Grid3X3,
} from "lucide-react";
import { CareerRoadmapBuilder } from "@/app/dashboard/student/career-accelarator/_components/career-roadmap-builder";
import { CareerAcceleratorSidebarContent } from "@/app/dashboard/student/career-accelarator/_components/career-accelerator-sidebar-content";
import { MobileDashboardFooter } from "@/components/dashboard/mobile-dashboard-footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const previewFooterNav = [
  { title: "Feed", url: "/dashboard/student/feed", icon: LayoutTemplate },
  { title: "Workshop", url: "/dashboard/student/workshop", icon: Video },
  { title: "Courses", url: "/dashboard/student/courses", icon: BookOpen },
  {
    title: "Messages",
    url: "/dashboard/student/messages",
    icon: MessageSquare,
  },
  {
    title: "others",
    url: "/dashboard/student/career-accelarator",
    icon: Grid3X3,
  },
];

export default function PreviewCareerRoadmapPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <CareerAcceleratorSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="min-h-screen bg-[#F6F6F6]">
        <CareerRoadmapBuilder />
      </SidebarInset>
      <MobileDashboardFooter items={previewFooterNav} maxVisible={5} />
    </SidebarProvider>
  );
}
