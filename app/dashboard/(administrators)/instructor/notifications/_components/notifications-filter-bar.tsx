"use client";
import React, { useState } from "react";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { InstructorDashboardButton } from "../../_components/instructor-dashboard-button";

const filters = ["All", "Assignments", "Quizzes", "Student Enrollment"];

export const NotificationsFilterBar = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 w-full">
      <div className="w-full lg:w-auto shrink-0">
        <DashboardSearch />
      </div>

      <div className="flex items-center overflow-x-auto w-full lg:w-auto hide-scrollbar whitespace-nowrap">
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary/10 text-primary"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="ml-auto pl-4">
          <InstructorDashboardButton
            title="Mark all as read"
            className="flex! max-sm:py-3! w-max!"
            showFullButtonOnMobile
          />
        </div>
      </div>
    </div>
  );
};
