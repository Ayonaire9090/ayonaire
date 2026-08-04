import { AttendanceReportEntry } from "@/lib/api/endpoints/attendance";

export const AttendanceViewStats = ({
  entries,
}: {
  entries: AttendanceReportEntry[];
}) => {
  const totalStudents = entries.length;
  // The report gives per-student totals, not a single cohort session count -
  // take the max across students as the best available approximation.
  const totalSessions = entries.length
    ? Math.max(...entries.map((e) => e.totalSessions))
    : 0;
  const averageAttendance = entries.length
    ? Math.round(
        entries.reduce((sum, e) => sum + e.attendanceRate, 0) / entries.length,
      )
    : 0;

  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-x-auto">
      {/* Left side: Section Info */}
      <div className="flex flex-col gap-2.5 shrink-0">
        <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
          Student Attendance Overview
        </h2>
      </div>

      {/* Vertical Divider (Hidden on mobile) */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Right side: Stats */}
      <div className="flex items-center justify-center gap-8 lg:gap-16 shrink-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        {/* Stat 1 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Total Students
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-gray-900 text-center md:text-left">
            {totalStudents}
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Total Sessions
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-gray-900 text-center md:text-left">
            {totalSessions}
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col gap-1 items-center shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Average Attendance
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#24A164] text-center md:text-left">
            {averageAttendance}%
          </span>
        </div>
      </div>
    </div>
  );
};
