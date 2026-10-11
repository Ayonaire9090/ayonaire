"use client";

import React, { useMemo } from "react";
import {
  ComposedChart,
  CartesianGrid,
  Line,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  getMonthlyRevenue,
  useInstructorAnalytics,
} from "../../analytics-reporting/_components/instructor-analytics-data";

const chartConfig = {
  line: {
    label: "Revenue",
    color: "#111827",
  },
  barNormal: {
    label: "Revenue",
    color: "#FDE5D9",
  },
  barHighlight: {
    label: "Current Month",
    color: "#F86432",
  },
} satisfies ChartConfig;

export const InstructorRevenueGrowth = () => {
  const { payments, isLoading } = useInstructorAnalytics();

  const processedData = useMemo(() => {
    const monthly = getMonthlyRevenue(payments, 6);
    return monthly.map((item, index) => ({
      month: item.name,
      line: item.value,
      barHighlight: index === monthly.length - 1 ? item.value : 0,
      barNormal: index === monthly.length - 1 ? 0 : item.value,
    }));
  }, [payments]);

  const maxValue = Math.max(1000, ...processedData.map((d) => d.line));
  const currentMonthRevenue = processedData[processedData.length - 1]?.line ?? 0;

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-200 my-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <p className="text-[13px] font-medium text-gray-600">Revenue Growth</p>
        <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
          ${currentMonthRevenue.toLocaleString()} This Month
        </span>
      </div>

      {isLoading ? (
        <p className="text-sm text-gray-400 py-16 text-center">Loading…</p>
      ) : (
        <ChartContainer config={chartConfig} className="aspect-auto h-[200px] w-full">
          <ComposedChart
            data={processedData}
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
              tickCount={4}
              domain={[0, maxValue]}
              tickFormatter={(v) => `$${v}`}
            />

            <ChartTooltip cursor={{ fill: "#FAFAFA" }} content={<ChartTooltipContent />} />

            <Bar
              dataKey="barNormal"
              name="barNormal"
              fill="#FDE5D9"
              radius={[3, 3, 0, 0]}
              maxBarSize={20}
            />

            <Bar
              dataKey="barHighlight"
              name="barHighlight"
              fill="#F86432"
              radius={[3, 3, 0, 0]}
              maxBarSize={20}
              stackId="highlight"
            />

            <Line
              dataKey="line"
              type="monotone"
              stroke="#111827"
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
