import { ModuleProgress } from "./instructor-course-module-data";

interface InstructorStudentCourseModulesProps {
  modules: ModuleProgress[];
  overallProgress: number;
  isLoading?: boolean;
}

export const InstructorStudentCourseModules = ({
  modules,
  overallProgress,
  isLoading,
}: InstructorStudentCourseModulesProps) => {
  return (
    <div className="w-full my-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold text-[#1f2937]">
          Course module
        </h2>
        <span className="px-3 py-1 bg-[#ffe4e6] text-[#f43f5e] text-sm font-medium rounded-full">
          {overallProgress}% complete
        </span>
      </div>

      {isLoading ? (
        <p className="text-sm text-gray-400 py-6">Loading…</p>
      ) : modules.length === 0 ? (
        <p className="text-sm text-gray-400 py-6">No modules for this course yet</p>
      ) : (
        <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {modules.map((mod) => (
            <InstructorStudentCourseModuleCard key={mod.id} module={mod} />
          ))}
        </div>
      )}
    </div>
  );
};

const InstructorStudentCourseModuleCard = ({ module: mod }: { module: ModuleProgress }) => {
  return (
    <div className="flex flex-col justify-between gap-6 p-5 rounded-xl border border-gray-100 bg-white min-w-[260px] md:min-w-0">
      <h3 className="text-gray-500 font-semibold">{mod.title}</h3>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${mod.progress}%`, backgroundColor: mod.accentColor }}
          />
        </div>
        <span className="font-semibold text-lg" style={{ color: mod.accentColor }}>
          {mod.progress}%
        </span>
      </div>

      <div className="flex items-start">
        <span
          className="px-3 py-1.5 text-xs font-medium rounded-full"
          style={{ color: mod.accentColor, backgroundColor: mod.bgColor }}
        >
          {mod.status}
        </span>
      </div>
    </div>
  );
};
