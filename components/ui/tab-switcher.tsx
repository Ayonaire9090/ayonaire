"use client";

import React from "react";

export interface TabOption<T> {
  value: T;
  label: string;
}

interface TabSwitcherProps<T extends string> {
  options: TabOption<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
  className?: string;
}

export function TabSwitcher<T extends string>({
  options,
  activeTab,
  onTabChange,
  className = "",
}: TabSwitcherProps<T>) {
  return (
    <div className={`inline-flex items-center gap-0 md:gap-1 bg-white p-1 md:p-2 rounded-lg ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onTabChange(option.value)}
          className={`rounded-lg px-2 md:px-5 py-2 text-[15px] transition-all ${
            activeTab === option.value
              ? "bg-[#F6F6F6] text-gray-900 font-medium"
              : "text-gray-500 hover:text-gray-700 bg-transparent"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
