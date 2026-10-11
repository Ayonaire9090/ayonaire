"use client";

import { useState } from "react";
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { AppDropdown, AppDropdownItem, AppDropdownSeparator } from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Course } from "@/lib/api/endpoints/courses";
import { useTogglePublishMutation, useDeleteCourseMutation } from "@/hooks/api/use-courses";
import { AssignInstructorModal } from "./assign-instructor-modal";

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

// Verified directly against the backend's CourseStatus enum
// (backend/src/types/course.types.ts): actual values are "Draft" | "Active"
// | "Archived" (capitalized, no "Published"). Narrower than this UI's
// existing Active/Draft/Pending/Private badge set, so mapped onto the
// closest existing label: Archived -> Private. "Pending" has no real
// backend equivalent and will never actually appear.
function normalizeStatus(status?: string): CourseStatus {
  switch (status) {
    case "Active":
      return "Active";
    case "Archived":
      return "Private";
    case "Draft":
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
    enrollments: course.enrollmentCount ?? 0,
  };
}

export function CourseStatusBadge({ status, courseId }: { status: CourseStatus; courseId: string }) {
  const togglePublish = useTogglePublishMutation();

  const getStyle = (s: CourseStatus) => {
    switch (s) {
      case "Active": return "bg-[#E6F6EC] text-[#24A164]";
      case "Draft": return "bg-[#FFF5F2] text-[#FF7A59]";
      case "Pending": return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Private": return "bg-gray-200 text-gray-700";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const handleToggle = () => {
    togglePublish.mutate(courseId, {
      onSuccess: () => toast.success(status === "Active" ? "Course unpublished" : "Course published"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update course"),
    });
  };

  // Only Draft/Active reflect the backend's real CourseStatus enum - the
  // "Private" mapping (from Archived) has no toggle action defined yet.
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
      {status === "Active" ? (
        <AppDropdownItem variant="menu" onClick={handleToggle}>Unpublish (set to Draft)</AppDropdownItem>
      ) : (
        <AppDropdownItem variant="menu" onClick={handleToggle}>Publish</AppDropdownItem>
      )}
    </AppDropdown>
  );
}

export function CourseActions({
  courseId,
  showEdit = true,
  showTrash = false,
}: {
  courseId: string;
  showEdit?: boolean;
  showTrash?: boolean;
}) {
  const router = useRouter();
  const deleteCourse = useDeleteCourseMutation();
  const [isAssigningInstructor, setIsAssigningInstructor] = useState(false);

  const handleDelete = () => {
    if (!window.confirm("Delete this course? This cannot be undone.")) return;
    deleteCourse.mutate(courseId, {
      onSuccess: () => toast.success("Course deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete course"),
    });
  };

  const viewCourse = () => router.push(`/dashboard/instructor/courses/${courseId}`);

  return (
    <div className="flex items-center gap-2 justify-end">
      {showEdit && (
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-lg border-gray-200 hover:bg-gray-100"
          onClick={viewCourse}
        >
          <Edit className="size-[15px] text-gray-600" />
        </Button>
      )}
      {showTrash ? (
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-lg border-gray-200 hover:bg-gray-100"
          onClick={handleDelete}
        >
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
          <AppDropdownItem variant="menu" onClick={viewCourse}>View Course</AppDropdownItem>
          <AppDropdownSeparator />
          <AppDropdownItem variant="menu" onClick={() => setIsAssigningInstructor(true)}>
            Assign Instructor
          </AppDropdownItem>
          <AppDropdownSeparator />
          <AppDropdownItem variant="danger-menu" onClick={handleDelete}>Delete Course</AppDropdownItem>
        </AppDropdown>
      )}

      <AssignInstructorModal
        courseId={isAssigningInstructor ? courseId : null}
        onClose={() => setIsAssigningInstructor(false)}
      />
    </div>
  );
}
