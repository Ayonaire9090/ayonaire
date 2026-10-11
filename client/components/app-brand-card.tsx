"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppBrandCardProps {
  name?: string;
  logo: string;
  logo2?: string; // Optional second logo for mobile two-row display
  className?: string;
}

export const AppBrandCard = ({
  name,
  logo,
  logo2,
  className,
}: AppBrandCardProps) => {
  // Single card component (reusable)
  const SingleCard = ({
    logoSrc,
    isDesktop = false,
  }: {
    logoSrc: string;
    isDesktop?: boolean;
  }) => (
    <div
      className={cn(
        "shadow-md lg:shadow-[0_0_20px_0_rgba(0,0,0,0.1)] border-none rounded-2xl",
        isDesktop && "h-[140px]",
        className
      )}
    >
      <div className="h-full">
        <div className="flex items-center justify-center h-full">
          <Image
            src={logoSrc}
            alt={name || ""}
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </div>
        {name && (
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop - Single card */}
      <div className="hidden lg:block h-fit">
        <SingleCard logoSrc={logo} isDesktop={true} />
      </div>

      {/* Mobile - Two cards stacked in a column */}
      <div className="flex flex-col gap-2 lg:hidden">
        <SingleCard logoSrc={logo} />
        {logo2 && <SingleCard logoSrc={logo2} />}
      </div>
    </>
  );
};
