"use client";

import { Edit, MoreVertical, Trash2, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { Announcement } from "@/lib/api/endpoints/announcements";
import { useUpdateAnnouncementMutation, useDeleteAnnouncementMutation } from "@/hooks/api/use-announcements";

export type AnnouncementStatus = "Published" | "Draft" | "Scheduled";

export interface AnnouncementData {
  id: string;
  title: string;
  course: string;
  audience: string;
  date: string;
  createdAt: string | null;
  status: AnnouncementStatus;
}

function toDisplayStatus(status: Announcement["status"]): AnnouncementStatus {
  switch (status) {
    case "published": return "Published";
    case "scheduled": return "Scheduled";
    case "draft": default: return "Draft";
  }
}

function toBackendStatus(status: AnnouncementStatus): Announcement["status"] {
  switch (status) {
    case "Published": return "published";
    case "Scheduled": return "scheduled";
    case "Draft": default: return "draft";
  }
}

export function mapAnnouncementToAnnouncementData(
  announcement: Announcement,
): AnnouncementData {
  return {
    id: announcement.id,
    title: announcement.title,
    course: announcement.course ?? "All Courses",
    audience: announcement.audience,
    date: announcement.createdAt
      ? format(new Date(announcement.createdAt), "d MMM")
      : "-",
    createdAt: announcement.createdAt ?? null,
    status: toDisplayStatus(announcement.status),
  };
}

export function AnnouncementStatusBadge({ status, announcementId }: { status: AnnouncementStatus; announcementId: string }) {
  const updateAnnouncement = useUpdateAnnouncementMutation();

  const getStyle = (s: AnnouncementStatus) => {
    switch (s) {
      case "Published": return "bg-[#E6F6EC] text-[#24A164]";
      case "Scheduled": return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Draft": return "bg-[#FFF5F2] text-[#FF7A59]";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const setStatus = (next: AnnouncementStatus) => {
    updateAnnouncement.mutate(
      { announcementId, status: toBackendStatus(next) },
      {
        onSuccess: () => toast.success(`Announcement marked ${next.toLowerCase()}`),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update status"),
      },
    );
  };

  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium focus:outline-none transition-colors ${getStyle(status)}`}>
          {status}
          <ChevronDown className="size-3.5" />
        </button>
      }
    >
      <AppDropdownItem variant="menu" onClick={() => setStatus("Published")}>Publish</AppDropdownItem>
      <AppDropdownItem variant="menu" onClick={() => setStatus("Scheduled")}>Schedule</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu" onClick={() => setStatus("Draft")}>Draft</AppDropdownItem>
    </AppDropdown>
  );
}

export function AnnouncementActions({ announcementId }: { announcementId: string }) {
  const deleteAnnouncement = useDeleteAnnouncementMutation();

  const handleDelete = () => {
    if (!window.confirm("Delete this announcement? This cannot be undone.")) return;
    deleteAnnouncement.mutate(announcementId, {
      onSuccess: () => toast.success("Announcement deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete announcement"),
    });
  };

  return (
    <div className="flex items-center gap-2 justify-end">
      <AppDropdown
        variant="white"
        align="end"
        trigger={
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
            <MoreVertical className="size-[18px] text-black" />
          </Button>
        }
      >
        <AppDropdownItem variant="menu" onClick={() => toast.info("Announcement detail view isn't available yet.")}>
          View Details
        </AppDropdownItem>
        <AppDropdownItem variant="menu" onClick={() => toast.info("Editing an announcement isn't available yet.")}>
          Edit
        </AppDropdownItem>
        <AppDropdownSeparator />
        <AppDropdownItem variant="danger-menu" onClick={handleDelete}>Delete</AppDropdownItem>
      </AppDropdown>
    </div>
  );
}
