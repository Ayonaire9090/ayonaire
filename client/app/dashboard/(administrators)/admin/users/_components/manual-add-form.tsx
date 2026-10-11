"use client";

import React from "react";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetCohorts } from "@/hooks/api/use-cohorts";

export interface ManualAddValue {
  email: string;
  role: "user" | "instructor";
  courseId: string;
  cohortId: string;
}

interface ManualAddFormProps {
  value: ManualAddValue;
  onChange: (patch: Partial<ManualAddValue>) => void;
  error?: string;
  hideRoleSelector?: boolean;
}

export function ManualAddForm({ value, onChange, error, hideRoleSelector }: ManualAddFormProps) {
  const { data: coursesData } = useGetCourses();
  const { data: cohortsData } = useGetCohorts(value.courseId || undefined);

  const courseOptions = (coursesData?.courses ?? []).map((c) => ({
    label: c.title,
    value: c._id,
  }));
  const cohortOptions = (cohortsData?.cohorts ?? []).map((c) => ({
    label: c.name,
    value: c._id,
  }));

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <section className="flex flex-col gap-4 md:gap-5">
        <h3 className="text-[17px] font-semibold text-gray-900">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppInput
            label={
              <>
                Email Address <span className="text-red-500">*</span>
              </>
            }
            placeholder="Enter email address"
            value={value.email}
            onChange={(e) => onChange({ email: e.target.value })}
          />
          {!hideRoleSelector && (
            <AppSelect
              label="Role"
              options={[
                { label: "Student", value: "user" },
                { label: "Instructor", value: "instructor" },
              ]}
              value={value.role}
              onChange={(val) => onChange({ role: val as ManualAddValue["role"] })}
            />
          )}
        </div>
        {error && <span className="text-xs text-red-500">{error}</span>}
        <p className="text-[13px] text-gray-500">
          The user will receive an email invite to set their name and password.
        </p>
      </section>

      <section className="flex flex-col gap-4 md:gap-5">
        <h3 className="text-[17px] font-semibold text-gray-900">
          Course &amp; Cohort{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppSelect
            label="Enroll in course"
            placeholder="Select course"
            options={courseOptions}
            value={value.courseId}
            onChange={(val) => onChange({ courseId: val, cohortId: "" })}
          />
          <AppSelect
            label="Assign to cohort"
            placeholder={value.courseId ? "Select cohort" : "Select a course first"}
            options={cohortOptions}
            value={value.cohortId}
            onChange={(val) => onChange({ cohortId: val })}
          />
        </div>
      </section>
    </div>
  );
}
