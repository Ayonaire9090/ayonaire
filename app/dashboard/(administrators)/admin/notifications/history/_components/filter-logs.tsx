"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetCohorts } from "@/hooks/api/use-cohorts";

export const FilterLogs = () => {
  const [courseId, setCourseId] = useState("");
  const [cohortId, setCohortId] = useState("");
  const [status, setStatus] = useState("");

  const { data: coursesData } = useGetCourses({ limit: 100 });
  const { data: cohortsData } = useGetCohorts(courseId || undefined);

  const courseOptions = useMemo(
    () => (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id })),
    [coursesData],
  );
  const cohortOptions = useMemo(
    () => (cohortsData?.cohorts ?? []).map((c) => ({ label: c.name, value: c._id })),
    [cohortsData],
  );

  const reset = () => {
    setCourseId("");
    setCohortId("");
    setStatus("");
  };

  return (
    <div className="bg-white rounded-lg p-4 lg:p-6">
      <h1 className="font-semibold text-xl md:text-2xl">Filter Logs</h1>
      <div className="grid grid-cols-2 gap-3 py-3">
        <AppSelect
          label="Cohort"
          placeholder={courseId ? "Select a cohort" : "Select a course first"}
          options={cohortOptions}
          value={cohortId}
          onChange={setCohortId}
          className="bg-[#FBFBFB]"
        />
        <AppSelect
          label="Course"
          placeholder="Any course"
          options={courseOptions}
          value={courseId}
          onChange={setCourseId}
          className="bg-[#FBFBFB]"
        />
      </div>
      <AppSelect
        label="Status"
        placeholder="Any status"
        options={[
          { label: "Sent", value: "sent" },
          { label: "Draft", value: "draft" },
          { label: "Scheduled", value: "scheduled" },
        ]}
        value={status}
        onChange={setStatus}
        className="bg-[#FBFBFB]"
      />
      <div className="grid grid-cols-2 gap-3 md:flex justify-start pt-3">
        <Button
          variant="outline"
          onClick={reset}
          className="h-[40px] w-full md:w-auto rounded-lg px-4 md:px-16 text-gray-700 border-gray-200 font-medium text-[15px]"
        >
          Reset
        </Button>
        <Button
          onClick={() => toast.info("Filtering the log table isn't wired up yet.")}
          className="h-[40px] w-full md:w-auto rounded-lg px-4 md:px-16 bg-primary hover:bg-[#e04a1f] text-white font-medium text-[15px]"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
