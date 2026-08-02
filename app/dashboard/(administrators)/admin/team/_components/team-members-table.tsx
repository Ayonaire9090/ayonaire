"use client";

import { useState } from "react";
import { toast } from "sonner";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { UserProfile } from "@/lib/api/types";
import {
  useGetTeamMembers,
  useUpdateTeamMemberRoleMutation,
  useSuspendTeamMemberMutation,
  useRemoveTeamMemberMutation,
} from "@/hooks/api/use-team";

export const TeamMembersTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useGetTeamMembers();
  const updateRole = useUpdateTeamMemberRoleMutation();
  const suspendMember = useSuspendTeamMemberMutation();
  const removeMember = useRemoveTeamMemberMutation();

  const members = data?.data ?? [];
  const filtered = members.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleRoleChange = (id: string, role: "admin" | "instructor" | "user") => {
    updateRole.mutate(
      { id, role },
      {
        onSuccess: () => toast.success("Role updated"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update role"),
      },
    );
  };

  const handleSuspend = (id: string) => {
    if (!window.confirm("Suspend this team member?")) return;
    suspendMember.mutate(id, {
      onSuccess: () => toast.success("Member suspended"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to suspend member"),
    });
  };

  const handleRemove = (id: string) => {
    if (!window.confirm("Remove this team member? This cannot be undone.")) return;
    removeMember.mutate(id, {
      onSuccess: () => toast.success("Member removed"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to remove member"),
    });
  };

  const columns: ColumnDef<UserProfile>[] = [
    {
      key: "name",
      header: "Name",
      cell: (item) => (
        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarFallback>{item.name?.charAt(0)?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-gray-900">{item.name}</span>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email",
      cell: (item) => <span className="text-gray-500 font-medium">{item.email}</span>,
    },
    {
      key: "role",
      header: "Role",
      cell: (item) => (
        <AppDropdown
          variant="gray"
          align="start"
          trigger={
            <button className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize bg-primary/10 text-primary">
              {item.role}
            </button>
          }
        >
          <AppDropdownItem variant="menu" onClick={() => handleRoleChange(item._id, "admin")}>
            Admin
          </AppDropdownItem>
          <AppDropdownItem variant="menu" onClick={() => handleRoleChange(item._id, "instructor")}>
            Instructor
          </AppDropdownItem>
        </AppDropdown>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
            item.status === "active"
              ? "bg-[#ECFDF5] text-[#10B981]"
              : "bg-[#FEE2E2] text-[#EF4444]"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <AppDropdown
          variant="white"
          align="end"
          trigger={<button className="text-gray-400 hover:text-gray-900">•••</button>}
        >
          <AppDropdownItem variant="menu" onClick={() => handleSuspend(item._id)}>
            Suspend
          </AppDropdownItem>
          <AppDropdownSeparator />
          <AppDropdownItem variant="danger-menu" onClick={() => handleRemove(item._id)}>
            Remove
          </AppDropdownItem>
        </AppDropdown>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 flex flex-col gap-4">
      <div className="relative w-full sm:w-[280px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
        <Input
          placeholder="Search team members..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
        />
      </div>

      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading team members...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load team members.</p>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-400">No team members yet</p>
      ) : (
        <DataTable data={filtered} columns={columns} keyExtractor={(item) => item._id} />
      )}
    </div>
  );
};
