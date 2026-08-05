"use client";

import React, { useMemo } from "react";
import {
  ComposedChart,
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  useInstructorAnalytics,
  getMonthlyRevenue,
  useInstructorEngagementTrend,
  useInstructorQuizScoreTrend,
} from "./instructor-analytics-data";
import { useInstructorStudentRoster } from "../../students-management/_components/instructor-student-data";

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

  const revenueData = useMemo(() => getMonthlyRevenue(payments, 6), [payments]);

  const statusCounts = useMemo(() => {
    const counts = { Completed: 0, "In Progress": 0, Enrolled: 0 };
    students.forEach((s) => {
      counts[s.status] += 1;
    });
    return counts;
  }, [students]);

  const engagementData = [
    { name: "Completed", value: statusCounts.Completed, fill: "#f97316" },
    { name: "In Progress", value: statusCounts["In Progress"], fill: "#fdba74" },
    { name: "Enrolled", value: statusCounts.Enrolled, fill: "#fed7aa" },
  ].filter((d) => d.value > 0);

  const totalTrackedStudents = students.length;
  const completionPercent =
    totalTrackedStudents > 0
      ? Math.round((statusCounts.Completed / totalTrackedStudents) * 100)
      : 0;

  return (
    <div className="flex flex-col gap-6 py-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Course Completion Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900">
            Enrollment vs Completion
          </h3>
          <p className="text-sm text-gray-500 mt-1">Top courses by enrollment</p>
        </div>
        <div className="flex-1 w-full h-[250px]">
          {courseCompletionData.length === 0 ? (
            <EmptyChartState isLoading={isLoading} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={courseCompletionData}
                margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 13 }}
                  dy={15}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 13 }}
                />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="bar" name="Enrolled" barSize={45} radius={10}>
                  {courseCompletionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#f97316" : "#e5e7eb"}
                    />
                  ))}
                </Bar>
                <Line
                  type="linear"
                  dataKey="line"
                  name="Completed"
                  stroke="#000000"
                  strokeWidth={2.5}
                  dot={{ stroke: "#000", strokeWidth: 2.5, fill: "#fff", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900">Revenue (Monthly)</h3>
          <p className="text-sm text-gray-500 mt-1">Last 6 months</p>
        </div>
        <div className="flex-1 w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              margin={{ top: 30, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f3f4f6"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 13 }}
                dy={15}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 13 }}
              />
              <Tooltip cursor={{ fill: "transparent" }} formatter={(v: number) => `$${v.toLocaleString()}`} />
              <Bar dataKey="value" name="Revenue" barSize={45} radius={10} fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Student Status Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Student Status
            </h3>
            <p className="text-sm text-gray-500 mt-1">Across all your courses</p>
          </div>
          <div className="flex flex-col gap-2.5">
            {engagementData.map((d) => (
              <div key={d.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: d.fill }}
                ></span>
                <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                  {d.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full h-[250px] relative flex justify-center items-center">
          {engagementData.length === 0 ? (
            <EmptyChartState isLoading={isLoading} />
          ) : (
            <>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={engagementData}
                    innerRadius={80}
                    outerRadius={105}
                    paddingAngle={4}
                    dataKey="value"
                    cornerRadius={12}
                    stroke="none"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {engagementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-extrabold text-[#0B251C]">
                  {completionPercent}%
                </span>
                <span className="text-sm text-gray-500 font-medium mt-1">
                  Completed
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Engagement Trend Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900">Engagement Trend</h3>
          <p className="text-sm text-gray-500 mt-1">New enrollments, last 6 months</p>
        </div>
        <div className="flex-1 w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={engagementTrend}
              margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 13 }}
                dy={15}
              />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6b7280", fontSize: 13 }} />
              <Tooltip cursor={{ stroke: "#f3f4f6" }} formatter={(v: number) => `${v} enrollments`} />
              <Line
                type="monotone"
                dataKey="value"
                name="Enrollments"
                stroke="#f97316"
                strokeWidth={2.5}
                dot={{ stroke: "#f97316", strokeWidth: 2.5, fill: "#fff", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
          {engagementLoading && engagementTrend.every((d) => d.value === 0) && (
            <p className="text-center text-sm text-gray-400 -mt-[130px]">Loading…</p>
          )}
        </div>
      </div>

      {/* Avg Quiz Score Trend Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900">Avg. Quiz Score Trend</h3>
          <p className="text-sm text-gray-500 mt-1">Average score by completion month</p>
        </div>
        <div className="flex-1 w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={quizScoreTrend}
              margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 13 }}
                dy={15}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 13 }}
                domain={[0, 100]}
              />
              <Tooltip cursor={{ stroke: "#f3f4f6" }} formatter={(v: number) => `${v}%`} />
              <Line
                type="monotone"
                dataKey="value"
                name="Avg Score"
                stroke="#000000"
                strokeWidth={2.5}
                dot={{ stroke: "#000", strokeWidth: 2.5, fill: "#fff", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
          {quizScoreLoading && quizScoreTrend.every((d) => d.value === 0) && (
            <p className="text-center text-sm text-gray-400 -mt-[130px]">Loading…</p>
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
