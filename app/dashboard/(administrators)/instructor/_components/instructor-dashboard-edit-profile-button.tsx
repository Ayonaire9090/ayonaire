"use client";
import { useRouter } from "next/navigation";
import { InstructorDashboardButton } from "./instructor-dashboard-button";
import { SquarePen } from "lucide-react";

export const InstructorDashboardEditProfileButton = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end items-center gap-4 flex-wrap pb-6">
      <InstructorDashboardButton
        onClick={() => router.push("/dashboard/instructor/profile/edit")}
        title="Edit Profile"
        icon={SquarePen}
      />
    </div>
  );
};
