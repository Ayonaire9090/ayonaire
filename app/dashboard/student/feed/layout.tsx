"use client";
import { SidebarInset, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { useEffect, useRef } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";

const allo = localFont({ src: "../../../../public/fonts/Allo-1.0.3/fonts/webfonts/AlloVariable.woff2", weight: "100 900", display: "swap" });

export default function StudentFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, setOpen } = useSidebar();
  const sidebar = useRef({ open, setOpen });
  useEffect(() => {
    const previous = sidebar.current.open;
    sidebar.current.setOpen(false);
    return () => sidebar.current.setOpen(previous);
  }, []);
  return (
    <>
      <StudentFeedSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className={`${allo.className} bg-muted/20`}>
        <div className="flex items-center justify-between border-b border-[#eeeae4] bg-white px-4 py-3 md:hidden"><Link href="/dashboard/student/feed"><Image src="/assets/logos/full-logo-dark.svg" alt="Ayonaire" width={124} height={32} /></Link><SidebarTrigger aria-label="Open community navigation" /></div>
        <StudentDashboardHeader />

        {children}
      </SidebarInset>
    </>
  );
}
