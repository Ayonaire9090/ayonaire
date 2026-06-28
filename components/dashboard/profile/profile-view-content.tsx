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
import { useAuthStore } from "@/store/auth.store";
import { useGetProfile } from "@/hooks/api/use-auth";
import { useState } from "react";

/**
 * Shared profile view content used by all role-specific profile pages.
 * Reads the authenticated user from Zustand and displays their real data.
 *
 * @param showHeader - Whether to render the DashboardHeader (student page manages its own)
 */
interface ProfileViewContentProps {
  showHeader?: boolean;
}

export function ProfileViewContent({ showHeader = true }: ProfileViewContentProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>("Profile");
  const user = useAuthStore((state) => state.user);

  // Keep profile data fresh
  useGetProfile();

  // Derive display values from the user object
  const displayName = user?.name ?? "—";
  const displayEmail = user?.email ?? "—";
  const avatarUrl = user?.profile?.url;

  // Map API role to display label
  const roleLabel =
    user?.role === "admin"
      ? "Admin"
      : user?.role === "instructor"
        ? "Instructor"
        : "Student";

  // Format joined date from createdAt
  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : undefined;

  return (
    <>
      {showHeader && (
        <div className="hidden lg:block">
          <DashboardHeader
            title="Manage Your Profile"
            subTitle="View and update your profile details"
          />
        </div>
      )}
      {/* Mobile sidebar sheet */}
      <ProfileSidebarMobile />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-6">
        {/* Main content */}
        <div className="min-w-0">
          {/* Cover Banner */}
          <ProfileCoverBanner />

          {/* Profile Info */}
          <ProfileInfoSection
            name={displayName}
            email={displayEmail}
            avatarUrl={avatarUrl}
            popularity={3760}
            userType={roleLabel}
            joinedDate={joinedDate}
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
    </>
  );
}
