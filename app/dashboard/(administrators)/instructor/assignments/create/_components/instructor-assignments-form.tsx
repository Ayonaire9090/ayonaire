"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppSelect } from "@/components/ui/app-select";
import {
  FileText,
  Rocket,
  FileQuestion,
  TerminalSquare,
  Upload,
  X,
  ArrowLeft,
  Calendar,
  Pencil,
  Loader2,
} from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetModulesForCourse } from "@/hooks/api/use-modules";
import { useCreateAssignmentMutation } from "@/hooks/api/use-assignments";

const FormLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[14px] font-semibold text-gray-500 mb-2">
    {children}
  </label>
);

const ASSIGNMENT_TYPES = [
  {
    id: "Document Assignment",
    title: "Document Assignment",
    desc: "Upload a PDF or Word document",
    icon: FileText,
  },
  {
    id: "Project Assignment",
    title: "Project Assignment",
    desc: "Practical project with deliverables",
    icon: Rocket,
  },
  {
    id: "Quiz Assignment",
    title: "Quiz Assignment",
    desc: "Multiple choice or short answer questions",
    icon: FileQuestion,
  },
  {
    id: "Coding Assignment",
    title: "Coding Assignment",
    desc: "Programming challenge with auto-grading",
    icon: TerminalSquare,
  },
];

