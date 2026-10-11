import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { AppHeading } from "./app-heading";

interface AppCardIconProps {
  icon?: string | React.ReactNode | LucideIcon;
  title?: string;
  description?: string;
  className?: string;
}

export const AppCardIcon = ({
  icon: Icon,
  title = "",
  description = "",
  className,
}: AppCardIconProps) => {
  // Render icon based on type
  const renderIcon = () => {
    if (!Icon) return null;

    // LucideIcon (function component)
    if (typeof Icon === "function") {
      return <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />;
    }

    // String (image path)
    if (typeof Icon === "string") {
      return (
        <Image
          alt={title || "icon"}
          width={28}
          height={28}
          src={Icon}
          className="w-7 h-7 lg:w-8 lg:h-8 object-contain"
        />
      );
    }

    // React.ReactNode
    return Icon;
  };

  return (
    <div
      className={cn(
        "relative bg-white hover:bg-[#FFF8F8] shadow-lg border border-primary/10 hover:border-primary rounded-2xl p-6 pt-16 transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      {/* Icon with gradient background */}
      <div className="absolute top-0 left-6 -translate-y-1/2">
        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-linear-to-br from-[#F67219] via-[#F67219] to-[#FFE6D5] flex items-center justify-center shadow-md">
          {renderIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <AppHeading 
            headingLevel="h2"
            title={title}
            className="text-2xl lg:text-3xl font-bold leading-tight"
            description={description}
            descriptionClassName="text-base text-gray-500 leading-relaxed capitalize"

        />
      </div>
    </div>
  );
};
