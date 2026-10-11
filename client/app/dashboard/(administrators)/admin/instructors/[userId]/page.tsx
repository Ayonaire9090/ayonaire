"use client";

import { useParams, useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { useGetInstructorProfile } from "@/hooks/api/use-instructor";
import { InstructorStatusBadge, mapInstructorProfileToInstructorData } from "../_components/instructors-data";

export default function AdminInstructorDetailPage() {
  const { userId } = useParams<{ userId: string }>();
  const router = useRouter();

  const { data, isLoading, isError } = useGetInstructorProfile(userId);
  const profile = data?.data;
  const instructorData = profile ? mapInstructorProfileToInstructorData(profile) : null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-gray-400">
        Loading instructor profile...
      </div>
    );
  }

  if (isError || !profile || !instructorData) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-red-500">
        Instructor profile not found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-0 pb-4">
      <DashboardHeader
        title={instructorData.name}
        subTitle={
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 text-gray-500">
              Dashboard <ChevronRight className="size-3" />
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              Instructors <ChevronRight className="size-3" />
            </span>
            <span className="text-gray-500">{instructorData.name}</span>
          </div>
        }
      />

      <div className="mt-4">
        <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
          {/* Profile Summary */}
          <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col md:flex-row md:items-center gap-6">
            <Avatar className="size-20 border border-gray-100">
              <AvatarFallback className="text-lg font-medium bg-primary/10 text-primary">
                {instructorData.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <h2 className="text-[20px] font-semibold text-gray-900">{instructorData.name}</h2>
              <p className="text-gray-500 text-[14px]">{instructorData.email}</p>
              <InstructorStatusBadge status={instructorData.status} />
            </div>
          </div>

          {/* Details */}
          <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-900 text-[16px]">Profile Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Category</span>
                <span className="font-medium text-gray-900 text-[15px]">{instructorData.category}</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Expertise</span>
                <span className="font-medium text-gray-900 text-[15px]">{instructorData.expertise}</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Courses</span>
                <span className="font-medium text-gray-900 text-[15px]">{profile.courses?.length ?? 0}</span>
              </div>
              <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                <span className="text-[13px] text-gray-500">Joined</span>
                <span className="font-medium text-gray-900 text-[15px]">{instructorData.joined}</span>
              </div>
            </div>

            {profile.bio && (
              <div className="flex flex-col gap-2 mt-2">
                <h4 className="font-semibold text-gray-900 text-[14px]">Bio</h4>
                <p className="text-gray-600 text-[14px] leading-relaxed whitespace-pre-wrap">{profile.bio}</p>
              </div>
            )}
          </div>

          <button
            onClick={() => router.push("/dashboard/admin/instructors")}
            className="text-gray-600 hover:text-gray-900 text-[14px] font-medium self-start"
          >
            ← Back to Instructors
          </button>
        </div>
      </div>
    </div>
  );
}
