"use client";

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  Rectangle,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const revenueData = [
  { month: "Jan", revenue: 150 },
  { month: "Feb", revenue: 350 },
  { month: "Mar", revenue: 250 },
  { month: "Apr", revenue: 420 },
  { month: "May", revenue: 140 },
  { month: "Jun", revenue: 250 },
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
      ${value?.toLocaleString()}
    </div>
  );
}

export const AdminDashboardRevenueAnalytics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="rounded-[16px]! px-5 py-5 space-y-4 bg-white shadow-sm">
      {/* Header */}
      <div className="space-y-1">
        <p className="text-2xl font-semibold">Revenue (Monthly)</p>
        <p className="text-2xl font-bold tabular-nums tracking-tight">10,213</p>
        <div className="flex items-center gap-1.5 text-sm">
          <Badge
            variant="outline"
            className="text-primary border-0! border-none! bg-[#F86432]/10 rounded-full!"
          >
            +12%
          </Badge>
          <span className="text-muted-foreground">from last month</span>
        </div>
      </div>

      {/* Chart */}
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-[250px] w-full"
      >
        <BarChart
          data={revenueData}
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
            {revenueData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={activeIndex === index ? SOLID_COLOR : HATCH_FILL}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};
