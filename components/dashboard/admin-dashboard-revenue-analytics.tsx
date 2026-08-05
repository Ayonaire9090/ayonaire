"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
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

const PATTERN_ID = "revenue-hatch-pattern";
const BAR_RADIUS = 10;
const SOLID_COLOR = "#F86432";
const HATCH_FILL = `url(#${PATTERN_ID})`;

/* Custom bar shape with rounded top corners */
function RoundedBar(props: unknown) {
  const { x, y, width, height, fill } = props as {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
  };

  if (!height || height <= 0) return null;

  const r = Math.min(BAR_RADIUS, width / 2, height);

  return (
    <path
      d={`
        M ${x},${y + height}
        L ${x},${y + r}
        Q ${x},${y} ${x + r},${y}
        L ${x + width - r},${y}
        Q ${x + width},${y} ${x + width},${y + r}
        L ${x + width},${y + height}
        Z
      `}
      fill={fill}
      stroke="none"
    />
  );
}

/* Custom tooltip */
function RevenueTooltipContent({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value?: number; payload?: { month?: string } }>;
}) {
  if (!active || !payload?.length) return null;

  const value = payload[0].value;

  return (
    <div className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-lg">
      NGN {value?.toLocaleString()}
    </div>
  );
}

export const AdminDashboardRevenueAnalytics = () => {
  const { data } = useGetPaymentAnalytics();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const percentChange = useMemo(() => {
    if (chartData.length < 2) return null;
    const prev = chartData[chartData.length - 2].revenue;
    const current = chartData[chartData.length - 1].revenue;
    if (!prev) return null;
    return ((current - prev) / prev) * 100;
  }, [chartData]);

  return (
    <div className="rounded-[16px]! px-5 py-5 space-y-4 bg-white shadow-sm">
      {/* Header */}
      <div className="space-y-1">
        <p className="text-2xl font-semibold">Revenue (Monthly)</p>
        <p className="text-2xl font-bold tabular-nums tracking-tight">
          NGN {(analytics?.totalRevenue ?? 0).toLocaleString()}
        </p>
        {percentChange !== null && (
          <div className="flex items-center gap-1.5 text-sm">
            <Badge
              variant="outline"
              className="text-primary border-0! border-none! bg-[#F86432]/10 rounded-full!"
            >
              {percentChange >= 0 ? "+" : ""}
              {percentChange.toFixed(1)}%
            </Badge>
            <span className="text-muted-foreground">from last month</span>
          </div>
        )}
      </div>

      {/* Chart */}
      {chartData.length === 0 ? (
        <div className="flex h-[250px] items-center justify-center text-sm text-muted-foreground">
          No revenue data yet
        </div>
      ) : (
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 0, left: -10, bottom: 0 }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* SVG hatched diagonal line pattern */}
            <defs>
              <pattern
                id={PATTERN_ID}
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke={SOLID_COLOR}
                  strokeWidth="3"
                  strokeOpacity="0.6"
                />
              </pattern>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="" stroke="#f0f0f0" />

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
              tickCount={5}
              domain={[0, "auto"]}
            />

            <ChartTooltip cursor={false} content={<RevenueTooltipContent />} />

            <Bar
              dataKey="revenue"
              shape={(props: unknown) => (
                <RoundedBar {...(props as Record<string, unknown>)} />
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={activeIndex === index ? SOLID_COLOR : HATCH_FILL}
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      )}
    </div>
  );
};
