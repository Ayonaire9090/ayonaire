"use client";

import { EditProfilePageContent } from "@/components/dashboard/profile/edit/edit-profile-page-content";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";

export default function StudentEditProfilePage() {
  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <div className="flex flex-1 flex-col pb-24 md:pb-6 lg:px-6">
          <EditProfilePageContent />
        </div>
      </SidebarInset>
    </>
  );
}
