import { WorkshopCalendarCard } from "../../workshop/_components/workshop-calendar";
import Link from "next/link";
import React from "react";

const DummyWorkshopData = [
  {
    month: "Mar",
    day: "12",
    label: "Today",
    dateText: "12 Mar",
    time: "09:00 AM - 01:00 PM",
    title: "Building RAG Agents with LangChain",
    author: "Ayobami Awosanya",
  },
  {
    month: "Mar",
    day: "17",
    label: "Friday",
    dateText: "17 Mar",
    time: "09:00 AM - 01:00 PM",
    title: "Building RAG Agents with LangChain",
    author: "Ayobami Awosanya",
  },
];

export const FeedWorkShop = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white p-2 lg:p-4 lg:rounded-2xl ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 lg:px-0">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900">
          Upcoming workshops
        </h2>
        <Link
          href="#"
          className="text-[#F86432] text-sm font-medium hover:underline"
        >
          View all
        </Link>
      </div>

      {/* Cards Scrollable Container */}
      <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 lg:px-0 pb-2">
        {DummyWorkshopData.map((workshop, index) => (
          <WorkshopCalendarCard 
            key={index} 
            {...workshop} 
            className="min-w-[300px] sm:min-w-[380px] md:min-w-[420px] shrink-0"
          />
        ))}
      </div>
    </div>
  );
};
