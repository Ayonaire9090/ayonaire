import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppSectionButtonProps {
  title: string;
  className?: string;
  showIcon?: boolean;
}
export const AppSectionButton = ({
  title,
  className,
  showIcon = true,
}: AppSectionButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-[0.8px] border-gray-300 shadow-[rgba(0,0,0,0.15)] rounded-full flex items-center gap-1 py-5",
        className
      )}
    >
      {showIcon && (
        <div className="relative">
          <Image
            src="/assets/icons/ai-icon.svg"
            alt="ai-icon"
            width={15}
            height={15}
          />
          <div className="absolute top-0 right-0 ml-1">
            <Image
              src="/assets/icons/ai-icon.svg"
              alt="ai-icon"
              width={5}
              height={5}
            />
          </div>
        </div>
      )}
      <p>{title}</p>
    </Button>
  );
};
