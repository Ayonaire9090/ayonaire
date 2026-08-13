"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { CareerAcceleratorSidebarContent } from "../_components/career-accelerator-sidebar-content";
import { CareerRoadmapBuilder } from "../_components/career-roadmap-builder";

export default function StudentCareerRoadmapPage() {
  return (
    <>
      <CareerAcceleratorSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="min-h-screen bg-[#F6F6F6]">
        <CareerRoadmapBuilder />
      </SidebarInset>
    </>
  );
}
