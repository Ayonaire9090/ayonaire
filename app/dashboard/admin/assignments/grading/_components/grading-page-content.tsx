"use client";

import React, { useState } from "react";
import { GradingFilters } from "./grading-filters";
import { GradingTable } from "./grading-table";
import { GradingList } from "./grading-list";
import { GradingStats } from "./grading-stats";

export const GradingPageContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-2 w-full">
      <GradingFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="p-2 lg:p-8 rounded-xl bg-white">
        <GradingStats />
        <GradingTable searchQuery={searchQuery} />
        <GradingList searchQuery={searchQuery} />
      </div>
    </div>
  );
};
