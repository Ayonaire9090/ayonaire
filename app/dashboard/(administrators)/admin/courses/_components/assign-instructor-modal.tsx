"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { useGetAdminUsers } from "@/hooks/api/use-admin";
import { useAssignInstructorToCourseMutation } from "@/hooks/api/use-courses";

interface AssignInstructorModalProps {
  courseId: string | null;
  onClose: () => void;
}

export function AssignInstructorModal({ courseId, onClose }: AssignInstructorModalProps) {
  const [instructorId, setInstructorId] = useState("");
  const { data: usersData } = useGetAdminUsers();
  const assignInstructor = useAssignInstructorToCourseMutation();

  const options = useMemo(() => {
    return (usersData?.users ?? [])
      .filter((u) => u.role === "instructor")
      .map((u) => ({ label: `${u.name} (${u.email})`, value: u._id }));
  }, [usersData]);

  const handleClose = () => {
    setInstructorId("");
    onClose();
  };

  const handleAssign = () => {
    if (!courseId || !instructorId) return;
    assignInstructor.mutate(
      { courseId, instructorId },
      {
        onSuccess: () => {
          toast.success("Instructor assigned");
          handleClose();
        },
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to assign instructor"),
      },
    );
  };

  return (
    <AppSimpleModal isOpen={!!courseId} onClose={handleClose} title="Assign Instructor" className="max-w-[440px]">
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-gray-700">Instructor</label>
          <AppSelect
            value={instructorId}
            onChange={setInstructorId}
            placeholder="Select an instructor..."
            options={options}
            className="h-12! bg-white border-gray-200"
          />
        </div>
        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={handleClose} className="h-10 px-6 rounded-lg shadow-none">
            Cancel
          </Button>
          <Button
            onClick={handleAssign}
            disabled={assignInstructor.isPending || !instructorId}
            className="h-10 px-6 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-lg shadow-none disabled:opacity-60"
          >
            {assignInstructor.isPending ? "Assigning..." : "Assign"}
          </Button>
        </div>
      </div>
    </AppSimpleModal>
  );
}
