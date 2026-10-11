import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppWhoShouldEnrolList } from "../app-who-should-enrol-list";

interface WhoShouldEnrolItem {
  title: string;
  description: string;
}

interface CourseWhoShouldEnrolProps {
  courseTitle?: string;
  whoShouldEnrol?: WhoShouldEnrolItem[];
}

export const CourseWhoShouldEnrol = ({
  courseTitle = "",
  whoShouldEnrol = [],
}: CourseWhoShouldEnrolProps) => {
  return (
      <section className="container section-spacing">
        <div className="flex flex-col justify-center items-center gap-3">
          <AppSectionButton title="Who should enrol" />
          <AppHeading
            title={`Who should enrol in this ${courseTitle} course`}
            headingLevel="h2"
            className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
          />
        </div>

        {/* Who Should Enrol Cards */}
        {whoShouldEnrol && whoShouldEnrol.length > 0 && (
          <div className="mt-8 lg:mt-12">
            <AppWhoShouldEnrolList items={whoShouldEnrol} />
          </div>
        )}
      </section>
  );
};
