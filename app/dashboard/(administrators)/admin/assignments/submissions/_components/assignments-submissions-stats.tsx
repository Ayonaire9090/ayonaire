import { GraduationCap, Calendar, DoorClosed } from "lucide-react";

export const AssignmentsSubmissionsStats = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-5 md:p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-x-auto">
      {/* Left side: Course Info */}
      <div className="flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-[20px] md:text-[22px] font-bold text-gray-900 leading-tight">
            AI Automation – Basic
          </h2>
          <span className="inline-flex items-center justify-center rounded-full bg-[#E6F6EC] px-3 py-1 text-[13px] font-medium text-[#24A164]">
            Active
          </span>
        </div>

        <div className="flex items-center gap-4 text-[14px] text-gray-700 font-medium">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="size-5" />
            <span>Course AI Fundamental</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            <span>Due date</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DoorClosed className="size-4" />
            <span>Class Cohort 3</span>
          </div>
        </div>
      </div>

      {/* Vertical Divider (Hidden on mobile) */}
      <div className="hidden md:block w-px h-[50px] bg-gray-200 shrink-0 mx-2 lg:mx-4" />

      {/* Right side: Stats */}
      <div className="flex items-center justify-center gap-8 lg:gap-16 shrink-0 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
        {/* Stat 1 */}
        <div className="flex flex-col gap-1 items-center md:items-start shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Total Students
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-gray-900 text-center md:text-left">
            60
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col gap-1 items-center md:items-start shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Submitted
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#1E73E8] text-center md:text-left">
            45
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col gap-1 items-center md:items-start shrink-0">
          <span className="text-[14px] text-gray-500 font-medium text-center md:text-left">
            Graded
          </span>
          <span className="text-[22px] lg:text-[24px] font-bold text-[#24A164] text-center md:text-left">
            30
          </span>
        </div>
      </div>
    </div>
  );
};
