"use client";

import React, { useState } from "react";
import { AppHeading } from "../app-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Play, ArrowRight } from "lucide-react";
import { AppSectionButton } from "../app-section-button";
import { AppActionButton } from "../app-action-button";

interface Module {
  title: string;
  lessons: string[];
}

interface SyllableItem {
  id: string;
  title: string;
  modules: Module[];
}

interface CourseSyllabusProps {
  courseTitle?: string;
  syllabus?: SyllableItem[];
}

const INITIAL_MODULES_COUNT = 3;
const MODULES_INCREMENT = 3;

export const CourseSyllabus = ({
  courseTitle = "",
  syllabus = [],
}: CourseSyllabusProps) => {
  // Track visible modules count for each syllabus item
  const [visibleModules, setVisibleModules] = useState<Record<string, number>>(
    () => {
      const initial: Record<string, number> = {};
      syllabus.forEach((item) => {
        initial[item.id] = INITIAL_MODULES_COUNT;
      });
      return initial;
    }
  );

  if (!syllabus || syllabus.length === 0) {
    return null;
  }

  // Calculate total modules for each syllable
  const getTotalModules = (syllable: SyllableItem) => syllable.modules.length;

  // Load more modules for a specific syllabus item
  const handleLoadMore = (syllableId: string, totalModules: number) => {
    setVisibleModules((prev) => ({
      ...prev,
      [syllableId]: Math.min(
        (prev[syllableId] || INITIAL_MODULES_COUNT) + MODULES_INCREMENT,
        totalModules
      ),
    }));
  };

  return (
    <section className="container section-spacing">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center gap-3">
        <AppSectionButton title="Syllabus" />
        <AppHeading
          headingLevel="h2"
          title={`${courseTitle} Syllabus`}
          className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
        />
      </div>

      <div className="pt-12">
        <AppHeading
          headingLevel="h2"
          title="Learning Path"
          className="text-left text-[25px] lg:text-[30px] leading-tight! mb-3"
        />

        {/* Main Card Container */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {syllabus.map((syllable, index) => (
              <AccordionItem
                key={syllable.id}
                value={syllable.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="px-4 lg:px-6 py-4 lg:py-5 hover:no-underline hover:bg-gray-50/50 transition-colors group [&>svg]:w-4 [&>svg]:h-4 [&>svg]:lg:w-5 [&>svg]:lg:h-5 [&>svg]:text-gray-400 [&[data-state=open]>svg]:text-primary">
                  <div className="flex items-center justify-between w-full">
                    {/* Left side: Number + Title */}
                    <div className="flex items-center gap-3 lg:gap-4">
                      {/* Orange Number Badge */}
                      <span className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary text-white font-semibold text-sm lg:text-base shrink-0">
                        {index + 1}
                      </span>
                      {/* Title with module count */}
                      <span className="font-medium text-sm lg:text-base text-gray-900 text-left">
                        {syllable.title} — {getTotalModules(syllable)} Module
                        {getTotalModules(syllable) > 1 ? "s" : ""}
                      </span>
                    </div>

                    {/* Right side: Preview + Icons */}
                    <div className="flex items-center gap-2 lg:gap-3">
                      {/* Play Icon */}
                      <Play className="play-icon w-4 h-4 lg:w-5 lg:h-5 text-primary fill-primary transition-colors" />
                      {/* Preview text - desktop only */}
                      <span className="hidden lg:inline text-primary text-sm font-medium">
                        Preview
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 lg:px-6 pb-4 lg:pb-6">
                  <div className="space-y-4 pt-2">
                    {syllable.modules
                      .slice(
                        0,
                        visibleModules[syllable.id] || INITIAL_MODULES_COUNT
                      )
                      .map((module, moduleIndex) => (
                        <div key={moduleIndex} className="space-y-3">
                          {/* Module Title - Uppercase Bold */}
                          <h4 className="font-bold text-xs lg:text-sm text-gray-900 uppercase tracking-wide">
                            MODULE {moduleIndex + 1}:{" "}
                            {module.title.toUpperCase()}
                          </h4>

                          {/* Lessons List */}
                          <ul className="space-y-1.5 lg:space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li
                                key={lessonIndex}
                                className="flex items-start gap-2 lg:gap-3 text-gray-500"
                              >
                                <span className="shrink-0 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-gray-400 rounded-full mt-1.5 lg:mt-2" />
                                <span className="text-xs lg:text-sm">
                                  {lesson}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                    {/* Read More Button - only show if there are more modules */}
                    {(visibleModules[syllable.id] || INITIAL_MODULES_COUNT) <
                      syllable.modules.length && (
                      <button
                        onClick={() =>
                          handleLoadMore(syllable.id, syllable.modules.length)
                        }
                        className="inline-block text-primary text-xs lg:text-sm font-medium hover:underline mt-2 cursor-pointer"
                      >
                        Read More....
                      </button>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Program Syllabus Button */}
          <div className="flex justify-center lg:justify-end p-4 lg:p-6">
            <AppActionButton className="inline-flex items-center gap-2 px-6! lg:px-8! py-3! lg:py-6! text-white font-medium text-sm lg:text-base rounded-full transition-colors shadow-lg shadow-primary/25 ">
              Program Syllabus
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </AppActionButton>
          </div>
        </div>
      </div>
    </section>
  );
};
