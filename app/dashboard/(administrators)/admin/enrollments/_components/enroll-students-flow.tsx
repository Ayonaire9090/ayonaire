import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, FileText, BookOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseSelectionModal } from "./course-selection-modal";
import { StudentSelectionModal, StudentData } from "./student-selection-modal";
import { EnrollmentProgressModal } from "./enrollment-progress-modal";
import { CsvUploadModal } from "./csv-upload-modal";
import { CsvEnrollmentCompleteModal } from "./csv-enrollment-complete-modal";
import {
  EnrollmentCourseCard,
  EnrollmentCourseData,
} from "./enrollment-course-card";
import {
  useEnrollStudentsMutation,
  useEnrollStudentsCsvMutation,
} from "@/hooks/api/use-enrollment";
import { toast } from "sonner";

interface EnrollStudentsFlowProps {
  onBack: () => void;
}

export const EnrollStudentsFlow = ({ onBack }: EnrollStudentsFlowProps) => {
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);
  const [isCsvCompleteOpen, setIsCsvCompleteOpen] = useState(false);

  const [selectedCourse, setSelectedCourse] =
    useState<EnrollmentCourseData | null>(null);
  const [selectedStudents, setSelectedStudents] = useState<StudentData[]>([]);

  const enrollStudents = useEnrollStudentsMutation();
  const enrollStudentsCsv = useEnrollStudentsCsvMutation();

  const handleBackOrUnselect = () => {
    if (selectedCourse) {
      setSelectedCourse(null);
      setSelectedStudents([]);
    } else {
      onBack();
    }
  };

  const isReadyToEnroll = selectedCourse && selectedStudents.length > 0;

  const progressStatus = enrollStudents.isPending
    ? "pending"
    : enrollStudents.isError
    ? "error"
    : enrollStudents.isSuccess
    ? "success"
    : null;

  const handleEnrollNow = () => {
    if (!selectedCourse) return;
    enrollStudents.mutate({
      courseId: selectedCourse.id,
      studentIds: selectedStudents.map((s) => s.id),
    });
  };

  const handleCsvUpload = (file: File) => {
    if (!selectedCourse) return;
    enrollStudentsCsv.mutate(
      { courseId: selectedCourse.id, file },
      {
        onSuccess: () => {
          setIsCsvModalOpen(false);
          setIsCsvCompleteOpen(true);
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to import CSV");
        },
      }
    );
  };

  return (
    <div className="flex flex-col w-full gap-6 bg-white rounded-2xl p-4 md:p-6 lg:p-8">
      {/* Flow Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBackOrUnselect}
          className="flex items-center gap-3 text-xl md:text-[22px] font-semibold text-gray-900 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="size-5 md:size-6" />
          Enroll Students
        </button>

        <Button
          disabled={!isReadyToEnroll}
          onClick={handleEnrollNow}
          className={`font-medium shadow-none border-0 h-[42px] px-5 md:h-11 md:px-6 rounded-lg text-[14px] transition-colors ${
            isReadyToEnroll
              ? "bg-[#F06B30] hover:bg-[#F06B30]/90 text-white"
              : "bg-gray-100/80 text-gray-400 hover:bg-gray-100 cursor-not-allowed"
          }`}
        >
          Enroll Now
        </Button>
      </div>

      {/* Main Flow Area */}
      {!selectedCourse ? (
        <div className="w-full bg-[#F6F6F6]/50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
          <div className="flex flex-col items-center max-w-sm text-center">
            {/* Document Icon Box */}
            <div className="mb-5 flex h-20 w-20 items-center justify-center">
              <FileText className="size-10 text-gray-900" strokeWidth={2} />
            </div>

            <h3 className="text-[17px] font-medium text-gray-900 mb-6 font-sans">
              Select a course to enroll students
            </h3>

            <Button
              onClick={() => setIsCourseModalOpen(true)}
              className="bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium h-11 px-6 rounded-md gap-2 shadow-none border-0"
            >
              <BookOpen className="size-5" />
              Select Course
            </Button>
          </div>
        </div>
      ) : (
        /* Selected Course View */
        <div className="flex flex-col lg:flex-row w-full mt-2 lg:gap-10 gap-6">
          {/* Left: Course Card */}
          <EnrollmentCourseCard course={selectedCourse} />

          {/* Divider on Desktop */}
          <div className="hidden lg:block w-px bg-gray-200 shrink-0 my-4" />

          {/* Right: Actions or Student List */}
          {selectedStudents.length > 0 ? (
            <div className="flex flex-col w-full h-fit bg-[#f6f6f6] rounded-2xl p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <h4 className="font-semibold text-gray-900 text-[17px]">
                  {selectedStudents.length} Student
                  {selectedStudents.length > 1 ? "s" : ""} selected
                </h4>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsStudentModalOpen(true)}
                    className="bg-transparent hover:bg-gray-100 h-9 px-4 rounded-md shadow-none flex items-center gap-2 border border-gray-300 text-gray-700"
                  >
                    <Plus className="size-4" strokeWidth={2} /> Add Student
                  </Button>
                  <span
                    onClick={() => setIsCsvModalOpen(true)}
                    className="text-[#F06B30] text-[14.5px] font-medium cursor-pointer hover:underline transition-all"
                  >
                    Upload from CSV
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4" />
              <span className="text-gray-500 text-[14px] mb-4 inline-block font-medium">
                Manually Added
              </span>
              <div className="flex flex-col flex-1 divide-y divide-gray-200">
                {selectedStudents.map((stud, index) => (
                  <div key={stud.id} className="flex items-center gap-4 py-3">
                    <span className="text-[14px] font-medium text-gray-700 min-w-[20px]">
                      {index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 relative">
                      <Image
                        src={stud.avatar}
                        alt={stud.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-medium text-gray-900 leading-tight mb-0.5">
                        {stud.name}
                      </span>
                      <span className="text-[13px] text-gray-500">
                        {stud.email}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full bg-[#f6f6f6] rounded-2xl min-h-[300px] lg:min-h-[450px]">
              <Button
                onClick={() => setIsStudentModalOpen(true)}
                className="bg-[#F06B30] hover:bg-[#F06B30]/90 text-white font-medium h-[42px] px-8 rounded-md mb-6 shadow-none border-0 flex items-center gap-2"
              >
                <Plus className="size-4" strokeWidth={3} />
                Add Students
              </Button>
              <span
                onClick={() => setIsCsvModalOpen(true)}
                className="text-gray-900 font-medium text-[15px] cursor-pointer hover:text-[#F06B30] transition-colors"
              >
                Upload from CSV
              </span>
            </div>
          )}
        </div>
      )}

      {/* Enrollment Progress Modal */}
      {progressStatus && (
        <EnrollmentProgressModal
          isOpen
          totalStudents={selectedStudents.length}
          status={progressStatus}
          errorMessage={
            enrollStudents.error instanceof Error ? enrollStudents.error.message : undefined
          }
          onComplete={() => {
            enrollStudents.reset();
            if (progressStatus === "success") {
              onBack();
            }
          }}
        />
      )}

      {/* Course Selection Modal */}
      <CourseSelectionModal
        isOpen={isCourseModalOpen}
        onClose={() => setIsCourseModalOpen(false)}
        onSelect={(course) => {
          setSelectedCourse(course);
          setIsCourseModalOpen(false);
          setIsStudentModalOpen(true);
        }}
      />

      {/* Student Selection Modal */}
      <StudentSelectionModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        onAddStudents={(students) => {
          setSelectedStudents((prev) => {
            const existingIds = prev.map((p) => p.id);
            const newStudents = students.filter(
              (s) => !existingIds.includes(s.id),
            );
            return [...prev, ...newStudents];
          });
          setIsStudentModalOpen(false);
        }}
      />

      {/* CSV Upload Modal */}
      <CsvUploadModal
        isOpen={isCsvModalOpen}
        onClose={() => setIsCsvModalOpen(false)}
        onUpload={handleCsvUpload}
      />

      {/* CSV Enrollment Complete Modal */}
      <CsvEnrollmentCompleteModal
        isOpen={isCsvCompleteOpen}
        courseName={selectedCourse?.title || "Selected Course"}
        onMaybeLater={() => {
          setIsCsvCompleteOpen(false);
        }}
      />
    </div>
  );
};
