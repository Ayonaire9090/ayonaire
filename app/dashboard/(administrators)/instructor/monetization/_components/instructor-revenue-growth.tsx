"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  ComposedChart,
  CartesianGrid,
  Line,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const rawData = [
  { month: "Jan", bar: 10000, line: 6800 },
  { month: "Feb", bar: 8700, line: 3800 },
  { month: "Mar", bar: 6200, line: 3100 },
  { month: "Apr", bar: 7800, line: 5200 },
  { month: "May", bar: 9200, line: 4300 },
  { month: "Jun", bar: 7800, line: 5600 },
  { month: "July", bar: 6200, line: 3200 },
  { month: "Aug", bar: 7800, line: 3100 },
  { month: "Sep", bar: 5000, line: 1800 },
];

const HIGHLIGHT_MONTH = "Aug";

const processedData = rawData.map((item) => ({
  ...item,
  barHighlight: item.month === HIGHLIGHT_MONTH ? item.bar : 0,
  barNormal: item.month === HIGHLIGHT_MONTH ? 0 : item.bar,
}));

const chartConfig = {
  line: {
    label: "Revenue",
    color: "#000000",
  },
  barNormal: {
    label: "Projected",
    color: "#E5E5E5",
  },
  barHighlight: {
    label: "Current",
    color: "#FF7A59",
  },
} satisfies ChartConfig;

export const InstructorRevenueGrowth = () => {
  return (
    <div className="bg-white rounded-[16px] p-6 border border-gray-100/50 my-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 tracking-tight">Revenue Growth</h3>
        <button className="flex items-center gap-1 text-[15px] font-semibold text-gray-700 hover:text-black transition-colors">
          <span>6Month</span>
          <ChevronDown className="size-4" />
        </button>
      </div>

      {/* Chart */}
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[280px] w-full"
      >
        <ComposedChart
          data={processedData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
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
            tick={{ fill: "#9ca3af", fontSize: 13, fontWeight: 600 }}
            dy={8}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 600 }}
            tickCount={5}
            domain={[0, 10000]}
            tickFormatter={(v) => `$${v}`}
          />

          <ChartTooltip content={<ChartTooltipContent />} />

          {/* Normal gray bars */}
          <Bar
            dataKey="barNormal"
            name="barNormal"
            fill="#E5E5E5"
            radius={[10, 10, 10, 10]}
            barSize={32}
            className="opacity-50"
          />

          {/* Orange highlight bar */}
          <Bar
            dataKey="barHighlight"
            name="barHighlight"
            fill="#FF7A59"
            radius={[10, 10, 10, 10]}
            barSize={32}
            stackId="highlight"
          />

          {/* Trend line */}
          <Line
            dataKey="line"
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
