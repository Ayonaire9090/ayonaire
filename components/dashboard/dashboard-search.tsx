import { IconSearch } from "@tabler/icons-react";
import React from "react";
import { Input } from "../ui/input";

export const DashboardSearch = () => {
  return (
    <div className="relative w-full lg:w-[400px]">
      <IconSearch className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black z-50" />
      <Input
        placeholder="Search courses, instructors, or topics..."
        className="w-full py-5! rounded-full bg-white border-0 placeholder:pl-6 focus-visible:ring-primary/20 text-base z-45"
      />
    </div>
  );
};
