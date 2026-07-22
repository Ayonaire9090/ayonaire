"use client";

import { MoreVertical } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateQuizMutation, useDeleteQuizMutation } from "@/hooks/api/use-quiz";

interface QuizActionsProps {
  assignmentId: string;
  status?: string;
}

export const QuizActions = ({ assignmentId, status }: QuizActionsProps) => {
  const updateQuiz = useUpdateQuizMutation();
  const deleteQuiz = useDeleteQuizMutation();

  const isPublished = status === "Published";

  const handlePublishToggle = () => {
    const nextStatus = isPublished ? "draft" : "published";
    updateQuiz.mutate(
      { quizId: assignmentId, status: nextStatus },
      {
        onSuccess: () => toast.success(nextStatus === "published" ? "Quiz published" : "Quiz unpublished"),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update quiz"),
      },
    );
  };

  const handleDelete = () => {
    if (!window.confirm("Delete this quiz? This cannot be undone.")) return;
    deleteQuiz.mutate(assignmentId, {
      onSuccess: () => toast.success("Quiz deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete quiz"),
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
          onClick={() => toast.info("Editing an existing quiz isn't available yet.")}
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
