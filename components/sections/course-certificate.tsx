import Image from "next/image";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { splineSans } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { getSingularWithArticle } from "@/lib/course-utils";

interface CourseCertificateProps {
  courseTitle?: string;
  peopleInField?: string;
}

import { AppSection } from "../app-section";

export const CourseCertificate = ({
  courseTitle = "",
  peopleInField = "",
}: CourseCertificateProps) => {
  // Get singular form with correct article (e.g., "an AI Engineer", "a Data Scientist")
  const personWithArticle = getSingularWithArticle(peopleInField, true);

  // Certificate benefits list with dynamic course title
  const certificateBenefits = [
    `${courseTitle} Certificate (PDF & Badge)`,
    "A Portfolio Of 3—5 Projects",
    "Readiness Approval For Internships, Freelance, Or Job Search",
  ];

  return (
    <AppSection variant="gradient" className="py-12 lg:py-16">
      {/* Content - Certificate and Benefits */}
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Certificate" />
        <AppHeading
          headingLevel="h2"
          title={`Get Certified As ${personWithArticle}`}
          description="After Completing Your Training And Projects, You'll Earn:"
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Content - Certificate and Benefits */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Certificate Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src="/assets/images/certificate.svg"
            alt={`${courseTitle} Certificate`}
            width={500}
            height={350}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

        {/* Benefits List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5 lg:pt-8">
          {certificateBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Round Tick Icon */}
              <Image
                src="/assets/icons/round-tick.svg"
                alt="Check"
                width={24}
                height={24}
                className="w-6 h-6 shrink-0 mt-0.5"
              />
              {/* Benefit Text */}
              <span
                className={cn(
                  "text-[16px] lg:text-[18px] text-gray-700",
                  splineSans.className
                )}
              >
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppSection>
  );
};
