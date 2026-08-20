"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorAnalyticsCommunicationCards } from "./_components/instructor-analytics-communication-cards";
import { InstructorAnalyticsCommunicationTable } from "./_components/instructor-analytics-communication-table";
import { InstructorAnalyticsCommunicationList } from "./_components/instructor-analytics-communication-list";
import { InstructorDashboardButton } from "../_components/instructor-dashboard-button";
import { Plus } from "lucide-react";
import { InstructorAnnouncementQuickCreateModal } from "./_components/instructor-announcement-quick-create-modal";
import { useCreateAnnouncementMutation } from "@/hooks/api/use-announcements";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useCreateCourseRoomMutation } from "@/hooks/api/use-rooms";
import { useAuthStore } from "@/store/auth.store";

export default function InstrutorCommunicationPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const createAnnouncementMutation = useCreateAnnouncementMutation();
  const createCourseRoomMutation = useCreateCourseRoomMutation();
  const { data: coursesData } = useGetCourses({
    instructor: user?._id,
    limit: 100,
  });
  const assignedCourses = coursesData?.courses ?? [];

  const handleCreateCourseRoom = async () => {
    if (!selectedCourseId) {
      toast.error("Select a course first");
      return;
    }

    try {
      const response =
        await createCourseRoomMutation.mutateAsync(selectedCourseId);
      toast.success("Course room is ready");
      if (response.data?.id) {
        router.push(`/dashboard/instructor/communication/messages/${response.data.id}`);
      }
    } catch (error: any) {
      toast.error(error?.message || "Failed to create course room");
    }
  };

  return (
    <>
      <DashboardHeader
        title="Announcements"
        subTitle="Manage and broadcast updates to your students across all courses"
      />
      <div className="block lg:flex justify-between items-start gap-16">
        <div className="flex-1">
          <InstructorAnalyticsCommunicationCards />
        </div>
        <InstructorDashboardButton
          title="Create Announcement"
          icon={Plus}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 md:flex-row md:items-center">
        <select
          value={selectedCourseId}
          onChange={(event) => setSelectedCourseId(event.target.value)}
          className="h-10 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-primary"
        >
          <option value="">Select a course for chat room</option>
          {assignedCourses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.title}
            </option>
          ))}
        </select>
        <InstructorDashboardButton
          title={
            createCourseRoomMutation.isPending
              ? "Creating Room..."
              : "Create Course Room"
          }
          icon={Plus}
          onClick={handleCreateCourseRoom}
        />
      </div>
      <div className="hidden lg:block">
        <InstructorAnalyticsCommunicationTable />
      </div>
      <div className="block lg:hidden">
        <InstructorAnalyticsCommunicationList />
      </div>

      <InstructorAnnouncementQuickCreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={async (data) => {
          if (data.status === "Draft") {
            toast.error(
              "Saving drafts isn't supported yet - use Send Now to publish immediately.",
            );
            return;
          }
          try {
            await createAnnouncementMutation.mutateAsync({
              title: data.title,
              summary: data.message,
              courseId: data.courseId || undefined,
            });
            toast.success("Announcement sent");
          } catch (error: any) {
            toast.error(error?.message || "Failed to send announcement");
          }
        }}
      />
    </>
  );
}

