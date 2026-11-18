"use client";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
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
      <SidebarInset className="bg-[#f7f6f3]">
        <div className="flex items-center justify-between border-b border-[#eeeae4] bg-white px-4 py-3 md:hidden"><Link href="/dashboard/student/feed"><Image src="/assets/logos/full-logo-dark.svg" alt="Ayonaire" width={124} height={32} /></Link><SidebarTrigger aria-label="Open community navigation" /></div>
        <StudentDashboardHeader />

        {children}
      </SidebarInset>
    </>
  );
}
