import { ChevronDown, ChevronRight } from "lucide-react";

interface StudentQuizInfoAnalyticsCardProps {
  heading: string;
  title: string;
  rate: string;
  statusBadge: {
    label: string;
    variant: "info" | "normal";
  };
}

export const StudentQuizInfoAnalyticsCard = ({
  heading,
  title,
  rate,
  statusBadge,
}: StudentQuizInfoAnalyticsCardProps) => {
  return (
    <div className="rounded-[16px] min-w-[250px] p-4 flex flex-col justify-between bg-white border border-gray-100 shadow-xs h-full min-h-[160px] gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-[13px] font-medium text-gray-500">
          {heading}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium ${
              statusBadge.variant === "info"
                ? "bg-[#F0F6FF] text-[#3B82F6]"
                : "bg-[#ECFDF3] text-[#10B981]"
            }`}
          >
            {statusBadge.label}
            <ChevronDown className="size-3.5" />
          </div>
        </div>
        <p className="text-[24px] font-bold text-gray-900 leading-none tracking-tight">
          {title}
        </p>
      </div>
      <div className="flex items-center gap-2.5 mt-auto pt-2">
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5F0] text-[#F06A3F] text-[13px] font-medium whitespace-nowrap">
          {rate}
        </span>
      </div>
    </div>
  );
};
