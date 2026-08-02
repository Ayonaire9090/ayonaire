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
    color: "#E5E5E5",
  },
} satisfies ChartConfig;

type Period = "Weekly" | "Monthly" | "Yearly";

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

  return (
    <div className="rounded-[16px]! px-5 py-5 space-y-4 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-2xl font-bold tracking-tight">Enrollments</p>
          {/* Legend */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="inline-block size-3 rounded-[3px] bg-[#F86432]" />
              Enrollments
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block size-3 rounded-[3px] bg-[#E5E5E5]" />
              Completed
            </div>
          </div>
        </div>

        {/* Period selector */}
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as Period)}
            className="appearance-none rounded-lg border border-gray-200 bg-white px-3 py-1.5 pr-7 text-sm font-medium text-gray-700 outline-none cursor-pointer hover:border-gray-300 transition-colors"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
          <svg
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 size-3.5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Chart */}
      {chartData.length === 0 ? (
        <div className="flex h-[280px] items-center justify-center text-sm text-muted-foreground">
          No enrollment data yet
        </div>
      ) : (
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <ComposedChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            barGap={0}
            barCategoryGap="25%"
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="4 4"
              stroke="#e5e5e5"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 13 }}
              dy={8}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              allowDecimals={false}
            />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Bar
              dataKey="completed"
              name="completed"
              fill="#E5E5E5"
              radius={[10, 10, 10, 10]}
              barSize={40}
            />

            <Line
              dataKey="enrollments"
              type="monotone"
              stroke="#1a1a1a"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#ffffff",
                stroke: "#1a1a1a",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 6,
                fill: "#ffffff",
                stroke: "#1a1a1a",
                strokeWidth: 3,
              }}
            />
          </ComposedChart>
        </ChartContainer>
      )}
    </div>
  );
};
