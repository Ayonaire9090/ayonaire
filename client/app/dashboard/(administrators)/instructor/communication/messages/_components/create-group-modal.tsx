"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useGetAdminUsers } from "@/hooks/api/use-admin";
import { useCreateGroupMutation } from "@/hooks/api/use-rooms";

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// NOT verified against backend - roomsApi.createGroup only has a confirmed
// URL/method (POST /api/v1/room, multipart), the field names below
// (name/description/participants) follow RoomRecord's own shape but were
// never confirmed against the real multipart contract.
export function CreateGroupModal({ isOpen, onClose }: CreateGroupModalProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const { data: usersData, isLoading } = useGetAdminUsers();
  const createGroup = useCreateGroupMutation();

  const students = useMemo(
    () => (usersData?.users ?? []).filter((u) => u.role === "student"),
    [usersData],
  );

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleClose = () => {
    setName("");
    setDescription("");
    setSelectedIds(new Set());
    onClose();
  };

  const handleCreate = () => {
    if (!name.trim() || selectedIds.size === 0) {
      toast.error("Give the group a name and select at least one participant.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    if (description.trim()) formData.append("description", description.trim());
    formData.append("participants", JSON.stringify(Array.from(selectedIds)));

    createGroup.mutate(formData, {
      onSuccess: (res) => {
        toast.success("Group created");
        handleClose();
        if (res.data?.id) {
          router.push(`/dashboard/instructor/communication/messages/${res.data.id}`);
        }
      },
      onError: (err) => {
        toast.error(err instanceof Error ? err.message : "Failed to create group");
      },
    });
  };

  return (
    <AppSimpleModal isOpen={isOpen} onClose={handleClose} title="New Group" className="max-w-[480px]">
      <div className="flex flex-col gap-4 mt-2">
        <Input placeholder="Group name" value={name} onChange={(e) => setName(e.target.value)} />
        <Textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex flex-col gap-1.5">
          <span className="text-[14px] font-medium text-gray-700">Participants</span>
          <div className="max-h-[240px] overflow-y-auto flex flex-col divide-y divide-gray-100 border border-gray-100 rounded-lg">
            {isLoading ? (
              <div className="py-6 text-center text-gray-400 text-[13px]">Loading students...</div>
            ) : students.length === 0 ? (
              <div className="py-6 text-center text-gray-400 text-[13px]">No students found.</div>
            ) : (
              students.map((student) => (
                <label
                  key={student._id}
                  className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50"
                >
                  <Checkbox
                    checked={selectedIds.has(student._id)}
                    onCheckedChange={() => toggleSelect(student._id)}
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13.5px] font-medium text-gray-900 truncate">{student.name}</span>
                    <span className="text-[12px] text-gray-500 truncate">{student.email}</span>
                  </div>
                </label>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={handleClose} className="h-10 px-6 rounded-lg shadow-none">
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={createGroup.isPending}
            className="h-10 px-6 bg-[#F15D23] hover:bg-[#F15D23]/90 text-white rounded-lg shadow-none disabled:opacity-60"
          >
            {createGroup.isPending ? "Creating..." : "Create Group"}
          </Button>
        </div>
      </div>
    </AppSimpleModal>
  );
}
