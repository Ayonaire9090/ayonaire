"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  useGetAdminUsers,
  useUpdateUserMutation,
  useAssignRoleMutation,
  useGetUserLoginHistory,
  useGetUserActivity,
} from "@/hooks/api/use-admin";
import { StatusBadge, mapUserProfileToUserData } from "../_components/users-data";

interface LoginHistoryEntry {
  ip: string;
  userAgent: string;
  loggedInAt: string;
}

interface ActivityEntry {
  action: string;
  performedAt: string;
}

export default function AdminUserDetailPage() {
  const { userId } = useParams<{ userId: string }>();
  const router = useRouter();

  const { data: usersData, isLoading: isLoadingUsers } = useGetAdminUsers();
  const { data: loginHistoryRes, isLoading: isLoadingLoginHistory } = useGetUserLoginHistory(userId);
  const { data: activityRes, isLoading: isLoadingActivity } = useGetUserActivity(userId);

  const updateUser = useUpdateUserMutation();
  const assignRole = useAssignRoleMutation();

  const user = useMemo(
    () => usersData?.users.find((u) => u._id === userId),
    [usersData, userId],
  );
  const userData = useMemo(() => (user ? mapUserProfileToUserData(user) : null), [user]);

  const [form, setForm] = useState({ name: "", email: "", phoneNumber: "" });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name ?? "",
        email: user.email ?? "",
        phoneNumber: user.phoneNumber ?? "",
      });
    }
  }, [user]);

  const loginHistory = (loginHistoryRes?.data as LoginHistoryEntry[] | undefined) ?? [];
  const activity = (activityRes?.data as ActivityEntry[] | undefined) ?? [];

  const handleSaveDetails = () => {
    updateUser.mutate(
      { id: userId, payload: form },
      {
        onSuccess: () => toast.success("User details updated"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update user"),
      },
    );
  };

  const handleRoleChange = (role: string) => {
    assignRole.mutate(
      { id: userId, role },
      {
        onSuccess: () => toast.success("Role updated"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update role"),
      },
    );
  };

  if (isLoadingUsers) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-gray-400">
        Loading user...
      </div>
    );
  }

  if (!user || !userData) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-red-500">
        User not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0 pb-4">
      <DashboardHeader
        title={user.name}
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Users <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">{user.name}</span>
          </div>
        }
      />

      <div className="mt-4">
        <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
            {/* Profile Summary */}
            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col md:flex-row md:items-center gap-6">
              <Avatar className="size-20 border border-gray-100">
                <AvatarImage src={userData.avatar} alt={user.name} />
                <AvatarFallback className="text-lg font-medium bg-primary/10 text-primary">
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <h2 className="text-[20px] font-semibold text-gray-900">{user.name}</h2>
                <p className="text-gray-500 text-[14px]">{user.email}</p>
                <div className="flex items-center gap-2">
                  <StatusBadge status={userData.status} userId={user._id} />
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 capitalize">
                    {user.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Edit Details */}
            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-[16px]">Edit Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AppInput
                  label="Full Name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                />
                <AppInput
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                />
                <AppInput
                  label="Phone Number"
                  value={form.phoneNumber}
                  onChange={(e) => setForm((p) => ({ ...p, phoneNumber: e.target.value }))}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-[14px] font-medium text-gray-700">Role</label>
                  <AppSelect
                    value={user.role}
                    onChange={handleRoleChange}
                    options={[
                      { label: "Student", value: "student" },
                      { label: "Instructor", value: "instructor" },
                    ]}
                    className="h-12! bg-white border-gray-200"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <Button
                  onClick={handleSaveDetails}
                  disabled={updateUser.isPending}
                  className="h-11 px-8 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-lg shadow-none disabled:opacity-60"
                >
                  {updateUser.isPending ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </div>

            {/* Login History */}
            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-[16px]">Login History</h3>
              {isLoadingLoginHistory ? (
                <div className="py-6 text-center text-gray-400 text-[14px]">Loading...</div>
              ) : loginHistory.length === 0 ? (
                <div className="py-6 text-center text-gray-400 text-[14px]">No login history available.</div>
              ) : (
                <div className="flex flex-col divide-y divide-gray-100">
                  {loginHistory.map((entry, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-1 py-3 text-[14px]">
                      <span className="text-gray-900">{entry.ip}</span>
                      <span className="text-gray-500 truncate max-w-[300px]">{entry.userAgent}</span>
                      <span className="text-gray-500">
                        {entry.loggedInAt ? new Date(entry.loggedInAt).toLocaleString() : "-"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Activity */}
            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-4">
              <h3 className="font-semibold text-gray-900 text-[16px]">Activity</h3>
              {isLoadingActivity ? (
                <div className="py-6 text-center text-gray-400 text-[14px]">Loading...</div>
              ) : activity.length === 0 ? (
                <div className="py-6 text-center text-gray-400 text-[14px]">No activity recorded.</div>
              ) : (
                <div className="flex flex-col divide-y divide-gray-100">
                  {activity.map((entry, i) => (
                    <div key={i} className="flex items-center justify-between gap-2 py-3 text-[14px]">
                      <span className="text-gray-900">{entry.action}</span>
                      <span className="text-gray-500">
                        {entry.performedAt ? new Date(entry.performedAt).toLocaleString() : "-"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => router.push("/dashboard/admin/users")}
              className="text-gray-600 hover:text-gray-900 text-[14px] font-medium self-start"
            >
              ← Back to Users
            </button>
          </div>
        </div>
      </div>
  );
}
