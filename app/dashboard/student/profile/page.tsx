"use client";

import { ProfileViewContent } from "@/components/dashboard/profile/profile-view-content";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function StudentProfilePage() {
  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        {/* Dashboard Header: Hidden on mobile */}
        <div className="hidden px-4 lg:block">
          <DashboardHeader
            title="Manage Your Profile"
            subTitle="View and update your profile details"
          />
        </div>
        <div className="flex flex-1 flex-col lg:p-6 pb-24 md:pb-6">
          <ProfileViewContent showHeader={false} />
        </div>
      </SidebarInset>
    </>
  );
}
