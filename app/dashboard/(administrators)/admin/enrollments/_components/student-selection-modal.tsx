"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Search, ChevronLeft, ChevronRight, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { useGetAdminUsers } from "@/hooks/api/use-admin";

export interface StudentData {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status?: string;
}

interface StudentSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddStudents: (students: StudentData[]) => void;
}

const PAGE_SIZE = 6;

export const StudentSelectionModal = ({
  isOpen,
  onClose,
  onAddStudents,
}: StudentSelectionModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedById, setSelectedById] = useState<Map<string, StudentData>>(
    new Map(),
  );

  const { data, isLoading } = useGetAdminUsers({
    page: currentPage,
    limit: PAGE_SIZE,
    search: searchQuery,
  });

  const students: StudentData[] = useMemo(() => {
    return (data?.users ?? [])
      .map((u) => ({
        id: u._id,
        name: u.name,
        email: u.email,
        avatar: u.profile?.url || "/assets/profile.png",
        status: u.status !== "active" ? u.status : undefined,
      }));
  }, [data]);

  useEffect(() => {
    if (isOpen) {
      setSelectedById(new Map());
      setSearchQuery("");
      setCurrentPage(1);
    }
  }, [isOpen]);

  const totalPages = Math.max(1, data?.pagination?.totalPages ?? 1);
  const pagedStudents = students;

  const allSelected =
    pagedStudents.length > 0 && pagedStudents.every((s) => selectedById.has(s.id));
  const someSelected =
    pagedStudents.some((s) => selectedById.has(s.id)) && !allSelected;

  const toggleSelectAll = () => {
    const next = new Map(selectedById);
    if (allSelected) {
      pagedStudents.forEach((s) => next.delete(s.id));
    } else {
      pagedStudents.forEach((s) => next.set(s.id, s));
    }
    setSelectedById(next);
  };

  const toggleSelect = (student: StudentData) => {
    const next = new Map(selectedById);
    if (next.has(student.id)) {
      next.delete(student.id);
    } else {
      next.set(student.id, student);
    }
    setSelectedById(next);
  };

  const handleAdd = () => {
    onAddStudents(Array.from(selectedById.values()));
  };

  const title =
    selectedById.size > 0 ? `${selectedById.size} Selected` : "Selected";

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      className="max-w-[550px]"
    >
      <div className="flex flex-col gap-4 mt-2 h-full">
        {/* Search */}
        <div className="relative w-full shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
          <Input
            placeholder="Search student...."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none w-full"
          />
        </div>

        {/* Table Header / Name column */}
        <div className="flex items-center gap-4 py-2 opacity-90 mt-2">
          <div
            role="checkbox"
            aria-checked={allSelected ? true : someSelected ? "mixed" : false}
            onClick={toggleSelectAll}
            className={`flex size-5 items-center justify-center rounded border cursor-pointer border-gray-300 transition-colors ${
              allSelected || someSelected
                ? "bg-[#F06B30] border-[#F06B30]"
                : "bg-white"
            }`}
          >
            {allSelected && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {someSelected && <Minus className="size-3.5 text-white" strokeWidth={3} />}
          </div>
          <span className="font-semibold text-gray-900 text-[16px] ml-1">
            Name
          </span>
        </div>

        {/* List */}
        <div className="flex flex-col flex-1 divide-y divide-gray-100 min-h-[300px]">
          {isLoading ? (
            <div className="py-8 text-center text-gray-500">Loading students...</div>
          ) : pagedStudents.length > 0 ? (
            pagedStudents.map((student) => {
              const isChecked = selectedById.has(student.id);
              return (
                <div key={student.id} className="flex items-center gap-4 py-4">
                  <div
                    role="checkbox"
                    aria-checked={isChecked}
                    onClick={() => toggleSelect(student)}
                    className={`flex size-5 shrink-0 items-center justify-center rounded border cursor-pointer border-gray-300 transition-colors ${
                      isChecked
                        ? "bg-[#F06B30] border-[#F06B30] text-white"
                        : "bg-white"
                    }`}
                  >
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0 relative">
                    <Image
                      src={student.avatar}
                      alt={student.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="text-[15.5px] font-medium text-gray-900 leading-tight">
                        {student.name}
                      </span>
                      {student.status && (
                        <span className="bg-gray-100 text-gray-700 text-[11px] px-2 py-0.5 rounded-sm font-medium capitalize">
                          {student.status}
                        </span>
                      )}
                    </div>
                    <span className="text-[13.5px] text-gray-400">
                      {student.email}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-8 text-center text-gray-500">
              No students found
            </div>
          )}
        </div>

        {/* Pagination & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 mt-2 shrink-0 gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6">
            <span className="text-[14px] font-medium text-gray-800">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1.5 text-[14px] font-medium text-gray-800 hover:text-black transition-colors disabled:opacity-50"
              >
                <ChevronLeft className="size-4" strokeWidth={2.5} /> Prev.
              </button>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1.5 text-[14px] font-medium text-gray-800 hover:text-black transition-colors disabled:opacity-50"
              >
                Next <ChevronRight className="size-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-10 px-6 rounded-md bg-[#F6F6F6] text-gray-700 border border-gray-200 hover:bg-gray-200 shadow-none font-medium text-[14px]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAdd}
              disabled={selectedById.size === 0}
              className={`h-10 px-8 rounded-md shadow-none font-medium text-[14px] text-white ${
                selectedById.size > 0
                  ? "bg-[#F06B30] hover:bg-[#F06B30]/90"
                  : "bg-gray-200 text-gray-400 hover:bg-gray-200 cursor-not-allowed border-0"
              }`}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </AppSimpleModal>
  );
};
