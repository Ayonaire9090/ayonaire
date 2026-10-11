"use client";

import React, { useState } from "react";

export const DefaultRecipientConfigurations = () => {
  const [targetAudience, setTargetAudience] = useState("students");
  const [exclusions, setExclusions] = useState<Set<string>>(
    new Set(["inactive"]),
  );

  const toggleExclusion = (id: string) => {
    setExclusions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const audiences = [
    { id: "all", label: "All Users" },
    { id: "instructors", label: "Instructors" },
    { id: "students", label: "Students" },
    { id: "role-based", label: "Role-Based" },
  ];

  const exclusionOptions = [
    { id: "suspended", label: "Exclude suspended users" },
    { id: "inactive", label: "Exclude inactive users" },
    { id: "unverified", label: "Exclude users without email verified" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.4fr] gap-6">
      <div className="w-full  bg-white p-5 lg:p-7 rounded-2xl flex flex-col gap-6 mt-4">
        <div className="flex flex-col gap-1 lg:gap-1.5">
          <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900">
            Default Recipient Configuration
          </h2>
          <p className="text-gray-500 text-[14px] lg:text-[15px]">
            Define who receives automated notifications.
          </p>
        </div>

        <div className="gap-8 lg:gap-12 mt-2">
          {/* Default Target Audience */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] lg:text-[20px] font-medium text-gray-900">
              Default Target Audience
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              {audiences.map((audience) => {
                const isSelected = targetAudience === audience.id;
                return (
                  <button
                    key={audience.id}
                    onClick={() => setTargetAudience(audience.id)}
                    className="flex items-center gap-4 h-[56px] px-5 rounded-xl border border-gray-100 bg-[#FAFAFA] hover:bg-white transition-colors outline-none text-left"
                  >
                    <div
                      className={`size-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? "border-gray-900" : "border-gray-900"
                      }`}
                    >
                      {isSelected && (
                        <div className="size-2.5 rounded-full bg-gray-900" />
                      )}
                    </div>
                    <span
                      className={`text-[16px] ${isSelected ? "text-gray-500" : "text-gray-400"}`}
                    >
                      {audience.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-white p-5 lg:p-7 rounded-2xl flex flex-col gap-6 mt-4">
        <div className="flex flex-col gap-1 lg:gap-1.5">
          <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900">
            Exclusions
          </h2>
        </div>

        <div className="flex flex-col gap-3 mt-1">
          {exclusionOptions.map((exclusion) => {
            const isSelected = exclusions.has(exclusion.id);
            return (
              <button
                key={exclusion.id}
                onClick={() => toggleExclusion(exclusion.id)}
                className="flex items-center gap-4 h-[56px] px-5 rounded-xl border border-gray-100 bg-[#FAFAFA] hover:bg-white transition-colors outline-none text-left w-full"
              >
                <div
                  className={`size-[22px] rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? "border-gray-900" : "border-gray-900"
                  }`}
                >
                  {isSelected && (
                    <div className="size-2.5 rounded-full bg-gray-900" />
                  )}
                </div>
                <span
                  className={`text-[16px] ${isSelected ? "text-gray-500" : "text-gray-400"}`}
                >
                  {exclusion.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
