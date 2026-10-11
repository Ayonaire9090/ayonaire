"use client";

import React, { useState } from "react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect, AppSelectOption } from "@/components/ui/app-select";
import { Textarea } from "@/components/ui/textarea";
import { Link2 } from "lucide-react";
import { useGetCourses } from "@/hooks/api/use-courses";

interface InstructorAnnouncementQuickCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    title: string;
    cohort: string;
    courseId: string;
    scheduleDate?: string;
    message: string;
    status: "Sent" | "Draft";
  }) => void;
}

// No cohorts-list endpoint exists yet, so this stays a decorative,
// unwired select.
const cohortOptions: AppSelectOption[] = [
  { label: "UI UX Designing", value: "ui-ux" },
  { label: "AI Engineering", value: "ai-eng" },
  { label: "Data Science", value: "data-sci" },
];

export const InstructorAnnouncementQuickCreateModal = ({
  isOpen,
  onClose,
  onSubmit,
}: InstructorAnnouncementQuickCreateModalProps) => {
  const [title, setTitle] = useState("");
  const [cohort, setCohort] = useState("");
  const [courseId, setCourseId] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [message, setMessage] = useState("");

  const { data: coursesData } = useGetCourses();
  const courseOptions: AppSelectOption[] = (coursesData?.courses ?? []).map(
    (course) => ({ label: course.title, value: course._id }),
  );

  const handleAction = (status: "Sent" | "Draft") => {
    onSubmit?.({
      title,
      cohort,
      courseId,
      scheduleDate,
      message,
      status,
    });
    // Reset form
    setTitle("");
    setCohort("");
    setCourseId("");
    setScheduleDate("");
    setMessage("");
    onClose();
  };

  const footer = (
    <div className="flex items-center justify-between w-full py-2">
      {/* Left attachment button */}
      <button
        type="button"
        onClick={() => alert("Add Attachment Clicked")}
        className="inline-flex items-center gap-2 px-6 h-12 bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] text-[15px] font-semibold text-gray-700 transition-all cursor-pointer"
      >
        <Link2 className="size-4 text-gray-500" />
        <span>Add Attachment</span>
      </button>

      {/* Right save/send buttons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => handleAction("Draft")}
          className="px-6 h-12 bg-white border border-gray-200 hover:border-gray-300 rounded-[12px] text-[15px] font-semibold text-gray-700 transition-all cursor-pointer"
        >
          Save as Draft
        </button>
        <button
          type="button"
          disabled={!title.trim() || !message.trim()}
          onClick={() => handleAction("Sent")}
          className="px-6 h-12 bg-[#FF7A59] hover:bg-[#FF7A59]/90 rounded-[12px] text-[15px] font-semibold text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send Now
        </button>
      </div>
    </div>
  );

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={onClose}
      title="Quick Create"
      subtitle="Design your question and define the correct answers for your students."
      footerContent={footer}
    >
      <div className="flex flex-col gap-6 py-4">
        {/* Row 1: Title & Cohort */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AppInput
            label="Announcement Title"
            placeholder="Weekly update"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AppSelect
            label="Select cohort"
            placeholder="UI UX Designing"
            options={cohortOptions}
            value={cohort}
            onChange={setCohort}
          />
        </div>

        {/* Row 2: Course & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AppSelect
            label="Select Course"
            placeholder="Select a course"
            options={courseOptions}
            value={courseId}
            onChange={setCourseId}
          />
          <AppInput
            label="Schedule Date (Optional)"
            placeholder="mm/dd/yy"
            type="date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
        </div>

        {/* Row 3: Message Textarea */}
        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-[15px] font-semibold text-gray-900">
            Message
          </label>
          <Textarea
            placeholder="Enter your question"
            className="min-h-[160px] bg-white border-transparent hover:border-gray-200 rounded-xl text-[15px] text-gray-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary/30 shadow-none p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
    </AppMegaModal>
  );
};
