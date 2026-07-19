import { ChevronDown, ChevronUp, MonitorPlay, Lock, Folder } from "lucide-react";
import { useState } from "react";
import { ModuleWithLessons } from "@/lib/api/endpoints/lessons";

function formatDuration(totalSeconds: number): string {
  if (!totalSeconds) return "0min";
  const minutes = Math.round(totalSeconds / 60);
  if (minutes < 60) return `${minutes}min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
}

function moduleDurationSeconds(mod: ModuleWithLessons): number {
  return mod.lessons.reduce((sum, lesson) => sum + (lesson.duration ?? 0), 0);
}

interface CourseContentAccordionProps {
  modules?: ModuleWithLessons[];
  activeLessonId?: string;
  onSelectLesson?: (lessonId: string) => void;
  isLoading?: boolean;
}

export const CourseContentAccordion = ({
  modules = [],
  activeLessonId,
  onSelectLesson,
  isLoading,
}: CourseContentAccordionProps) => {
  const [openSections, setOpenSections] = useState<string[]>(
    modules[0] ? [modules[0]._id] : [],
  );

  const toggleSection = (id: string) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((secId) => secId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
        No content has been added to this course yet.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full overflow-y-auto bg-gray-50/30">
      {modules.map((mod) => {
        const isOpen = openSections.includes(mod._id) || modules.length === 1;
        const completedCount = mod.lessons.filter((l) => l.isCompleted).length;

        return (
          <div key={mod._id} className="border-b border-gray-200">
            {/* Header */}
            <button
              onClick={() => toggleSection(mod._id)}
              className="w-full flex items-center justify-between px-6 py-5 bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex flex-col text-left">
                <span className="font-semibold text-gray-900 text-[15px]">{mod.title}</span>
                <span className="text-sm text-gray-500 mt-0.5">
                  {completedCount}/{mod.lessons.length} | {formatDuration(moduleDurationSeconds(mod))}
                </span>
              </div>
              {isOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </button>

            {/* Content */}
            {isOpen && mod.lessons.length > 0 && (
              <div className="flex flex-col">
                {mod.lessons.map((lesson) => {
                  const isLocked = lesson.isLocked && !lesson.isFreePreview;
                  const isActive = lesson._id === activeLessonId;

                  return (
                    <button
                      key={lesson._id}
                      disabled={isLocked}
                      onClick={() => onSelectLesson?.(lesson._id)}
                      className={`flex items-center justify-between p-4 px-6 border-l-4 text-left transition-colors disabled:cursor-not-allowed ${
                        isActive
                          ? "border-[#F86432] bg-[#FEECE5]/40"
                          : lesson.isCompleted
                            ? "border-transparent bg-[#DCDFEA]/50"
                            : "border-transparent bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {isLocked ? (
                          <div className="mt-0.5 text-gray-400">
                            <Lock size={16} />
                          </div>
                        ) : lesson.isCompleted ? (
                          <div className="mt-0.5 text-[#F86432]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="#F86432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4" stroke="white"/></svg>
                          </div>
                        ) : (
                          <div className="mt-0.5 text-gray-400">
                            <MonitorPlay size={18} />
                          </div>
                        )}

                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium text-gray-800">{lesson.title}</span>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                            <MonitorPlay size={14} />
                            <span>{formatDuration(lesson.duration ?? 0)}</span>
                          </div>
                        </div>
                      </div>

                      {lesson.materials.length > 0 && (
                        <span className="flex items-center gap-1 text-[11px] text-[#F86432] border border-[#F86432]/30 rounded-md px-2 py-1">
                          <Folder size={12} />
                          Resources
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
