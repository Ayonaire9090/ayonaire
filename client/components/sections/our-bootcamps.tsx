"use client";

import { useState } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { courses as allCourses } from "@/constants";
import { AppSchoolCarousel } from "../app-school-carousel";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface OurBootcampsProps {
  sectionButtonTitle?: string;
  sectionTitleDesktop?: string;
  sectionTitleMobile?: string;
  sectionDescription?: string;
  courses?: typeof allCourses;
  showAccordion?: boolean;
  /** Number of rows to display per carousel slide on desktop (e.g., 2 for a 3x2 grid) */
  desktopGridRows?: number;
}

export const OurBootcamps = ({
  sectionButtonTitle = "Our Bootcamps",
  sectionTitleDesktop = "Schools That Train You For The World's Most Demanded Skills",
  sectionTitleMobile = "Schools That Teach Today's Most Needed Skills",
  sectionDescription = "Explore our diverse range of bootcamps",
  courses = allCourses,
  showAccordion = true,
  desktopGridRows,
}: OurBootcampsProps) => {

  // Determine if the device is mobiile
  const isMobiile = useIsMobile();

  // Flatten all courses when accordion is disabled
  const allFlattenedCourses =
    courses?.flatMap((school) => school.courses) || [];
  const [activeCategory, setActiveCategory] = useState<string | null>(
    courses?.[0]?.categoryName || null
  );

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  return (
    <>
      <section id="ourBootcamps" className="relative w-full">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-white to-[#FFE7DE] -z-10 rounded-b-none lg:rounded-b-[70px]" />

        <div className="container relative z-10 pb-6">
          <div className="flex flex-col items-center justify-center section-spacing  space-y-8 w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center  space-y-4">
              <AppSectionButton title={sectionButtonTitle} />
              <div className="w-full hidden lg:max-w-[60%] lg:flex flex-col items-center justify-center">
                <AppHeading
                  headingLevel="h2"
                  className="text-[30px] lg:text-5xl leading-tight"
                  title={sectionTitleDesktop}
                  description={sectionDescription}
                  descriptionClassName="text-[18px]!"
                />
              </div>
              <div className="w-full flex lg:hidden flex-col items-center justify-center">
                <AppHeading
                  headingLevel="h2"
                  className="text-center text-[25px] lg:text-5xl leading-tight"
                  title={sectionTitleMobile}
                  description={sectionDescription}
                />
              </div>
            </div>

            {/* Content Container */}
            <div
              className={cn(
                "w-full rounded-2xl",
                showAccordion
                  ? "py-4 lg:py-12 px-2 md:px-4 lg:px-8 border border-gray-200 bg-white"
                  : ""
              )}
            >
              {showAccordion ? (
                <>
                  {/* Desktop View: Tabs */}
                  <div className="hidden lg:block w-full max-w-[1400px] ">
                    <Tabs
                      defaultValue={courses?.[0].categoryName}
                      className="w-full flex flex-col items-center"
                    >
                      <TabsList className="h-auto flex flex-nowrap justify-start items-center overflow-x-auto hide-scrollbar gap-2 bg-[#F3F3F3] mb-12 w-full max-w-full p-2 scrollbar-none rounded">
                        {courses?.map((school) => (
                          <TabsTrigger
                            key={school.categoryName}
                            value={school.categoryName}
                            className="px-6 rounded py-4 border-0 border-none data-[state=active]:border-0 data-[state=active]:ring-0 data-[state=active]:shadow-none data-[state=active]:bg-linear-to-r data-[state=active]:from-primary data-[state=active]:via-primary data-[state=active]:to-primary/20 data-[state=active]:text-primary-foreground data-[state=active]:hover:bg-primary/90 data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-gray-100 transition-all font-medium text-base text-black shrink-0"
                          >
                            {school.categoryName}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {courses?.map((school) => (
                        <TabsContent
                          key={school.categoryName}
                          value={school.categoryName}
                          className="w-full mt-0 focus-visible:ring-0"
                        >
                          {/* Reusable Component for Desktop */}
                          <AppSchoolCarousel
                            schoolCourses={school.courses}
                            align="start"
                          />
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>

                  {/* Mobile/Tablet View: Expandable List with All Borders Visible */}
                  <div className="lg:hidden w-full space-y-3">
                    {courses?.map((school) => {
                      const isActive = activeCategory === school.categoryName;
                      return (
                        <div key={school.categoryName} className="w-full">
                          {/* Category Trigger Button - Always visible with border */}
                          <button
                            onClick={() => handleCategoryClick(school.categoryName)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-4 rounded-xl border transition-all duration-200",
                              isActive
                                ? "border-primary border-[2.5px] text-primary bg-white"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            )}
                          >
                            <span
                              className={cn(
                                "text-base",
                                isActive ? "font-semibold" : "font-medium"
                              )}
                            >
                              {school.categoryName}
                            </span>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 shrink-0 transition-transform duration-200",
                                isActive
                                  ? "rotate-180 text-primary"
                                  : "text-gray-500"
                              )}
                            />
                          </button>

                          {/* Expandable Content */}
                          <div
                            className={cn(
                              "overflow-hidden transition-all duration-300 ease-in-out",
                              isActive
                                ? "max-h-[800px] opacity-100 mt-2"
                                : "max-h-0 opacity-0"
                            )}
                          >
                            <div className="pb-2 px-1">
                              <AppSchoolCarousel
                                schoolCourses={school.courses}
                                align="center"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                /* No Accordion: Display all courses directly in carousel */
                <div className="w-full">
                  <AppSchoolCarousel
                    schoolCourses={allFlattenedCourses}
                    align="start"
                    showBackgroundBorderMobile={true}
                    desktopGridRows={desktopGridRows}
                    nextButtonType={isMobiile ? "rounded" : "default"}
                    previousButtonType={isMobiile ? "rounded" : "default"}
                    progressBarClasses={isMobiile ? "bg-white rounded-full" : ""}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
