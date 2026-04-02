import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { CheckCircle } from "lucide-react";

const whyWeHelpReasons = [
  {
    title: "Delivery Options:",
    reasons: [
      "On-site Corporate Bootcamps",
      "Instructor-Led Virtual Classes",
      "Self-Paced Online Learning",
      "Blended Learning Models",
    ],
  },
  {
    title: "Learning Customization Includes:",
    reasons: [
      "Industry-specific content",
      "Role-based curriculum",
      "Hands-on projects",
      "Pre-assessments & post-evaluations",
      "Internal team dashboards for tracking",
    ],
  },
];
export const BusinessWeHelp = () => {
  return (
    <div className="container section-spacing">
      <div className="flex flex-col items-center justify-center">
        <AppSectionButton title="We Help" />

        <AppHeading
          headingLevel="h2"
          title="How We Help You Upskill"
          description="We design learning experiences that your team can apply immediately on the job."
          className="text-center w-full lg:max-w-4xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center text-lg pt-3 w-full lg:max-w-[90%] mx-auto"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {whyWeHelpReasons.map((reason, index) => (
          <BusinessWhyWeHelpCard
            key={index}
            title={reason.title}
            reasons={reason.reasons}
          />
        ))}
      </div>
    </div>
  );
};

interface BusinessWhyWeHelpCardProps {
  title: string;
  reasons: string[];
}
const BusinessWhyWeHelpCard = ({
  title,
  reasons,
}: BusinessWhyWeHelpCardProps) => {
  return (
    <div className="bg-linear-to-b from-primary/20 to-white rounded-xl p-3">
      <div className="flex flex-col items-start gap-3 rounded-lg bg-linear-to-b from-white via-white to-transparent p-4">
        <h2 className="text-2xl lg:text-3xl font-bold">{title}</h2>
        <div className="flex flex-col items-start gap-3 space-y-4 py-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-primary" />
              <p className="text-base lg:text-lg font-medium" >
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
