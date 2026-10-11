"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLessonTranscription } from "@/hooks/api/use-course-interactions";

interface CourseTranscriptionProps {
  courseId: string;
  lessonId?: string;
}

export const CourseTranscription = ({
  courseId,
  lessonId,
}: CourseTranscriptionProps) => {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useLessonTranscription(courseId, lessonId);

  const sections = data?.data?.sections ?? [];
  const filteredSections = sections.filter((section) => {
    const query = searchQuery.toLowerCase();
    return (
      section.title.toLowerCase().includes(query) ||
      section.content.toLowerCase().includes(query)
    );
  });

  const toggleSection = (id: string) => {
    setOpenSections((current) =>
      current.includes(id)
        ? current.filter((sectionId) => sectionId !== id)
        : [...current, id],
    );
  };

  if (!lessonId) {
    return (
      <div className="py-16 text-center text-gray-500">
        Select a lesson to view its transcription.
      </div>
    );
  }

  if (isLoading) {
    return <div className="py-16 text-center text-gray-500">Loading transcription...</div>;
  }

  if (isError) {
    return (
      <div className="py-16 text-center text-red-500">
        Failed to load transcription.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 pb-20">
      <div className="relative w-full max-w-sm px-4 md:px-0">
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-10 pl-4 pr-10 rounded-xl border-gray-300 text-[15px] focus-visible:ring-1 focus-visible:ring-[#F86432]"
        />
        <Search className="w-4 h-4 text-gray-400 absolute right-7 md:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {filteredSections.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No transcription has been added for this lesson yet.
        </div>
      ) : (
        <div className="w-full flex flex-col h-full bg-white md:rounded-2xl overflow-hidden md:border md:border-gray-100">
          {filteredSections.map((section, index) => {
            const id = section._id ?? `${index}`;
            const isOpen = openSections.includes(id) || index === 0;

            return (
              <div key={id} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleSection(id)}
                  className="w-full flex items-center justify-between px-4 md:px-6 py-5 bg-white hover:bg-gray-50 transition"
                >
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-gray-900 text-[15px] md:text-base">
                      {section.title}
                    </span>
                    {(section.progress || section.duration) && (
                      <span className="text-sm text-gray-500 mt-0.5">
                        {[section.progress, section.duration].filter(Boolean).join(" | ")}
                      </span>
                    )}
                  </div>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>

                {isOpen && section.content && (
                  <div className="px-4 md:px-6 pb-6 bg-white">
                    <div className="text-[15px] text-gray-800 leading-[1.8] whitespace-pre-wrap">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
