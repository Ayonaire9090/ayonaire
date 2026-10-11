import { format } from "date-fns";
import { Announcement } from "@/lib/api/endpoints/announcements";

export interface CommunicationItem {
  id: string;
  title: string;
  description: string;
  course: string;
  dateCreated: string;
  status: "Sent" | "Draft" | "Scheduled";
  views: number;
}

export function mapAnnouncementToCommunicationItem(
  announcement: Announcement,
): CommunicationItem {
  const status =
    announcement.status === "published"
      ? "Sent"
      : announcement.status === "scheduled"
        ? "Scheduled"
        : "Draft";

  return {
    id: announcement.id,
    title: announcement.title,
    description: announcement.summary,
    course: announcement.course ?? "All Courses",
    dateCreated: announcement.createdAt
      ? format(new Date(announcement.createdAt), "MMM d, yyyy")
      : "-",
    status,
    views: announcement.views,
  };
}
