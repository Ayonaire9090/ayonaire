"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { AddCourseModal } from "@/components/modals/courses/add-course-modal";

export const InstructorCreateNewCourseCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[420px] flex flex-col p-2 bg-white border-none rounded-3xl overflow-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex-1 w-full bg-[#F8F9FA] rounded-[20px] flex flex-col items-center justify-center hover:bg-gray-100 transition-colors group cursor-pointer"
        >
          <div className="w-[100px] h-[100px] rounded-full bg-[#FAD9D9] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
            <div className="w-[48px] h-[48px] rounded-full bg-[#F86432] flex items-center justify-center">
              <Plus className="size-6 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <h3 className="text-[19px] font-bold text-black mb-2">
            Create new Course
          </h3>
          <p className="text-[15px] text-gray-500 text-center max-w-[240px] leading-snug">
            start building your next educational master piece
          </p>
        </button>
      </div>

      <AddCourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
