"use client";

import React from "react";
import {
  ComposedChart,
  BarChart,
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
  LabelList,
} from "recharts";

const courseCompletionData = [
  { name: "Mon", bar: 1000, line: 700 },
  { name: "Tue", bar: 900, line: 450 },
  { name: "Wed", bar: 650, line: 400 },
  { name: "Thu", bar: 820, line: 550 },
  { name: "Fri", bar: 950, line: 500 },
];

const revenueData = [
  { name: "Jan", value: 160 },
  { name: "Feb", value: 360 },
  { name: "Mar", value: 280 },
  { name: "Apr", value: 400, tooltip: "$27,632" },
  { name: "May", value: 160 },
  { name: "Jun", value: 280 },
];

const engagementData = [
  { name: "Quizzes", value: 35, fill: "#f97316" },
  { name: "Video Views 1", value: 25, fill: "#fdba74" },
  { name: "Video Views 2", value: 20, fill: "#fed7aa" },
  { name: "Video Views 3", value: 20, fill: "#ffedd5" },
];

const renderCustomBarLabel = (props: any) => {
  const { x, y, width, value, index } = props;
  if (revenueData[index].name === "Apr") {
    return (
      <g transform={`translate(${x + width / 2}, ${y - 15})`}>
        <rect x={-30} y={-12} width={60} height={24} fill="#000" rx={6} />
        <text
          x={0}
          y={0}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={10}
          fontWeight="bold"
        >
          {revenueData[index].tooltip}
        </text>
      </g>
    );
  }
  return null;
};

export const InstructorMainStudentOverviewAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-4">
      {/* Course Completion Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900">Course Completion</h3>
          <p className="text-sm text-gray-500 mt-1">Last 7 days</p>
        </div>
        <div className="flex-1 w-full h-[250px]">
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
                tickFormatter={(val) => (val === 1000 ? "1K" : val)}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="bar" barSize={45} radius={10}>
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
                stroke="#000000"
                strokeWidth={2.5}
                dot={{ stroke: "#000", strokeWidth: 2.5, fill: "#fff", r: 6 }}
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900">Revenue (Monthly)</h3>
          <p className="text-sm text-gray-500 mt-1">Last 8 month</p>
        </div>
        <div className="flex-1 w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              margin={{ top: 30, right: 0, left: -20, bottom: 0 }}
            >
              <defs>
                <pattern
                  id="diagonalStripes"
                  width="8"
                  height="8"
                  patternTransform="rotate(45)"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="8" height="8" fill="#ffffff" />
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="8"
                    stroke="#fb923c"
                    strokeWidth="4"
                  />
                </pattern>
              </defs>
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
              <Bar dataKey="value" barSize={45} radius={10}>
                <LabelList dataKey="value" content={renderCustomBarLabel} />
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.name === "Apr" ? "#f97316" : "url(#diagonalStripes)"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement Trend Chart */}
      <div className="bg-white p-5 lg:p-6 rounded-xl border border-gray-100 flex flex-col h-full min-h-[350px]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Engagement Trend
            </h3>
            <p className="text-sm text-gray-500 mt-1">Last 4 Weeks</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#fed7aa]"></span>
              <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                Video Views
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f97316]"></span>
              <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                Quizzes
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-[250px] relative flex justify-center items-center">
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
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-4xl font-extrabold text-[#0B251C]">92%</span>
            <span className="text-sm text-gray-500 font-medium mt-1">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
