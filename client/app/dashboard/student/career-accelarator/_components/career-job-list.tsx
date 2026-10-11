"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JobListing } from "@/lib/api/endpoints/career";

interface CareerJobListProps {
  jobs: JobListing[];
  isLoading: boolean;
  isError: boolean;
  onSearch: (keywords: string) => void;
  emptyMessage?: string;
}

export function CareerJobList({
  jobs,
  isLoading,
  isError,
  onSearch,
  emptyMessage = "No results found.",
}: CareerJobListProps) {
  const [keywords, setKeywords] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(keywords);
        }}
        className="relative"
      >
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-400" />
        <Input
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Search by keyword, skill, or role..."
          className="pl-11 rounded-full h-12 bg-[#F6F6F6] border-none"
        />
        <Button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 rounded-full bg-[#F86432] hover:bg-[#F86432]/90 text-white"
        >
          Search
        </Button>
      </form>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load results. Please try again.
        </div>
      ) : jobs.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          {emptyMessage}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-gray-100 p-4 md:p-5 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-500">
                    {job.company} &bull; {job.location}
                    {job.remote ? " (Remote)" : ""}
                  </p>
                </div>
                {job.salaryRange && (
                  <span className="text-sm font-medium text-[#24A164] shrink-0">
                    {job.salaryRange}
                  </span>
                )}
              </div>
              {job.summary && (
                <p className="text-sm text-gray-600">{job.summary}</p>
              )}
              {job.skills?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
