import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { ArrowRight, Calendar, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";

interface CourseCohortsProps {
  courseTitle?: string;
}

// Sample cohorts data - can be moved to constants or fetched from API
const cohortsData = [
  {
    cohortNumber: "4th",
    month: "January 2026",
    programInduction: {
      date: "3Dec.2026",
      time: "20:00 PST",
    },
    regularClasses: {
      dateRange: "6 Dec.2026 - 2 Ayg.2026",
      timeRange: "20:00 - 00:00 PST",
      batchType: "Weekend",
      days: ["Sa", "Su"],
    },
  },
  {
    cohortNumber: "4th",
    month: "January 2026",
    programInduction: {
      date: "3Dec.2026",
      time: "20:00 PST",
    },
    regularClasses: {
      dateRange: "6 Dec.2026 - 2 Ayg.2026",
      timeRange: "20:00 - 00:00 PST",
      batchType: "Weekend",
      days: ["Sa", "Su"],
    },
  },
];

export const CourseCohorts = ({ courseTitle = "" }: CourseCohortsProps) => {
  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Cohorts" />
        <AppHeading
          headingLevel="h2"
          title="Program Cohorts"
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Cohorts Cards */}
      <div className="flex flex-col gap-6 max-w-6xl mx-auto">
        {cohortsData.map((cohort, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden border border-[#FFE7DE]"
          >
            {/* Cohort Title Header */}
            <div className="bg-[#FFE7DE] px-6 py-4">
              <h3 className="text-base lg:text-lg font-bold">
                {courseTitle} {cohort.month}, Cohort {cohort.cohortNumber}
              </h3>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden p-6">
              {/* Program Induction */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-bold">Program Induction</h4>
                </div>
                <div className="ml-10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {cohort.programInduction.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {cohort.programInduction.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Regular Classes */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-bold">Regular Classes</h4>
                </div>
                <div className="ml-10 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {cohort.regularClasses.dateRange}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {cohort.regularClasses.timeRange}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">
                      {cohort.regularClasses.batchType}
                    </span>
                    <div className="flex gap-1">
                      {cohort.regularClasses.days.map((day) => (
                        <span
                          key={day}
                          className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Now Button */}
              <div className="flex justify-center">
                <Link href="/opt-in#freeAccessFormOptin">
                <button className="flex items-center gap-2 bg-linear-to-r from-primary to-primary/80 text-white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <span>Apply Now</span>
                  <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </button>
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block p-6 lg:p-8">
              {/* Table Header */}
              <div className="grid grid-cols-[200px_1fr_1fr_1fr_auto] gap-4 items-center mb-4 pb-4 border-b border-gray-100">
                <div></div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Date</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Time</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm">Batch Type</span>
                </div>
                <div className="w-[140px]"></div>
              </div>

              {/* Program Induction Row */}
              <div className="grid grid-cols-[200px_1fr_1fr_1fr_auto] gap-4 items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <span className="font-semibold">Program Induction</span>
                </div>
                <div className="text-center text-sm text-gray-600">
                  {cohort.programInduction.date}
                </div>
                <div className="text-center text-sm text-gray-600">
                  {cohort.programInduction.time}
                </div>
                <div></div>
                <div className="w-[140px] row-span-2 flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-linear-to-r from-primary to-primary/80 text-white rounded-xl px-4 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-sm">Apply Now</span>
                    <div className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Regular Classes Row */}
              <div className="grid grid-cols-[200px_1fr_1fr_1fr_auto] gap-4 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <span className="font-semibold">Regular Classes</span>
                </div>
                <div className="text-center text-sm text-gray-600">
                  {cohort.regularClasses.dateRange}
                </div>
                <div className="text-center text-sm text-gray-600">
                  {cohort.regularClasses.timeRange}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-600">
                    {cohort.regularClasses.batchType}
                  </span>
                  <div className="flex gap-1">
                    {cohort.regularClasses.days.map((day) => (
                      <span
                        key={day}
                        className="px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-[140px]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
