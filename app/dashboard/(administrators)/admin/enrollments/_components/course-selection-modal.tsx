"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { courses as allCourseCategories } from "@/constants";

interface CourseSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (course: any) => void;
}

export const CourseSelectionModal = ({
  isOpen,
  onClose,
  onSelect,
}: CourseSelectionModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Flatten all courses from all categories
  const allCourses = useMemo(() => {
    return allCourseCategories
      .flatMap((category) => category.courses)
      .map((course) => ({
        id: course.slug || course.title,
        title: course.title,
        duration: course.duration || "N/A",
        // Add a fallback price since it might not be in the constant data
        price: "$120",
        description:
          course.description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.....",
        imageSrc:
          course.thumbnail ||
          course.imageSrc ||
          "/assets/icons/branded-learning.svg",
      }));
  }, []);

  // Filter courses by search query
  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [allCourses, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage) || 1;
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title="Select course"
      className="max-w-[550px]"
    >
      <div className="flex flex-col gap-4 mt-2 h-full">
        {/* Search */}
        <div className="relative w-full shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
          <Input
            placeholder="Search course...."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none w-full"
          />
        </div>

        <div className="flex flex-col flex-1 divide-y divide-gray-100">
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course, index) => (
              <div
                key={`${course.id}-${index}`}
                className="flex gap-4 py-5"
              >
                {/* Image */}
                <div className="relative w-[120px] h-[85px] lg:w-[110px] lg:h-[75px] shrink-0 rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 gap-2 min-w-0 justify-between">
                  {/* Text Main */}
                  <div className="flex flex-col h-full flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-[15.5px] leading-tight line-clamp-1 mb-1.5">
                      {course.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-snug mb-auto line-clamp-2 pr-2">
                      {course.description}
                    </p>
                    <div className="text-[13.5px] mt-2">
                      <span className="text-gray-500">Price: </span>
                      <span className="text-[#F06B30] font-semibold">
                        {course.price}
                      </span>
                    </div>
                  </div>

                  {/* Actions / Meta */}
                  <div className="flex flex-col justify-between items-end shrink-0 pl-2">
                    <span className="text-[12.5px] text-gray-400 whitespace-nowrap">
                      Duration: {course.duration}
                    </span>
                    <Button
                      onClick={() => onSelect(course)}
                      className="h-8 px-6 rounded bg-[#F06B30] hover:bg-[#F06B30]/90 text-white text-[13.5px] font-medium shadow-none mt-auto"
                    >
                      Select
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-gray-500">
              No courses found matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Pagination Bottom */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-transparent shrink-0">
          <span className="text-[14px] font-medium text-gray-800">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1.5 text-[14px] font-medium text-gray-800 hover:text-black transition-colors disabled:opacity-50 disabled:hover:text-gray-800"
            >
              <ChevronLeft className="size-4" strokeWidth={2.5} /> Prev.
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1.5 text-[14px] font-medium text-gray-800 hover:text-black transition-colors disabled:opacity-50 disabled:hover:text-gray-800"
            >
              Next <ChevronRight className="size-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </AppSimpleModal>
  );
};