export const InstructorAssignmentsForm = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const [currentStep, setCurrentStep] = useState(1);
  const [assignmentType, setAssignmentType] = useState<string>("Document Assignment");
  const [courseId, setCourseId] = useState("");
  const [moduleId, setModuleId] = useState("");

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [points, setPoints] = useState("100");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const { data: coursesData } = useGetCourses({ instructor: user?._id });
  const { data: modulesData } = useGetModulesForCourse(courseId);

  const courseOptions = (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id }));
  const moduleOptions = (modulesData?.data ?? []).map((m) => ({ label: m.title, value: m._id }));
  const courseTitle = courseOptions.find((c) => c.value === courseId)?.label ?? "Not selected";
  const moduleTitle = moduleOptions.find((m) => m.value === moduleId)?.label ?? "Not selected";

  const createAssignment = useCreateAssignmentMutation();

  const handleSubmit = async (status: "Draft" | "Published") => {
    if (!title.trim() || !shortDescription.trim() || !courseId || !moduleId || !dueDate) {
      setError("Title, description, course, module and due date are all required.");
      return;
    }
    setError("");

    try {
      await createAssignment.mutateAsync({
        title,
        description: shortDescription,
        course: courseId,
        module: moduleId,
        assignmentType,
        instructions: instructions || undefined,
        status: status === "Published" ? "published" : "draft",
        dueDate,
        totalPoints: points ? Number(points) : undefined,
        materials: uploadedFile ? [uploadedFile] : [],
      });
      toast.success(status === "Published" ? "Assignment published" : "Assignment saved as draft");
      router.push("/dashboard/instructor/assignments");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to create assignment");
    }
  };

  const isSaving = createAssignment.isPending;

  if (currentStep === 1) {
    return (
      <div className="w-full flex flex-col gap-8 mx-auto pb-6">
        <div className="flex flex-col gap-1">
          <span className="text-primary text-[14px] font-medium">
            Step 1: Assignment Type
          </span>
          <h1 className="text-[24px] font-semibold text-gray-900 pt-4">
            Assignment Type
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {ASSIGNMENT_TYPES.map((option) => (
            <div
              key={option.id}
              onClick={() => setAssignmentType(option.id)}
              className="flex items-center justify-between p-5 rounded-[12px] cursor-pointer transition-colors bg-white hover:bg-[#FAFAFA]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center size-[22px] rounded-full border-2 transition-colors ${
                    assignmentType === option.id
                      ? "border-primary bg-primary"
                      : "border-gray-400 bg-transparent"
                  }`}
                >
                  {assignmentType === option.id && (
                    <div className="size-2.5 rounded-full bg-white" />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-gray-900 leading-tight">
                    {option.title}
                  </span>
                  <span className="text-[13.5px] text-gray-500 mt-1">
                    {option.desc}
                  </span>
                </div>
              </div>
              <option.icon className="size-5 text-gray-500" strokeWidth={1.5} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col gap-3">
            <span className="text-[16px] font-bold text-gray-900">
              Course Selection
            </span>
            <AppSelect
              placeholder="Select course"
              options={courseOptions}
              value={courseId}
              onChange={(val) => {
                setCourseId(val);
                setModuleId("");
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[16px] font-bold text-gray-900">
              Topic / Module Selection
            </span>
            <AppSelect
              placeholder={courseId ? "Select module" : "Select a course first"}
              options={moduleOptions}
              value={moduleId}
              onChange={setModuleId}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            onClick={() => setCurrentStep(2)}
            disabled={!courseId || !moduleId}
            className="w-full lg:w-fit h-11 px-12 bg-primary text-white hover:bg-primary/90 font-medium rounded-[8px] text-[15px] disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-8 mx-auto pb-6">
        <div className="flex flex-col gap-1">
          <span className="text-primary text-[14px] font-medium">
            Step 2: Assignment Details
          </span>
          <h1 className="text-[24px] font-bold text-gray-900 pt-4">
            {assignmentType} Information
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-2">
          <div className="flex flex-col gap-2">
            <FormLabel>Assignment Title</FormLabel>
            <Input
              placeholder="e.g., Q3 Financial Audit Report"
              className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel>Short Description</FormLabel>
            <Input
              placeholder="A brief summary for the dashboard"
              className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel>Instructions</FormLabel>
            <textarea
              placeholder="Detailed steps students should follow..."
              className="w-full min-h-[140px] p-4 text-[15px] resize-y outline-none border-transparent bg-white hover:bg-[#FAFAFA] focus:bg-white rounded-[8px] shadow-none"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <FormLabel>Due Date &amp; Time</FormLabel>
              <Input
                type="datetime-local"
                className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormLabel>Points / Weight</FormLabel>
              <Input
                type="number"
                min={0}
                placeholder="100"
                className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel>Assignment Brief &amp; Supporting Docs</FormLabel>
            <div
              className="w-full flex justify-center items-center py-10 px-6 border border-dashed border-gray-200 rounded-[12px] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex items-center justify-center size-10 rounded-full bg-white">
                  <Upload className="size-5 text-black" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="text-[15px] font-medium text-black">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-[13px] font-medium text-gray-400">
                    PDF, DOCX, or XLSX
                  </span>
                </div>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setUploadedFile(e.target.files[0]);
                  }
                }}
              />
            </div>

            {uploadedFile && (
              <div className="flex items-center justify-between p-3.5 mt-2 rounded-[8px] bg-[#D9D9D9]">
                <div className="flex items-center gap-3">
                  <FileText className="size-5 text-primary" strokeWidth={2.5} />
                  <span className="text-[14px] font-bold text-black">
                    {uploadedFile.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setUploadedFile(null)}
                  className="text-gray-500 hover:text-black"
                >
                  <X className="size-4" strokeWidth={2.5} />
                </button>
              </div>
            )}
          </div>
        </div>

        {error && <span className="text-[13px] text-red-500">{error}</span>}

        <div className="flex items-center justify-between mt-8 w-full">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(1)}
            className="h-11 px-5 lg:px-8 bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden md:inline text-[15px]">Back</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              disabled={isSaving}
              className="h-11 px-6 lg:px-8 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none text-[15px]"
              onClick={() => handleSubmit("Draft")}
            >
              {isSaving && <Loader2 className="size-4 animate-spin mr-2" />}
              Save as draft
            </Button>
            <Button
              onClick={() => {
                if (!title.trim() || !shortDescription.trim() || !dueDate) {
                  setError("Title, description and due date are required.");
                  return;
                }
                setError("");
                setCurrentStep(3);
              }}
              className="h-11 px-10 lg:px-12 bg-primary text-white hover:bg-primary/90 font-semibold rounded-[8px] border-none text-[15px]"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 mx-auto pb-6">
      <div className="flex flex-col gap-1">
        <span className="text-primary text-[14px] font-medium">
          Step 3: Review &amp; Publish
        </span>
      </div>

      <div className="flex flex-col gap-6 mt-2">
        <div className="flex flex-col w-full bg-white rounded-[16px] border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-[18px] font-bold text-gray-900">
              Assignment Details
            </h2>
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 text-primary font-semibold text-[14px] hover:opacity-80 transition-colors"
            >
              <Pencil className="size-4" strokeWidth={2.5} />
              Edit
            </button>
          </div>

          <div className="flex flex-col px-6">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-b border-gray-100 py-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">Assignment Type</span>
                <span className="text-[15px] font-bold text-gray-900">{assignmentType}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">Course</span>
                <span className="text-[15px] font-bold text-primary">{courseTitle}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">Topic</span>
                <span className="text-[15px] font-bold text-gray-900">{moduleTitle}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">Points</span>
                <span className="text-[15px] font-bold text-gray-900">{points || "-"} Points</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 py-6 border-b border-gray-100">
              <span className="text-[13px] font-medium text-gray-500">Assignment Title</span>
              <span className="text-[15px] font-bold text-gray-900">{title || "-"}</span>
            </div>

            <div className="flex flex-col gap-2 py-6 border-b border-gray-100">
              <span className="text-[13px] font-medium text-gray-500">Due Date</span>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-primary" strokeWidth={2} />
                <span className="text-[15px] font-bold text-gray-900">
                  {dueDate ? new Date(dueDate).toLocaleString() : "-"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 py-6">
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">Description</span>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-3xl">
                {instructions || shortDescription || "-"}
              </p>
            </div>
          </div>
        </div>

        {uploadedFile && (
          <div className="flex flex-col w-full bg-white rounded-[16px] border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-[18px] font-bold text-gray-900">Attached Document</h2>
              <span className="text-[13px] font-medium text-gray-400">
                {(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between p-4 rounded-[12px] bg-[#FFF8F5]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-[8px] bg-primary/10">
                    <FileText className="size-6 text-primary" strokeWidth={2} />
                  </div>
                  <span className="text-[15px] font-bold text-gray-900">{uploadedFile.name}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {error && <span className="text-[13px] text-red-500">{error}</span>}

      <div className="flex items-center justify-between mt-8 w-full">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(2)}
          className="h-11 px-5 lg:px-8 bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none flex items-center gap-2"
        >
          <ArrowLeft className="size-4" />
          <span className="hidden md:inline text-[15px]">Back</span>
        </Button>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            disabled={isSaving}
            className="h-11 px-6 lg:px-8 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none text-[15px]"
            onClick={() => handleSubmit("Draft")}
          >
            {isSaving && <Loader2 className="size-4 animate-spin mr-2" />}
            Save as draft
          </Button>
          <Button
            disabled={isSaving}
            onClick={() => handleSubmit("Published")}
            className="h-11 px-10 lg:px-12 bg-primary text-white hover:bg-primary/90 font-semibold rounded-[8px] border-none text-[15px]"
          >
            {isSaving && <Loader2 className="size-4 animate-spin mr-2" />}
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
};
