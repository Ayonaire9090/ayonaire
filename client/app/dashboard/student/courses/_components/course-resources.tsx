"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Download, FileText, FileArchive, Code2, File } from "lucide-react";
import { LessonMaterial } from "@/lib/api/endpoints/lessons";

type ResourceType = "All" | "PDF" | "ZIP" | "Code Files" | "Other";

function getResourceType(name: string): Exclude<ResourceType, "All"> {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf") return "PDF";
  if (["zip", "rar", "7z"].includes(ext)) return "ZIP";
  if (["js", "ts", "tsx", "jsx", "py", "java", "c", "cpp", "go", "rb", "json"].includes(ext))
    return "Code Files";
  return "Other";
}

function getIconForType(type: Exclude<ResourceType, "All">) {
  switch (type) {
    case "PDF":
      return <FileText className="w-6 h-6 text-[#F86432]" />;
    case "ZIP":
      return <FileArchive className="w-6 h-6 text-emerald-500" />;
    case "Code Files":
      return <Code2 className="w-6 h-6 text-blue-500" />;
    case "Other":
      return <File className="w-6 h-6 text-gray-500" />;
  }
}

function getBgForType(type: Exclude<ResourceType, "All">) {
  switch (type) {
    case "PDF":
      return "bg-[#F86432]/10";
    case "ZIP":
      return "bg-emerald-500/10";
    case "Code Files":
      return "bg-blue-500/10";
    case "Other":
      return "bg-gray-500/10";
  }
}

interface CourseResourcesProps {
  materials?: LessonMaterial[];
}

export const CourseResources = ({ materials = [] }: CourseResourcesProps) => {
  const [activeFilter, setActiveFilter] = useState<ResourceType>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const resources = materials.map((material) => ({
    ...material,
    type: getResourceType(material.name),
  }));

  const availableFilters: ResourceType[] = [
    "All",
    ...Array.from(new Set(resources.map((r) => r.type))),
  ];

  const filteredResources = resources.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 lg:bg-white lg:p-8 lg:rounded-2xl">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative">
        <h2 className="text-2xl font-bold text-gray-900 hidden md:block">
          Resources
        </h2>

        {resources.length > 0 && (
          <div className="flex items-center gap-1 bg-white border border-gray-100 p-1.5 rounded-full shadow-sm mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 overflow-x-auto w-full md:w-auto hide-scrollbar justify-between md:justify-center">
            {availableFilters.map((type) => (
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
            ))}
          </div>
        )}
      </div>

      {resources.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No resources have been attached to this lesson.
        </div>
      ) : (
        <>
          {/* Search Input */}
          <div className="w-full">
            <Input
              placeholder="Search resources"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-0 h-12 px-4 rounded-xl text-base placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-200"
            />
          </div>

          {/* Resources List */}
          <div className="flex flex-col w-full">
            {filteredResources.map((resource, index) => (
              <div key={resource.publicId} className="w-full flex flex-col">
                <div className="flex items-center justify-between py-4 md:py-5">
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 ${getBgForType(resource.type)}`}
                    >
                      {getIconForType(resource.type)}
                    </div>
                    <div className="flex flex-col gap-1.5 min-w-0">
                      <h3 className="text-base md:text-[17px] font-semibold text-gray-900 truncate">
                        {resource.name}
                      </h3>
                      <span className="bg-gray-100 text-gray-600 text-xs md:text-sm font-medium px-2.5 py-0.5 rounded-md w-fit">
                        {resource.type}
                      </span>
                    </div>
                  </div>

                  <a
                    href={resource.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-4 md:px-6 h-10 md:h-11 shrink-0 transition-colors"
                  >
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-[14px] md:text-[15px] font-medium">
                      Download
                    </span>
                  </a>
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
        </>
      )}
    </div>
  );
};
