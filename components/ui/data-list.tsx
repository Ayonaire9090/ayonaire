"use client";

import React from "react";

interface DataListProps<T> {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function DataList<T>({
  data,
  keyExtractor,
  renderItem,
  className = "",
  itemClassName = "",
}: DataListProps<T>) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {data.map((item) => (
        <div 
          key={keyExtractor(item)} 
          className={`relative flex items-center gap-4 bg-[#F6F6F6] p-4 rounded-[10px] ${itemClassName}`}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
