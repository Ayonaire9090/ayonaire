"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import type { DataTablePagination } from "./data-table";

interface DataListProps<T> {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
  className?: string;
  itemClassName?: string;
  footerContent?: React.ReactNode;
  pagination?: DataTablePagination;
}

export function DataList<T>({
  data,
  keyExtractor,
  renderItem,
  className = "",
  itemClassName = "",
  footerContent,
  pagination,
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

      {/* Footer Content */}
      {footerContent && (
        <div className="w-full mt-4 flex items-center">
          {footerContent}
        </div>
      )}

      <div className="flex items-center justify-between mt-8 p-4 border-t border-gray-100">
        <span className="text-gray-900 text-[15px]">
          Page {pagination?.page ?? 1} of {Math.max(pagination?.totalPages ?? 1, 1)}
        </span>
        <div className="flex items-center gap-6">
          <button
            onClick={pagination?.onPrev}
            disabled={!pagination || pagination.page <= 1}
            className="flex items-center gap-1.5 text-gray-900 text-[15px] hover:text-black transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="size-4" /> Prev
          </button>
          <button
            onClick={pagination?.onNext}
            disabled={!pagination || pagination.page >= pagination.totalPages}
            className="flex items-center gap-1.5 text-gray-900 text-[15px] hover:text-black transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            Next <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
