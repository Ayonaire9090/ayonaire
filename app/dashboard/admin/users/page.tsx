"use client";

import { useState } from "react";
import { TabSwitcher } from "@/components/ui/tab-switcher";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { DataList } from "@/components/ui/data-list";
import { AddUserModal } from "./_components/add-user-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MoreVertical,
  Plus,
  Search,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";

type UserStatus = "Active" | "Suspended" | "Deactivate" | "Delete";
type UserRole = "student" | "instructor";

interface UserData {
  id: string;
  name: string;
  uniqueId: string;
  email: string;
  status: UserStatus;
  enrollments: number;
  avatar: string;
  role: UserRole;
}

const mockUsers: UserData[] = [
  {
    id: "1",
    name: "Jerome Bell",
    uniqueId: "STU-1823",
    email: "ryanhen@gmail.com",
    status: "Deactivate",
    enrollments: 12,
    avatar: "https://i.pravatar.cc/150?img=11",
    role: "student",
  },
  {
    id: "2",
    name: "Jenny Wilson",
    uniqueId: "STU-1990",
    email: "isabella@gmail.com",
    status: "Suspended",
    enrollments: 8,
    avatar: "https://i.pravatar.cc/150?img=5",
    role: "student",
  },
  {
    id: "3",
    name: "Dianne Russell",
    uniqueId: "STU-2104",
    email: "bessieco@gmail.com",
    status: "Suspended",
    enrollments: 16,
    avatar: "https://i.pravatar.cc/150?img=9",
    role: "student",
  },
  {
    id: "4",
    name: "Dianne Russell",
    uniqueId: "STU-2215",
    email: "robbert@gmail.com",
    status: "Suspended",
    enrollments: 10,
    avatar: "https://i.pravatar.cc/150?img=20",
    role: "student",
  },
  {
    id: "5",
    name: "Eleanor Pena",
    uniqueId: "STU-2330",
    email: "leslie@gmail.com",
    status: "Delete",
    enrollments: 11,
    avatar: "https://i.pravatar.cc/150?img=32",
    role: "student",
  },
  {
    id: "6",
    name: "Guy Hawkins",
    uniqueId: "STU-1990",
    email: "hawkins@gmail.com",
    status: "Suspended",
    enrollments: 8,
    avatar: "https://i.pravatar.cc/150?img=53",
    role: "student",
  },
  {
    id: "7",
    name: "Albert Flores",
    uniqueId: "STU-2219",
    email: "albert@gmail.com",
    status: "Active",
    enrollments: 10,
    avatar: "https://i.pravatar.cc/150?img=60",
    role: "student",
  },
  // Instructors
  {
    id: "8",
    name: "Sarah Johnson",
    uniqueId: "INS-1001",
    email: "sarah.j@gmail.com",
    status: "Active",
    enrollments: 24,
    avatar: "https://i.pravatar.cc/150?img=44",
    role: "instructor",
  },
  {
    id: "9",
    name: "Michael Chen",
    uniqueId: "INS-1002",
    email: "m.chen@gmail.com",
    status: "Active",
    enrollments: 18,
    avatar: "https://i.pravatar.cc/150?img=12",
    role: "instructor",
  },
  {
    id: "10",
    name: "Lisa Park",
    uniqueId: "INS-1003",
    email: "lisa.park@gmail.com",
    status: "Suspended",
    enrollments: 6,
    avatar: "https://i.pravatar.cc/150?img=23",
    role: "instructor",
  },
];

