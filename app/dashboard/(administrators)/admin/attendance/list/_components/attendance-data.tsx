"use client";

import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { AttendanceSessionSummary } from "@/lib/api/endpoints/attendance";
import {
  useApproveAttendanceSessionMutation,
  useDeleteAttendanceSessionMutation,
} from "@/hooks/api/use-attendance";
import { EditAttendanceSessionModal } from "./edit-attendance-session-modal";

export type AttendanceStatus = "Recorded" | "Missing";
export type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface AttendanceData {
  id: string;
  className: string;
  course: string;
  session: string;
  date: string;
  time: string;
  instructor: {
    name: string;
    avatar: string;
  };
  present: number;
  absent: number;
  attendancePercent: number;
  status: AttendanceStatus;
  approval: ApprovalStatus;
}

function toApprovalStatus(status: AttendanceSessionSummary["approvalStatus"]): ApprovalStatus {
  if (status === "approved") return "Approved";
  if (status === "rejected") return "Rejected";
  return "Pending";
}

// "className" (class/batch number) has no backend equivalent on a session -
// falls back to the cohort name, or "-" if no cohort was set.
export function mapAttendanceSessionToData(session: AttendanceSessionSummary): AttendanceData {
  const date = new Date(session.date);
  const cohortName = typeof session.cohort === "object" ? session.cohort?.name : undefined;
  const courseTitle = typeof session.course === "object" ? session.course?.title : undefined;
  const instructorName = typeof session.instructor === "object" ? session.instructor?.name : undefined;

  return {
    id: session._id,
    className: cohortName ?? "-",
    course: courseTitle ?? "Uncategorized",
    session: session.title,
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    instructor: {
      name: instructorName ?? "Unknown",
      avatar: "/assets/images/user1.png",
    },
    present: session.presentCount,
    absent: session.absentCount,
    attendancePercent: session.attendanceRate,
    status: session.presentCount + session.absentCount > 0 ? "Recorded" : "Missing",
    approval: toApprovalStatus(session.approvalStatus),
  };
}

const attendanceStatusStyles: Record<AttendanceStatus, string> = {
  Recorded: "bg-[#EAF0FF] text-[#3B6EF5]",
  Missing: "bg-[#FFEBE9] text-[#E5383B]",
};

export const AttendanceStatusBadge = ({
  status,
}: {
  status: AttendanceStatus;
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-medium whitespace-nowrap ${attendanceStatusStyles[status]}`}
    >
      {status}
    </span>
  );
};

const approvalStatusStyles: Record<ApprovalStatus, string> = {
  Pending: "bg-[#FFF5EA] text-[#F59E0B]",
  Approved: "bg-[#E6F6EC] text-[#24A164]",
  Rejected: "bg-[#FFEBE9] text-[#E5383B]",
};

export const ApprovalStatusBadge = ({ status }: { status: ApprovalStatus }) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-medium whitespace-nowrap ${approvalStatusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export const AttendanceActions = ({ id }: { id?: string }) => {
  const router = useRouter();
  const approveSession = useApproveAttendanceSessionMutation();
  const deleteSession = useDeleteAttendanceSessionMutation();
  const [editingSessionId, setEditingSessionId] = useState<string | null>(null);

  const handleApprove = (approve: boolean) => {
    if (!id) return;
    approveSession.mutate(
      { sessionId: id, approve },
      {
        onSuccess: () => toast.success(approve ? "Session approved" : "Session rejected"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update session"),
      },
    );
  };

  const handleDelete = () => {
    if (!id) return;
    if (!window.confirm("Delete this attendance session? This cannot be undone.")) return;
    deleteSession.mutate(id, {
      onSuccess: () => toast.success("Session deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete session"),
    });
  };

  return (
    <>
      <AppDropdown
        variant="white"
        align="end"
        trigger={
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-transparent"
          >
            <MoreVertical className="size-[18px] text-black" />
          </Button>
        }
      >
        <AppDropdownItem
          variant="menu"
          onClick={() => id && router.push(`/dashboard/admin/attendance/session/${id}`)}
        >
          View Details
        </AppDropdownItem>
        <AppDropdownSeparator />
        <AppDropdownItem variant="menu" onClick={() => handleApprove(true)}>
          Approve
        </AppDropdownItem>
        <AppDropdownItem variant="menu" onClick={() => handleApprove(false)}>
          Reject
        </AppDropdownItem>
        <AppDropdownSeparator />
        <AppDropdownItem variant="menu" onClick={() => id && setEditingSessionId(id)}>
          Edit Session
        </AppDropdownItem>
        <AppDropdownItem variant="danger-menu" onClick={handleDelete}>
          Delete Session
        </AppDropdownItem>
      </AppDropdown>

      <EditAttendanceSessionModal
        sessionId={editingSessionId}
        onClose={() => setEditingSessionId(null)}
      />
    </>
  );
};
