import { Badge } from "@/components/ui/badge";

const modulesData = [
  {
    title: "Python module",
    progress: 100,
    status: "Completed",
    accentColor: "#10b981", // green
    bgColor: "#d1fae5",
  },
  {
    title: "SQL module",
    progress: 80,
    status: "Almost completed",
    accentColor: "#f97316", // orange
    bgColor: "#ffedd5",
  },
  {
    title: "Data Analytics module",
    progress: 60,
    status: "In progress",
    accentColor: "#3b82f6", // blue
    bgColor: "#dbeafe",
  },
  {
    title: "AI Engineering",
    progress: 30,
    status: "Started",
    accentColor: "#a855f7", // purple
    bgColor: "#f3e8ff",
  },
];

export const InstructorStudentCourseModules = () => {
  return (
    <div className="w-full my-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-[#1f2937]">
          Course module
        </h2>
        <span className="px-3 py-1 bg-[#ffe4e6] text-[#f43f5e] text-sm font-medium rounded-full">
          Active learning
        </span>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {modulesData.map((mod, idx) => (
          <InstructorStudentCourseModuleCard
            key={idx}
            title={mod.title}
            progress={mod.progress}
            status={mod.status}
            accentColor={mod.accentColor}
            bgColor={mod.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

interface InstructorStudentCourseModuleCardProps {
  title: string;
  progress: number;
  status?: string;
  accentColor: string;
  bgColor: string;
}

const InstructorStudentCourseModuleCard = ({
  title,
  progress,
  status,
  accentColor,
  bgColor,
}: InstructorStudentCourseModuleCardProps) => {
  return (
    <div className="flex flex-col justify-between gap-6 p-5 rounded-xl border border-gray-100 bg-white min-w-[260px] md:min-w-0">
      <h3 className="text-gray-500 font-semibold">{title}</h3>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${progress}%`, backgroundColor: accentColor }}
          />
        </div>
        <span className="font-semibold text-lg" style={{ color: accentColor }}>
          {progress}%
        </span>
      </div>

      <div className="flex items-start">
        {status && (
          <span
            className="px-3 py-1.5 text-xs font-medium rounded-full"
            style={{ color: accentColor, backgroundColor: bgColor }}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  );
};
