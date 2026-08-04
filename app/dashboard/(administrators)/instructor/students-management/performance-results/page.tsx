"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorStudentDataFilters } from "../../_components/instructor-student-data-filters";
import { InstructorStudentPerformanceResultsTable } from "./instructor-student-performance-results-table";
import { InstructorStudentPerformanceResultsList } from "./instructor-student-performance-results-list";
import { InstructorStudentPerformanceQuizResults } from "./instructor-student-performance-quiz-results";
import { useInstructorSubmissions } from "./instructor-performance-data";

function PerformanceResultsPageContent() {
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentId") ?? undefined;
  const { rows } = useInstructorSubmissions(studentId);
  const studentName = studentId ? rows[0]?.student : undefined;

  return (
    <>
      <DashboardHeader
        title="Performance Results"
        subTitle={
          studentId
            ? `Showing results for ${studentName ?? "this student"}.`
            : "Track your student's academic progress, grades, and upcoming tasks."
        }
      />
      <InstructorStudentDataFilters />

      <div className="hidden lg:block mb-8 mt-6">
        <InstructorStudentPerformanceResultsTable studentId={studentId} />
      </div>
      <div className="block lg:hidden mt-6">
        <InstructorStudentPerformanceResultsList studentId={studentId} />
      </div>
      <InstructorStudentPerformanceQuizResults />
    </>
  );
}

export default function InstructorStudentPerformanceResults() {
  return (
    <Suspense fallback={<div className="bg-white rounded-2xl p-12 text-center text-gray-400">Loading…</div>}>
      <PerformanceResultsPageContent />
    </Suspense>
  );
}
