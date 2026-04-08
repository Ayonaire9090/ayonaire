"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ColumnDef<T> {
  key: string;
  header: React.ReactNode;
  cell: (item: T) => React.ReactNode;
  className?: string; // Optional custom styling for the table cell
  headerClassName?: string; // Optional custom styling for the table head
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  keyExtractor: (item: T) => string;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: Set<string>) => void;
  className?: string;
}

export function DataTable<T>({
  data,
  columns,
  keyExtractor,
  selectable = false,
  onSelectionChange,
  className = "",
}: DataTableProps<T>) {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

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

  return (
    <div className={`w-full ${className}`}>
      <Table className="border-none w-full overflow-hidden">
        <TableHeader className="bg-[#F6F6F6] [&_th:first-child]:rounded-tl-2xl [&_th:last-child]:rounded-tr-2xl">
          <TableRow className="border-none hover:bg-transparent">
            {selectable && (
              <TableHead className="w-16 pl-6 h-[72px]">
                <Checkbox
                  className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  checked={
                    selectedItems.size === data.length && data.length > 0
                  }
                  onCheckedChange={toggleAll}
                />
              </TableHead>
            )}
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className={`font-medium text-gray-500 h-[72px] text-[15px] ${col.headerClassName || ""}`}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => {
            const id = keyExtractor(item);
            const isSelected = selectedItems.has(id);
            return (
              <TableRow
                key={id}
                data-state={isSelected ? "selected" : undefined}
                className="border-none hover:bg-transparent even:bg-[#F6F6F6] odd:bg-white h-[72px]"
              >
                {selectable && (
                  <TableCell className="pl-6">
                    <Checkbox
                      className="rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      checked={isSelected}
                      onCheckedChange={() => toggleItem(id)}
                    />
                  </TableCell>
                )}
                {columns.map((col) => (
                  <TableCell key={col.key} className={col.className}>
                    {col.cell(item)}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

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
