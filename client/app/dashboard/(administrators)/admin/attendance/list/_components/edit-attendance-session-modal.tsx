"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { AppInput } from "@/components/ui/app-input";
import { Button } from "@/components/ui/button";
import {
  useGetAttendanceSessionById,
  useUpdateAttendanceSessionMutation,
} from "@/hooks/api/use-attendance";

interface EditAttendanceSessionModalProps {
  sessionId: string | null;
  onClose: () => void;
}

export function EditAttendanceSessionModal({
  sessionId,
  onClose,
}: EditAttendanceSessionModalProps) {
  const { data, isLoading } = useGetAttendanceSessionById(sessionId ?? "");
  const updateSession = useUpdateAttendanceSessionMutation();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (data?.data) {
      setTitle(data.data.title);
      setDate(new Date(data.data.date).toISOString().slice(0, 10));
    }
  }, [data]);

  const handleSave = () => {
    if (!sessionId) return;
    updateSession.mutate(
      { sessionId, payload: { title, date } },
      {
        onSuccess: () => {
          toast.success("Session updated");
          onClose();
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to update session");
        },
      },
    );
  };

  return (
    <AppSimpleModal
      isOpen={!!sessionId}
      onClose={onClose}
      title="Edit Attendance Session"
      className="max-w-[480px]"
    >
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-2">
          <AppInput
            label="Session Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AppInput
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="flex justify-end gap-3 mt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="h-10 px-6 rounded-lg shadow-none"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={updateSession.isPending || !title.trim() || !date}
              className="h-10 px-6 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-lg shadow-none disabled:opacity-60"
            >
              {updateSession.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      )}
    </AppSimpleModal>
  );
}