function StatusBadge({ status }: { status: UserStatus }) {
  const getColors = (s: UserStatus) => {
    switch (s) {
      case "Deactivate":
        return "bg-[#FFF9E6] text-[#F9C32B]";
      case "Suspended":
        return "bg-[#E6F6EC] text-[#24A164]";
      case "Active":
        return "bg-[#FFEBE6] text-[#FF7A59]";
      case "Delete":
        return "bg-[#FFE9E9] text-[#FF5A5F]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AppDropdown
      variant="gray"
      align="start"
      trigger={
        <button
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium focus:outline-none transition-colors ${getColors(
            status,
          )}`}
        >
          {status}
        </button>
      }
    >
      <AppDropdownItem variant="badge">Active</AppDropdownItem>
      <AppDropdownItem variant="badge">Deactivate</AppDropdownItem>
      <AppDropdownItem variant="badge">Delete</AppDropdownItem>
      <AppDropdownItem variant="active-badge">suspended</AppDropdownItem>
    </AppDropdown>
  );
}

function UserActions() {
  return (
    <AppDropdown
      variant="white"
      align="end"
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 hover:bg-transparent"
        >
          <MoreVertical className="size-[18px] text-black" />
        </Button>
      }
    >
      <AppDropdownItem variant="menu">View User Profile</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu">Duplicate</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="menu">Edit</AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu">Delete User</AppDropdownItem>
    </AppDropdown>
  );
}

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

  const tableColumns: ColumnDef<UserData>[] = [
    {
      key: "name",
      header: "Name",
      cell: (user) => (
        <div className="flex items-center gap-4">
          <Avatar className="size-11">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-900 text-[15px] whitespace-nowrap">
            {user.name}
          </span>
        </div>
      ),
    },
    {
      key: "uniqueId",
      header: "ID",
      cell: (user) => (
        <span className="text-gray-500 text-[15px] whitespace-nowrap">
          {user.uniqueId}
        </span>
      ),
    },
    {
      key: "email",
      header: "Email",
      cell: (user) => (
        <span className="text-gray-900 text-[15px] whitespace-nowrap">
          {user.email}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (user) => <StatusBadge status={user.status} />,
    },
    {
      key: "enrollments",
      header: isInstructor ? "Courses" : "Enrollments",
      cell: (user) => (
        <span className="text-gray-700 text-[15px] pl-4">
          {user.enrollments}
        </span>
      ),
    },
    {
      key: "action",
      header: "Action",
      headerClassName: "pr-6",
      className: "pr-6",
      cell: () => <UserActions />,
    },
  ];

  return (
    <div className="pb-8">
      {/* Header */}
      <DashboardHeader
        title="User Management"
        subTitle="Manage students and instructors on your platform"
      />

      {/* Stats Summary */}
      <div className="hidden md:block text-[15px] mb-6 text-gray-500">
        All (44) | <span className="text-[#FF7A59]">Active</span> (20) |{" "}
        <span className="text-[#FF7A59]">Pending Cancellation</span> (1) |{" "}
        <span className="text-[#FF7A59]">Pending Payment</span> (3) |{" "}
        <span className="text-[#FF7A59]">On Hold</span> (4) |{" "}
        <span className="text-[#FF7A59]">Cancelled</span> (16)
      </div>

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

        {/* Add User Button */}
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

        {/* Desktop Table */}
        <div className="hidden md:block w-full overflow-x-auto">
          <DataTable
            data={filteredUsers}
            columns={tableColumns}
            keyExtractor={(user) => user.id}
            selectable
          />
        </div>

        {/* Mobile List */}
        <div className="md:hidden mt-2">
          <DataList
            data={filteredUsers}
            keyExtractor={(user) => user.id}
            renderItem={(user) => (
              <>
                <Avatar className="size-[56px] shrink-0">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-sm font-medium bg-primary/10 text-primary">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 flex flex-col gap-0.5 min-w-0 pr-6">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="font-medium text-[16px] text-gray-900 truncate">
                      {user.name}
                    </span>
                    <StatusBadge status={user.status} />
                  </div>
                  <div className="text-[14px] text-gray-500 truncate">
                    {user.uniqueId}{" "}
                    <span className="mx-1.5 text-gray-400">•</span>{" "}
                    {user.enrollments}{" "}
                    {isInstructor ? "Courses" : "Enrollments"}
                  </div>
                  <div className="text-[14px] text-gray-800 truncate">
                    {user.email}
                  </div>
                </div>
                <div className="absolute right-1 top-1/2 -translate-y-1/2">
                  <UserActions />
                </div>
              </>
            )}
          />
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8 px-2 py-4">
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
    </div>
  );
}
