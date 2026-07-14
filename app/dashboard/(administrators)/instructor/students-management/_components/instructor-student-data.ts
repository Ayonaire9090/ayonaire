import { Enrollment } from "@/lib/api/endpoints/enrollment";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useAuthStore } from "@/store/auth.store";

export type StudentStatus = "Completed" | "In Progress" | "Enrolled";

export interface StudentData {
  id: string;
  name: string;
  email: string;
  course: string;
  status: StudentStatus;
  progress: number;
}

// "Quiz Score" has no known backend source yet (enrollment records carry no
// per-student quiz/assignment scores), so it's dropped from the mapped shape.
function deriveStatus(enrollment: Enrollment): StudentStatus {
  if (enrollment.completed) return "Completed";
  if (enrollment.progress > 0) return "In Progress";
  return "Enrolled";
}

export function mapEnrollmentToStudentData(
  enrollment: Enrollment,
): StudentData {
  const student =
    typeof enrollment.student === "string" ? null : enrollment.student;
  const course =
    typeof enrollment.course === "string" ? null : enrollment.course;

  return {
    id: enrollment._id,
    name: student?.name ?? "Unknown Student",
    email: student?.email ?? "",
    course: course?.title ?? "Unknown Course",
    status: deriveStatus(enrollment),
    progress: enrollment.progress ?? 0,
  };
}

export function isEnrollmentInCourses(
  enrollment: Enrollment,
  courseIds: Set<string>,
): boolean {
  const courseId =
    typeof enrollment.course === "string"
      ? enrollment.course
      : enrollment.course?._id;
  return !!courseId && courseIds.has(courseId);
}

export const getStatusColor = (status: StudentStatus) => {
  switch (status) {
    case "Completed":
      return "bg-[#DCFCE7] text-[#16A34A]"; // green
    case "In Progress":
      return "bg-[#F3E8FF] text-[#A855F7]"; // purple
    case "Enrolled":
      return "bg-[#DBEAFE] text-[#2563EB]"; // blue
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getProgressColor = (status: StudentStatus) => {
  switch (status) {
    case "Completed":
      return "#16A34A";
    case "In Progress":
      return "#A855F7";
    case "Enrolled":
      return "#2563EB";
    default:
      return "#4B5563";
  }
};

// Enrollments have no instructor field of their own, so "my students" is
// derived by cross-referencing enrollments against this instructor's course
// IDs. Also relies on the "enrolled-coures" endpoint returning all platform
// enrollments for a non-student token, which is unconfirmed (same assumption
// already made for the Admin Enrollments page).
export function useInstructorStudentRoster() {
  const user = useAuthStore((state) => state.user);
  const coursesQuery = useGetCourses();
  const enrollmentsQuery = useGetEnrolledCourses();

  const courseIds = new Set(
    (coursesQuery.data?.data ?? [])
      .filter((course) => {
        const instructorId =
          typeof course.instructor === "string"
            ? course.instructor
            : course.instructor?._id;
        return instructorId === user?._id;
      })
      .map((course) => course._id),
  );

  const students: StudentData[] = (enrollmentsQuery.data?.enrollments ?? [])
    .filter((enrollment) => isEnrollmentInCourses(enrollment, courseIds))
    .map(mapEnrollmentToStudentData);

  return {
    students,
    isLoading: coursesQuery.isLoading || enrollmentsQuery.isLoading,
    isError: coursesQuery.isError || enrollmentsQuery.isError,
  };
}
