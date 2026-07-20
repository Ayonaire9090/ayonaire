import { ChevronDown, ChevronRight } from "lucide-react";

interface AttendanceAnalyticsCardProps {
  heading: string;
  title: string;
  rate?: string;
  description: string;
  statusBadge: {
    label: string;
    variant: "info" | "normal";
  };
}

export const AttendanceAnalyticsCard = ({
  heading,
  title,
  rate,
  description,
  statusBadge,
}: AttendanceAnalyticsCardProps) => {
  return (
    <div className="rounded-[16px] p-4 flex flex-col justify-between bg-white border border-gray-100 shadow-xs h-full min-h-[160px] gap-6">
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
        {rate && (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF5F0] text-[#F06A3F] text-[13px] font-medium whitespace-nowrap">
            {rate}
          </span>
        )}
        <span className="text-[14px] text-gray-500 font-medium line-clamp-1">
          {description}
        </span>
      </div>
    </div>
  );
};

interface ActionListCardProps {
  title: string;
  badge: {
    label: string;
    variant: "pending" | "missing";
  };
  value: string;
  items: string[];
}

export const ActionListCard = ({
  title,
  badge,
  value,
  items,
}: ActionListCardProps) => {
  return (
    <div className="rounded-[16px] p-4 bg-white border border-gray-100 shadow-xs h-full flex flex-col gap-6 min-h-[300px]">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center text-[13px] font-medium text-gray-500">
          {title}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-medium ${
              badge.variant === "pending"
                ? "bg-[#FFF9EA] text-[#F59E0B]"
                : "bg-[#FEF2F2] text-[#EF4444]"
            }`}
          >
            {badge.label}
            <ChevronDown className="size-3.5" />
          </div>
        </div>
        <p className="text-[24px] font-bold text-gray-900 leading-none tracking-tight">
          {value}
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center cursor-pointer group"
          >
            <span className="text-[14.5px] text-gray-500 font-medium group-hover:text-gray-800 transition-colors">
              {item}
            </span>
            <ChevronRight className="size-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};
