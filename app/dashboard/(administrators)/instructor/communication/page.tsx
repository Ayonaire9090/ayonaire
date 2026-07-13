"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorAnalyticsCommunicationCards } from "./_components/instructor-analytics-communication-cards";
import { InstructorAnalyticsCommunicationTable } from "./_components/instructor-analytics-communication-table";
import { InstructorAnalyticsCommunicationList } from "./_components/instructor-analytics-communication-list";
import { InstructorDashboardButton } from "../_components/instructor-dashboard-button";
import { Plus } from "lucide-react";
import { InstructorAnnouncementQuickCreateModal } from "./_components/instructor-announcement-quick-create-modal";
import { useCreateAnnouncementMutation } from "@/hooks/api/use-announcements";

export default function InstrutorCommunicationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createAnnouncementMutation = useCreateAnnouncementMutation();

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

