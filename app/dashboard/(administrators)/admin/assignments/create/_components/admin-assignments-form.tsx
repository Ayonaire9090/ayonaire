"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppSelect } from "@/components/ui/app-select";
import { FileText, Loader2 } from "lucide-react";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetCohorts } from "@/hooks/api/use-cohorts";
import { useGetModulesForCourse } from "@/hooks/api/use-modules";
import { useCreateAssignmentMutation } from "@/hooks/api/use-assignments";

const FormLabel = ({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <label className="block text-[14px] font-medium text-gray-900 mb-2">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-[20px] font-semibold text-gray-900 mb-6">{title}</h2>
);

const ASSIGNMENT_TYPES = ["File Upload", "Text Submission", "Quiz", "Project"];

export const AdminAssignmentsForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState("");
  const [cohortId, setCohortId] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [assignmentType, setAssignmentType] = useState<string>("File Upload");
  const [dueDate, setDueDate] = useState("");
  const [totalPoints, setTotalPoints] = useState("100");
  const [instructions, setInstructions] = useState("");
  const [materials, setMaterials] = useState<File[]>([]);
  const [statusControl, setStatusControl] = useState<"Draft" | "Published">("Draft");
  const [error, setError] = useState("");

  const { data: coursesData } = useGetCourses();
  const { data: cohortsData } = useGetCohorts(courseId || undefined);
  const { data: modulesData } = useGetModulesForCourse(courseId);

  const courseOptions = (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id }));
  const cohortOptions = (cohortsData?.cohorts ?? []).map((c) => ({ label: c.name, value: c._id }));
  const moduleOptions = (modulesData?.data ?? []).map((m) => ({ label: m.title, value: m._id }));

  const createAssignment = useCreateAssignmentMutation();

  const handleSubmit = async (status: "Draft" | "Published") => {
    if (!title.trim() || !description.trim() || !courseId || !moduleId || !dueDate) {
      setError("Title, description, course, module and due date are all required.");
      return;
    }
    setError("");

    try {
      await createAssignment.mutateAsync({
        title,
        description,
        course: courseId,
        cohort: cohortId,
        module: moduleId,
        assignmentType,
        instructions: instructions || undefined,
        status: status === "Published" ? "published" : "draft",
        dueDate,
        totalPoints: totalPoints ? Number(totalPoints) : undefined,
        materials,
      });
      toast.success(status === "Published" ? "Assignment published" : "Assignment saved as draft");
      router.push("/dashboard/admin/assignments");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create assignment");
    }
  };

  const isSaving = createAssignment.isPending;

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 1. Assignment Information */}
      <section>
        <SectionHeader title="Assignment Information" />
        <div className="flex flex-col gap-6">
          <div>
            <FormLabel required>Assignment Title</FormLabel>
            <Input
              placeholder="Enter assignment Title"
              className="h-11 rounded-[8px] bg-white border-gray-200 text-[15px] shadow-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <FormLabel required>Description</FormLabel>
            <textarea
              placeholder="Describe the assignment"
              className="w-full min-h-[160px] p-4 text-[15px] resize-y outline-none placeholder:text-gray-400 border border-gray-200 rounded-[10px] bg-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 w-full">
            <div>
              <FormLabel required>Course</FormLabel>
              <AppSelect
                placeholder="Select course"
                options={courseOptions}
                value={courseId}
                onChange={(val) => {
                  setCourseId(val);
                  setCohortId("");
                  setModuleId("");
                }}
              />
            </div>
            <div>
              <FormLabel required>Class / Cohort</FormLabel>
              <AppSelect
                placeholder={courseId ? "Select cohort" : "Select a course first"}
                options={cohortOptions}
                value={cohortId}
                onChange={setCohortId}
              />
            </div>
            <div>
              <FormLabel required>Module</FormLabel>
              <AppSelect
                placeholder={courseId ? "Select module" : "Select a course first"}
                options={moduleOptions}
                value={moduleId}
                onChange={setModuleId}
              />
            </div>
          </div>

          <div>
            <FormLabel required>Assignment Type</FormLabel>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {ASSIGNMENT_TYPES.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 px-4 py-3.5 border border-gray-200 rounded-[8px] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="radio"
                    name="assignmentType"
                    value={type}
                    checked={assignmentType === type}
                    onChange={() => setAssignmentType(type)}
                    className="size-[18px] text-primary focus:ring-primary border-gray-300 accent-black"
                  />
                  <span className="text-[14px] text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Submission Settings */}
      <section>
        <SectionHeader title="Submission Settings" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 w-full">
          <div>
            <FormLabel required>Due Date &amp; Time</FormLabel>
            <Input
              type="datetime-local"
              className="h-11 rounded-[8px] bg-white border-gray-200 text-[15px] shadow-none"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div>
            <FormLabel required>Max Score</FormLabel>
            <Input
              type="number"
              min={0}
              placeholder="e.g., 100"
              className="h-11 rounded-[8px] border-gray-200 bg-white text-[15px] shadow-none"
              value={totalPoints}
              onChange={(e) => setTotalPoints(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 3. Instructions */}
      <section>
        <SectionHeader title="Instructions" />
        <textarea
          placeholder="Enter detailed instructions for students..."
          className="w-full min-h-[160px] p-4 text-[15px] resize-y outline-none placeholder:text-gray-400 border border-gray-200 rounded-[10px] bg-white shadow-none"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
      </section>

      {/* 4. Attachments */}
      <section>
        <SectionHeader title="Attachments (Optional)" />
        <label className="w-full flex justify-center items-center py-12 px-6 border-2 border-dashed border-gray-200 rounded-[12px] bg-[#FAFAFA] hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="flex items-center justify-center size-12 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <FileText className="size-6 text-gray-600" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-medium text-gray-900">
                {materials.length > 0
                  ? `${materials.length} file${materials.length === 1 ? "" : "s"} selected`
                  : (
                    <>
                      Drag &amp; drop files here, or{" "}
                      <span className="font-semibold cursor-pointer text-gray-900 border-b border-gray-900 pb-px">
                        browse files
                      </span>
                    </>
                  )}
              </span>
              <span className="text-[13px] text-gray-500">
                PDF, DOC, DOCX, PNG, JPG
              </span>
            </div>
          </div>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={(e) => setMaterials(Array.from(e.target.files ?? []))}
          />
        </label>
      </section>

      {error && <span className="text-[13px] text-red-500">{error}</span>}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 lg:flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
        <Button
          variant="outline"
          disabled={isSaving}
          className="h-11 px-6 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-[8px] shadow-none"
          onClick={() => handleSubmit("Draft")}
        >
          {isSaving && <Loader2 className="size-4 animate-spin mr-2" />}
          Save as Draft
        </Button>
        <Button
          disabled={isSaving}
          className="h-11 px-8 bg-primary text-white hover:bg-primary/90 font-medium rounded-[8px] shadow-sm border-none"
          onClick={() => handleSubmit("Published")}
        >
          {isSaving && <Loader2 className="size-4 animate-spin mr-2" />}
          Create Assignment
        </Button>
      </div>
    </div>
  );
};
