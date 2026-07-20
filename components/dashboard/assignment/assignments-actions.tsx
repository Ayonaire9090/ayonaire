"use client";

import { MoreVertical } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useUpdateAssignmentMutation,
  useDeleteAssignmentMutation,
} from "@/hooks/api/use-assignments";

interface AssignmentsActionsProps {
  assignmentId: string;
  status?: string;
}

export const AssignmentsActions = ({ assignmentId, status }: AssignmentsActionsProps) => {
  const updateAssignment = useUpdateAssignmentMutation();
  const deleteAssignment = useDeleteAssignmentMutation();
  const isPublished = status === "Published";

  const handlePublishToggle = () => {
    const nextStatus = isPublished ? "draft" : "published";
    updateAssignment.mutate(
      { assignmentId, payload: { status: nextStatus } },
      {
        onSuccess: () => toast.success(isPublished ? "Assignment unpublished" : "Assignment published"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update assignment"),
      },
    );
  };

  const handleDelete = () => {
    if (!window.confirm("Delete this assignment? This cannot be undone.")) return;
    deleteAssignment.mutate(assignmentId, {
      onSuccess: () => toast.success("Assignment deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete assignment"),
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus-visible:ring-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
          <MoreVertical className="h-4 w-4 text-gray-600" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 border-none shadow-lg rounded-xl p-2 bg-[#F2F2F2]"
      >
        <DropdownMenuItem
          className="cursor-pointer text-[14px] text-gray-700 focus:bg-white focus:text-black rounded-lg py-2 transition-colors"
          onClick={handlePublishToggle}
        >
          {isPublished ? "Unpublish" : "Publish"}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[14px] text-gray-700 focus:bg-white focus:text-black rounded-lg py-2 transition-colors"
          onClick={() => toast.info("Editing an existing assignment isn't available yet.")}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[14px] text-red-600 focus:bg-white focus:text-red-700 rounded-lg py-2 transition-colors"
          onClick={handleDelete}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
