import { Edit, MoreVertical, Trash2, ChevronDown } from "lucide-react";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";

export type AnnouncementStatus = "Published" | "Draft" | "Scheduled";

export interface AnnouncementData {
  id: string;
  title: string;
  course: string;
  audience: string;
  date: string;
  status: AnnouncementStatus;
}

export const mockAnnouncements: AnnouncementData[] = [
  { id: "1", title: "UI/UX Live Class Reminder", course: "AI Engineering 1.0", audience: "Batch Jan26", date: "21 Feb", status: "Scheduled" },
  { id: "2", title: "AI Assignment Update", course: "DS & Gen 1.0", audience: "Specific Users", date: "21 Feb", status: "Published" },
  { id: "3", title: "Maintenance Notice", course: "DA & AI Automation 1.0", audience: "All Students", date: "21 Feb", status: "Draft" },
  { id: "4", title: "AI Assignment Update", course: "UI/UX Design 1.0", audience: "specific groups", date: "21 Feb", status: "Published" },
  { id: "5", title: "UI/UX Live Class Reminder", course: "PM & AI for PM 1.0", audience: "Batch Jan26", date: "21 Feb", status: "Published" },
  { id: "6", title: "Maintenance Notice", course: "Cloud Computing 1.0", audience: "All Students", date: "21 Feb", status: "Draft" },
  { id: "7", title: "AI Assignment Update", course: "DevOp Engineering 1.0", audience: "Batch Feb26", date: "21 Feb", status: "Scheduled" },
];

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
