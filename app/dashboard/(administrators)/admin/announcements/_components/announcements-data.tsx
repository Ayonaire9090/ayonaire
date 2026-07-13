import { Edit, MoreVertical, Trash2, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { Announcement } from "@/lib/api/endpoints/announcements";

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

const VALID_STATUSES: AnnouncementStatus[] = ["Published", "Draft", "Scheduled"];

function normalizeStatus(status?: string): AnnouncementStatus {
  if (!status) return "Published";
  const match = VALID_STATUSES.find((s) => s.toLowerCase() === status.toLowerCase());
  return match ?? "Published";
}

// Audience isn't returned directly by the backend - derive a display label from
// whichever targeting field is present. Confirm this logic once the real
// response shape (and any dedicated "audience" field) is confirmed.
function deriveAudience(announcement: Announcement): string {
  if (announcement.students && announcement.students.length > 0) {
    return "Specific Users";
  }
  if (announcement.cohort) {
    return typeof announcement.cohort === "string"
      ? announcement.cohort
      : announcement.cohort.title;
  }
  if (announcement.course) {
    return "Course Students";
  }
  return "All Students";
}

export function mapAnnouncementToAnnouncementData(
  announcement: Announcement,
): AnnouncementData {
  const course =
    typeof announcement.course === "string"
      ? announcement.course
      : announcement.course?.title ?? "All Courses";

  return {
    id: announcement._id,
    title: announcement.title,
    course,
    audience: deriveAudience(announcement),
    date: announcement.createdAt
      ? format(new Date(announcement.createdAt), "d MMM")
      : "-",
    createdAt: announcement.createdAt ?? null,
    status: normalizeStatus(announcement.status),
  };
}

export function AnnouncementStatusBadge({ status }: { status: AnnouncementStatus }) {
  const getStyle = (s: AnnouncementStatus) => {
    switch (s) {
      case "Published": return "bg-[#E6F6EC] text-[#24A164]";
      case "Scheduled": return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Draft": return "bg-[#FFF5F2] text-[#FF7A59]";
      default: return "bg-gray-100 text-gray-800";
    }
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
      <AppDropdownItem variant="menu">Publish</AppDropdownItem>
      <AppDropdownItem variant="menu">Schedule</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu">Draft</AppDropdownItem>
    </AppDropdown>
  );
}

export function AnnouncementActions() {
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
        <AppDropdownItem variant="menu">View Details</AppDropdownItem>
        <AppDropdownItem variant="menu">Edit</AppDropdownItem>
        <AppDropdownSeparator />
        <AppDropdownItem variant="danger-menu">Delete</AppDropdownItem>
      </AppDropdown>
    </div>
  );
}
