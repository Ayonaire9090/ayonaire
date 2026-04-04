import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

export const DashboardSearch = () => {
  return (
    <div className="relative w-full lg:w-[400px]">
      <Image
        src="/assets/icons/magnifier.svg"
        alt="Search"
        width={20}
        height={20}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-gray-400"
      />
      <Input
        placeholder="Search courses, instructors, or topics..."
        className="w-full pl-10 py-5! rounded-full bg-white border-0 focus-visible:ring-primary/20 text-base z-45 shadow-none"
      />
    </div>
  );
};
