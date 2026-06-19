"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProfileAcheivementsContent } from "@/components/dashboard/profile/profile-acheivements-content";
import { ProfileCoursesContent } from "@/components/dashboard/profile/profile-courses-content";
import { ProfileCoverBanner } from "@/components/dashboard/profile/profile-cover-banner";
import { ProfileForm } from "@/components/dashboard/profile/profile-form";
import { ProfileInfoSection } from "@/components/dashboard/profile/profile-info-section";
import { ProfilePointsContent } from "@/components/dashboard/profile/profile-points-content";
import { ProfileRanksContent } from "@/components/dashboard/profile/profile-ranks-content";
import {
  ProfileSidebar,
  ProfileSidebarMobile,
} from "@/components/dashboard/profile/profile-sidebar";
import {
  ProfileTab,
  ProfileTabs,
} from "@/components/dashboard/profile/profile-tabs";
import { ProfileTimelineContent } from "@/components/dashboard/profile/profile-timeline-content";
import { SidebarInset } from "@/components/ui/sidebar";
import { useState } from "react";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";

export default function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("Profile");

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
          {/* Mobile sidebar sheet */}
          <ProfileSidebarMobile />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-6">
            {/* Main content */}
            <div className="min-w-0">
              {/* Cover Banner */}
              <ProfileCoverBanner />

              {/* Profile Info */}
              <ProfileInfoSection
                name="Ayobami Awosanya"
                email="awosanya@gmail.com"
                popularity={3760}
                userType="Student"
                joinedDate="November 2025"
              />

              {/* Tabs */}
              <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

              {/* Tab Content */}
              {activeTab === "Profile" && <ProfileForm />}
              {activeTab === "Courses" && <ProfileCoursesContent />}
              {activeTab === "Achievements" && <ProfileAcheivementsContent />}
              {activeTab === "Points" && <ProfilePointsContent />}
              {activeTab === "Ranks" && <ProfileRanksContent />}
              {activeTab === "Timeline" && <ProfileTimelineContent />}
            </div>

            {/* Desktop sidebar - hidden on mobile, shown on lg+ */}
            <aside>
              <ProfileSidebar />
            </aside>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
