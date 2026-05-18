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
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Eraser,
  List,
  ListOrdered,
  Link2,
  Image as ImageIcon,
  TerminalSquare,
  Quote,
  Minus,
  ChevronDown,
  Calendar as CalendarIcon,
  FileText,
} from "lucide-react";

// Helper for labels
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

// Helper for section headers
const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-[20px] font-semibold text-gray-900 mb-6">{title}</h2>
);

export const AdminAssignmentsForm = () => {
  const [assignmentType, setAssignmentType] = useState<string>("Project");
  const [statusControl, setStatusControl] = useState<string>("Draft");

  return (
    <div className="w-full flex flex-col gap-10">
      {/* 1. Assignment Information */}
      <section>
        <SectionHeader title="Assignment Information" />
        <div className="flex flex-col gap-6">
          {/* Assignment Title */}
          <div>
            <FormLabel required>Assignment Title</FormLabel>
            <Input
              placeholder="Enter assignment Title"
              className="h-11 rounded-[8px] bg-white border-gray-200 text-[15px] shadow-none"
            />
          </div>

          {/* Description (Rich Text Editor Mockup) */}
          <div>
            <FormLabel>Description</FormLabel>
            <div className="border border-gray-200 rounded-[10px] overflow-hidden bg-white">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-white min-h-[44px]">
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-3 h-8 text-[13px] text-gray-700 hover:bg-gray-100 rounded"
                >
                  Normal text <ChevronDown className="size-3.5" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1" />

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-2 h-8 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <List className="size-4" />{" "}
                  <ChevronDown className="size-3.5" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1" />

                <button
                  type="button"
                  className="flex items-center gap-1.5 px-2 h-8 hover:bg-gray-100 rounded"
                >
                  <div className="size-4 bg-black rounded-[2px]" />{" "}
                  <ChevronDown className="size-3.5 text-gray-700" />
                </button>
                <div className="w-px h-4 bg-gray-300 mx-1" />

                <div className="flex items-center gap-0.5">
                  {[Bold, Italic, Underline, Strikethrough, Code, Eraser].map(
                    (Icon, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="flex items-center justify-center size-8 text-gray-600 hover:bg-gray-100 rounded"
                      >
                        <Icon className="size-4" />
                      </button>
                    ),
                  )}
                </div>

                <div className="w-px h-4 bg-gray-300 mx-1" />

                <div className="flex items-center gap-0.5">
                  {[
                    List,
                    ListOrdered,
                    Link2,
                    ImageIcon,
                    TerminalSquare,
                    Quote,
                    Minus,
                  ].map((Icon, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="flex items-center justify-center size-8 text-gray-600 hover:bg-gray-100 rounded"
                    >
                      <Icon className="size-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Editor textarea */}
              <textarea
                placeholder="Describe of assignment"
                className="w-full min-h-[160px] p-4 text-[15px] resize-y outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Course & Cohort */}
          <div className="grid grid-cols-2 gap-3 lg:gap-6 w-full">
            <div>
              <FormLabel required>Course</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-11 justify-between text-gray-500 font-normal bg-white border-gray-200 shadow-none"
                  >
                    Select Course{" "}
                    <ChevronDown className="size-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <div className="p-4 text-sm text-gray-500">Mocks...</div>
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <FormLabel required>Class / Cohort</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-11 justify-between text-gray-500 font-normal bg-white border-gray-200 shadow-none"
                  >
                    Select Class / Cohort *{" "}
                    <ChevronDown className="size-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <div className="p-4 text-sm text-gray-500">Mocks...</div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Assignment Type */}
          <div>
            <FormLabel required>Assignment Type</FormLabel>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {["File Upload", "Text Submission", "Quiz", "Project"].map(
                (type) => (
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
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Submission Settings */}
      <section>
        <SectionHeader title="Submission Settings" />
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-3 lg:gap-6 w-full p-2 lg:p-4 bg-white rounded-lg">
            <div>
              <FormLabel required>Due Date</FormLabel>
              <div className="relative">
                <Input
                  placeholder="mm/dd/yyyy"
                  className="h-11 rounded-[8px] bg-white border-gray-200 text-[15px] shadow-none pr-10"
                />
                <CalendarIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              </div>
            </div>
            <div>
              {/* Note: The mockup showed "Due Time *" but inside had "Select Class / Cohort *". I am retaining the correct visual approach by doing a Time select here. */}
              <FormLabel required>Due Time</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-11 justify-between text-gray-500 font-normal border-gray-200 bg-white shadow-none"
                  >
                    Select time <ChevronDown className="size-4 text-gray-400" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <div className="p-4 text-sm text-gray-500">
                    Time Options...
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-6 w-full">
            <div>
              <FormLabel required>Max Score</FormLabel>
              <Input
                placeholder="e.g., 100"
                className="h-11 rounded-[8px] border-gray-200 bg-white text-[15px] shadow-none"
              />
            </div>
            <div>
              <FormLabel>Allowed File Types</FormLabel>
              <Input
                placeholder="e.g., PDF, DOC...."
                className="h-11 rounded-[8px] border-gray-200 bg-white text-[15px] shadow-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Instructions */}
      <section>
        <SectionHeader title="Instructions" />
        <textarea
          placeholder="Enter detailed instructions for students..."
          className="w-full min-h-[160px] p-4 text-[15px] resize-y outline-none placeholder:text-gray-400 border border-gray-200 rounded-[10px] bg-white shadow-none"
        />
      </section>

      {/* 4. Attachments */}
      <section>
        <SectionHeader title="Attachments (Optional)" />
        <div className="w-full flex justify-center items-center py-12 px-6 border-2 border-dashed border-gray-200 rounded-[12px] bg-[#FAFAFA] hover:bg-gray-50 transition-colors cursor-pointer group">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="flex items-center justify-center size-12 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors">
              <FileText className="size-6 text-gray-600" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-medium text-gray-900">
                Drag & drop files here, or{" "}
                <span className="font-semibold cursor-pointer text-gray-900 border-b border-gray-900 pb-px">
                  browse files
                </span>
              </span>
              <span className="text-[13px] text-gray-500">
                Allowed formats: PDF, DOC, DOCX, PNG, JPG (Max 10MB)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Status Control */}
      <section>
        <SectionHeader title="Status Control" />
        <div className="grid grid-cols-2 gap-3 lg:gap-6 w-full">
          {/* Draft Option */}
          <label
            className={`flex items-start gap-3.5 p-5 border rounded-[12px] bg-white cursor-pointer transition-colors ${
              statusControl === "Draft"
                ? "border-primary"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="statusControl"
              value="Draft"
              checked={statusControl === "Draft"}
              onChange={() => setStatusControl("Draft")}
              className="mt-0.5 size-[18px] text-primary focus:ring-primary border-gray-300 shrink-0 accent-black"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-medium text-gray-900 leading-tight">
                Draft
              </span>
              <span className="text-[13px] text-gray-500">
                Save as draft. Not visible to students.
              </span>
            </div>
          </label>

          {/* Published Option */}
          <label
            className={`flex items-start gap-3.5 p-5 border rounded-[12px] bg-white cursor-pointer transition-colors ${
              statusControl === "Published"
                ? "border-primary"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="statusControl"
              value="Published"
              checked={statusControl === "Published"}
              onChange={() => setStatusControl("Published")}
              className="mt-0.5 size-[18px] text-primary focus:ring-primary border-gray-300 shrink-0 accent-black"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[15px] font-medium text-gray-900 leading-tight">
                Published
              </span>
              <span className="text-[13px] text-gray-500">
                Publish and make visible to students immediately.
              </span>
            </div>
          </label>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 lg:flex items-center justify-end gap-3 pt-6 border-t border-gray-100">
        <Button
          variant="outline"
          className="h-11 px-6 bg-white border-gray-200 text-gray-700 hover:bg-gray-50 font-medium rounded-[8px] shadow-none"
        >
          Cancel
        </Button>
        <Button className="h-11 px-8 bg-primary text-white hover:bg-primary/90 font-medium rounded-[8px] shadow-sm border-none">
          Create Assignment
        </Button>
      </div>
    </div>
  );
};
