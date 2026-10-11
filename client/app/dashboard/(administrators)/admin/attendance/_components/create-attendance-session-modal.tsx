"use client";

import { useState } from "react";
import { toast } from "sonner";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Loader2 } from "lucide-react";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetCohorts } from "@/hooks/api/use-cohorts";
import { useGetAllEnrollments } from "@/hooks/api/use-enrollment";
import { useCreateAttendanceSessionMutation } from "@/hooks/api/use-attendance";
import { AttendanceRecordInput } from "@/lib/api/endpoints/attendance";

const STATUS_OPTIONS: { label: string; value: AttendanceRecordInput["status"] }[] = [
  { label: "Present", value: "present" },
  { label: "Absent", value: "absent" },
  { label: "Late", value: "late" },
];

export function CreateAttendanceSessionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [courseId, setCourseId] = useState("");
  const [cohortId, setCohortId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [statuses, setStatuses] = useState<Record<string, AttendanceRecordInput["status"]>>({});
  const [error, setError] = useState("");

  const { data: coursesData } = useGetCourses();
  const { data: cohortsData } = useGetCohorts(courseId || undefined);
  const { data: enrollmentsData } = useGetAllEnrollments({ course: courseId || undefined });

  const courseOptions = (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id }));
  const cohortOptions = (cohortsData?.cohorts ?? []).map((c) => ({ label: c.name, value: c._id }));
  const students = (enrollmentsData?.enrollments ?? [])
    .map((e) => (typeof e.student === "string" ? null : e.student))
    .filter((s): s is { _id: string; name: string; email?: string } => !!s);

  const createSession = useCreateAttendanceSessionMutation();

  const setStatus = (studentId: string, status: AttendanceRecordInput["status"]) => {
    setStatuses((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleClose = () => {
    setCourseId("");
    setCohortId("");
    setTitle("");
    setDate("");
    setStatuses({});
    setError("");
    onClose();
  };

  const handleSubmit = async () => {
    if (!courseId || !title.trim() || !date) {
      setError("Course, title and date are required.");
      return;
    }
    if (students.length === 0) {
      setError("This course has no enrolled students to mark attendance for.");
      return;
    }
    setError("");

    const records: AttendanceRecordInput[] = students.map((s) => ({
      student: s._id,
      status: statuses[s._id] ?? "present",
    }));

    try {
      await createSession.mutateAsync({
        course: courseId,
        cohort: cohortId || undefined,
        title,
        date,
        records,
      });
      toast.success("Attendance session created");
      handleClose();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create attendance session");
    }
  };

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={handleClose}
      title="New Attendance Log"
      subtitle="Mark attendance for a class session"
      footerContent={
        <div className="flex flex-col gap-2 w-full">
          {error && <span className="text-xs text-red-500 text-right">{error}</span>}
          <div className="flex items-center justify-end gap-3">
            <Button variant="outline" onClick={handleClose} className="h-11 px-6">
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={createSession.isPending}
              className="h-11 px-8 bg-primary hover:bg-primary/90 text-white"
            >
              {createSession.isPending && <Loader2 className="size-4 animate-spin mr-2" />}
              Save Session
            </Button>
          </div>
        </div>
      }
    >
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[14px] font-medium text-gray-900 mb-2">
              Course <span className="text-red-500">*</span>
            </label>
            <AppSelect
              placeholder="Select course"
              options={courseOptions}
              value={courseId}
              onChange={(val) => {
                setCourseId(val);
                setCohortId("");
                setStatuses({});
              }}
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-gray-900 mb-2">
              Cohort (optional)
            </label>
            <AppSelect
              placeholder={courseId ? "Select cohort" : "Select a course first"}
              options={cohortOptions}
              value={cohortId}
              onChange={setCohortId}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label="Session Title"
            placeholder="e.g. Week 3 - Live Class"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AppInput
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {courseId && (
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-medium text-gray-900">
              Students ({students.length})
            </label>
            {students.length === 0 ? (
              <p className="text-[13px] text-gray-500">No students enrolled in this course.</p>
            ) : (
              <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto border border-gray-100 rounded-xl p-2">
                {students.map((student) => (
                  <div
                    key={student._id}
                    className="flex items-center justify-between p-2.5 bg-[#FAFAFA] rounded-lg"
                  >
                    <span className="text-[14px] font-medium text-gray-900">{student.name}</span>
                    <div className="flex items-center gap-1.5">
                      {STATUS_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setStatus(student._id, opt.value)}
                          className={`px-2.5 py-1 rounded-full text-[12px] font-medium transition-colors ${
                            (statuses[student._id] ?? "present") === opt.value
                              ? "bg-primary text-white"
                              : "bg-white text-gray-500 border border-gray-200"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </AppMegaModal>
  );
}
