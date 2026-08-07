"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

export interface ColumnDef<T> {
  key: string;
  header: React.ReactNode;
  cell: (item: T) => React.ReactNode;
  className?: string; // Optional custom styling for the table cell
  headerClassName?: string; // Optional custom styling for the table head
  // Optional: when provided, the header becomes clickable and sorts `data`
  // client-side by this value (real sort, not a decorative icon).
  sortAccessor?: (item: T) => string | number;
}

export interface DataTablePagination {
  page: number;
  totalPages: number;
  onPrev?: () => void;
  onNext?: () => void;
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  keyExtractor: (item: T) => string;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: Set<string>) => void;
  className?: string;
  footerContent?: React.ReactNode;
  // When provided, the footer shows real page numbers with working
  // Prev/Next buttons; otherwise the legacy static placeholder renders.
  pagination?: DataTablePagination;
}

export function DataTable<T>({
  data,
  columns,
  keyExtractor,
  selectable = false,
  onSelectionChange,
  className = "",
  footerContent,
  pagination,
}: DataTableProps<T>) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      onSelectionChange?.(next);
      return next;
    });
  };

  const toggleAll = () => {
    setSelectedItems((prev) => {
      let next: Set<string>;
      if (prev.size === data.length) {
        next = new Set();
      } else {
        next = new Set(data.map((item) => keyExtractor(item)));
      }
      onSelectionChange?.(next);
      return next;
    });
  };

  const sortedData = useMemo(() => {
    if (!sort) return data;
    const col = columns.find((c) => c.key === sort.key);
    if (!col?.sortAccessor) return data;
    const { sortAccessor } = col;
    return [...data].sort((a, b) => {
      const av = sortAccessor(a);
      const bv = sortAccessor(b);
      if (av < bv) return sort.direction === "asc" ? -1 : 1;
      if (av > bv) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sort, columns]);

  const handleSortClick = (col: ColumnDef<T>) => {
    if (!col.sortAccessor) return;
    setSort((prev) => {
      if (prev?.key !== col.key) return { key: col.key, direction: "asc" };
      if (prev.direction === "asc") return { key: col.key, direction: "desc" };
      return null;
    });
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full rounded-2xl border border-gray-100 overflow-hidden bg-white">
        <Table className="border-none w-full overflow-hidden">
          <TableHeader className="bg-[#FAFAFA]">
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              {selectable && (
                <TableHead className="w-14 pl-5 h-11">
                  <Checkbox
                    className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    checked={
                      selectedItems.size === data.length && data.length > 0
                    }
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
              )}
              {columns.map((col) => {
                const isSorted = sort?.key === col.key;
                return (
                  <TableHead
                    key={col.key}
                    onClick={() => handleSortClick(col)}
                    className={`font-medium text-gray-500 h-11 text-[13px] ${
                      col.sortAccessor ? "cursor-pointer select-none hover:text-gray-800" : ""
                    } ${col.headerClassName || ""}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.header}
                      {col.sortAccessor &&
                        (isSorted ? (
                          sort!.direction === "asc" ? (
                            <ChevronUp className="size-3.5 text-gray-700" />
                          ) : (
                            <ChevronDown className="size-3.5 text-gray-700" />
                          )
                        ) : (
                          <ChevronsUpDown className="size-3.5 text-gray-300" />
                        ))}
                    </span>
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow className="border-none hover:bg-transparent">
                <TableCell
                  colSpan={selectable ? columns.length + 1 : columns.length}
                  className="h-[400px] text-center align-middle"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src="/assets/icons/data-not-found.svg"
                      alt="Data not found"
                      width={150}
                      height={150}
                      className="w-28 h-auto object-contain select-none"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((item) => {
                const id = keyExtractor(item);
                const isSelected = selectedItems.has(id);
                return (
                  <TableRow
                    key={id}
                    data-state={isSelected ? "selected" : undefined}
                    className="border-b border-gray-100 last:border-0 bg-white hover:bg-gray-50/70 transition-colors data-[state=selected]:bg-primary/5"
                  >
                    {selectable && (
                      <TableCell className="pl-5 py-2.5">
                        <Checkbox
                          className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                          checked={isSelected}
                          onCheckedChange={() => toggleItem(id)}
                        />
                      </TableCell>
                    )}
                    {columns.map((col) => (
                      <TableCell key={col.key} className={`py-2.5 ${col.className || ""}`}>
                        {col.cell(item)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>

        {/* Footer Content */}
        {footerContent && (
          <div className="w-full flex items-center px-4 py-4 border-t border-gray-100">
            {footerContent}
          </div>
        )}

        {/* Pagination */}
        {pagination ? (
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <span className="text-gray-900 text-[14px]">
              Page {pagination.page} of {Math.max(pagination.totalPages, 1)}
            </span>
            <div className="flex items-center gap-6">
              <button
                onClick={pagination.onPrev}
                disabled={pagination.page <= 1}
                className="flex items-center gap-1.5 text-gray-900 text-[14px] hover:text-black transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="size-4" /> Prev
              </button>
              <button
                onClick={pagination.onNext}
                disabled={pagination.page >= pagination.totalPages}
                className="flex items-center gap-1.5 text-gray-900 text-[14px] hover:text-black transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <span className="text-gray-900 text-[14px]">Page 1 of 5</span>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-1.5 text-gray-900 text-[14px] hover:text-black transition-colors">
                <ChevronLeft className="size-4" /> Prev
              </button>
              <button className="flex items-center gap-1.5 text-gray-900 text-[14px] hover:text-black transition-colors">
                Next <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
