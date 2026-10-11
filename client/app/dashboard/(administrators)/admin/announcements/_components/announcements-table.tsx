"use client";

import React, { useMemo, useState } from "react";
import { format } from "date-fns";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  AnnouncementStatusBadge,
  AnnouncementActions,
  AnnouncementData,
  mapAnnouncementToAnnouncementData,
} from "./announcements-data";
import { Plus, Search, ChevronDown, X } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { AnnouncementBanner } from "./announcement-banner";
import { CreateAnnouncementModal } from "./create-announcement-modal";
import { useGetAnnouncements, useDeleteAnnouncementMutation } from "@/hooks/api/use-announcements";

// Shared Popover Header
function FilterPopoverHeader({ title }: { title: string }) {
  return (
    <div className="flex items-start justify-between p-5 pb-4">
      <span className="text-[20px] font-bold text-gray-900 leading-tight">
        {title}
      </span>
      <PopoverClose asChild>
        <button className="size-9 flex items-center justify-center bg-[#EBEBEB] rounded-full hover:bg-gray-300 transition-colors shrink-0 mt-0.5">
          <X className="size-[16px] text-gray-700" />
        </button>
      </PopoverClose>
    </div>
  );
}

// Checkbox Filter Row
function CheckboxItem({
  label,
  checked,
  onToggle,
  danger,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-3.5 w-full px-5 py-3 hover:bg-white/60 transition-colors text-left rounded-xl"
    >
      <div
        className={`size-5 rounded-[5px] border-2 flex items-center justify-center shrink-0 transition-colors ${
          checked ? "bg-primary border-primary" : "bg-white border-gray-300"
        }`}
      >
        {checked && (
          <svg
            className="size-3 text-white"
            viewBox="0 0 12 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 5 4.5 8.5 11 1" />
          </svg>
        )}
      </div>
      <span
        className={`text-[15px] font-normal ${
          danger ? "text-red-500" : "text-gray-600"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

export const AnnouncementsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(
    new Set(),
  );
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());
  const [selectedAudiences, setSelectedAudiences] = useState<Set<string>>(
    new Set(),
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());

  const { data, isLoading, isError } = useGetAnnouncements();
  const announcements: AnnouncementData[] = (data?.data?.announcement ?? []).map(
    mapAnnouncementToAnnouncementData,
  );
  const deleteAnnouncement = useDeleteAnnouncementMutation();

  const toggleSet = (
    set: Set<string>,
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    value: string,
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const tableColumns: ColumnDef<AnnouncementData>[] = [
    {
      key: "title",
      header: "Title",
      cell: (item) => (
        <span className="text-[15px] text-gray-600 font-normal">
          {item.title}
        </span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => (
        <span className="text-[15px] text-gray-900 font-medium">
          {item.course}
        </span>
      ),
    },
    {
      key: "audience",
      header: "Audience",
      cell: (item) => (
        <span className="text-gray-600 font-normal text-[15px]">
          {item.audience}
        </span>
      ),
    },
    {
      key: "date",
      header: "Date",
      cell: (item) => (
        <span className="text-gray-600 font-normal text-[15px]">
          {item.date}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => <AnnouncementStatusBadge status={item.status} announcementId={item.id} />,
    },
    {
      key: "actions",
      header: "",
      headerClassName: "pr-4 w-12",
      className: "pr-4",
      cell: (item) => <AnnouncementActions announcement={item} />,
    },
  ];

  const bulkActionItems = ["Delete Permanently"];

  const handleBulkDelete = () => {
    if (selectedRowIds.size === 0) {
      toast.info("Select at least one announcement first.");
      return;
    }
    if (
      !window.confirm(
        `Delete ${selectedRowIds.size} selected announcement(s)? This cannot be undone.`,
      )
    )
      return;

    Promise.all(
      Array.from(selectedRowIds).map(
        (id) => new Promise<void>((resolve) => deleteAnnouncement.mutate(id, { onSettled: () => resolve() })),
      ),
    ).then(() => {
      toast.success("Selected announcements deleted");
      setSelectedRowIds(new Set());
    });
  };

  // Filter option lists are derived from the loaded announcements themselves,
  // so they only ever show values that actually exist in the data.
  const coursesItems = useMemo(
    () => Array.from(new Set(announcements.map((a) => a.course))).sort(),
    [announcements],
  );
  const datesItems = useMemo(
    () =>
      Array.from(
        new Set(
          announcements
            .filter((a) => a.createdAt)
            .map((a) => format(new Date(a.createdAt as string), "MMMM yyyy")),
        ),
      ).sort(),
    [announcements],
  );
  const audienceItems = useMemo(
    () => Array.from(new Set(announcements.map((a) => a.audience))).sort(),
    [announcements],
  );

  const filteredAnnouncements = announcements.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCourse =
      selectedCourses.size === 0 || selectedCourses.has(item.course);
    const matchesAudience =
      selectedAudiences.size === 0 || selectedAudiences.has(item.audience);
    const matchesDate =
      selectedDates.size === 0 ||
      (item.createdAt &&
        selectedDates.has(format(new Date(item.createdAt), "MMMM yyyy")));

    return matchesSearch && matchesCourse && matchesAudience && matchesDate;
  });

  return (
    <>
      {/* Empty State Banner */}
      {!isLoading && !isError && announcements.length === 0 && (
        <div className="pb-4">
          <AnnouncementBanner />
        </div>
      )}

      <div className="hidden md:block w-full overflow-x-auto mt-6 bg-white rounded-xl p-2 lg:p-4">
        {/* Header Row */}
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between pb-6">
          <div>
            <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
              Announcements
            </h2>
            <p className="text-[15px] text-gray-500">
              Manage Announcements, Dates and availability
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Add Action Desktop Only */}
            <AdminDashboardButton
              title="Add New Announcement"
              icon={Plus}
              className="h-11 px-5"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center gap-4 pb-4">
          {/* Search */}
          <div className="relative w-full sm:w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
            <Input
              placeholder="Search announcement...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 rounded-full border-none bg-[#F6F6F6] h-10 text-[14px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
            />
          </div>

          {/* Bulk Action */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px]"
              >
                Bulk Action{" "}
                <ChevronDown className="ml-1.5 size-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[300px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
            >
              <FilterPopoverHeader title="Bulk actions" />
              <div className="pb-3 flex flex-col gap-0.5">
                <p className="px-5 pb-1 text-[13px] text-gray-400">
                  {selectedRowIds.size} selected
                </p>
                {bulkActionItems.map((action) => (
                  <CheckboxItem
                    key={action}
                    label={action}
                    checked={false}
                    onToggle={handleBulkDelete}
                    danger
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* All Courses */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px]"
              >
                All Courses{" "}
                <ChevronDown className="ml-1.5 size-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[320px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6] max-h-[420px] overflow-y-auto"
            >
              <FilterPopoverHeader title="All Courses" />
              <div className="pb-3 flex flex-col gap-0.5">
                {coursesItems.map((c) => (
                  <CheckboxItem
                    key={c}
                    label={c}
                    checked={selectedCourses.has(c)}
                    onToggle={() =>
                      toggleSet(selectedCourses, setSelectedCourses, c)
                    }
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* All Dates */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px]"
              >
                All Dates{" "}
                <ChevronDown className="ml-1.5 size-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
            >
              <FilterPopoverHeader title="All Dates" />
              <div className="pb-3 flex flex-col gap-0.5">
                {datesItems.map((d) => (
                  <CheckboxItem
                    key={d}
                    label={d}
                    checked={selectedDates.has(d)}
                    onToggle={() =>
                      toggleSet(selectedDates, setSelectedDates, d)
                    }
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* All Audience */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="h-10 px-4 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px]"
              >
                All Audience{" "}
                <ChevronDown className="ml-1.5 size-4 text-gray-500" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
            >
              <FilterPopoverHeader title="All Audience" />
              <div className="pb-3 flex flex-col gap-0.5">
                {audienceItems.map((a) => (
                  <CheckboxItem
                    key={a}
                    label={a}
                    checked={selectedAudiences.has(a)}
                    onToggle={() =>
                      toggleSet(selectedAudiences, setSelectedAudiences, a)
                    }
                  />
                ))}
              </div>
            </PopoverContent>
          </Popover>

        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load announcements. Please try again.
          </div>
        ) : (
          <DataTable
            data={filteredAnnouncements}
            columns={tableColumns}
            keyExtractor={(c) => c.id}
            selectable
            onSelectionChange={setSelectedRowIds}
          />
        )}
      </div>

      <CreateAnnouncementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
