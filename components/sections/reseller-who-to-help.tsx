import React from "react";
import Link from "next/link";
import { AppHeading } from "../app-heading";
import {
  Award,
  Briefcase,
  Earth,
  LucideIcon,
  Users,
  ArrowRight,
} from "lucide-react";
import { AppSection } from "../app-section";
import { AppActionButton } from "../app-action-button";

const whoToHelpValues = [
  {
    id: "1",
    icon: Users,
    title: "Tech Upskillers",
    description:
      "Beginners and mid-career professionals looking to master tech skills like AI, Data, and Design on their own terms, at their own pace.",
  },
  {
    id: "2",
    icon: Briefcase,
    title: "Career Switchers & Young Professionals",
    description:
      "People stuck in low-income or outdated jobs who want to pivot confidently into high-demand tech fields like software, marketing, and cybersecurity.",
  },
  {
    id: "3",
    icon: Earth,
    title: "Remote Learners Across Africa (and Beyond)",
    description:
      "University students, stay-at-home moms, and remote workers eager for affordable, flexible learning they can access from anywhere, even with low data.",
  },
  {
    id: "4",
    icon: Award,
    title: "Community Builders & Change Agents",
    description:
      "Educators, youth leaders, and local influencers passionate about impact who want to share opportunities that equip others with life-changing tech skills.",
  },
];

export const ResellerWhoToHelp = () => {
  return (
    <AppSection containerClassName="pb-16" variant="gradient" direction="top">
      <div className="flex flex-col justify-center items-center">
        <AppHeading
          headingLevel="h2"
          title="Who You'll Help"
          description="By joining the Ayonaire Reseller Partner Program, you're not just making sales—you're opening doors to opportunity. Here's who you'll be empowering:"
          className="text-center text-[35px] lg:text-[44px]"
          descriptionClassName="text-center pt-2 lg:text-lg lg:pt-3 lg:max-w-[60%] mx-auto"
        />
      </div>

      {/* Cards Grid */}
      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {whoToHelpValues.map((value, index) => (
          <ResellerWhoToHelpCard
            key={index}
            id={value.id}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8">
        <Link href="/reseller-partner#becomePartner">
          <AppActionButton
            variant="fading"
            className="py-6 lg:py-7 px-8 lg:px-10 text-[16px]  hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
          >
            <span>Become A Partner</span>
            <span className="bg-white p-1.5 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
              <ArrowRight size={20} className="text-primary" />
            </span>
          </AppActionButton>
        </Link>
      </div>
    </AppSection>
  );
};

interface ResellerWhoToHelpCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ResellerWhoToHelpCard = ({
  id,
  icon: Icon,
  title,
  description,
}: ResellerWhoToHelpCardProps) => {
  return (
    <div className="flex items-start gap-4 bg-white rounded-[16px] p-5 lg:p-6 hover:bg-[#FFE6D5] hover:border hover:border-primary transition-all ease-in-out duration-300 shadow-md group">
      {/* Icon Container */}
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#FFE6D5] group-hover:bg-primary shrink-0 transition-all ease-in-out duration-300">
        <Icon className="text-primary w-6 h-6 group-hover:text-white transition-all ease-in-out duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg lg:text-xl font-bold text-gray-900">
          {id}. {title}
        </h3>
        <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
