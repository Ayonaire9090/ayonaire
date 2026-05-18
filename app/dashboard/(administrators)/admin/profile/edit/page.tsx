"use client";

import { useState } from "react";
import {
  EditProfileSidebar,
  EditProfileMobileTabs,
  type EditSidebarKey,
} from "./_components/edit-profile-sidebar";
import { EditProfileContent } from "./_components/edit-profile-content";
import { EditProfilePhotoContent } from "./_components/edit-profile-photo-content";
import { EditCoverPhotoContent } from "./_components/edit-cover-photo-content";
import { EditLoginInfoContent } from "./_components/edit-login-info-content";
import { EditEmailPreferenceContent } from "./_components/edit-email-preference-content";
import { EditProfileNotificationsContent } from "./_components/edit-profile-notifications-content";
import { EditProfileDangerZoneContent } from "./_components/edit-profile-danger-zone-content";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function AdminEditProfilePage() {
  const [activeSection, setActiveSection] = useState<EditSidebarKey>("profile");

  return (
    <>
      {/* Dashboard Header */}
      <div className="bg-white lg:bg-transparent pt-4 pl-4 pr-4 pb-0 lg:p-0">
        <DashboardHeader
          title="Manage Your Profile"
          subTitle="View and update your profile details"
        />
        {/* Mobile scrollable tabs */}
        <EditProfileMobileTabs
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      <div className="flex gap-6 lg:gap-8 py-4 lg:py-6">
        {/* Desktop sidebar */}
        <EditProfileSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {/* Content area */}
        <div className="flex-1 min-w-0 bg-white rounded-none md:rounded-2xl p-4 md:p-6 lg:p-8">
          {activeSection === "profile" && <EditProfileContent />}
          {activeSection === "profile-photo" && <EditProfilePhotoContent />}
          {activeSection === "cover-photo" && <EditCoverPhotoContent />}
          {activeSection === "login-info" && <EditLoginInfoContent />}
          {activeSection === "email-preference" && (
            <EditEmailPreferenceContent />
          )}
          {activeSection === "notifications" && (
            <EditProfileNotificationsContent />
          )}
          {activeSection === "danger-zone" && <EditProfileDangerZoneContent />}
        </div>
      </div>
    </>
  );
}
