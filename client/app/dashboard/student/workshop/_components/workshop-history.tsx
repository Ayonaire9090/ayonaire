"use client";

import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { WorkshopHistoryGroup } from "./workshop-data";

const GROUPS_PER_PAGE = 3;

export const WorkshopHistory = ({
  groups,
}: {
  groups: WorkshopHistoryGroup[];
}) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(groups.length / GROUPS_PER_PAGE));

  useEffect(() => {
    setPage(1);
  }, [groups]);

  const visibleGroups = groups.slice(
    (page - 1) * GROUPS_PER_PAGE,
    page * GROUPS_PER_PAGE,
  );

  if (groups.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 text-[15px] text-gray-500">
        No completed workshops found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {visibleGroups.map((group) => (
          <div key={group.date} className="flex flex-col gap-3 w-full">
            {/* Group Header */}
            <div className="bg-[#F8F9FA] lg:bg-[#F6F6F6] px-4 py-2 lg:py-3 lg:rounded-lg">
              <span className="text-gray-500 font-medium text-sm">
                {group.date}
              </span>
            </div>

            {/* Group Items */}
            <div className="flex flex-col gap-3">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="flex bg-white lg:rounded-2xl border border-gray-100 p-4 lg:p-6 gap-3 lg:gap-8 hover:shadow-sm transition-all items-start lg:items-center"
                >
                  <div className="flex items-start lg:items-center gap-2 w-[100px] lg:w-[200px] shrink-0">
                    <Clock className="w-4 h-4 text-[#F86432] shrink-0 lg:hidden mt-0.5" />
                    <span className="font-bold text-gray-900 text-sm lg:text-base leading-snug wrap-break-word">
                      {item.time}
                    </span>
                    <Clock className="w-5 h-5 text-gray-400 shrink-0 hidden lg:block" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-100 w-[95%] mx-auto lg:w-full">
        <span className="text-gray-900 text-sm font-medium">
          Page {page} of {totalPages}
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex items-center gap-1 text-gray-900 font-medium text-sm hover:text-[#F86432] transition-colors disabled:opacity-40 disabled:hover:text-gray-900 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev.
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex items-center gap-1 text-gray-900 font-medium text-sm hover:text-[#F86432] transition-colors disabled:opacity-40 disabled:hover:text-gray-900 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
