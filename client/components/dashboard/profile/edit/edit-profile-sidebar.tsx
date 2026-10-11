"use client";

import { cn } from "@/lib/utils";
import {
  SquarePen,
  User,
  Image,
  Lock,
  Mail,
  Bell,
  TriangleAlert,
} from "lucide-react";

export const editSidebarItems = [
  { key: "profile", label: "Profile", icon: SquarePen },
  { key: "profile-photo", label: "Profile Photo", icon: User },
  { key: "cover-photo", label: "Cover Photo", icon: Image },
  { key: "login-info", label: "Login Information", icon: Lock },
  { key: "email-preference", label: "Email Preference", icon: Mail },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "danger-zone", label: "Danger Zone", icon: TriangleAlert },
] as const;

export type EditSidebarKey = (typeof editSidebarItems)[number]["key"];

interface EditProfileSidebarProps {
  activeSection: EditSidebarKey;
  onSectionChange: (section: EditSidebarKey) => void;
}

/** Desktop: vertical sidebar on the left */
export function EditProfileSidebar({
  activeSection,
  onSectionChange,
}: EditProfileSidebarProps) {
  return (
    <aside className="hidden lg:block w-[200px] shrink-0">
      <nav className="flex flex-col gap-1" aria-label="Edit profile sections">
        {editSidebarItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onSectionChange(key)}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors text-left w-full",
              activeSection === key
                ? "bg-primary/10 text-primary"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
            )}
          >
            <Icon className="size-4 shrink-0" />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

/** Mobile: horizontal scrollable tabs */
export function EditProfileMobileTabs({
  activeSection,
  onSectionChange,
}: EditProfileSidebarProps) {
  return (
    <div
      className="lg:hidden border-b border-gray-200 overflow-x-auto bg-white pt-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <nav
        className="flex gap-0 min-w-max px-1"
        aria-label="Edit profile sections"
      >
        {editSidebarItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onSectionChange(key)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-3 text-[13px] font-medium transition-colors relative whitespace-nowrap",
              activeSection === key
                ? "text-primary font-semibold"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            <Icon className="size-3.5 shrink-0" />
            {label}
            {activeSection === key && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-full" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
