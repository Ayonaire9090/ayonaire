import { ReactNode } from "react";
import { LucideIcon, MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";

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
  trendValue?: string;
  /** Optional trailing content rendered next to the value (e.g. a mini progress bar). */
  extra?: ReactNode;
  className?: string;
}

const DEFAULT_ICON_BG = "bg-[#3B82F6]";

// Shared visual language for every dashboard stat/KPI tile: compact white
// analytics tile with a colored rule, overflow action, big value, and trend row.
export const StatCard = ({
  label,
  value,
  icon: _Icon,
  iconBg = DEFAULT_ICON_BG,
  trend,
  trendLabel = "From last month",
  trendValue,
  extra,
  className = "",
}: StatCardProps) => {
  const TrendIcon = trend?.direction === "down" ? TrendingDown : TrendingUp;
  const trendTone =
    trend?.direction === "down"
      ? "text-[#B4232D] bg-[#FEF2F2] ring-[#F3C4C7]"
      : "text-[#087A52] bg-[#ECFDF3] ring-[#BDEBD3]";
  const footerValue = trendValue ?? (trend ? `${trend.percent.toFixed(1)}%` : null);

  return (
    <div
      className={`@container/card group relative flex h-[112px] min-w-0 flex-col overflow-hidden rounded-[6px] border border-[#EDF0F4] bg-linear-to-b from-[#FCFDFE] to-[#F8FAFC] shadow-[0_1px_1px_rgba(15,23,42,0.018)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-[#E2E7ED] hover:shadow-[0_1px_2px_rgba(15,23,42,0.026)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white" />

      <div className="flex min-h-7 items-start justify-between gap-3 px-4 pt-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className={`h-5 w-[3px] shrink-0 rounded-full ${iconBg} shadow-[0_0_0_3px_rgba(255,255,255,0.9)]`} />
          <p className="min-w-0 truncate text-[13px] font-semibold leading-5 text-[#303946]">
            {label}
          </p>
        </div>
        <button
          type="button"
          aria-label={`${label} options`}
          className="flex h-6 w-7 shrink-0 items-center justify-center rounded-[5px] text-[#1F2937] transition-colors hover:bg-[#F2F5F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]/20"
        >
          <MoreHorizontal className="size-5 stroke-[2.3]" />
        </button>
      </div>

      <div className="flex min-w-0 items-end gap-2 px-4 pb-3 pt-1">
        <p className="min-w-0 truncate text-[clamp(1.5rem,8cqw,2.35rem)] font-semibold leading-none tracking-normal text-[#070B12] tabular-nums">
          {value}
        </p>
        {trend && (
          <span className={`mb-1.5 shrink-0 rounded-full px-1.5 py-0.5 text-[11px] font-semibold leading-none ring-1 ${trendTone}`}>
            {trend.direction === "up" ? "+" : "-"}
            {trend.percent.toFixed(1)}%
          </span>
        )}
      </div>

      <div className="mt-auto flex h-8 items-center justify-between gap-3 border-t border-[#F0F3F6] bg-[#F7F9FB]/70 px-4 text-[12px] leading-none">
        <div className="min-w-0">
          {trend ? (
            <span className={`inline-flex max-w-full items-center gap-1 truncate font-semibold ${trend.direction === "up" ? "text-[#087A52]" : "text-[#B4232D]"}`}>
              <TrendIcon className="size-3.5 shrink-0 stroke-[2.4]" />
              <span className="truncate">{footerValue}</span>
            </span>
          ) : (
            <span className="text-[#B5BDC8]">No change</span>
          )}
        </div>
        <span className="shrink-0 whitespace-nowrap text-[12px] font-medium text-[#4B5563]">
          {trendLabel}
        </span>
      </div>
      {extra && <div className="px-4 pb-3">{extra}</div>}
    </div>
  );
};

// Shared helper: compute a % change between the two most recent entries of
// any {period-ish fields..., value: number}[] time series. Returns null
// when there's fewer than 2 points or the earlier one is 0.
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
