import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Course } from "@/lib/api/endpoints/courses";

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

// The real backend enum (confirmed 2026-07-14 against the live Swagger
// spec) is only draft/published/archived - narrower than this UI's
// existing Active/Draft/Pending/Private badge set. Mapped onto the closest
// existing label rather than redesigning the badges: published -> Active,
// archived -> Private. "Pending" has no real backend equivalent and will
// never actually appear.
function normalizeStatus(status?: string): CourseStatus {
  switch (status) {
    case "published":
      return "Active";
    case "archived":
      return "Private";
    case "draft":
    default:
      return "Draft";
  }
}

export function mapCourseToCourseData(course: Course): CourseData {
  const category =
    typeof course.category === "string"
      ? course.category
      : course.category?.title ?? "Uncategorized";

  const instructor =
    typeof course.instructor === "string"
      ? course.instructor
      : course.instructor?.name ?? "Unassigned";

  return {
    id: course._id,
    courseId: `C-${course._id.slice(-6).toUpperCase()}`,
    title: course.title,
    category,
    instructor,
    price: course.price ?? 0,
    status: normalizeStatus(course.status),
    enrollments: course.enrollments?.length ?? 0,
  };
}

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
