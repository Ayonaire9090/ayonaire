import { LucideIcon, Layers } from "lucide-react";

interface StatsSummaryItem {
  title: string;
  number: string;
  icon?: LucideIcon;
  iconBg?: string;
}

interface StatsSummaryProps {
  data?: StatsSummaryItem[];
  className?: string;
}

export const StatsSummary = ({ data, className = "" }: StatsSummaryProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div
      className={`hidden md:grid gap-3 mb-6 ${className}`}
      style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}
    >
      {data.map((item, index) => {
        const Icon = item.icon ?? Layers;
        return (
          <div
            key={index}
            className="rounded-[16px] px-4 py-3 bg-white border border-gray-100 flex items-center gap-3"
          >
            <span
              className={`flex items-center justify-center size-8 rounded-full shrink-0 ${
                item.iconBg ?? "bg-[#3B82F6]"
              }`}
            >
              <Icon className="size-4 text-white" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] text-gray-500 truncate">{item.title}</p>
              <p className="text-lg font-bold text-gray-900 tabular-nums leading-tight">
                {item.number}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
