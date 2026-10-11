"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  ComposedChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetAllEnrollments } from "@/hooks/api/use-enrollment";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const chartConfig = {
  enrollments: {
    label: "Enrollments",
    color: "#F86432",
  },
  completed: {
    label: "Completed",
    color: "#FDE5D9",
  },
} satisfies ChartConfig;

type Period = "Weekly" | "Monthly" | "Yearly";
const PERIODS: Period[] = ["Weekly", "Monthly", "Yearly"];

function bucketEnrollments(
  enrollments: { createdAt: string; completed: boolean }[],
  period: Period,
) {
  const buckets = new Map<string, { enrollments: number; completed: number; order: number }>();

  for (const enrollment of enrollments) {
    if (!enrollment.createdAt) continue;
    const date = new Date(enrollment.createdAt);
    if (Number.isNaN(date.getTime())) continue;

    let key: string;
    let order: number;

    if (period === "Weekly") {
      const daysAgo = Math.floor(
        (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24),
      );
      if (daysAgo > 6) continue;
      key = DAY_LABELS[date.getDay()];
      order = -daysAgo;
    } else if (period === "Yearly") {
      key = String(date.getFullYear());
      order = date.getFullYear();
    } else {
      key = `${MONTH_LABELS[date.getMonth()]} ${date.getFullYear()}`;
      order = date.getFullYear() * 12 + date.getMonth();
    }

    const bucket = buckets.get(key) ?? { enrollments: 0, completed: 0, order };
    bucket.enrollments += 1;
    if (enrollment.completed) bucket.completed += 1;
    buckets.set(key, bucket);
  }

  return Array.from(buckets.entries())
    .sort((a, b) => a[1].order - b[1].order)
    .slice(period === "Monthly" ? -9 : period === "Yearly" ? -6 : -7)
    .map(([label, value]) => ({
      month: label,
      enrollments: value.enrollments,
      completed: value.completed,
    }));
}

export const AdminDashbordEnrolmentAnalytics = () => {
  const [period, setPeriod] = useState<Period>("Monthly");
  const { data } = useGetAllEnrollments({ limit: 500 });
  const enrollments = data?.enrollments ?? [];

  const chartData = useMemo(
    () => bucketEnrollments(enrollments, period),
    [enrollments, period],
  );

  const totalEnrollments = chartData.reduce((sum, d) => sum + d.enrollments, 0);

  return (
    <div className="rounded-xl border border-gray-200 p-5 bg-white">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-1">
        <p className="text-[13px] font-medium text-gray-600">Enrollments</p>
        <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
          {totalEnrollments.toLocaleString()} Total
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 mb-4">
        {/* Legend */}
        <div className="flex items-center gap-3 text-[11px] text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="inline-block size-2 rounded-full bg-[#F86432]" />
            Enrollments
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block size-2 rounded-full bg-[#FDE5D9]" />
            Completed
          </div>
        </div>

        {/* Period selector */}
        <div className="flex items-center gap-2 text-[11px]">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`transition-colors ${
                period === p ? "text-[#F86432] font-medium" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      {chartData.length === 0 ? (
        <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
          No enrollment data yet
        </div>
      ) : (
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
        >
          <ComposedChart
            data={chartData}
            margin={{ top: 5, right: 0, left: -10, bottom: 0 }}
            barGap={0}
            barCategoryGap="30%"
          >
            <CartesianGrid vertical horizontal={false} strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              dy={8}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              allowDecimals={false}
            />

            <ChartTooltip
              cursor={{ fill: "#FAFAFA" }}
              content={<ChartTooltipContent />}
            />

            <Bar
              dataKey="completed"
              name="Completed"
              fill="#FDE5D9"
              radius={[3, 3, 0, 0]}
              maxBarSize={18}
            />

            <Line
              dataKey="enrollments"
              name="Enrollments"
              type="monotone"
              stroke="#F86432"
              strokeWidth={1.75}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </ComposedChart>
        </ChartContainer>
      )}
    </div>
  );
};
