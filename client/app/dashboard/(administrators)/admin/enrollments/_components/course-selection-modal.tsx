"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { useGetCourses } from "@/hooks/api/use-courses";
import { EnrollmentCourseData } from "./enrollment-course-card";

interface CourseSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (course: EnrollmentCourseData) => void;
}

export const CourseSelectionModal = ({
  isOpen,
  onClose,
  onSelect,
}: CourseSelectionModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 4;

  const { data, isLoading } = useGetCourses({
    page: currentPage,
    limit,
    search: searchQuery || undefined,
  });

  const courses = data?.courses ?? [];
  const pagination = data?.pagination;

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
              setCurrentPage(1);
            }}
            className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none w-full"
          />
        </div>

        <div className="flex flex-col flex-1 divide-y divide-gray-100">
          {isLoading ? (
            <div className="py-8 text-center text-gray-500">Loading courses...</div>
          ) : courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className="flex gap-4 py-5">
                {/* Image */}
                <div className="relative w-[120px] h-[85px] lg:w-[110px] lg:h-[75px] shrink-0 rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={course.thumbnail?.url || "/assets/icons/branded-learning.svg"}
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
                      {course.description || "No description available."}
                    </p>
                    <div className="text-[13.5px] mt-2">
                      <span className="text-gray-500">Price: </span>
                      <span className="text-[#F06B30] font-semibold">
                        {typeof course.price === "number" ? `$${course.price}` : "Free"}
                      </span>
                    </div>
                  </div>

                  {/* Actions / Meta */}
                  <div className="flex flex-col justify-between items-end shrink-0 pl-2">
                    <span className="text-[12.5px] text-gray-400 whitespace-nowrap">
                      {course.enrollmentCount ?? 0} enrolled
                    </span>
                    <Button
                      onClick={() =>
                        onSelect({
                          id: course._id,
                          title: course.title,
                          duration: course.courseLevel ?? "N/A",
                          price:
                            typeof course.price === "number" ? `$${course.price}` : "Free",
                          imageSrc:
                            course.thumbnail?.url || "/assets/icons/branded-learning.svg",
                          dateStr: course.createdAt
                            ? new Date(course.createdAt).toLocaleString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                                hour: "numeric",
                                minute: "2-digit",
                              })
                            : undefined,
                        })
                      }
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
              No courses found{searchQuery ? ` matching "${searchQuery}"` : ""}
            </div>
          )}
        </div>

        {/* Pagination Bottom */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-transparent shrink-0">
          <span className="text-[14px] font-medium text-gray-800">
            Page {pagination?.page ?? currentPage} of {pagination?.totalPages ?? 1}
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
              onClick={() =>
                setCurrentPage((p) => Math.min(pagination?.totalPages ?? p, p + 1))
              }
              disabled={!pagination || currentPage >= pagination.totalPages}
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
