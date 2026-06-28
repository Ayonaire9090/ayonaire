"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDown,
  FileText,
  Rocket,
  FileQuestion,
  TerminalSquare,
  Upload,
  X,
  ArrowLeft,
  Calendar,
  Pencil,
} from "lucide-react";

// Helper for labels
const FormLabel = ({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <label className="block text-[14px] font-semibold text-gray-500 mb-2">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

export const InstructorAssignmentsForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assignmentType, setAssignmentType] = useState<string>(
    "Document Assignment",
  );
  const [course, setCourse] = useState("Data Science");
  const [module, setModule] = useState("Python");

  // Step 2 state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  if (currentStep === 1) {
    return (
      <div className="w-full flex flex-col gap-8 mx-auto pb-6">
        <div className="flex flex-col gap-1">
          <span className="text-[#EC5B13] text-[14px] font-medium">
            Step 1: Assignment Type
          </span>
          <h1 className="text-[24px] font-semibold text-gray-900 pt-4">
            Assignment Type
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {[
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
          ].map((option) => (
            <div
              key={option.id}
              onClick={() => setAssignmentType(option.id)}
              className="flex items-center justify-between p-5 rounded-[12px] cursor-pointer transition-colors bg-white hover:bg-[#FAFAFA]"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center size-[22px] rounded-full border-2 transition-colors ${
                    assignmentType === option.id
                      ? "border-[#EC5B13] bg-[#EC5B13]"
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
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-between text-gray-700 font-medium bg-white border-transparent hover:bg-[#FAFAFA] shadow-none text-[14px] px-5 rounded-[8px]"
                >
                  {course} <ChevronDown className="size-4 text-gray-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 w-(--radix-popover-trigger-width)"
                align="start"
              >
                <div className="flex flex-col">
                  {[
                    "Data Science",
                    "Web Development",
                    "Artificial intelligence",
                  ].map((c) => (
                    <div
                      key={c}
                      onClick={() => setCourse(c)}
                      className="p-3 text-[14px] text-gray-700 hover:bg-gray-50 cursor-pointer font-medium"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[16px] font-bold text-gray-900">
              Topic / Module Selection
            </span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-12 justify-between text-gray-700 font-medium bg-white border-transparent hover:bg-[#FAFAFA] shadow-none text-[14px] px-5 rounded-[8px]"
                >
                  {module} <ChevronDown className="size-4 text-gray-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 w-(--radix-popover-trigger-width)"
                align="start"
              >
                <div className="flex flex-col">
                  {["Python", "JavaScript", "Machine Learning"].map((m) => (
                    <div
                      key={m}
                      onClick={() => setModule(m)}
                      className="p-3 text-[14px] text-gray-700 hover:bg-gray-50 cursor-pointer font-medium"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button
            onClick={() => setCurrentStep(2)}
            className="w-full lg:w-fit h-11 px-12 bg-[#EC5B13] text-white hover:bg-[#EC5B13]/90 font-medium rounded-[8px] text-[15px]"
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
          <span className="text-[#EC5B13] text-[14px] font-medium">
            Step 2: Assignment Details
          </span>
          <h1 className="text-[24px] font-bold text-gray-900 pt-4">
            Document Assignment Information
          </h1>
          <p className="text-[14px] text-gray-500">
            Provide the core requirements and resources for this
            submission-based assignment.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-2">
          <div className="flex flex-col gap-2">
            <FormLabel>Assignment Title</FormLabel>
            <Input
              placeholder="e.g., Q3 Financial Audit Report"
              className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none placeholder:text-gray-500 text-gray-900 font-medium"
            />
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel>Short Description</FormLabel>
            <Input
              placeholder="A brief summary for the dashboard"
              className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none placeholder:text-gray-500 text-gray-900 font-medium"
            />
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel>Instructions</FormLabel>
            <textarea
              placeholder="Detailed steps students should follow..."
              className="w-full min-h-[140px] p-4 text-[15px] resize-y outline-none placeholder:text-gray-500 border-transparent bg-white hover:bg-[#FAFAFA] focus:bg-white focus:border-gray-200 focus:ring-1 focus:ring-primary rounded-[8px] shadow-none text-gray-900 font-medium"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <FormLabel>Due Date</FormLabel>
              <Input
                placeholder="mm/dd/yyyy"
                className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none placeholder:text-gray-900 text-gray-900 font-medium"
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormLabel>Points / Weight</FormLabel>
              <Input
                placeholder="100"
                className="h-12 rounded-[8px] bg-white border-transparent hover:bg-[#FAFAFA] focus:bg-white text-[15px] shadow-none placeholder:text-gray-500 text-gray-900 font-medium"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <FormLabel>Assignment Brief & Supporting Docs</FormLabel>
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
                    PDF, DOCX, or XLSX (max 25MB)
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
                  <FileText
                    className="size-5 text-[#EC5B13]"
                    strokeWidth={2.5}
                  />
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

        <div className="flex items-center justify-between mt-8 w-full">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(1)}
            className="h-11 px-5 lg:px-8 bg-white border-gray-200 text-[#475467] hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none flex items-center gap-2"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden md:inline text-[15px]">Back</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="h-11 px-6 lg:px-8 bg-white border-gray-200 text-[#344054] hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none text-[15px]"
            >
              Save as draft
            </Button>
            <Button
              onClick={() => setCurrentStep(3)}
              className="h-11 px-10 lg:px-12 bg-[#EC5B13] text-white hover:bg-[#EC5B13]/90 font-semibold rounded-[8px] border-none text-[15px]"
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
        <span className="text-[#EC5B13] text-[14px] font-medium">
          Step 3: Review & Publish
        </span>
      </div>

      <div className="flex flex-col gap-6 mt-2">
        {/* Assignment Details Card */}
        <div className="flex flex-col w-full bg-white rounded-[16px] border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-[18px] font-bold text-[#1D2939]">
              Assignment Details
            </h2>
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 text-[#EC5B13] font-semibold text-[14px] hover:text-[#EC5B13]/80 transition-colors"
            >
              <Pencil className="size-4" strokeWidth={2.5} />
              Edit
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col px-6">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-b border-gray-100 py-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">
                  Assignment Type
                </span>
                <span className="text-[15px] font-bold text-[#1D2939]">
                  Document
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">
                  Course
                </span>
                <span className="text-[15px] font-bold text-[#EC5B13]">
                  {course}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">
                  Topic
                </span>
                <span className="text-[15px] font-bold text-[#1D2939]">
                  {module}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-gray-500">
                  Points
                </span>
                <span className="text-[15px] font-bold text-[#1D2939]">
                  100 Points
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 py-6 border-b border-gray-100">
              <span className="text-[13px] font-medium text-gray-500">
                Assignment Title
              </span>
              <span className="text-[15px] font-bold text-[#1D2939]">
                Introduction to NumPy & Vectorization
              </span>
            </div>

            <div className="flex flex-col gap-2 py-6 border-b border-gray-100">
              <span className="text-[13px] font-medium text-gray-500">
                Due Date
              </span>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-[#EC5B13]" strokeWidth={2} />
                <span className="text-[15px] font-bold text-[#1D2939]">
                  October 25, 2023, 11:59 PM
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 py-6">
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                Description
              </span>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-3xl">
                Complete the exercises in the attached notebook. Focus on array
                manipulation, broadcasting rules, and performance comparison
                between standard Python loops and NumPy operations. Ensure all
                cells are executed before submission.
              </p>
            </div>
          </div>
        </div>

        {/* Attached Document Card */}
        <div className="flex flex-col w-full bg-white rounded-[16px] border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-[18px] font-bold text-[#1D2939]">
              Attached Document
            </h2>
            <span className="text-[13px] font-medium text-gray-400">
              {uploadedFile
                ? `${(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB`
                : "1.2 MB"}
            </span>
          </div>

          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-[12px] bg-[#FFF8F5]">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-[8px] bg-[#FFEDD5]">
                  <FileText className="size-6 text-[#EC5B13]" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-bold text-[#1D2939]">
                    {uploadedFile ? uploadedFile.name : "numpy_basics_v2.pdf"}
                  </span>
                  <span className="text-[13px] font-medium text-gray-500">
                    Uploaded 10 minutes ago
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4 sm:mt-0 px-2 sm:px-0">
                <button className="text-[13px] font-bold text-[#1D2939] tracking-wide hover:opacity-70 transition-opacity">
                  PREVIEW
                </button>
                <button
                  onClick={() =>
                    document.getElementById("replace-upload-step3")?.click()
                  }
                  className="text-[13px] font-bold text-[#EC5B13] tracking-wide hover:opacity-70 transition-opacity"
                >
                  REPLACE
                </button>
                <input
                  id="replace-upload-step3"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setUploadedFile(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 w-full">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(2)}
          className="h-11 px-5 lg:px-8 bg-white border-gray-200 text-[#475467] hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none flex items-center gap-2"
        >
          <ArrowLeft className="size-4" />
          <span className="hidden md:inline text-[15px]">Back</span>
        </Button>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="h-11 px-6 lg:px-8 bg-white border-gray-200 text-[#344054] hover:bg-gray-50 hover:text-black font-semibold rounded-[8px] shadow-none text-[15px]"
          >
            Save as draft
          </Button>
          <Button className="h-11 px-10 lg:px-12 bg-[#EC5B13] text-white hover:bg-[#EC5B13]/90 font-semibold rounded-[8px] border-none text-[15px]">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
