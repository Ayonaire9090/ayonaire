"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { AppSelect } from "@/components/ui/app-select";

export const CourseActivityNotifications = () => {
  const [selectedEvent, setSelectedEvent] = useState("grade-posted");

  const events = [
    { id: "new-assignment", label: "New assignment created" },
    { id: "grade-posted", label: "Grade posted" },
    { id: "feedback-added", label: "Feedback added" },
    { id: "batch-started", label: "Batch started" },
    { id: "batch-ending", label: "Batch ending soon" },
  ];

  return (
    <div className="w-full bg-white p-5 lg:p-7 flex flex-col mt-2 rounded-2xl mb-4 lg:mb-8">
      <div className="flex flex-col gap-1 lg:gap-1.5 mb-8">
        <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900">
          Course Activity Notifications
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        {/* Events to Notify */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] lg:text-[20px] font-medium text-gray-900">
            Events to Notify
          </h3>

          <div className="flex flex-col gap-3 mt-1">
            {events.map((event) => {
              const isSelected = selectedEvent === event.id;
              return (
                <button
                  key={event.id}
                  onClick={() => setSelectedEvent(event.id)}
                  className="flex items-center gap-4 h-[56px] px-5 rounded-xl border border-gray-100 bg-[#FAFAFA] hover:bg-white transition-colors outline-none text-left w-full"
                >
                  <div
                    className={`size-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? "border-gray-900" : "border-gray-900"
                    }`}
                  >
                    {isSelected && (
                      <div className="size-2.5 rounded-full bg-gray-900" />
                    )}
                  </div>
                  <span
                    className={`text-[16px] ${
                      isSelected ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {event.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Template Mapping */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] lg:text-[20px] font-medium text-gray-900">
            Template Mapping
          </h3>

          <div className="flex flex-col gap-4 mt-1">
            <AppSelect
              placeholder="Assignment"
              options={[
                { label: "Assignment", value: "Assignment" },
                { label: "Quiz", value: "Quiz" },
                { label: "Project", value: "Project" },
              ]}
              className="bg-[#FAFAFA] h-[56px] border-gray-100/60 text-gray-500 rounded-xl"
            />
            <AppSelect
              placeholder="Grade Posted"
              options={[
                { label: "Grade Posted", value: "Grade Posted" },
                { label: "Grade Updated", value: "Grade Updated" },
              ]}
              className="bg-[#FAFAFA] h-[56px] border-gray-100/60 text-gray-500 rounded-xl"
            />
            <AppSelect
              placeholder="Batch Reminder"
              options={[
                { label: "Batch Reminder", value: "Batch Reminder" },
                { label: "Cohort Reminder", value: "Cohort Reminder" },
              ]}
              className="bg-[#FAFAFA] h-[56px] border-gray-100/60 text-gray-500 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Automation Change History */}
      <div className="mt-8 bg-[#FAFAFA] border border-gray-100 rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[17px] lg:text-[18px] font-medium text-gray-900 mb-1">
            Automation Change History
          </h3>
          {/* No audit-log endpoint exists for these settings yet (they aren't
              persisted anywhere - see the "Save Settings" stub on this page),
              so there's nothing real to report here. */}
          <p className="text-[14px] text-gray-400">No changes recorded yet</p>
        </div>
        <button
          onClick={() => toast.info("Audit logging isn't available yet - these settings aren't persisted.")}
          className="px-5 py-2.5 bg-white border border-gray-200 rounded-[10px] text-[14px] font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-xs shrink-0 focus-visible:outline-none"
        >
          View Audit Log
        </button>
      </div>
    </div>
  );
};
