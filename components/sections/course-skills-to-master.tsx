"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppActionButton } from "../app-action-button";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface CourseSkillsToMasterProps {
  courseTitle?: string;
  skillsToMaster?: SkillCategory[];
}

// Component to handle each category's expandable state
const SkillCategoryMobile = ({
  category,
  categoryIndex,
}: {
  category: SkillCategory;
  categoryIndex: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreThanThree = category.skills.length > 3;
  const displayedSkills = isExpanded
    ? category.skills
    : category.skills.slice(0, 3);

  return (
    <div key={categoryIndex} className="space-y-4">
      {/* Category Title */}
      <h3 className="font-bold text-xl">{category.title}</h3>

      {/* Skills List */}
      <ul className="space-y-4">
        {displayedSkills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-center gap-2">
            {/* Checkmark Icon */}
            <Image
              src="/assets/icons/round-tick.svg"
              alt="check"
              width={40}
              height={40}
              className="shrink-0 mt-1"
            />
            {/* Skill Text */}
            <p className="text-sm lg:text-base text-[#6E6E6E] capitalize leading-normal">
              {skill}
            </p>
          </li>
        ))}
      </ul>

      {/* View More/Less Button - Only show if more than 3 skills */}
      {hasMoreThanThree && (
        <div className="flex justify-center pt-2">
          <AppActionButton
            variant="fading"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 rounded-full text-sm"
          >
            {isExpanded ? "View Less" : "View More"}
          </AppActionButton>
        </div>
      )}
    </div>
  );
};

export const CourseSkillsToMaster = ({
  courseTitle = "",
  skillsToMaster = [],
}: CourseSkillsToMasterProps) => {
  if (!skillsToMaster || skillsToMaster.length === 0) {
    return null;
  }

  // Flatten all skills for desktop 3-column grid view
  const allTechnicalSkills =
    skillsToMaster.find((cat) => cat.title.toLowerCase().includes("technical"))
      ?.skills || [];
  const allProfessionalSkills =
    skillsToMaster.find(
      (cat) =>
        cat.title.toLowerCase().includes("professional") ||
        cat.title.toLowerCase().includes("career")
    )?.skills || [];

  return (
    <section className="container section-spacing">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-3">
        <AppSectionButton title="Mastery" />
        <AppHeading
          headingLevel="h2"
          title={`${courseTitle} Skills You'll Master`}
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
        />
      </div>

      {/* Mobile View - Single Column with Categories */}
      <div className="lg:hidden pt-10 space-y-8">
        {skillsToMaster.map((category, categoryIndex) => (
          <SkillCategoryMobile
            key={categoryIndex}
            category={category}
            categoryIndex={categoryIndex}
          />
        ))}
      </div>

      {/* Desktop View - Full Width with Grid Layout */}
      <div className="hidden lg:block pt-12">
        {/* Technical Skills Section */}
        {allTechnicalSkills.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold text-xl  mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 gap-x-10 gap-y-8">
              {allTechnicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Checkmark Icon - matching course-why-join */}
                  <Image
                    src="/assets/icons/round-tick.svg"
                    alt="check"
                    width={40}
                    height={40}
                    className="shrink-0"
                  />
                  {/* Skill Text - matching course-why-join */}
                  <p className="text-base text-[#6E6E6E] capitalize leading-normal">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional & Career Skills Section */}
        {allProfessionalSkills.length > 0 && (
          <div>
            <h3 className="font-bold text-xl mb-6">
              Professional & Career Skills
            </h3>
            <div className="grid grid-cols-3 gap-x-10 gap-y-8">
              {allProfessionalSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-2">
                  {/* Checkmark Icon - matching course-why-join */}
                  <Image
                    src="/assets/icons/round-tick.svg"
                    alt="check"
                    width={40}
                    height={40}
                    className="shrink-0"
                  />
                  {/* Skill Text - matching course-why-join */}
                  <p className="text-base text-[#6E6E6E] capitalize leading-normal">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
