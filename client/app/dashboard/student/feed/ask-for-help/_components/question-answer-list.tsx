"use client";

import { X } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDeleteAskForHelpAnswerMutation } from "@/hooks/api/use-ask-for-help";
import { QuestionAnswerData } from "./question-data";

interface QuestionAnswerListProps {
  questionId: string;
  answers: QuestionAnswerData[];
  currentUserId?: string;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  const initials = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : parts[0].slice(0, 2);
  return initials.toUpperCase();
};

export const QuestionAnswerList = ({
  questionId,
  answers,
  currentUserId,
}: QuestionAnswerListProps) => {
  const deleteAnswerMutation = useDeleteAskForHelpAnswerMutation();

  const handleDelete = (answerId: string) => {
    if (deleteAnswerMutation.isPending) return;
    deleteAnswerMutation.mutate(
      { questionId, answerId },
      {
        onError: (error: Error) =>
          toast.error(error.message || "Failed to delete answer"),
      },
    );
  };

  return (
    <div className="flex flex-col gap-3">
      {answers.map((answer, index) => {
        const canDelete =
          !!answer.id && !!currentUserId && answer.authorId === currentUserId;
        return (
          <div key={answer.id ?? index} className="flex items-start gap-2.5 group">
            <Avatar className="w-8 h-8 shrink-0 bg-[#F6F6F6]">
              <AvatarFallback className="text-xs">
                {getInitials(answer.authorName)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 flex items-start justify-between gap-2 bg-[#F6F6F6] rounded-2xl px-3.5 py-2.5">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-900">
                    {answer.authorName}
                  </span>
                  {answer.timeAgo && (
                    <span className="text-xs text-gray-400">{answer.timeAgo}</span>
                  )}
                </div>
                <p className="text-[15px] text-gray-700 break-words">{answer.text}</p>
              </div>
              {canDelete && (
                <button
                  onClick={() => handleDelete(answer.id!)}
                  disabled={deleteAnswerMutation.isPending}
                  className="shrink-0 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
                  aria-label="Delete answer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
