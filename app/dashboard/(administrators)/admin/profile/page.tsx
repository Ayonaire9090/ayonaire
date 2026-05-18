"use client";

import { useState } from "react";
import { ProfileCoverBanner } from "./_components/profile-cover-banner";
import { ProfileInfoSection } from "./_components/profile-info-section";
import { ProfileTabs, type ProfileTab } from "./_components/profile-tabs";
import { ProfileForm } from "./_components/profile-form";
import { ProfileCoursesContent } from "./_components/profile-courses-content";
import {
  ProfileSidebar,
  ProfileSidebarMobile,
} from "./_components/profile-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProfilePointsContent } from "./_components/profile-points-content";
import { ProfileAcheivementsContent } from "./_components/profile-acheivements-content";
import { ProfileRanksContent } from "./_components/profile-ranks-content";
import { ProfileTimelineContent } from "./_components/profile-timeline-content";

export default function AdminProfile() {
  const [activeTab, setActiveTab] = useState<ProfileTab>("Profile");

  return (
    <>
      {/* Dashboard Header: Hidden on mobile */}
      <div className="hidden lg:block">
        <DashboardHeader
          title="Manage Your Profile"
          subTitle="View and update your profile details"
        />
      </div>
      {/* Mobile sidebar sheet */}
      <ProfileSidebarMobile />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-6">
        {/* Main content */}
        <div className="min-w-0">
          {/* Cover Banner */}
          <ProfileCoverBanner />

          {/* Profile Info */}
          <ProfileInfoSection />

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
    </>
  );
}
