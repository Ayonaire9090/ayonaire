"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorStudentCourseModuleHeader } from "./_components/instructor-student-course-module-header";
import { InstructorStudentCourseModules } from "./_components/instructor-student-course-modules";
import { InstructorStudentCourseModuleLessonProgressTable } from "./_components/instructor-student-course-module-lesson-progress-table";
import { InstructorStudentCourseModuleLessonProgressList } from "./_components/instructor-student-course-module-lesson-progress-list";
import { useStudentCourseModuleData } from "./_components/instructor-course-module-data";

function CourseModulePageContent() {
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentId") ?? undefined;
  const courseId = searchParams.get("courseId") ?? undefined;

  const data = useStudentCourseModuleData(studentId, courseId);

  if (!studentId || !courseId) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
        Select a student from the Students Management table to view their course progress.
      </div>
    );
  }

  return (
    <>
      <InstructorStudentCourseModuleHeader
        name={data.student?.name}
        email={data.student?.email}
        isLoading={data.isLoading}
        found={data.found}
      />
      <InstructorStudentCourseModules
        modules={data.moduleProgress}
        overallProgress={data.overallProgress}
        isLoading={data.isLoading}
      />

      <div className="hidden lg:block mb-8">
        <InstructorStudentCourseModuleLessonProgressTable
          rows={data.lessonRows}
          isLoading={data.isLoading}
        />
      </div>
      <div className="block lg:hidden">
        <InstructorStudentCourseModuleLessonProgressList
          rows={data.lessonRows}
          isLoading={data.isLoading}
        />
      </div>
    </>
  );
}

export default function InstrutorStudentsManagementPage() {
  return (
    <>
      <DashboardHeader
        title="Students Management"
        subTitle="Monitor academic performance and student engagement across all active cohorts."
      />
      <Suspense fallback={<div className="bg-white rounded-2xl p-12 text-center text-gray-400">Loading…</div>}>
        <CourseModulePageContent />
      </Suspense>
    </>
  );
}
