"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";

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
      {data.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[400px]">
          <Image
            src="/assets/icons/data-not-found.svg"
            alt="Data not found"
            width={150}
            height={150}
            className="w-28 h-auto object-contain select-none"
          />
        </div>
      ) : (
        data.map((item) => (
          <div
            key={keyExtractor(item)}
            className={`relative flex items-center gap-4 bg-[#F6F6F6] p-4 rounded-[10px] ${itemClassName}`}
          >
            {renderItem(item)}
          </div>
        ))
      )}

      {/* Pagination placeholder */}
      <div className="flex items-center justify-between mt-8 p-4 border-t border-gray-100">
        <span className="text-gray-900 text-[15px]">Page 1 of 5</span>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-gray-900 text-[15px] hover:text-black transition-colors">
            <ChevronLeft className="size-4" /> Prev
          </button>
          <button className="flex items-center gap-1.5 text-gray-900 text-[15px] hover:text-black transition-colors">
            Next <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
