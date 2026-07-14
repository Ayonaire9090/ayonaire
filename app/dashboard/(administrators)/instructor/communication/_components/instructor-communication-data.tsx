import { format } from "date-fns";
import { Announcement } from "@/lib/api/endpoints/announcements";

export interface CommunicationItem {
  id: string;
  title: string;
  description: string;
  course: string;
  dateCreated: string;
  status: "Sent" | "Draft";
  views: number;
}

// Backend has no draft/scheduling state on an announcement once created -
// every created announcement is treated as "Sent". "views" has no known
// backend source yet (no analytics endpoint), so it falls back to 0.
export function mapAnnouncementToCommunicationItem(
  announcement: Announcement,
): CommunicationItem {
  return {
    id: announcement._id,
    title: announcement.title,
    description: announcement.summary,
    course: announcement.courseId ?? "All Courses",
    dateCreated: announcement.createdAt
      ? format(new Date(announcement.createdAt), "MMM d, yyyy")
      : "-",
    status: "Sent",
    views: 0,
  };
}
