"use client";

import { SidebarInset, useSidebar } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { Clock } from "lucide-react";
import { useState } from "react";
import { WorkshopDateFilter } from "../workshop/_components/workshop-date-filter";

const jobFairData = [
  {
    date: "Nov 2, 2025",
    items: [
      {
        time: "9:30 AM - 12:30 PM",
        title: "Strengthen interpersonal communication",
        subtitle: "(Custom meeting)",
      },
    ],
  },
  {
    date: "Nov 12, 2025",
    items: [
      {
        time: "2:00 PM - 6:00 PM",
        title: "Fine-tune your email ettiquette",
        subtitle: "(Custom meeting)",
      },
    ],
  },
  {
    date: "Nov 22, 2025",
    items: [
      {
        time: "8:00 PM - 12:00 AM",
        title: "Build a standout resume",
        subtitle: "(Custom meeting)",
      },
    ],
  },
  {
    date: "Dec 2, 2025",
    items: [
      {
        time: "8:00 PM - 12:00 AM",
        title: "Ace interviews for your dream jobs",
        subtitle: "(Custom meeting)",
      },
    ],
  },
];

export const StudentJobFairSessionsContent = () => {
  const { state } = useSidebar();
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming",
  );

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-[#F8F9FA] min-h-screen pb-24">
        <StudentDashboardHeader showLogo={state === "collapsed"} />

        <div className="lg:bg-white flex flex-1 flex-col w-full lg:max-w-3xl lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          {/* Header Title */}
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 bg-white p-4 lg:p-0">
            Job Fair Sessions
          </h1>

          <div className="flex flex-col gap-5">
            {/* Tabs */}
            <div className="grid grid-cols-2 lg:flex items-start bg-white lg:bg-[#F6F6F6] lg:border lg:border-gray-200 rounded-xl p-1 w-[95%] mx-auto lg:mx-0 lg:w-fit shadow-sm lg:shadow-none">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "upcoming"
                    ? "bg-[#F86432] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                }`}
              >
                Upcoming
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "completed"
                    ? "bg-[#F86432] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                }`}
              >
                Completed
              </button>
            </div>

            <div className="mt-2">
              <WorkshopDateFilter />
            </div>

            {/* List */}
            <div className="flex flex-col gap-6 lg:gap-8 mt-4 lg:mt-6 lg:max-w-4xl">
              <div className="flex flex-col gap-4 w-full">
                {jobFairData.map((group, i) => (
                  <div key={i} className="flex flex-col gap-3 w-full">
                    {/* Group Header */}
                    <div className="bg-[#F8F9FA] lg:bg-[#F6F6F6] px-4 py-2 lg:py-3 lg:rounded-lg">
                      <span className="text-gray-500 font-medium text-sm">
                        {group.date}
                      </span>
                    </div>

                    {/* Group Items */}
                    <div className="flex flex-col gap-3">
                      {group.items.map((item, j) => (
                        <div
                          key={j}
                          className="flex bg-white lg:rounded-2xl border border-gray-100/80 p-4 lg:p-6 gap-3 lg:gap-8 hover:shadow-sm transition-all items-start lg:items-center"
                        >
                          <div className="flex items-start lg:items-center gap-2 w-[110px] lg:w-[220px] shrink-0">
                            <Clock className="w-4 h-4 text-[#F86432] shrink-0 lg:hidden mt-0.5" />
                            <span className="font-bold text-gray-900 text-sm lg:text-base leading-snug wrap-break-word">
                              {item.time}
                            </span>
                            <Clock className="w-5 h-5 text-gray-400 shrink-0 hidden lg:block" />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm lg:text-base leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 text-xs lg:text-sm mt-1">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
};
