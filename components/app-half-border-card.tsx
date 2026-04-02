"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spline_Sans } from "next/font/google";
import { LucideIcon } from "lucide-react";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

interface AppHalfBorderCardProps {
  icon: string | ReactNode | LucideIcon;
  title: string;
  description: string;
  className?: string;
  containerClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const AppHalfBorderCard = ({
  icon,
  title,
  description,
  className,
  containerClassName,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: AppHalfBorderCardProps) => {
  const iconComponent =
    typeof icon === "string" ? (
      <Image
        src={icon}
        alt={title}
        width={40}
        height={40}
        className={cn(iconClassName)}
      />
    ) : React.isValidElement(icon) ? (
      icon
    ) : (
      React.createElement(icon as React.ElementType, {
        className: cn("text-primary", iconClassName),
        size: 40,
      })
    );

  return (
    <article className={cn("w-full", className)}>
      {/* Background Card */}
      <div className="bg-linear-to-b from-primary/20 to-white rounded-xl p-3">
        {/* Main Card */}
        <div
          className={cn(
            "flex flex-col items-start gap-3 rounded-lg bg-white shadow-md p-4 pt-8 h-[280px]",
            containerClassName
          )}
        >
          {iconComponent}
          <h3
            className={cn(
              "text-[18px] lg:text-[24px] font-medium ",
              splineSans.className,
              titleClassName
            )}
          >
            {title}
          </h3>
          <p className={cn("text-[16px] text-[#6E6E6E]", descriptionClassName)}>
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
