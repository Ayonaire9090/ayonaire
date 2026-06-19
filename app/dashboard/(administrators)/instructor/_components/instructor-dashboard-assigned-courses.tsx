import React from "react";

interface Course {
  id: string;
  title: string;
  status: "Ongoing" | "Draft";
  progress?: number;
  studentsCount?: number;
  lastEdited?: string;
  actionLabel: string;
}

const assignedCourses: Course[] = [
  {
    id: "1",
    title: "Advanced UI Design",
    status: "Ongoing",
    progress: 88,
    studentsCount: 124,
    actionLabel: "Manage",
  },
  {
    id: "2",
    title: "Digital Marketing 101",
    status: "Ongoing",
    progress: 33,
    studentsCount: 458,
    actionLabel: "Manage",
  },
  {
    id: "3",
    title: "User Research Methods",
    status: "Draft",
    lastEdited: "Last edited 2 days ago",
    actionLabel: "Continue",
  },
];

export const InstructorDashboardAssignedCourses = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden flex flex-col h-full border border-gray-100/80">
      {/* Header */}
      <div className="px-5 py-4 bg-[#FFF5F1] border-b border-[#F86432]/10">
        <h3 className="text-lg font-bold text-gray-900">
          Assigned Courses
        </h3>
      </div>

      {/* Courses List */}
      <div className="flex flex-col divide-y divide-gray-100 flex-1">
        {assignedCourses.map((course) => (
          <div
            key={course.id}
            className="p-5 flex flex-col gap-3 hover:bg-gray-50/40 transition-colors"
          >
            {/* Row 1: Title & Status */}
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-gray-900 tracking-tight">
                {course.title}
              </h4>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF0EB] text-[#F86432]">
                {course.status}
              </span>
            </div>

            {/* Row 2: Progress & Action OR Last Edited & Action */}
            {course.status === "Ongoing" && course.progress !== undefined ? (
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-4">
                  {/* Progress Bar */}
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        course.id === "1" ? "bg-[#F86432]" : "bg-[#10B981]"
                      }`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  {/* Percentage & Action */}
                  <div className="flex items-center gap-3 min-w-[110px] justify-end">
                    <span
                      className={`text-2xl font-bold tracking-tight tabular-nums ${
                        course.id === "1" ? "text-[#F86432]" : "text-[#10B981]"
                      }`}
                    >
                      {course.progress}%
                    </span>
                    <button className="text-gray-500 hover:text-gray-900 text-sm font-semibold transition-colors cursor-pointer">
                      {course.actionLabel}
                    </button>
                  </div>
                </div>
                {/* Student Count */}
                <div className="text-xs text-gray-400 font-medium">
                  {course.studentsCount} Students
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-400 font-medium">
                  {course.lastEdited}
                </span>
                <button className="text-gray-500 hover:text-gray-900 text-sm font-semibold transition-colors cursor-pointer">
                  {course.actionLabel}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
