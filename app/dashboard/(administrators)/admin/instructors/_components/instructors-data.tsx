import { format } from "date-fns";
import { InstructorProfile } from "@/lib/api/endpoints/instructor";

export type InstructorStatus = "Active" | "Suspended" | "Pending" | "Rejected";

export interface InstructorData {
  id: string;
  name: string;
  email: string;
  expertise: string;
  category: string;
  status: InstructorStatus;
  joined: string;
}

const VALID_STATUSES: InstructorStatus[] = [
  "Active",
  "Suspended",
  "Pending",
  "Rejected",
];

function normalizeStatus(status?: string): InstructorStatus {
  if (!status) return "Active";
  const match = VALID_STATUSES.find(
    (s) => s.toLowerCase() === status.toLowerCase(),
  );
  return match ?? "Active";
}

export function mapInstructorProfileToInstructorData(
  instructor: InstructorProfile,
): InstructorData {
  return {
    id: instructor._id,
    name: instructor.name,
    email: instructor.email,
    expertise: instructor.expertise?.join(", ") || "-",
    category: instructor.instructorCourseCategory || "-",
    status: normalizeStatus(instructor.status),
    joined: instructor.createdAt
      ? format(new Date(instructor.createdAt), "d MMM yyyy")
      : "-",
  };
}

export function InstructorStatusBadge({ status }: { status: InstructorStatus }) {
  const getStyle = (s: InstructorStatus) => {
    switch (s) {
      case "Active":
        return "bg-[#E6F6EC] text-[#24A164]";
      case "Suspended":
        return "bg-[#FFE9E9] text-[#FF5A5F]";
      case "Pending":
        return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Rejected":
        return "bg-gray-100 text-gray-600";
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
