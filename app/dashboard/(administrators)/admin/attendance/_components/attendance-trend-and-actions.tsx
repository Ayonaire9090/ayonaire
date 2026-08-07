"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  TrendingUp,
  Upload,
  UserSquare,
} from "lucide-react";
import { useGetAttendanceSessions } from "@/hooks/api/use-attendance";

// --- Data ---

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

function AttendanceTooltipFormatter(value: unknown) {
  return (
    <div className="flex w-full items-center justify-between gap-3">
      <span className="flex items-center gap-1.5 text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-[#F86432]" />
        Attendance
      </span>
      <span className="font-mono font-medium tabular-nums text-foreground">{Number(value)}%</span>
    </div>
  );
}

// --- Components ---

const AttendanceTrendChart = () => {
  const { data, isLoading } = useGetAttendanceSessions({ limit: 6 });

  const attendanceData = [...(data?.sessions ?? [])]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((session) => ({
      day: new Date(session.date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      attendance: Math.round(session.attendanceRate),
    }));

  const lastIndex = attendanceData.length - 1;

  if (isLoading) {
    return (
      <div className="rounded-xl p-5 bg-white border border-gray-200 h-full flex items-center justify-center min-h-[280px]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (attendanceData.length === 0) {
    return (
      <div className="rounded-xl p-5 bg-white border border-gray-200 h-full flex items-center justify-center min-h-[280px] text-gray-400 text-[15px]">
        No attendance sessions recorded yet.
      </div>
    );
  }

  const latestAttendance = attendanceData[lastIndex].attendance;

  return (
    <div className="rounded-xl p-5 space-y-1 bg-white border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <p className="text-[13px] font-medium text-gray-600">Weekly Attendance Trend</p>
        <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
          {latestAttendance}% Latest
        </span>
      </div>
      <p className="text-[11px] text-gray-400 mb-3">
        Attendance rate across the last {attendanceData.length} session
        {attendanceData.length === 1 ? "" : "s"}
      </p>

      {/* Chart */}
      <div className="flex-1 min-h-[200px]">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-full w-full"
        >
          <BarChart
            data={attendanceData}
            margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical horizontal={false} strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              dy={8}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af", fontSize: 11 }}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
            />

            <ChartTooltip
              cursor={{ fill: "#FAFAFA" }}
              content={<ChartTooltipContent formatter={AttendanceTooltipFormatter} />}
            />

            <Bar dataKey="attendance" name="Attendance" fill="#F86432" radius={[3, 3, 0, 0]} maxBarSize={28} />
          </BarChart>
        </ChartContainer>
      </div>

      <div className="pt-2">
        <button className="text-[#F86432] text-[13px] font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
          View Detailed Report <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
};

const QuickActionsList = () => {
  return (
    <div className="rounded-xl bg-white border border-gray-200 h-full flex flex-col">
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
      <div className="w-full h-full min-h-[400px]">
        <AttendanceTrendChart />
      </div>

      {/* Quick Actions */}
      <div className="w-full h-full">
        <QuickActionsList />
      </div>
    </div>
  );
};
