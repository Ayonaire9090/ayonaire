"use client";

import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";

const cultures = [
  {
    title: "Excellence in Action",
    description:
      "At Ayonaire, we deliver world-class quality in everything we do  from teaching and projects to partnerships. Mediocrity and shortcuts have no place here. Feedback and continuous improvement are part of our DNA, ensuring we are always raising the bar.",
  },
  {
    title: "Growth Mindset",
    description:
      "We embrace challenges, seeing them as opportunities to grow. Failures are lessons, not endings. Every student and leader is committed to lifelong learning, with curiosity and humility driving our collective success.",
  },
  {
    title: "Service & Impact First",
    description:
      "We lead by serving others. Our programs are designed not just to transfer knowledge but to transform lives. Impact, not applause, is the measure of our success, and every initiative must create lasting change.",
  },
  {
    title: "Purposeful Innovation",
    description:
      "We innovate with intention  to solve real problems that matter. Bold ideas are welcomed, tested, and refined. Technology for us is not an end in itself but a tool to empower, uplift, and build communities.",
  },
  {
    title: "Radical Collaboration",
    description:
      "We see ourselves as one family, growing stronger together. There are no silos, no egos only shared wins. Respect, empathy, and teamwork define how we relate to each other and to our partners.",
  },
  {
    title: "Team Excellence",
    description:
      "We see ourselves as one family, growing stronger together. There are no silos, no egos only shared wins. Respect, empathy, and teamwork define how we relate to each other and to our partners.",
  },
  {
    title: "Ownership & Accountability",
    description:
      "We are stewards, not spectators. Everyone takes responsibility for results and treats Ayonaire’s mission as their own. We honor commitments with discipline, think long-term, and act like owners  because this vision belongs to all of us.",
  },
  {
    title: "Global Thinking, Local Roots",
    description:
      "We prepare Africans for global opportunities while staying rooted in solving African challenges. Our impact begins locally but extends to nations, raising leaders who will shape industries and fund solutions worldwide.",
  },
];

export const AboutCulture = () => {
  return (
    <>
      <AppSection containerClassName="pb-16" variant="gradient" direction="top">
        <div className="flex flex-col justify-center items-center">
          <AppSectionButton title="Culture" className="w-fit bg-white my-4" />
          <AppHeading
            headingLevel="h2"
            title="Our Culture"
            description="This is how we live out our values daily — what students, partners, and staff actually experience."
            className="text-center text-[35px] lg:text-[44px]"
            descriptionClassName="text-base! lg:text-lg! text-center! pt-2"
          />
        </div>
        <div className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cultures.map((value, index) => (
            <CultureCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </AppSection>
    </>
  );
};

interface CultureCardProps {
  title: string;
  description: string;
}
const CultureCard = ({ title, description }: CultureCardProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-[16px] border border-gray-200 p-4">
      <AppHeading
        headingLevel="h3"
        title={title}
        description={description}
        className="text-[20px]! lg:text-[20px]! text-[#0F1729]! font-extrabold!"
        descriptionClassName="text-base! text-gray-500! pt-1!"
      />
    </div>
  );
};
