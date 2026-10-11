import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AppStyledFeatureCardProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}
export const AppStyledFeatureCard = ({
  title,
  icon,
  className,
  iconClassName,
}: AppStyledFeatureCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-start items-center gap-2 px-4 py-3 rounded-[12px] border-l-4 border-primary bg-white shadow-lg",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "flex shrink-0 min-w-[35px] min-h-[35px] lg:min-w-[52px] lg:min-h-[52px]",
          iconClassName
        )}
      >
        {icon || tickIcon()}
      </div>
      {/* Title */}
      <h3 className="text-[16px]  lg:text-[18px] font-medium">{title}</h3>
    </div>
  );
};

const tickIcon = () => {
  return (
    <Image
      src="/assets/icons/charm-circle-tick.svg"
      alt="Tick Icon"
      width={24}
      height={24}
      className="w-[35px] h-[35px] lg:w-[52px] lg:h-[52px]"
    />
  );
};
