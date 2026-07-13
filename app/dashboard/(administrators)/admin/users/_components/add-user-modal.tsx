"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { Button } from "@/components/ui/button";
import { ManualAddForm } from "./manual-add-form";
import { BulkAddForm } from "./bulk-add-form";
import {
  useInviteUsersMutation,
  useBulkInviteCsvMutation,
} from "@/hooks/api/use-invites";

export function AddUserModal({
  isOpen,
  onClose,
  isInstructor,
}: {
  isOpen: boolean;
  onClose: () => void;
  isInstructor?: boolean;
}) {
  const [activeTab, setActiveTab] = useState<"manual" | "bulk">("manual");

  // Bulk (invite) tab state - lifted so the shared footer button can submit it.
  const [bulkOption, setBulkOption] = useState<"email" | "csv" | "link">(
    "email",
  );
  const [emailsText, setEmailsText] = useState("");
  const [courseId, setCourseId] = useState("all");
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const inviteUsersMutation = useInviteUsersMutation();
  const bulkInviteCsvMutation = useBulkInviteCsvMutation();
  const isBulkSubmitting =
    inviteUsersMutation.isPending || bulkInviteCsvMutation.isPending;

  const resetBulkState = () => {
    setEmailsText("");
    setCourseId("all");
    setCsvFile(null);
  };

  const handleClose = () => {
    resetBulkState();
    onClose();
  };

  const handleBulkSubmit = async () => {
    try {
      if (bulkOption === "email") {
        const emails = emailsText
          .split(/[,\n]/)
          .map((email) => email.trim())
          .filter(Boolean);
        if (emails.length === 0) return;

        await inviteUsersMutation.mutateAsync({
          emails,
          courseId: courseId !== "all" ? courseId : undefined,
        });
        toast.success("Invitations sent");
        handleClose();
      } else if (bulkOption === "csv") {
        if (!csvFile) return;

        // Field name "file" is a guess - no bulk-CSV request has been
        // confirmed against the backend yet.
        const formData = new FormData();
        formData.append("file", csvFile);

        await bulkInviteCsvMutation.mutateAsync(formData);
        toast.success("CSV uploaded, invitations are being sent");
        handleClose();
      }
      // "link" option has no matching backend endpoint yet - no-op.
    } catch (error: any) {
      toast.error(error?.message || "Failed to send invitations");
    }
  };

  const titleText = isInstructor ? "Add New Instructor" : "Add New User";
  const subtitleText = isInstructor
    ? "Create a new instructor or invite instructors to the platform"
    : "Create a new student or invite users to the platform";
  const buttonText = isInstructor ? "Add Instructor" : "Add User";

  const isBulkSubmitDisabled =
    bulkOption === "link" ||
    (bulkOption === "email" && !emailsText.trim()) ||
    (bulkOption === "csv" && !csvFile);

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={handleClose}
      title={titleText}
      subtitle={subtitleText}
      headerContent={
        <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm overflow-x-auto w-full md:w-auto">
          <button
            onClick={() => setActiveTab("manual")}
            className={`flex-1 md:flex-none whitespace-nowrap px-2 md:px-4 py-2 rounded-lg text-[14px] md:text-[15px] transition-colors font-medium ${
              activeTab === "manual"
                ? "bg-[#FFEBE6] text-black"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Manual Add
          </button>
          <button
            onClick={() => setActiveTab("bulk")}
            className={`flex-1 md:flex-none whitespace-nowrap px-2 md:px-4 py-2 rounded-lg text-[14px] md:text-[15px] transition-colors font-medium ${
              activeTab === "bulk"
                ? "bg-[#FFEBE6] text-black"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Automatic / Bulk Add
          </button>
        </div>
      }
      footerContent={
        <div className="grid grid-cols-2 md:flex items-center justify-end gap-2 md:gap-4">
          <Button
            variant="outline"
            onClick={handleClose}
            className="md:w-auto px-8 h-12 rounded-xl text-[15px] font-medium border-gray-200"
          >
            Cancel
          </Button>
          <Button
            onClick={activeTab === "bulk" ? handleBulkSubmit : undefined}
            disabled={
              activeTab === "bulk" &&
              (isBulkSubmitDisabled || isBulkSubmitting)
            }
            className="md:w-auto px-8 h-12 rounded-xl text-[15px] font-medium bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white border-transparent disabled:opacity-50"
          >
            <span className="text-xl mr-1 font-light">+</span>{" "}
            {activeTab === "bulk" && isBulkSubmitting
              ? "Sending..."
              : buttonText}
          </Button>
        </div>
      }
    >
      {activeTab === "manual" ? (
        <ManualAddForm />
      ) : (
        <BulkAddForm
          bulkOption={bulkOption}
          onBulkOptionChange={setBulkOption}
          emailsText={emailsText}
          onEmailsTextChange={setEmailsText}
          courseId={courseId}
          onCourseIdChange={setCourseId}
          csvFile={csvFile}
          onCsvFileChange={setCsvFile}
        />
      )}
    </AppMegaModal>
  );
}
