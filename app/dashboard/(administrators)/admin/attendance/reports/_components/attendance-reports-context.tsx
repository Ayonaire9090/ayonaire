"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  mockAttendanceReports,
  AttendanceReportData,
} from "./attendance-reports-data";

interface AttendanceReportsContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedFilters: Record<string, Set<string>>;
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<Record<string, Set<string>>>
  >;
  filteredReports: AttendanceReportData[];
  toggleFilter: (category: string, value: string) => void;
}

const AttendanceReportsContext = createContext<AttendanceReportsContextType | null>(
  null
);

export const AttendanceReportsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, Set<string>>
  >({});

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev[category] || new Set());
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return { ...prev, [category]: next };
    });
  };

  const filteredReports = mockAttendanceReports.filter((item) => {
    // Search matching across multiple fields
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.studentName.toLowerCase().includes(query) ||
      item.courseName.toLowerCase().includes(query) ||
      item.className.toLowerCase().includes(query) ||
      item.instructor.toLowerCase().includes(query);

    // If implementing actual filter logic per category, add it here based on selectedFilters matches

    return matchesSearch;
  });

  return (
    <AttendanceReportsContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedFilters,
        setSelectedFilters,
        filteredReports,
        toggleFilter,
      }}
    >
      {children}
    </AttendanceReportsContext.Provider>
  );
};

export const useAttendanceReportsContext = () => {
  const context = useContext(AttendanceReportsContext);
  if (!context) {
    throw new Error(
      "useAttendanceReportsContext must be used within an AttendanceReportsProvider"
    );
  }
  return context;
};
