"use client";

import { useState } from "react";

interface CourseOverviewProps {
  title: string;
}

export const CourseOverview = ({ title }: CourseOverviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "Learning a little each day adds up. Research shows that students who make learning a habit are more likely to achieve their goals. By dedicating just a few minutes daily to practice and review, you build a strong foundation of knowledge that compounds over time. This course is designed to help you integrate these effective learning strategies into your daily routine, maximizing your retention and skill development. Stay consistent, and you will see remarkable progress in your mastery of prompt engineering.";

  const previewText =
    "Learning a little each day adds up. Research\nshows that students who make learning a habit";

  return (
    <div className="flex flex-col gap-6 lg:p-6 lg:bg-white lg:rounded-2xl">
      <h2 className="text-2xl md:text-[26px] font-bold text-black">{title}</h2>

      <div className="flex flex-col gap-3">
        <h3 className="text-[16px] text-black">Description</h3>

        <div className="text-[15px] text-gray-500 leading-[1.7]">
          {isExpanded ? (
            <p>{fullText}</p>
          ) : (
            <p className="whitespace-pre-line">
              {previewText}
              <br />
              ...
            </p>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#F86432] font-semibold hover:text-[#E55A2B] transition mt-2"
          >
            {isExpanded ? "See less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
};
