import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export interface StatCardTrend {
  percent: number;
  direction: "up" | "down";
}

export interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  iconBg?: string;
  trend?: StatCardTrend | null;
  trendLabel?: string;
  /** Optional trailing content rendered next to the value (e.g. a mini progress bar). */
  extra?: ReactNode;
  className?: string;
}

const DEFAULT_ICON_BG = "bg-[#3B82F6]";

// Shared visual language for every dashboard stat/KPI tile: small colored
// icon circle + label on top, big bold value, optional inline trend pill.
// Only pass `trend` when the underlying data actually has a previous-period
// value to compare against - omit it rather than fabricate a percentage.
export const StatCard = ({
  label,
  value,
  icon: Icon,
  iconBg = DEFAULT_ICON_BG,
  trend,
  trendLabel = "vs last month",
  extra,
  className = "",
}: StatCardProps) => {
  return (
    <div
      className={`rounded-[16px] px-4 py-4 bg-white border border-gray-100 h-full flex flex-col gap-3 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`flex items-center justify-center size-6 rounded-full ${iconBg} shrink-0`}>
          <Icon className="size-3.5 text-white" />
        </span>
        <p className="text-sm text-gray-700 font-medium truncate">{label}</p>
      </div>

      <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
        <p className="text-2xl font-bold tabular-nums text-gray-900 @[250px]/card:text-3xl">
          {value}
        </p>
        {trend && (
          <div className="flex items-center gap-1.5">
            <span
              className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                trend.direction === "up"
                  ? "bg-[#24A164]/10 text-[#24A164]"
                  : "bg-[#E5383B]/10 text-[#E5383B]"
              }`}
            >
              {trend.direction === "up" ? "+" : "-"}
              {trend.percent.toFixed(1)}%
            </span>
            <span className="text-[11px] text-gray-400">{trendLabel}</span>
          </div>
        )}
        {extra}
      </div>
    </div>
  );
};

// Shared helper: compute a % change between the two most recent entries of
// any {period-ish fields..., value: number}[] time series. Returns null
// (no trend shown) when there's fewer than 2 points or the earlier one is 0.
export function computeTrendFromSeries<T>(
  series: T[] | undefined,
  getValue: (entry: T) => number,
  sortKey: (entry: T) => number,
): StatCardTrend | null {
  if (!series || series.length < 2) return null;

  const sorted = [...series].sort((a, b) => sortKey(a) - sortKey(b));
  const latest = getValue(sorted[sorted.length - 1]);
  const previous = getValue(sorted[sorted.length - 2]);

  if (!previous) return null;

  const percent = ((latest - previous) / previous) * 100;
  return { percent: Math.abs(percent), direction: percent >= 0 ? "up" : "down" };
}
