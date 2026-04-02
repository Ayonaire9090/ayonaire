import React from "react";
import Image from "next/image";

interface OverViewListItems {
  title: string;
  description: string;
  icon: string;
}

interface AppCourseOverviewListProps {
  items: OverViewListItems[];
}

export const AppCourseOverviewList = ({
  items,
}: AppCourseOverviewListProps) => {
  return (
    <div className="container bg-white rounded-xl lg:rounded-2xl shadow-[0px_11px_60px_0px_rgba(0,0,0,0.08)] w-full">
      {/* Mobile/Tablet: Vertical Layout */}
      <div className="lg:hidden flex flex-col items-center gap-4 p-4">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {/* Fixed width container centered in card, content left-aligned inside */}
            <div className="flex items-center gap-3.5 w-[250px]">
              {/* Icon */}
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <h4 className="text-xl font-semibold text-[#141414] capitalize leading-tight font-poppins">
                  {item.title}
                </h4>
                <p className="text-sm text-[#6E6E6E] leading-tight">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Horizontal Divider - don't show after last item */}
            {index < items.length - 1 && (
              <div className="h-px bg-[#D9D9D9] w-[250px]" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: Horizontal Layout */}
      <div className="hidden lg:flex items-center justify-center gap-10 py-10 px-6">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-3.5">
              {/* Icon */}
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 w-[187px]">
                <h4 className="text-2xl font-semibold text-[#141414] capitalize leading-tight font-poppins">
                  {item.title}
                </h4>
                <p className="text-base text-[#6E6E6E] leading-tight">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Vertical Divider - don't show after last item */}
            {index < items.length - 1 && (
              <div className="w-px h-[76px] bg-[#E3E3E3]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
