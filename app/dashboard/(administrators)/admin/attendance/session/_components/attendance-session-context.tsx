"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { SessionAttendanceData } from "./attendance-session-data";

interface AttendanceSessionContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  selectedBulkActions: Set<string>;
  setSelectedBulkActions: React.Dispatch<React.SetStateAction<Set<string>>>;

  selectedStatuses: Set<string>;
  setSelectedStatuses: React.Dispatch<React.SetStateAction<Set<string>>>;

  filteredAttendance: SessionAttendanceData[];

  toggleSet: (
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string
  ) => void;
}

const AttendanceSessionContext = createContext<AttendanceSessionContextType | null>(
  null
);

export const AttendanceSessionProvider = ({
  records,
  children,
}: {
  records: SessionAttendanceData[];
  children: ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBulkActions, setSelectedBulkActions] = useState<Set<string>>(
    new Set()
  );
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(
    new Set()
  );

  const toggleSet = (
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const filteredAttendance = records.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatuses.size === 0 || selectedStatuses.has(item.status);

    return matchesSearch && matchesStatus;
  });

  return (
    <AttendanceSessionContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        selectedBulkActions,
        setSelectedBulkActions,
        selectedStatuses,
        setSelectedStatuses,
        filteredAttendance,
        toggleSet,
      }}
    >
      {children}
    </AttendanceSessionContext.Provider>
  );
};

export const useAttendanceSessionContext = () => {
  const context = useContext(AttendanceSessionContext);
  if (!context) {
    throw new Error(
      "useAttendanceSessionContext must be used within an AttendanceSessionProvider"
    );
  }
  return context;
};
