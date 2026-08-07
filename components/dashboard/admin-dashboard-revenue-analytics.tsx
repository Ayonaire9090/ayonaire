"use client";

import { useMemo } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useGetPaymentAnalytics } from "@/hooks/api/use-payments";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#F86432",
  },
} satisfies ChartConfig;

function RevenueTooltipFormatter(value: unknown, name: unknown) {
  return (
    <div className="flex w-full items-center justify-between gap-3">
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-[#F86432]" />
        {String(name)}
      </span>
      <span className="font-mono font-medium tabular-nums text-foreground">
        NGN {Number(value).toLocaleString()}
      </span>
    </div>
  );
}

export const AdminDashboardRevenueAnalytics = () => {
  const { data } = useGetPaymentAnalytics();
  const analytics = data?.data;

  const chartData = useMemo(() => {
    const monthly = analytics?.monthlyRevenue ?? [];
    return [...monthly]
      .sort((a, b) => a.year - b.year || a.month - b.month)
      .slice(-6)
      .map((entry) => ({
        month: MONTH_LABELS[entry.month - 1] ?? String(entry.month),
        revenue: entry.revenue,
      }));
  }, [analytics]);

  return (
    <div className="rounded-xl border border-gray-200 p-5 bg-white">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <p className="text-[13px] font-medium text-gray-600">Revenue (Monthly)</p>
        <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
          NGN {(analytics?.totalRevenue ?? 0).toLocaleString()}
        </span>
      </div>

      {/* Chart */}
      {chartData.length === 0 ? (
        <div className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
          No revenue data yet
        </div>
      ) : (
        <ChartContainer config={chartConfig} className="aspect-auto h-[200px] w-full">
          <AreaChart data={chartData} margin={{ top: 5, right: 0, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="admin-revenue-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F86432" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#F86432" stopOpacity={0} />
              </linearGradient>
            </defs>

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
              domain={[0, "auto"]}
            />

            <ChartTooltip
              cursor={{ stroke: "#e5e7eb", strokeDasharray: "3 3" }}
              content={<ChartTooltipContent formatter={RevenueTooltipFormatter} />}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#F86432"
              strokeWidth={1.75}
              fill="url(#admin-revenue-fill)"
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      )}
    </div>
  );
};
