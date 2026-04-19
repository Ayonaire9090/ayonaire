const mockAttendanceReportsStats = [
  {
    title: "Total Students",
    description: "120",
    color: "text-black",
  },
  {
    title: "Avg Attendance",
    description: "86%",
    color: "text-[#197FE6]",
  },
  {
    title: "Highest Attendance",
    description: "98%",
    color: "text-[#009F42]",
  },
  {
    title: "Lowest Attendance",
    description: "55%",
    color: "text-[#EF4444]",
  },
  {
    title: "Absenteeism",
    description: "14%",
    color: "text-[#F59E0B]",
  },
];

export const AttendanceReportsStats = () => {
  return (
    <div className="flex flex-row items-center gap-3 overflow-x-auto lg:grid lg:grid-cols-5 lg:overflow-x-hidden py-3 lg:py-5">
      {mockAttendanceReportsStats.map((stat, index) => (
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
