"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { EditCoverPhotoContent } from "@/components/dashboard/profile/edit/edit-cover-photo-content";
import { EditEmailPreferenceContent } from "@/components/dashboard/profile/edit/edit-email-preference-content";
import { EditLoginInfoContent } from "@/components/dashboard/profile/edit/edit-login-info-content";
import { EditProfileContent } from "@/components/dashboard/profile/edit/edit-profile-content";
import { EditProfileDangerZoneContent } from "@/components/dashboard/profile/edit/edit-profile-danger-zone-content";
import { EditProfileNotificationsContent } from "@/components/dashboard/profile/edit/edit-profile-notifications-content";
import { EditProfilePhotoContent } from "@/components/dashboard/profile/edit/edit-profile-photo-content";
import {
  EditProfileMobileTabs,
  EditProfileSidebar,
  EditSidebarKey,
} from "@/components/dashboard/profile/edit/edit-profile-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { useState } from "react";
import { BookX, Trash2, UserX } from "lucide-react";

const dangerActions = [
  {
    id: "deactivate",
    title: "Deactivate Account",
    description:
      "Temporarily disable your account. You can reactivate it anytime by logging back in.",
    icon: <UserX className="size-5" />,
    confirmTitle: "Deactivate Account",
    confirmDescription:
      "Follow all calendar prompts and save before moving forward. Apple and outlook will download an ics file. Open this file to add it to your calendar.",
    confirmButtonLabel: "Deactivate my account",
  },
  {
    id: "unsubscribe",
    title: "Unsubscribe from Courses",
    description:
      "Remove all your course enrollments. You will lose access to all enrolled courses and progress.",
    icon: <BookX className="size-5" />,
    confirmTitle: "Unsubscribe from Courses",
    confirmDescription:
      "This will remove all your active course enrollments. Your progress and certificates will be permanently lost. This action cannot be undone.",
    confirmButtonLabel: "Unsubscribe from all courses",
  },
  {
    id: "delete-data",
    title: "Delete My Data",
    description:
      "Permanently remove all your personal data from the system including profile info, activity logs, and preferences.",
    icon: <Trash2 className="size-5" />,
    confirmTitle: "Delete My Data",
    confirmDescription:
      "All your personal data including profile information, activity logs, preferences, and uploaded files will be permanently deleted. This action is irreversible.",
    confirmButtonLabel: "Delete my data",
  },
];
export default function StudentEditProfilePage() {
  const [activeSection, setActiveSection] = useState<EditSidebarKey>("profile");

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <div className="flex flex-1 flex-col pb-24 md:pb-6 lg:px-6">
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

          <div className="flex gap-6 lg:gap-8 py-4 lg:py-6 px-0 lg:px-0">
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
              {activeSection === "danger-zone" && (
                <EditProfileDangerZoneContent actions={dangerActions} />
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
