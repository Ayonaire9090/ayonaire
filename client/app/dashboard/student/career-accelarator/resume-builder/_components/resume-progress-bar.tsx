function progressLabel(percent: number) {
  if (percent <= 0) return "Not started";
  if (percent <= 30) return "Taking off!";
  if (percent <= 60) return "Making progress!";
  if (percent <= 90) return "Almost there!";
  return "Ready to launch!";
}

export function ResumeProgressBar({ percent }: { percent: number }) {
  return (
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <span className="text-sm font-medium text-gray-900 shrink-0">
        {progressLabel(percent)}
      </span>
      <div className="flex-1 h-2 rounded-full bg-gray-200 max-w-[200px]">
        <div
          className="h-full rounded-full bg-[#24A164] transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-xs font-semibold text-[#24A164] bg-[#E6F6EC] rounded-full px-2.5 py-1 shrink-0">
        {percent}%
      </span>
    </div>
  );
}
