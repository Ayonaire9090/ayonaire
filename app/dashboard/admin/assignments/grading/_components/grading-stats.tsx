export const GradingStats = () => {
  return (
    <div className="flex items-center gap-6 p-4 lg:pb-8 overflow-x-auto hide-scrollbar">
      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">
          Total Students
        </span>
        <span className="text-[24px] font-bold text-gray-900 leading-none">
          04
        </span>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">
          Submissions
        </span>
        <span className="text-[24px] font-bold text-[#1E73E8] leading-none">
          03
        </span>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">Graded</span>
        <span className="text-[24px] font-bold text-[#24A164] leading-none">
          03
        </span>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <span className="text-[14px] text-gray-500 font-medium">Finalized</span>
        <span className="text-[24px] font-bold text-[#FF6A3D] leading-none">
          03
        </span>
      </div>
    </div>
  );
};
