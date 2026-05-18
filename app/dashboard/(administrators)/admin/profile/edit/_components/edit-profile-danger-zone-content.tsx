"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import {
  TriangleAlert,
  UserX,
  BookX,
  DatabaseZap,
  Trash2,
} from "lucide-react";

interface DangerAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  confirmTitle: string;
  confirmDescription: string;
  confirmButtonLabel: string;
}

const dangerActions: DangerAction[] = [
  {
    id: "deactivate",
    title: "Deactivate Account",
    description:
      "Temporarily disable your account. You can reactivate it anytime by logging back in.",
    icon: <UserX className="size-5" />,
    confirmTitle: "Deactivate Account",
    confirmDescription:
      "Follow all calendar prompts and save before moving forward. Apple and outlook will download an ics file. Open this file to add it to your calendar.",
    confirmButtonLabel: "Deactivate my account",
  },
  {
    id: "unsubscribe",
    title: "Unsubscribe from Courses",
    description:
      "Remove all your course enrollments. You will lose access to all enrolled courses and progress.",
    icon: <BookX className="size-5" />,
    confirmTitle: "Unsubscribe from Courses",
    confirmDescription:
      "This will remove all your active course enrollments. Your progress and certificates will be permanently lost. This action cannot be undone.",
    confirmButtonLabel: "Unsubscribe from all courses",
  },
  {
    id: "delete-data",
    title: "Delete System Data",
    description:
      "Permanently remove all your personal data from the system including profile info, activity logs, and preferences.",
    icon: <Trash2 className="size-5" />,
    confirmTitle: "Delete System Data",
    confirmDescription:
      "All your personal data including profile information, activity logs, preferences, and uploaded files will be permanently deleted. This action is irreversible.",
    confirmButtonLabel: "Delete my data",
  },
  {
    id: "empty-db",
    title: "Empty Database",
    description:
      "Wipe all platform data including users, courses, enrollments, and transactions. This is irreversible.",
    icon: <DatabaseZap className="size-5" />,
    confirmTitle: "Empty Database",
    confirmDescription:
      "This will permanently erase ALL data from the platform database including users, courses, enrollments, payments, and configurations. This action cannot be undone.",
    confirmButtonLabel: "Empty entire database",
  },
];

export const EditProfileDangerZoneContent = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const currentAction = dangerActions.find((a) => a.id === activeModal);

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-2">
        Danger Zone
      </h2>
      <p className="text-[14px] text-gray-500 mb-6">
        Irreversible and destructive actions. Please proceed with caution.
      </p>

      {/* Action cards */}
      <div className="flex flex-col gap-4">
        {dangerActions.map((action) => (
          <div
            key={action.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-4 md:p-5 rounded-xl border border-red-100 bg-red-50/30"
          >
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="size-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0 text-red-500">
                {action.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                  {action.title}
                </p>
                <p className="text-[12px] md:text-[13px] text-gray-500 mt-0.5 leading-relaxed">
                  {action.description}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setActiveModal(action.id)}
              variant="outline"
              className="border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600 font-semibold text-[13px] px-5 h-10 rounded-lg shrink-0 cursor-pointer"
            >
              {action.title}
            </Button>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      <AppSimpleModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        showCloseButton={false}
        className="max-w-[480px]"
      >
        {currentAction && (
          <div className="flex flex-col items-center text-center px-2 py-4">
            {/* Warning icon */}
            <div className="size-16 rounded-full bg-red-100 flex items-center justify-center mb-5">
              <TriangleAlert className="size-8 text-red-500" />
            </div>

            {/* Title */}
            <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900 mb-3">
              {currentAction.confirmTitle}
            </h3>

            {/* Description */}
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-[380px] mb-8">
              {currentAction.confirmDescription}
            </p>

            {/* Action buttons */}
            <div className="flex items-center gap-3 w-full">
              <Button
                onClick={() => setActiveModal(null)}
                variant="outline"
                className="flex-1 h-12 rounded-xl text-[14px] font-semibold border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  // Perform the destructive action here
                  setActiveModal(null);
                }}
                className="flex-1 h-12 rounded-xl text-[14px] font-semibold bg-red-500 hover:bg-red-600 text-white cursor-pointer"
              >
                {currentAction.confirmButtonLabel}
              </Button>
            </div>
          </div>
        )}
      </AppSimpleModal>
    </div>
  );
};
