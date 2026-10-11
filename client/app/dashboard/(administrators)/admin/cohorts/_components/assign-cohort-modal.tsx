"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { useGetAdminUsers } from "@/hooks/api/use-admin";
import {
  useAssignStudentToCohortMutation,
  useAssignInstructorToCohortMutation,
} from "@/hooks/api/use-cohorts";

interface AssignCohortModalProps {
  cohortId: string | null;
  mode: "student" | "instructor";
  onClose: () => void;
}

export function AssignCohortModal({ cohortId, mode, onClose }: AssignCohortModalProps) {
  const [userId, setUserId] = useState("");
  const { data: usersData } = useGetAdminUsers();
  const assignStudent = useAssignStudentToCohortMutation();
  const assignInstructor = useAssignInstructorToCohortMutation();

  const isPending = mode === "student" ? assignStudent.isPending : assignInstructor.isPending;

  const options = useMemo(() => {
    return (usersData?.users ?? [])
      .filter((u) => u.role === mode)
      .map((u) => ({ label: `${u.name} (${u.email})`, value: u._id }));
  }, [usersData, mode]);

  useEffect(() => {
    if (!cohortId) setUserId("");
  }, [cohortId]);

  const handleAssign = () => {
    if (!cohortId || !userId) return;

    if (mode === "student") {
      assignStudent.mutate(
        { cohortId, userId },
        {
          onSuccess: () => {
            toast.success("Student assigned to cohort");
            onClose();
          },
          onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to assign student"),
        },
      );
    } else {
      assignInstructor.mutate(
        { cohortId, instructorId: userId },
        {
          onSuccess: () => {
            toast.success("Instructor assigned to cohort");
            onClose();
          },
          onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to assign instructor"),
        },
      );
    }
  };

  return (
    <AppSimpleModal
      isOpen={!!cohortId}
      onClose={onClose}
      title={mode === "student" ? "Assign Student" : "Assign Instructor"}
      className="max-w-[440px]"
    >
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-gray-700">
            {mode === "student" ? "Student" : "Instructor"}
          </label>
          <AppSelect
            value={userId}
            onChange={setUserId}
            placeholder={`Select ${mode === "student" ? "a student" : "an instructor"}...`}
            options={options}
            className="h-12! bg-white border-gray-200"
          />
        </div>
        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={onClose} className="h-10 px-6 rounded-lg shadow-none">
            Cancel
          </Button>
          <Button
            onClick={handleAssign}
            disabled={isPending || !userId}
            className="h-10 px-6 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-lg shadow-none disabled:opacity-60"
          >
            {isPending ? "Assigning..." : "Assign"}
          </Button>
        </div>
      </div>
    </AppSimpleModal>
  );
}
