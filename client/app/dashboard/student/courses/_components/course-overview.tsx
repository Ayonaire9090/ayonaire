"use client";

import { useState } from "react";

interface CourseOverviewProps {
  title: string;
  description?: string;
}

const PREVIEW_LENGTH = 110;

export const CourseOverview = ({ title, description }: CourseOverviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = description || "No description available for this course.";
  const canTruncate = fullText.length > PREVIEW_LENGTH;
  const previewText = canTruncate
    ? fullText.slice(0, PREVIEW_LENGTH).trimEnd()
    : fullText;

  return (
    <div className="flex flex-col gap-6 lg:p-6 lg:bg-white lg:rounded-2xl">
      <h2 className="text-2xl md:text-[26px] font-bold text-black">{title}</h2>

      <div className="flex flex-col gap-3">
        <h3 className="text-[16px] text-black">Description</h3>

        <div className="text-[15px] text-gray-500 leading-[1.7]">
          {isExpanded || !canTruncate ? (
            <p>{fullText}</p>
          ) : (
            <p>
              {previewText}
              ...
            </p>
          )}

          {canTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#F86432] font-semibold hover:text-[#E55A2B] transition mt-2"
            >
              {isExpanded ? "See less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
