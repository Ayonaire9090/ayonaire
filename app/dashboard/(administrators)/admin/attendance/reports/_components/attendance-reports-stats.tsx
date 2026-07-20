"use client";

import { useGetAttendanceReport } from "@/hooks/api/use-attendance";

export const AttendanceReportsStats = () => {
  const { data } = useGetAttendanceReport();
  const entries = data?.data ?? [];

  const rates = entries.map((e) => e.attendanceRate);
  const avg = rates.length > 0 ? Math.round(rates.reduce((a, b) => a + b, 0) / rates.length) : 0;
  const highest = rates.length > 0 ? Math.max(...rates) : 0;
  const lowest = rates.length > 0 ? Math.min(...rates) : 0;

  const stats = [
    { title: "Total Students", description: String(entries.length), color: "text-black" },
    { title: "Avg Attendance", description: `${avg}%`, color: "text-[#197FE6]" },
    { title: "Highest Attendance", description: `${highest}%`, color: "text-[#009F42]" },
    { title: "Lowest Attendance", description: `${lowest}%`, color: "text-[#EF4444]" },
    { title: "Absenteeism", description: `${entries.length > 0 ? 100 - avg : 0}%`, color: "text-[#F59E0B]" },
  ];

  return (
    <div className="flex flex-row items-center gap-3 overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-x-hidden py-3 lg:py-5">
      {stats.map((stat, index) => (
        <AttendanceReportCard
          key={index}
          title={stat.title}
          description={stat.description}
          color={stat.color}
        />
      ))}
    </div>
  );
};

interface AttendanceReportCardProps {
  title?: string;
  description?: string;
  color?: string;
}
const AttendanceReportCard = ({
  title,
  description,
  color = "text-black",
}: AttendanceReportCardProps) => {
  return (
    <div className="flex flex-col min-w-[200px] h-[100px] lg:w-full lg:h-full p-3 rounded-xl justify-center items-center gap-4 bg-white">
      <h1 className={"text-[16px]"}>{title}</h1>
      <p className={`${color} font-bold text-[24px]`}>{description}</p>
    </div>
  );
};
