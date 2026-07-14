"use client";

import { useState } from "react";
import { TabSwitcher } from "@/components/ui/tab-switcher";
import { AddUserModal } from "./_components/add-user-modal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ChevronDown, X } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { StatsSummary } from "../../../../../components/dashboard/stats-summary";
import { mapUserProfileToUserData } from "./_components/users-data";
import { UsersTable } from "./_components/users-table";
import { UsersList } from "./_components/users-list";
import { useGetAdminUsers } from "@/hooks/api/use-admin";

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

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState<"students" | "instructors">(
    "students",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [addUserOpen, setAddUserOpen] = useState(false);

  const { data, isLoading, isError } = useGetAdminUsers();
  const usersData = (data?.users ?? []).map(mapUserProfileToUserData);

  const summaryData = [
    { title: "All", number: String(usersData.length) },
    {
      title: "Active",
      number: String(usersData.filter((u) => u.status === "Active").length),
    },
    {
      title: "Suspended",
      number: String(
        usersData.filter((u) => u.status === "Suspended").length,
      ),
    },
    {
      title: "Deactivated",
      number: String(
        usersData.filter((u) => u.status === "Deactivate").length,
      ),
    },
  ];

  // Instructor filter states
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(
    new Set(),
  );
  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(
    new Set(),
  );
  const [selectedCohorts, setSelectedCohorts] = useState<Set<string>>(
    new Set(),
  );
  const [selectedBulkActions, setSelectedBulkActions] = useState<Set<string>>(
    new Set(),
  );

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

  const getDynamicBulkActions = () => {
    if (selectedStatuses.has("Suspended"))
      return ["Reactivate", "Delete", "Publish"];
    if (selectedStatuses.has("Pending"))
      return ["Approve", "Reject", "Publish"];
    return ["Suspend", "Delete", "Publish"]; // Default / Active
  };

  const coursesItems = [
    "AI Engineering",
    "Data Science",
    "Data Analysis",
    "Digital Marketing",
    "Cloud Computing",
    "DevOps Engineering",
    "Project Management",
  ];

  const cohortsItems = ["Cohort A", "Cohort B", "Cohort C"];
  const statusesItems = ["Active", "Pending", "Suspended", "Rejected"];

  const isInstructor = activeTab === "instructors";

  const filteredUsers = usersData
    .filter((user) =>
      isInstructor ? user.role === "instructor" : user.role === "student",
    )
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.uniqueId.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const sectionTitle = isInstructor ? "Instructors" : "Students";
  const sectionSubtitle = isInstructor
    ? "Manage instructor accounts and courses"
    : "Manage student accounts and enrollments";

  const instructorFiltersContent = (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-11 px-4 bg-white md:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px] shrink-0"
          >
            Status <ChevronDown className="ml-1.5 size-4 text-gray-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
        >
          <FilterPopoverHeader title="Status" />
          <div className="pb-3 flex flex-col gap-0.5">
            {statusesItems.map((s) => (
              <CheckboxItem
                key={s}
                label={s}
                checked={selectedStatuses.has(s)}
                onToggle={() =>
                  toggleSet(selectedStatuses, setSelectedStatuses, s)
                }
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-11 px-4 bg-white md:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px] shrink-0"
          >
            All Courses <ChevronDown className="ml-1.5 size-4 text-gray-500" />
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

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-11 px-4 bg-white md:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px] shrink-0"
          >
            Cohort <ChevronDown className="ml-1.5 size-4 text-gray-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
        >
          <FilterPopoverHeader title="Cohort" />
          <div className="pb-3 flex flex-col gap-0.5">
            {cohortsItems.map((c) => (
              <CheckboxItem
                key={c}
                label={c}
                checked={selectedCohorts.has(c)}
                onToggle={() =>
                  toggleSet(selectedCohorts, setSelectedCohorts, c)
                }
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="h-11 px-4 bg-white md:bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-lg shadow-none text-[14px] shrink-0"
          >
            Bulk Actions <ChevronDown className="ml-1.5 size-4 text-gray-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[280px] p-0 rounded-[20px] border-gray-100 shadow-lg bg-[#F6F6F6]"
        >
          <FilterPopoverHeader title="Bulk Actions" />
          <div className="pb-3 flex flex-col gap-0.5">
            {getDynamicBulkActions().map((action) => (
              <CheckboxItem
                key={action}
                label={action}
                checked={selectedBulkActions.has(action)}
                onToggle={() =>
                  toggleSet(selectedBulkActions, setSelectedBulkActions, action)
                }
                danger={action === "Delete" || action === "Reject"}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>

      {/* Apply Button */}
      <Button
        variant="outline"
        className={`py-5! flex  items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                text-white focus:outline-0! shadow-0!`}
      >
        <p className="text-sm text-white">Apply</p>
      </Button>
    </>
  );

  return (
    <div className="pb-8">
      {/* Header */}
      <DashboardHeader
        title="User Management"
        subTitle="Manage students and instructors on your platform"
      />

      {/* Stats Summary */}
      <StatsSummary data={summaryData} />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 mt-8 md:mt-0 w-full">
        <div className="flex justify-between items-center md:block">
          <div className="flex items-center gap-3">
            {/* Tab Toggle */}
            <TabSwitcher
              options={[
                { value: "students", label: "Students" },
                { value: "instructors", label: "Instructors" },
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Bulk Actions Mobile Only */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="h-11 p-4! bg-white border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none"
                >
                  Bulk Action{" "}
                  <ChevronDown className="ml-2 size-4 text-gray-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-[380px] p-0 rounded-[20px] border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] bg-[#FAFAFA]"
              >
                <div className="flex items-center justify-between p-5 pb-3">
                  <h3 className="font-semibold text-[22px] text-black">
                    Bulk actions
                  </h3>
                  <PopoverClose asChild>
                    <button className="p-1.5 bg-[#E6E6E6] rounded-full hover:bg-gray-300 transition-colors">
                      <X className="size-[18px] text-black" />
                    </button>
                  </PopoverClose>
                </div>
                <div className="px-2 pb-4 pt-1 flex flex-col gap-1">
                  <PopoverClose asChild>
                    <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                      View all users (students and instructors)
                    </button>
                  </PopoverClose>
                  <PopoverClose asChild>
                    <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                      Create, edit, deactivate, suspend, or delete user accounts
                    </button>
                  </PopoverClose>
                  <PopoverClose asChild>
                    <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                      Assign or change user roles
                    </button>
                  </PopoverClose>
                  <PopoverClose asChild>
                    <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                      View user activity and login history
                    </button>
                  </PopoverClose>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Search Mobile Only */}
        <div className="md:hidden relative w-full sm:w-[280px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
          <Input
            placeholder={`Search ${sectionTitle.toLowerCase()}....`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 rounded-xl border-none bg-white h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-white/90 shadow-none"
          />
        </div>

        {/* Instructor Filters Mobile Only */}
        {isInstructor && (
          <div className="md:hidden flex gap-3 items-center overflow-x-auto overflow-y-hidden py-2 hide-scrollbar">
            {instructorFiltersContent}
          </div>
        )}

        {/* Add User Button Desktop Only */}
        <AdminDashboardButton
          title={isInstructor ? "Add New Instructor" : "Add New User"}
          icon={Plus}
          onClick={() => setAddUserOpen(true)}
        />
      </div>

      <AddUserModal
        isOpen={addUserOpen}
        onClose={() => setAddUserOpen(false)}
        isInstructor={isInstructor}
      />

      {/* Section Header + Search + Bulk Actions */}
      <div className="bg-white rounded-xl p-2 lg:p-4">
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4 mb-4">
          <div>
            <h2 className="text-[22px] font-semibold text-gray-900 shrink-0 mb-1">
              {sectionTitle}
            </h2>
            <p className="text-[15px] text-gray-500">{sectionSubtitle}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Search */}
            <div className="hidden md:block relative w-full sm:w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
              <Input
                placeholder={`Search ${sectionTitle.toLowerCase()}....`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
              />
            </div>
            {!isInstructor && (
              <div className="hidden md:block">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-11 px-6 bg-[#F6F6F6] border-none text-gray-600 font-normal hover:bg-gray-100 rounded-[8px] shadow-none"
                    >
                      Bulk Action{" "}
                      <ChevronDown className="ml-2 size-4 text-gray-500" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="end"
                    className="w-[380px] p-0 rounded-[20px] border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] bg-[#FAFAFA]"
                  >
                    <div className="flex items-center justify-between p-5 pb-3">
                      <h3 className="font-semibold text-[22px] text-black">
                        Bulk actions
                      </h3>
                      <PopoverClose asChild>
                        <button className="p-1.5 bg-[#E6E6E6] rounded-full hover:bg-gray-300 transition-colors">
                          <X className="size-[18px] text-black" />
                        </button>
                      </PopoverClose>
                    </div>
                    <div className="px-2 pb-4 pt-1 flex flex-col gap-1">
                      <PopoverClose asChild>
                        <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                          View all users (students and instructors)
                        </button>
                      </PopoverClose>
                      <PopoverClose asChild>
                        <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                          Create, edit, deactivate, suspend, or delete user
                          accounts
                        </button>
                      </PopoverClose>
                      <PopoverClose asChild>
                        <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                          Assign or change user roles
                        </button>
                      </PopoverClose>
                      <PopoverClose asChild>
                        <button className="text-left px-4 py-3 text-[16px] text-gray-600 hover:bg-white rounded-xl transition-colors">
                          View user activity and login history
                        </button>
                      </PopoverClose>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
        </div>
        {/* Custom Filters for Instructors */}
        <div className="pb-4">
          {isInstructor && (
            <div className="hidden md:flex items-center gap-3">
              {instructorFiltersContent}
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load users. Please try again.
          </div>
        ) : (
          <>
            <UsersTable data={filteredUsers} isInstructor={isInstructor} />
            <UsersList data={filteredUsers} isInstructor={isInstructor} />
          </>
        )}
      </div>
    </div>
  );
}
