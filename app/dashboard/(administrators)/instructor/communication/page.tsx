"use client";
import React, { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { InstructorAnalyticsCommunicationCards } from "./_components/instructor-analytics-communication-cards";
import { InstructorAnalyticsCommunicationTable } from "./_components/instructor-analytics-communication-table";
import { InstructorAnalyticsCommunicationList } from "./_components/instructor-analytics-communication-list";
import { InstructorDashboardButton } from "../_components/instructor-dashboard-button";
import { Plus } from "lucide-react";
import { InstructorAnnouncementQuickCreateModal } from "./_components/instructor-announcement-quick-create-modal";

export default function InstrutorCommunicationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        onSubmit={(data) => {
          console.log("New Announcement Data:", data);
        }}
      />
    </>
  );
}

