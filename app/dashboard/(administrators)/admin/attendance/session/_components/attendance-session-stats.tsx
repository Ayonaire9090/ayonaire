import React from "react";
import { AttendanceSessionDetail } from "@/lib/api/endpoints/attendance";

function toApprovalLabel(status: string) {
  if (status === "approved") return { label: "Approved", className: "bg-[#E6F6EC] text-[#24A164]" };
  if (status === "rejected") return { label: "Rejected", className: "bg-[#FFEBE9] text-[#E5383B]" };
  return { label: "Pending Approval", className: "bg-[#FFF4E5] text-[#F59E0B]" };
}

export const AttendanceSessionViewStats = ({
  session,
}: {
  session: AttendanceSessionDetail;
}) => {
  const courseTitle =
    typeof session.course === "object" ? session.course?.title : session.course;
  const cohortName =
    typeof session.cohort === "object" ? session.cohort?.name : session.cohort;
  const date = new Date(session.date);
  const approval = toApprovalLabel(session.approvalStatus);
  const marked = session.records.filter((r) => r.status !== "unmarked").length;
  const unmarked = session.records.filter((r) => r.status === "unmarked").length;

  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-x-auto">
      {/* Left side: Session Info */}
      <div className="flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
            {session.title}
          </h2>
          <span
            className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[13px] font-medium ${approval.className}`}
          >
            {approval.label}
          </span>
        </div>

        <div className="text-[14px] text-gray-900 font-medium">
          {courseTitle ?? "Uncategorized"}
          {cohortName ? ` · ${cohortName}` : ""}
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Middle: Date & Time */}
      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[16px] md:text-[18px] font-bold text-gray-900">
          Date
        </span>
        <span className="text-[14px] text-gray-500 font-medium">
          {date.toLocaleDateString()}{" "}
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Right side: Stats */}
      <div className="flex items-center justify-center gap-8 lg:gap-16 shrink-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        {/* Stat 1 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Total Students
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-gray-900 text-center md:text-left">
            {session.records.length}
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Marked
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#24A164] text-center md:text-left">
            {marked}
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Unmarked
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#EF4444] text-center md:text-left">
            {unmarked}
          </span>
        </div>
      </div>
    </div>
  );
};
