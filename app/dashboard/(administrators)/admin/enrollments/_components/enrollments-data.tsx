import { format } from "date-fns";
import { Enrollment } from "@/lib/api/endpoints/enrollment";

export type EnrollmentStatus = "Completed" | "In Progress" | "Enrolled";

export interface EnrollmentData {
  id: string;
  studentName: string;
  studentEmail: string;
  course: string;
  date: string;
  status: EnrollmentStatus;
  progress: number;
}

// Backend "status" is a free-text string of unconfirmed shape, so status is
// derived from the more reliable completed/progress fields instead.
function deriveStatus(enrollment: Enrollment): EnrollmentStatus {
  if (enrollment.completed) return "Completed";
  if (enrollment.progress > 0) return "In Progress";
  return "Enrolled";
}

export function mapEnrollmentToEnrollmentData(
  enrollment: Enrollment,
): EnrollmentData {
  const student =
    typeof enrollment.student === "string" ? null : enrollment.student;
  const course =
    typeof enrollment.course === "string" ? null : enrollment.course;

  return {
    id: enrollment._id,
    studentName: student?.name ?? "Unknown Student",
    studentEmail: student?.email ?? "",
    course: course?.title ?? "Unknown Course",
    date: enrollment.createdAt
      ? format(new Date(enrollment.createdAt), "d MMM yyyy")
      : "-",
    status: deriveStatus(enrollment),
    progress: enrollment.progress ?? 0,
  };
}

export function EnrollmentStatusBadge({
  status,
}: {
  status: EnrollmentStatus;
}) {
  const getStyle = (s: EnrollmentStatus) => {
    switch (s) {
      case "Completed":
        return "bg-[#E6F6EC] text-[#24A164]";
      case "In Progress":
        return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Enrolled":
      default:
        return "bg-[#EFF6FF] text-[#3B82F6]";
    }
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getStyle(status)}`}
    >
      {status}
    </span>
  );
}
