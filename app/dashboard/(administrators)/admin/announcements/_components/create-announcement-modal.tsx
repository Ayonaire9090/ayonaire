"use client";

import React, { useState, useEffect } from "react";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import {
  AnnouncementFormData,
  AnnouncementViewType,
  MainFormView,
  AudienceView,
  SpecificUsersView,
  SuccessView,
} from "./create-announcement-views";

interface CreateAnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateAnnouncementModal = ({
  isOpen,
  onClose,
}: CreateAnnouncementModalProps) => {
  const [currentView, setCurrentView] = useState<AnnouncementViewType>("MAIN");
  const [formData, setFormData] = useState<AnnouncementFormData>({
    audience: "",
    course: "",
    title: "",
    summary: "",
    sendEmail: true,
    selectedUsers: [],
  });

  // Reset view to main when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentView("MAIN");
      // Optional: reset form data here as well if needed
    }
  }, [isOpen]);

  const getTitle = () => {
    if (currentView === "SUCCESS") return "";
    if (currentView === "AUDIENCE") return "Select Audience";
    if (currentView === "SPECIFIC_USERS") {
      const uCount = formData.selectedUsers.length;
      return uCount > 0 ? `${uCount} Selected` : "Select Specific Users";
    }
    return "Create Announcement";
  };

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title={getTitle()}
      className="max-h-[90vh]"
    >
      <div className="h-full flex flex-col py-1">
        {currentView === "MAIN" && (
          <MainFormView
            data={formData}
            setData={setFormData}
            onChangeView={setCurrentView}
            onClose={onClose}
          />
        )}
        {currentView === "AUDIENCE" && (
          <AudienceView
            data={formData}
            setData={setFormData}
            onChangeView={setCurrentView}
            onClose={onClose}
          />
        )}
        {currentView === "SPECIFIC_USERS" && (
          <SpecificUsersView
            data={formData}
            setData={setFormData}
            onChangeView={setCurrentView}
            onClose={onClose}
          />
        )}
        {currentView === "SUCCESS" && (
          <SuccessView
            data={formData}
            setData={setFormData}
            onChangeView={setCurrentView}
            onClose={onClose}
          />
        )}
      </div>
    </AppSimpleModal>
  );
};
