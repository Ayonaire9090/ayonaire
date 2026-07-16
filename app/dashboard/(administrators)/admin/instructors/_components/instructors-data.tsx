import { format } from "date-fns";
import { InstructorProfile } from "@/lib/api/endpoints/instructor";

// Matches the real applicationStatus enum (pending/approved/rejected) - the
// backend has no "Active"/"Suspended" concept at the instructor-profile
// level (that's a separate user-account-status field, not this one).
export type InstructorStatus = "Pending" | "Approved" | "Rejected";

export interface InstructorData {
  id: string;
  name: string;
  email: string;
  expertise: string;
  category: string;
  status: InstructorStatus;
  joined: string;
}

const VALID_STATUSES: InstructorStatus[] = ["Pending", "Approved", "Rejected"];

function normalizeStatus(status?: string): InstructorStatus {
  if (!status) return "Pending";
  const match = VALID_STATUSES.find(
    (s) => s.toLowerCase() === status.toLowerCase(),
  );
  return match ?? "Pending";
}

export function mapInstructorProfileToInstructorData(
  instructor: InstructorProfile,
): InstructorData {
  const user =
    typeof instructor.instructorId === "string" ? null : instructor.instructorId;

  return {
    id: instructor._id,
    name: user?.name ?? "Unknown",
    email: user?.email ?? "",
    expertise: instructor.expertise?.join(", ") || "-",
    category: instructor.instructorCourseCategory || "-",
    status: normalizeStatus(instructor.applicationStatus),
    joined: instructor.createdAt
      ? format(new Date(instructor.createdAt), "d MMM yyyy")
      : "-",
  };
}

export function InstructorStatusBadge({ status }: { status: InstructorStatus }) {
  const getStyle = (s: InstructorStatus) => {
    switch (s) {
      case "Approved":
        return "bg-[#E6F6EC] text-[#24A164]";
      case "Pending":
        return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Rejected":
        return "bg-[#FFE9E9] text-[#FF5A5F]";
      default:
        return "bg-gray-100 text-gray-800";
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
