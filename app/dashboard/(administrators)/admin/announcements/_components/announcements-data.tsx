"use client";

import { useState } from "react";
import { MoreVertical, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AppSelect } from "@/components/ui/app-select";
import { Announcement } from "@/lib/api/endpoints/announcements";
import { useUpdateAnnouncementMutation, useDeleteAnnouncementMutation } from "@/hooks/api/use-announcements";

export type AnnouncementStatus = "Published" | "Draft" | "Scheduled";

export interface AnnouncementData {
  id: string;
  title: string;
  summary: string;
  course: string;
  audience: string;
  date: string;
  createdAt: string | null;
  status: AnnouncementStatus;
  views: number;
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
    summary: announcement.summary,
    course: announcement.course ?? "All Courses",
    audience: announcement.audience,
    date: announcement.createdAt
      ? format(new Date(announcement.createdAt), "d MMM")
      : "-",
    createdAt: announcement.createdAt ?? null,
    status: toDisplayStatus(announcement.status),
    views: announcement.views ?? 0,
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

function AnnouncementDetailDialog({
  announcement,
  open,
  onOpenChange,
}: {
  announcement: AnnouncementData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{announcement.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <p className="text-[15px] text-gray-700 whitespace-pre-wrap">
            {announcement.summary || "No content provided."}
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-400">Course</p>
              <p className="font-medium text-gray-900">{announcement.course}</p>
            </div>
            <div>
              <p className="text-gray-400">Audience</p>
              <p className="font-medium text-gray-900">{announcement.audience}</p>
            </div>
            <div>
              <p className="text-gray-400">Status</p>
              <p className="font-medium text-gray-900">{announcement.status}</p>
            </div>
            <div>
              <p className="text-gray-400">Views</p>
              <p className="font-medium text-gray-900">{announcement.views}</p>
            </div>
            <div>
              <p className="text-gray-400">Date</p>
              <p className="font-medium text-gray-900">{announcement.date}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AnnouncementEditDialog({
  announcement,
  open,
  onOpenChange,
}: {
  announcement: AnnouncementData;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [title, setTitle] = useState(announcement.title);
  const [summary, setSummary] = useState(announcement.summary);
  const [status, setStatus] = useState<AnnouncementStatus>(announcement.status);
  const updateAnnouncement = useUpdateAnnouncementMutation();

  const handleSave = () => {
    if (!title.trim()) {
      toast.error("Title can't be empty.");
      return;
    }
    updateAnnouncement.mutate(
      {
        announcementId: announcement.id,
        title,
        summary,
        status: toBackendStatus(status),
      },
      {
        onSuccess: () => {
          toast.success("Announcement updated");
          onOpenChange(false);
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to update announcement"),
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Announcement</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="announcement-title">Title</Label>
            <Input id="announcement-title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="announcement-summary">Content</Label>
            <Textarea
              id="announcement-summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="min-h-[120px]"
            />
          </div>
          <AppSelect
            label="Status"
            options={[
              { label: "Draft", value: "Draft" },
              { label: "Scheduled", value: "Scheduled" },
              { label: "Published", value: "Published" },
            ]}
            value={status}
            onChange={(v) => setStatus(v as AnnouncementStatus)}
          />
          <Button onClick={handleSave} disabled={updateAnnouncement.isPending} className="mt-1">
            {updateAnnouncement.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function AnnouncementActions({ announcement }: { announcement: AnnouncementData }) {
  const deleteAnnouncement = useDeleteAnnouncementMutation();
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = () => {
    if (!window.confirm("Delete this announcement? This cannot be undone.")) return;
    deleteAnnouncement.mutate(announcement.id, {
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
        <AppDropdownItem variant="menu" onClick={() => setViewOpen(true)}>
          View Details
        </AppDropdownItem>
        <AppDropdownItem variant="menu" onClick={() => setEditOpen(true)}>
          Edit
        </AppDropdownItem>
        <AppDropdownSeparator />
        <AppDropdownItem variant="danger-menu" onClick={handleDelete}>Delete</AppDropdownItem>
      </AppDropdown>

      <AnnouncementDetailDialog announcement={announcement} open={viewOpen} onOpenChange={setViewOpen} />
      <AnnouncementEditDialog announcement={announcement} open={editOpen} onOpenChange={setEditOpen} />
    </div>
  );
}
