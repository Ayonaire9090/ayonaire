"use client";

import { useState } from "react";
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

const enrolmentData = [
  { month: "Jan", students: 700, instructors: 900 },
  { month: "Feb", students: 460, instructors: 850 },
  { month: "Mar", students: 400, instructors: 800 },
  { month: "Apr", students: 570, instructors: 920 },
  { month: "May", students: 520, instructors: 950 },
  { month: "Jun", students: 580, instructors: 830 },
  { month: "Jul", students: 410, instructors: 750 },
  { month: "Aug", students: 400, instructors: 700 },
  { month: "Sep", students: 300, instructors: 600 },
];

// Determine which month gets the orange highlight bar
const HIGHLIGHT_MONTH = "Aug";

// Pre-process data to split students into highlighted vs normal
const processedData = enrolmentData.map((item) => ({
  ...item,
  studentsHighlight: item.month === HIGHLIGHT_MONTH ? item.instructors : 0,
  instructorsBar: item.month === HIGHLIGHT_MONTH ? 0 : item.instructors,
}));

const chartConfig = {
  students: {
    label: "Students",
    color: "#F86432",
  },
  instructors: {
    label: "Instructors",
    color: "#E5E5E5",
  },
} satisfies ChartConfig;

type Period = "Weekly" | "Monthly" | "Yearly";

export const AdminDashbordEnrolmentAnalytics = () => {
  const [period, setPeriod] = useState<Period>("Weekly");

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
              Students
            </div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block size-3 rounded-[3px] bg-[#E5E5E5]" />
              Instructors
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
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[280px] w-full"
      >
        <ComposedChart
          data={processedData}
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
            tickCount={6}
            domain={[0, 1000]}
            tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : `${v}`)}
          />

          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Gray instructor bars */}
          <Bar
            dataKey="instructorsBar"
            name="instructors"
            fill="#E5E5E5"
            radius={[10, 10, 10, 10]}
            strokeWidth={10}
            barSize={50}
          />

          {/* Orange highlight bar (only for the highlighted month) */}
          <Bar
            dataKey="studentsHighlight"
            name="students"
            fill="#F86432"
            radius={[10, 10, 10, 10]}
            barSize={50}
            stackId="highlight"
          />

          {/* Line overlay for students trend */}
          <Line
            dataKey="students"
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
    </div>
  );
};
