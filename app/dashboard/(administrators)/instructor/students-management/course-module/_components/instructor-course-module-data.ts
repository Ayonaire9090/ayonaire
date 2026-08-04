import { useMemo } from "react";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";
import { useInstructorCourseContent } from "@/hooks/api/use-lessons";

export interface ModuleProgress {
  id: string;
  title: string;
  progress: number;
  completedCount: number;
  totalLessons: number;
  status: string;
  accentColor: string;
  bgColor: string;
}

export type LessonRowStatus = "Completed" | "Not Started";

export interface LessonRow {
  id: string;
  lesson: string;
  status: LessonRowStatus;
}

export const getLessonStatusColor = (status: LessonRowStatus) => {
  switch (status) {
    case "Completed":
      return "bg-[#d1fae5] text-[#10b981]";
    case "Not Started":
      return "bg-[#dbeafe] text-[#3b82f6]";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// There's no "get one student's progress in one course" endpoint for
// instructors. This finds the matching Enrollment record (which carries
// progress/comletedLessons for that student+course pair) via the same
// enrolled-courses listing the roster already relies on, then cross-
// references its completed lesson IDs against the real curriculum
// structure from getInstructorCourseContent (module/lesson titles, no
// progress data of its own - see lessons.ts).
export function useStudentCourseModuleData(studentId?: string, courseId?: string) {
  const enrollmentsQuery = useGetEnrolledCourses();
  const contentQuery = useInstructorCourseContent(courseId ?? "");

  const enrollment = useMemo(() => {
    if (!studentId || !courseId) return undefined;
    return (enrollmentsQuery.data?.data ?? []).find((e) => {
      const sId = typeof e.student === "string" ? e.student : e.student?._id;
      const cId = typeof e.course === "string" ? e.course : e.course?._id;
      return sId === studentId && cId === courseId;
    });
  }, [enrollmentsQuery.data, studentId, courseId]);

  const student =
    enrollment && typeof enrollment.student !== "string" ? enrollment.student ?? null : null;
  const completedLessonIds = useMemo(
    () => new Set(enrollment?.comletedLessons ?? []),
    [enrollment],
  );

  const modules = contentQuery.data?.data?.modules ?? [];

  const moduleProgress: ModuleProgress[] = useMemo(
    () =>
      modules.map((mod) => {
        const total = mod.lessons.length;
        const completed = mod.lessons.filter((l) => completedLessonIds.has(l._id)).length;
        const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

        let status = "Not Started";
        let accentColor = "#a855f7";
        let bgColor = "#f3e8ff";
        if (progress === 100) {
          status = "Completed";
          accentColor = "#10b981";
          bgColor = "#d1fae5";
        } else if (progress >= 50) {
          status = "In Progress";
          accentColor = "#f97316";
          bgColor = "#ffedd5";
        } else if (progress > 0) {
          status = "Started";
          accentColor = "#3b82f6";
          bgColor = "#dbeafe";
        }

        return {
          id: mod._id,
          title: mod.title,
          progress,
          completedCount: completed,
          totalLessons: total,
          status,
          accentColor,
          bgColor,
        };
      }),
    [modules, completedLessonIds],
  );

  const lessonRows: LessonRow[] = useMemo(
    () =>
      modules.flatMap((mod) =>
        mod.lessons.map((lesson) => ({
          id: lesson._id,
          lesson: lesson.title,
          status: completedLessonIds.has(lesson._id)
            ? ("Completed" as const)
            : ("Not Started" as const),
        })),
      ),
    [modules, completedLessonIds],
  );

  return {
    student,
    overallProgress: enrollment?.progress ?? 0,
    moduleProgress,
    lessonRows,
    isLoading: enrollmentsQuery.isLoading || contentQuery.isLoading,
    isError: enrollmentsQuery.isError || contentQuery.isError,
    found: !!enrollment,
  };
}
