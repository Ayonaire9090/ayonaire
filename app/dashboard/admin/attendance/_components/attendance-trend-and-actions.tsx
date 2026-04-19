"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  TrendingUp,
  Upload,
  UserSquare,
  ChevronDown,
} from "lucide-react";

// --- Data ---

const attendanceData = [
  { day: "Mon", attendance: 75 },
  { day: "Tue", attendance: 90 },
  { day: "Wed", attendance: 80 },
  { day: "Thu", attendance: 100 }, // Thursday is the active solid block
  { day: "Fri", attendance: 85 },
  { day: "Sat", attendance: 70 },
];

const quickActionsData = [
  {
    title: "Detailed Attendance",
    description: "View full history & logs",
    icon: UserSquare,
    iconBg: "bg-[#FFF5F0] text-[#F86432]",
  },
  {
    title: "Approve Pending",
    description: "4 logs awaiting review",
    icon: ClipboardCheck,
    iconBg: "bg-[#EEF4FF] text-[#3B82F6]",
  },
  {
    title: "Generate report",
    description: "Export weekly summery",
    icon: TrendingUp,
    iconBg: "bg-[#ECFDF3] text-[#10B981]",
  },
  {
    title: "Export Attendance",
    description: "Export weekly summery",
    icon: Upload,
    iconBg: "bg-[#ECFDF3] text-[#10B981]",
  },
];

// --- Chart Configuration ---

const chartConfig = {
  attendance: {
    label: "Attendance",
    color: "#F86432",
  },
} satisfies ChartConfig;

const PATTERN_ID = "attendance-hatch-pattern";
const BAR_RADIUS = 8;
const SOLID_COLOR = "#F86432";
const HATCH_FILL = `url(#${PATTERN_ID})`;

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

function AttendanceTooltipContent({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value?: number; payload?: { day?: string } }>;
}) {
  if (!active || !payload?.length) return null;
  const value = payload[0].value;

  return (
    <div className="rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-lg">
      {value}%
    </div>
  );
}

// --- Components ---

const AttendanceTrendChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(3); // Set 'Thu' (index 3) as active by default based on mockup

  return (
    <div className="rounded-[16px] p-4 space-y-4 bg-white border border-gray-100 shadow-xs h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[20px] lg:text-[22px] font-bold text-gray-900 tracking-tight">
            Weekly Attendance Trend
          </h2>
          <ChevronDown className="size-4 text-gray-400 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 text-[14px]">
          <Badge
            variant="outline"
            className="text-[#F86432] border-none bg-[#FFF5F0] rounded-full px-2 py-0.5 font-medium"
          >
            +12%
          </Badge>
          <span className="text-gray-500 font-medium">
            Daily attendance percentage for the last 6 days
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-[300px]">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-full w-full"
        >
          <BarChart
            data={attendanceData}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
            onMouseLeave={() => setActiveIndex(3)} // Return to Thursday by default
          >
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
                  strokeWidth="2.5"
                  strokeOpacity="0.4"
                />
              </pattern>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray=""
              stroke="#f3f4f6"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 13, fontWeight: 500 }}
              dy={12}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6b7280", fontSize: 13, fontWeight: 500 }}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
            />

            <ChartTooltip
              cursor={false}
              content={<AttendanceTooltipContent />}
            />

            <Bar
              dataKey="attendance"
              shape={(props: unknown) => (
                <RoundedBar {...(props as Record<string, unknown>)} />
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              barSize={50}
            >
              {attendanceData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={activeIndex === index ? SOLID_COLOR : HATCH_FILL}
                  className="transition-all duration-300 cursor-pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </div>

      <div className="pt-2">
        <button className="text-[#F86432] text-[14px] font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
          View Detailed Report <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
};

const QuickActionsList = () => {
  return (
    <div className="rounded-[16px] bg-white border border-gray-100 shadow-xs h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-6 pt-7 pb-4">
        <CalendarClock className="size-[22px] text-[#F86432]" />
        <h3 className="text-[20px] font-bold text-gray-900 tracking-tight">
          Quick Actions
        </h3>
      </div>

      {/* Action Items */}
      <div className="flex flex-col flex-1 pb-2">
        {quickActionsData.map((action, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between px-6 py-4.5 hover:bg-gray-50/50 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${action.iconBg}`}>
                  <action.icon className="size-5" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900 group-hover:text-[#F86432] transition-colors text-[15px] leading-snug">
                    {action.title}
                  </p>
                  <p className="text-[13.5px] text-gray-500 mt-1">
                    {action.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="size-4.5 text-gray-400 group-hover:text-gray-700 transition-colors" />
            </div>
            {index !== quickActionsData.length - 1 && (
              <div className="mx-6 border-b-2 border-gray-200/80" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const AttendanceTrendAndActions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 w-full -mt-2">
      {/* Attendance Trend */}
      <div className="w-full h-full min-h-[450px]">
        <AttendanceTrendChart />
      </div>

      {/* Quick Actions */}
      <div className="w-full h-full">
        <QuickActionsList />
      </div>
    </div>
  );
};
