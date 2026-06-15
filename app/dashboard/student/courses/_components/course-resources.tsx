"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, FileText, FileArchive, Code2 } from "lucide-react";

type ResourceType = "All" | "PDF" | "ZIP" | "Code Files";

interface ResourceItem {
  id: string;
  title: string;
  type: Exclude<ResourceType, "All">;
  size: string;
}

const RESOURCES: ResourceItem[] = [
  {
    id: "1",
    title: "Dataset for Practice",
    type: "PDF",
    size: "2MB",
  },
  {
    id: "2",
    title: "Python Code Files",
    type: "ZIP",
    size: "12MB",
  },
  {
    id: "3",
    title: "Lecture Slides",
    type: "PDF",
    size: "2MB",
  },
  {
    id: "4",
    title: "Advanced Exercises",
    type: "Code Files",
    size: "1.5MB",
  },
];

export const CourseResources = () => {
  const [activeFilter, setActiveFilter] = useState<ResourceType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = RESOURCES.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIconForType = (type: ResourceItem["type"]) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-6 h-6 text-[#F86432]" />;
      case "ZIP":
        return <FileArchive className="w-6 h-6 text-emerald-500" />;
      case "Code Files":
        return <Code2 className="w-6 h-6 text-blue-500" />;
    }
  };

  const getBgForType = (type: ResourceItem["type"]) => {
    switch (type) {
      case "PDF":
        return "bg-[#F86432]/10";
      case "ZIP":
        return "bg-emerald-500/10";
      case "Code Files":
        return "bg-blue-500/10";
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 lg:bg-white lg:p-8 lg:rounded-2xl">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative">
        <h2 className="text-2xl font-bold text-gray-900 hidden md:block">
          Resources
        </h2>

        <div className="flex items-center gap-1 bg-white border border-gray-100 p-1.5 rounded-full shadow-sm mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 overflow-x-auto w-full md:w-auto hide-scrollbar justify-between md:justify-center">
          {(["All", "PDF", "ZIP", "Code Files"] as ResourceType[]).map(
            (type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-6 py-2 rounded-full text-[15px] font-medium transition-colors whitespace-nowrap ${
                  activeFilter === type
                    ? "bg-[#F86432] text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {type}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Search Input */}
      <div className="w-full">
        <Input
          placeholder="files"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-50 border-0 h-12 px-4 rounded-xl text-base placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-200"
        />
      </div>

      {/* Resources List */}
      <div className="flex flex-col w-full">
        {filteredResources.map((resource, index) => (
          <div key={resource.id} className="w-full flex flex-col">
            <div className="flex items-center justify-between py-4 md:py-5">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 ${getBgForType(resource.type)}`}
                >
                  {getIconForType(resource.type)}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base md:text-[17px] font-semibold text-gray-900">
                    {resource.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-gray-100 text-gray-600 text-xs md:text-sm font-medium px-2.5 py-0.5 rounded-md">
                      {resource.type}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {resource.size}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="bg-[#F86432] hover:bg-[#F86432]/90 text-white gap-2 rounded-lg px-4 md:px-6 h-10 md:h-11 shadow-none shrink-0">
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[14px] md:text-[15px] font-medium">
                  Download
                </span>
              </Button>
            </div>

            {index < filteredResources.length - 1 && (
              <div className="w-full h-px bg-gray-100" />
            )}
          </div>
        ))}

        {filteredResources.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            No resources found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};
