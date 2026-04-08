import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export type CourseStatus = "Active" | "Draft" | "Pending" | "Private";

export interface CourseData {
  id: string;
  courseId: string;
  title: string;
  category: string;
  instructor: string;
  price: number;
  status: CourseStatus;
  enrollments: number;
}

export const mockCourses: CourseData[] = [
  { id: "1", courseId: "C-101", title: "Complete Python Bootcamp", category: "Programming", instructor: "Savannah Nguyen", price: 49, status: "Draft", enrollments: 447 },
  { id: "2", courseId: "C-225", title: "Digital Marketing 101", category: "Marketing", instructor: "Courtney Henry", price: 29, status: "Active", enrollments: 398 },
  { id: "3", courseId: "C-330", title: "UI/UX from Zero to Hero", category: "Design", instructor: "Leslie Alexander", price: 59, status: "Draft", enrollments: 426 },
  { id: "4", courseId: "C-412", title: "AI for Beginners", category: "Programming", instructor: "Ronald Richards", price: 39, status: "Draft", enrollments: 532 },
  { id: "5", courseId: "C-515", title: "React & Node Masterclass", category: "Programming", instructor: "Darrell Steward", price: 79, status: "Pending", enrollments: 423 },
  { id: "6", courseId: "C-628", title: "Digital Marketing 101", category: "Marketing", instructor: "Ralph Edwards", price: 69, status: "Private", enrollments: 369 },
];

export function CourseStatusBadge({ status }: { status: CourseStatus }) {
  const getStyle = (s: CourseStatus) => {
    switch (s) {
      case "Active": return "bg-[#E6F6EC] text-[#24A164]";
      case "Draft": return "bg-[#FFF5F2] text-[#FF7A59]";
      case "Pending": return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Private": return "bg-gray-200 text-gray-700";
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
          {status === "Draft" || status === "Active" ? <ChevronDown className="size-3.5" /> : null}
        </button>
      }
    >
      <AppDropdownItem variant="menu">Publish</AppDropdownItem>
      <AppDropdownItem variant="menu">Pending</AppDropdownItem>
      <AppDropdownItem variant="menu">Trash</AppDropdownItem>
      <AppDropdownItem variant="menu">Draft</AppDropdownItem>
      <AppDropdownItem variant="menu">Private</AppDropdownItem>
    </AppDropdown>
  );
}

export function CourseActions({ showEdit = true, showTrash = false }: { showEdit?: boolean; showTrash?: boolean }) {
  return (
    <div className="flex items-center gap-2 justify-end">
      {showEdit && (
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-gray-200 hover:bg-gray-100">
          <Edit className="size-[15px] text-gray-600" />
        </Button>
      )}
      {showTrash ? (
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-gray-200 hover:bg-gray-100">
          <Trash2 className="size-[15px] text-gray-600" />
        </Button>
      ) : (
        <AppDropdown
          variant="white"
          align="end"
          trigger={
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
              <MoreVertical className="size-[18px] text-black" />
            </Button>
          }
        >
          <AppDropdownItem variant="menu">View Course</AppDropdownItem>
          <AppDropdownSeparator />
          <AppDropdownItem variant="menu">Duplicate</AppDropdownItem>
          <AppDropdownSeparator />
          <AppDropdownItem variant="menu">Publish</AppDropdownItem>
          <AppDropdownSeparator />
          <AppDropdownItem variant="danger-menu">Delete Course</AppDropdownItem>
        </AppDropdown>
      )}
    </div>
  );
}
