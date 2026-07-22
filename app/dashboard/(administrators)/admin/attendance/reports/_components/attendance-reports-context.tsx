"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  AttendanceReportData,
  mapReportEntryToData,
} from "./attendance-reports-data";
import { useGetAttendanceReport } from "@/hooks/api/use-attendance";

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

  const { data } = useGetAttendanceReport();
  const reports = (data?.data ?? []).map(mapReportEntryToData);

  const filteredReports = reports.filter((item) => {
    const query = searchQuery.toLowerCase();
    return item.studentName.toLowerCase().includes(query);
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
