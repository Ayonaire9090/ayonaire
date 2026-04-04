"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical, Plus, Search } from "lucide-react";

type UserStatus = "Active" | "Suspended";
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
    status: "Active",
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
    status: "Active",
    enrollments: 16,
    avatar: "https://i.pravatar.cc/150?img=9",
    role: "student",
  },
  {
    id: "4",
    name: "Dianne Russell",
    uniqueId: "STU-2215",
    email: "robbert@gmail.com",
    status: "Active",
    enrollments: 10,
    avatar: "https://i.pravatar.cc/150?img=20",
    role: "student",
  },
  {
    id: "5",
    name: "Eleanor Pena",
    uniqueId: "STU-2330",
    email: "leslie@gmail.com",
    status: "Active",
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
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium ${
        status === "Active"
          ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
          : "bg-orange-50 text-orange-500 border border-orange-200"
      }`}
    >
      {status}
    </span>
  );
}

function UserActions({ isInstructor }: { isInstructor: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="h-8 w-8">
          <MoreVertical className="size-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem className="cursor-pointer">
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          {isInstructor ? "View Courses" : "View Enrollments"}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Send Message
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive" className="cursor-pointer">
          Delete User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function UsersTable({
  users,
  isInstructor,
}: {
  users: UserData[];
  isInstructor: boolean;
}) {
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());

  const toggleUser = (userId: string) => {
    setSelectedUsers((prev) => {
      const next = new Set(prev);
      if (next.has(userId)) {
        next.delete(userId);
      } else {
        next.add(userId);
      }
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedUsers.size === users.length) {
      setSelectedUsers(new Set());
    } else {
      setSelectedUsers(new Set(users.map((u) => u.id)));
    }
  };

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/90 hover:bg-gray-50/80">
            <TableHead className="w-12 pl-4 h-14">
              <Checkbox
                checked={
                  selectedUsers.size === users.length && users.length > 0
                }
                onCheckedChange={toggleAll}
              />
            </TableHead>
            <TableHead className="font-semibold text-gray-700 h-14">
              Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700 h-14">
              ID
            </TableHead>
            <TableHead className="font-semibold text-gray-700 h-14">
              Email
            </TableHead>
            <TableHead className="font-semibold text-gray-700 h-14">
              Status
            </TableHead>
            <TableHead className="font-semibold text-gray-700 h-14">
              {isInstructor ? "Courses" : "Enrollments"}
            </TableHead>
            <TableHead className="font-semibold text-gray-700 text-center h-14">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              data-state={selectedUsers.has(user.id) ? "selected" : undefined}
              className="group"
            >
              <TableCell className="pl-4">
                <Checkbox
                  checked={selectedUsers.has(user.id)}
                  onCheckedChange={() => toggleUser(user.id)}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="size-9">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xs font-medium bg-primary/10 text-primary">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-gray-900">{user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">{user.uniqueId}</TableCell>
              <TableCell className="text-gray-600">{user.email}</TableCell>
              <TableCell>
                <StatusBadge status={user.status} />
              </TableCell>
              <TableCell className="text-gray-900 font-medium pl-8">
                {user.enrollments}
              </TableCell>
              <TableCell className="text-center">
                <UserActions isInstructor={isInstructor} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState<"students" | "instructors">(
    "students",
  );
  const [searchQuery, setSearchQuery] = useState("");

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            User Management <span className="text-2xl">👋</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage students and instructors on your platform
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Tab Toggle */}
          <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab("students")}
              className={`rounded-lg px-5 py-1.5 text-sm font-medium transition-all ${
                activeTab === "students"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab("instructors")}
              className={`rounded-lg px-5 py-1.5 text-sm font-medium transition-all ${
                activeTab === "instructors"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Instructors
            </button>
          </div>

          {/* Add User Button */}
          <Button className="rounded-lg gap-1.5 px-5">
            <Plus className="size-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Section Header + Search */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {sectionTitle}
          </h2>
          <p className="text-sm text-muted-foreground">{sectionSubtitle}</p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-gray-400" />
          <Input
            placeholder={`Search ${sectionTitle.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-full border-gray-200 bg-gray-50/80 h-10 text-sm placeholder:text-gray-400 focus-visible:bg-white"
          />
        </div>
      </div>

      {/* Table */}
      <UsersTable users={filteredUsers} isInstructor={isInstructor} />
    </div>
  );
}
