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
import { StatsSummary } from "../../../../components/dashboard/stats-summary";
import { mockUsers } from "./_components/users-data";
import { UsersTable } from "./_components/users-table";
import { UsersList } from "./_components/users-list";

const mockSummaryData = [
  { title: "All", number: "44" },
  { title: "Active", number: "20" },
  { title: "Pending Cancellation", number: "1" },
  { title: "Pending Payment", number: "3" },
  { title: "On Hold", number: "4" },
  { title: "Cancelled", number: "16" },
];

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState<"students" | "instructors">(
    "students",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [addUserOpen, setAddUserOpen] = useState(false);

  const isInstructor = activeTab === "instructors";

  const filteredUsers = mockUsers
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

  return (
    <div className="pb-8">
      {/* Header */}
      <DashboardHeader
        title="User Management"
        subTitle="Manage students and instructors on your platform"
      />

      {/* Stats Summary */}
      <StatsSummary data={mockSummaryData} />

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

        {/* Add User Button Desktop Only */}
        <AdminDashboardButton
          title="Add New User"
          icon={Plus}
          className="hidden md:flex"
          onClick={() => setAddUserOpen(true)}
        />
      </div>

      {/* Add new User Mobile Only */}
      <div className="md:hidden fixed flex justify-center items-center right-3 top-[50%] translate-y-[-50%] z-90">
        <AdminDashboardButton
          icon={Plus}
          onClick={() => setAddUserOpen(true)}
        />
      </div>

      <AddUserModal
        isOpen={addUserOpen}
        onClose={() => setAddUserOpen(false)}
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

            {/* Bulk Actions */}
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
          </div>
        </div>

        <UsersTable data={filteredUsers} isInstructor={isInstructor} />
        <UsersList data={filteredUsers} isInstructor={isInstructor} />
      </div>
    </div>
  );
}
