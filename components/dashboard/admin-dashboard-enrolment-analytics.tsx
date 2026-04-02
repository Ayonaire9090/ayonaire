"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const enrolmentData = [
  { month: "Jan", students: 920, instructors: 450 },
  { month: "Feb", students: 940, instructors: 480 },
  { month: "Mar", students: 800, instructors: 520 },
  { month: "Apr", students: 720, instructors: 700 },
  { month: "May", students: 680, instructors: 520 },
  { month: "Jun", students: 500, instructors: 600 },
  { month: "Jul", students: 700, instructors: 650 },
  { month: "Aug", students: 680, instructors: 820 },
  { month: "Sep", students: 250, instructors: 980 },
];

const chartConfig = {
  students: {
    label: "Students",
    color: "#F86432",
  },
  instructors: {
    label: "Instructors",
    color: "#d4d4d4",
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
              <span className="inline-block size-3 rounded-[3px] bg-[#d4d4d4]" />
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
        className="aspect-auto h-[260px] w-full"
      >
        <AreaChart
          data={enrolmentData}
          margin={{ top: 10, right: 0, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient
              id="enrol-students-grad"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#F86432" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#F86432" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient
              id="enrol-instructors-grad"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#d4d4d4" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#d4d4d4" stopOpacity={0.01} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={true}
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
            domain={[0, "auto"]}
            tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : `${v}`)}
          />

          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Instructors behind students */}
          <Area
            dataKey="instructors"
            type="stepAfter"
            stroke="#d4d4d4"
            strokeWidth={2.5}
            fill="url(#enrol-instructors-grad)"
            dot={false}
            activeDot={false}
          />

          <Area
            dataKey="students"
            type="stepAfter"
            stroke="#F86432"
            strokeWidth={2.5}
            fill="url(#enrol-students-grad)"
            dot={false}
            activeDot={false}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};
