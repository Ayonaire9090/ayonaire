import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorStudentCourseModuleHeader } from "./_components/instructor-student-course-module-header";
import { InstructorStudentCourseModules } from "./_components/instructor-student-course-modules";
import { InstructorStudentCourseModuleLessonProgressTable } from "./_components/instructor-student-course-module-lesson-progress-table";
import { InstructorStudentCourseModuleLessonProgressList } from "./_components/instructor-student-course-module-lesson-progress-list";

export default function InstrutorStudentsManagementPage() {
  return (
    <>
      <DashboardHeader
        title="Students Management"
        subTitle="Monitor academic performance and student engagement across all active cohorts."
      />
      <InstructorStudentCourseModuleHeader />
      <InstructorStudentCourseModules />

      <div className="hidden lg:block mb-8">
        <InstructorStudentCourseModuleLessonProgressTable />
      </div>
      <div className="block lg:hidden">
        <InstructorStudentCourseModuleLessonProgressList />
      </div>
    </>
  );
}
