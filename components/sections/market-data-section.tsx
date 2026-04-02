import { AppHeading } from "@/components/app-heading";
import { AppSectionButton } from "@/components/app-section-button";
import { marketData } from "@/constants";
import { LucideIcon } from "lucide-react";
import React from "react";

// Gradient colors for the earning potential cards
const gradientColors = [
  "bg-linear-to-br from-[#00C950] to-[#009966]", // Green
  "bg-linear-to-br from-[#2B7FFF] to-[#4F39F6]", // Blue
  "bg-linear-to-br from-[#AD46FF] to-[#E60076]", // Pink
];

interface PrimaryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  source: string;
}

const PrimaryCard = ({
  icon: Icon,
  title,
  description,
  source,
}: PrimaryCardProps) => {
  return (
    <div className="relative rounded-[16px] lg:rounded-[24px] p-[3px] bg-linear-to-r from-primary via-primary/60 to-primary/20 shadow-sm">
      {/* Gradient border wrapper - covers bottom to hide gradient there */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white rounded-b-[16px] lg:rounded-b-[24px] z-10" />
      {/* Card content */}
      <div className="relative bg-white rounded-[14px] lg:rounded-[22px] p-6 lg:p-8 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="text-primary mb-4">
          <Icon size={48} strokeWidth={1.5} />
        </div>
        {/* Title */}
        <h3 className="text-[24px] lg:text-[28px] font-bold text-gray-900 mb-2">
          {title}
        </h3>
        {/* Description */}
        <p className="text-[14px] lg:text-[16px] text-gray-600 mb-3">
          {description}
        </p>
        {/* Source */}
        <p className="text-[12px] lg:text-[14px] text-gray-400">
          Source: {source}
        </p>
      </div>
    </div>
  );
};

interface GradientCardProps {
  title: string;
  description: string;
  gradientClass: string;
}

const GradientCard = ({
  title,
  description,
  gradientClass,
}: GradientCardProps) => {
  return (
    <div
      className={`${gradientClass} rounded-[16px] lg:rounded-[24px] p-6 lg:p-8 flex flex-col items-center text-center text-white`}
    >
      {/* Title */}
      <h3 className="text-[24px] lg:text-[28px] font-bold mb-2">{title}</h3>
      {/* Description */}
      <p className="text-[14px] lg:text-[16px] opacity-90">{description}</p>
    </div>
  );
};

// Types for market data structure
export interface GlobalDemandItem {
  icon: LucideIcon;
  title: string;
  description: string;
  source: string;
}

export interface EarningPotentialItem {
  title: string;
  description: string;
}

export interface MarketDataItem {
  title: string;
  items: GlobalDemandItem[] | EarningPotentialItem[];
}

interface MarketDataSectionProps {
  /** The label for the section button */
  sectionButtonTitle?: string;
  /** The main heading title */
  title?: string;
  /** The description text below the heading */
  description?: string;
  /** Array of market data (first item: global demand, second item: earning potential) */
  data?: MarketDataItem[];
  /** Source text for the earning potential section */
  earningPotentialSource?: string;
}

export const MarketDataSection = ({
  sectionButtonTitle = "Market Data",
  title = "Join the Global AI Market",
  description = "AI is now, and companies globally are investing in skilled professionals to power innovation.",
  data = marketData,
  earningPotentialSource = "Glassdoor & LinkedIn Salary Insights",
}: MarketDataSectionProps) => {
  const globalDemandData = data[0];
  const earningPotentialData = data[1];

  return (
    <section className="py-12 lg:py-20 bg-linear-to-b from-[#F3F3F3] to-[#FEE9DA] rounded-t-4xl lg:rounded-t-[40px]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-14">
          <AppSectionButton
            className="w-fit bg-white!"
            title={sectionButtonTitle}
          />
          <div className="mt-6">
            <AppHeading
              title={title}
              headingLevel="h2"
              description={description}
              className="text-[30px] lg:text-[44px] leading-tight!"
              descriptionClassName="text-gray-600 text-[16px] max-w-[600px] mx-auto"
            />
          </div>
        </div>

        {/* Cards Container */}
        <div className="bg-white rounded-[24px] lg:rounded-[32px] p-6 lg:p-10 shadow-sm">
          {/* Global Demand Section */}
          <div className="mb-10 lg:mb-14">
            <h3 className="text-[18px] lg:text-[22px] font-bold text-center mb-6 lg:mb-8">
              {globalDemandData.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {globalDemandData.items.map((item, index) => (
                <PrimaryCard
                  key={index}
                  icon={
                    (
                      item as {
                        icon: LucideIcon;
                        title: string;
                        description: string;
                        source: string;
                      }
                    ).icon
                  }
                  title={item.title}
                  description={item.description}
                  source={
                    (
                      item as {
                        icon: LucideIcon;
                        title: string;
                        description: string;
                        source: string;
                      }
                    ).source
                  }
                />
              ))}
            </div>
          </div>

          {/* Earning Potential Section */}
          <div>
            <h3 className="text-[18px] lg:text-[22px] font-bold text-center mb-6 lg:mb-8">
              {earningPotentialData.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {earningPotentialData.items.map((item, index) => (
                <GradientCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  gradientClass={gradientColors[index]}
                />
              ))}
            </div>
            {/* Source */}
            <p className="text-[12px] lg:text-[14px] text-gray-400 text-center mt-6">
              Source: {earningPotentialSource}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
