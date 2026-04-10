"use client";

import React, { useState } from "react";
import { EnrollmentsList } from "./enrollments-list";
import { EnrollStudentsFlow } from "./enroll-students-flow";

export const EnrollmentsManager = () => {
  // State to handle which view to show: 'list' or 'flow'
  const [view, setView] = useState<"list" | "flow">("list");

  return (
    <div className="w-full flex-1">
      {view === "list" ? (
        <EnrollmentsList onEnrollClick={() => setView("flow")} />
      ) : (
        <EnrollStudentsFlow onBack={() => setView("list")} />
      )}
    </div>
  );
};
