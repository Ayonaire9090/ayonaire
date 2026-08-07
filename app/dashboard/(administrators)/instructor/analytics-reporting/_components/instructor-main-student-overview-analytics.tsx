"use client";

import React, { useMemo } from "react";
import {
  ComposedChart,
  BarChart,
  AreaChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import {
  useInstructorAnalytics,
  getMonthlyRevenue,
  useInstructorEngagementTrend,
  useInstructorQuizScoreTrend,
} from "./instructor-analytics-data";
import { useInstructorStudentRoster } from "../../students-management/_components/instructor-student-data";

const chartConfig = {
  value: { label: "Value", color: "#F86432" },
} satisfies ChartConfig;

function dashedGrid() {
  return <CartesianGrid vertical horizontal={false} strokeDasharray="3 3" stroke="#e5e7eb" />;
}

const axisTick = { fill: "#9ca3af", fontSize: 11 };

export const InstructorMainStudentOverviewAnalytics = () => {
  const { perCourse, payments, isLoading } = useInstructorAnalytics();
  const { students } = useInstructorStudentRoster();
  const { trend: engagementTrend, isLoading: engagementLoading } = useInstructorEngagementTrend(6);
  const { trend: quizScoreTrend, isLoading: quizScoreLoading } = useInstructorQuizScoreTrend(6);

  // Per-course enrollment vs. completion - there's no daily completion
  // event log, so "last 7 days" is replaced with real per-course figures
  // (top 5 courses by enrollment).
  const courseCompletionData = useMemo(
    () =>
      [...perCourse]
        .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
        .slice(0, 5)
        .map((c) => ({
          name: c.course.title.length > 12 ? `${c.course.title.slice(0, 12)}…` : c.course.title,
          bar: c.enrollmentCount,
          line: c.completionCount,
        })),
    [perCourse],
  );

  const totalEnrolled = courseCompletionData.reduce((sum, c) => sum + c.bar, 0);

  const revenueData = useMemo(() => getMonthlyRevenue(payments, 6), [payments]);
  const totalRevenue = revenueData.reduce((sum, d) => sum + d.value, 0);

  const statusCounts = useMemo(() => {
    const counts = { Completed: 0, "In Progress": 0, Enrolled: 0 };
    students.forEach((s) => {
      counts[s.status] += 1;
    });
    return counts;
  }, [students]);

  const engagementData = [
    { name: "Completed", value: statusCounts.Completed, fill: "#F86432" },
    { name: "In Progress", value: statusCounts["In Progress"], fill: "#FBB489" },
    { name: "Enrolled", value: statusCounts.Enrolled, fill: "#FDE5D9" },
  ].filter((d) => d.value > 0);

  const totalTrackedStudents = students.length;
  const completionPercent =
    totalTrackedStudents > 0
      ? Math.round((statusCounts.Completed / totalTrackedStudents) * 100)
      : 0;

  const latestEngagement = engagementTrend[engagementTrend.length - 1]?.value ?? 0;
  const latestQuizScore = quizScoreTrend[quizScoreTrend.length - 1]?.value ?? 0;

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Course Completion Chart */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col h-full min-h-[280px]">
          <div className="flex items-start justify-between gap-3 mb-4">
            <p className="text-[13px] font-medium text-gray-600">Enrollment vs Completion</p>
            <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
              {totalEnrolled} Enrolled
            </span>
          </div>
          <div className="flex-1 w-full h-[200px]">
            {courseCompletionData.length === 0 ? (
              <EmptyChartState isLoading={isLoading} />
            ) : (
              <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
                <ComposedChart
                  data={courseCompletionData}
                  margin={{ top: 5, right: 0, left: -20, bottom: 0 }}
                >
                  {dashedGrid()}
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTick} dy={8} />
                  <YAxis axisLine={false} tickLine={false} tick={axisTick} />
                  <ChartTooltip cursor={{ fill: "#FAFAFA" }} content={<ChartTooltipContent />} />
                  <Bar dataKey="bar" name="Enrolled" fill="#F86432" radius={[3, 3, 0, 0]} maxBarSize={22} />
                  <Line
                    type="linear"
                    dataKey="line"
                    name="Completed"
                    stroke="#111827"
                    strokeWidth={1.75}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </ComposedChart>
              </ChartContainer>
            )}
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col h-full min-h-[280px]">
          <div className="flex items-start justify-between gap-3 mb-4">
            <p className="text-[13px] font-medium text-gray-600">Revenue (Monthly)</p>
            <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
              ${totalRevenue.toLocaleString()}
            </span>
          </div>
          <div className="flex-1 w-full h-[200px]">
            <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
              <BarChart data={revenueData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                {dashedGrid()}
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTick} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={axisTick} />
                <ChartTooltip
                  cursor={{ fill: "#FAFAFA" }}
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => (
                        <div className="flex w-full items-center justify-between gap-3">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="h-2 w-2 rounded-full bg-[#F86432]" />
                            {String(name)}
                          </span>
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            ${Number(value).toLocaleString()}
                          </span>
                        </div>
                      )}
                    />
                  }
                />
                <Bar dataKey="value" name="Revenue" fill="#F86432" radius={[3, 3, 0, 0]} maxBarSize={22} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Student Status Chart */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col h-full min-h-[280px]">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[13px] font-medium text-gray-600">Student Status</p>
            <div className="flex flex-col gap-1.5">
              {engagementData.map((d) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.fill }} />
                  <span className="text-[11px] text-gray-500 whitespace-nowrap">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full h-[200px] relative flex justify-center items-center">
            {engagementData.length === 0 ? (
              <EmptyChartState isLoading={isLoading} />
            ) : (
              <>
                <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
                  <PieChart>
                    <Pie
                      data={engagementData}
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={3}
                      dataKey="value"
                      cornerRadius={6}
                      stroke="none"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  </PieChart>
                </ChartContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-gray-900">{completionPercent}%</span>
                  <span className="text-[11px] text-gray-500 mt-0.5">Completed</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Engagement Trend Chart */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col h-full min-h-[240px]">
          <div className="flex items-start justify-between gap-3 mb-4">
            <p className="text-[13px] font-medium text-gray-600">Engagement Trend</p>
            <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
              {latestEngagement} This Month
            </span>
          </div>
          <div className="flex-1 w-full h-[170px]">
            <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
              <AreaChart data={engagementTrend} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="engagement-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F86432" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#F86432" stopOpacity={0} />
                  </linearGradient>
                </defs>
                {dashedGrid()}
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTick} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={axisTick} />
                <ChartTooltip
                  cursor={{ stroke: "#e5e7eb", strokeDasharray: "3 3" }}
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => (
                        <div className="flex w-full items-center justify-between gap-3">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="h-2 w-2 rounded-full bg-[#F86432]" />
                            {String(name)}
                          </span>
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {Number(value)} enrollments
                          </span>
                        </div>
                      )}
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Enrollments"
                  stroke="#F86432"
                  strokeWidth={1.75}
                  fill="url(#engagement-fill)"
                  dot={false}
                />
              </AreaChart>
            </ChartContainer>
            {engagementLoading && engagementTrend.every((d) => d.value === 0) && (
              <p className="text-center text-sm text-gray-400 -mt-[100px]">Loading…</p>
            )}
          </div>
        </div>

        {/* Avg Quiz Score Trend Chart */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col h-full min-h-[240px]">
          <div className="flex items-start justify-between gap-3 mb-4">
            <p className="text-[13px] font-medium text-gray-600">Avg. Quiz Score Trend</p>
            <span className="text-[13px] font-semibold text-[#F86432] whitespace-nowrap">
              {latestQuizScore}% This Month
            </span>
          </div>
          <div className="flex-1 w-full h-[170px]">
            <ChartContainer config={chartConfig} className="aspect-auto h-full w-full">
              <AreaChart data={quizScoreTrend} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="quiz-score-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#111827" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#111827" stopOpacity={0} />
                  </linearGradient>
                </defs>
                {dashedGrid()}
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={axisTick} dy={8} />
                <YAxis axisLine={false} tickLine={false} tick={axisTick} domain={[0, 100]} />
                <ChartTooltip
                  cursor={{ stroke: "#e5e7eb", strokeDasharray: "3 3" }}
                  content={
                    <ChartTooltipContent
                      formatter={(value, name) => (
                        <div className="flex w-full items-center justify-between gap-3">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="h-2 w-2 rounded-full bg-[#111827]" />
                            {String(name)}
                          </span>
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {Number(value)}%
                          </span>
                        </div>
                      )}
                    />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Avg Score"
                  stroke="#111827"
                  strokeWidth={1.75}
                  fill="url(#quiz-score-fill)"
                  dot={false}
                />
              </AreaChart>
            </ChartContainer>
            {quizScoreLoading && quizScoreTrend.every((d) => d.value === 0) && (
              <p className="text-center text-sm text-gray-400 -mt-[100px]">Loading…</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const EmptyChartState = ({ isLoading }: { isLoading: boolean }) => (
  <div className="h-full w-full flex items-center justify-center text-sm text-gray-400">
    {isLoading ? "Loading…" : "No data yet"}
  </div>
);
