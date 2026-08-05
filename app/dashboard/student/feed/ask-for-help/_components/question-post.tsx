"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, RotateCcw, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { FeedPostHeader } from "../../_components/feed-post-header";
import { FeedPostContent } from "../../_components/feed-post-content";
import { PostOption } from "../../_components/feed-post-actions";
import { QuestionInteract } from "./question-interact";
import { QuestionAnswerList } from "./question-answer-list";
import { QuestionWriteAnswer } from "./question-write-answer";
import { QuestionData } from "./question-data";
import {
  useDeleteAskForHelpQuestionMutation,
  useResolveAskForHelpQuestionMutation,
} from "@/hooks/api/use-ask-for-help";

interface QuestionPostProps {
  question: QuestionData;
  currentUserId?: string;
}

const ResolvedBadge = ({ resolved }: { resolved: boolean }) =>
  resolved ? (
    <Badge variant="outline" className="bg-[#EAF7EC] text-[#2E7D32]">
      <CheckCircle className="w-3 h-3 text-[#2E7D32]" />
      Solved
    </Badge>
  ) : (
    <Badge variant="outline" className="bg-[#EBF0FF] text-[#3F51B5]">
      <Clock className="w-3 h-3 text-[#3F51B5]" />
      Awaiting
    </Badge>
  );

export const QuestionPost = ({ question, currentUserId }: QuestionPostProps) => {
  const resolveMutation = useResolveAskForHelpQuestionMutation();
  const deleteMutation = useDeleteAskForHelpQuestionMutation();
  const isOwner = !!currentUserId && currentUserId === question.authorId;

  const handleToggleResolved = (resolved: boolean) => {
    if (resolveMutation.isPending) return;
    resolveMutation.mutate(
      { questionId: question.id, resolved },
      {
        onSuccess: () =>
          toast.success(resolved ? "Marked as solved" : "Reopened question"),
        onError: (error: Error) =>
          toast.error(error.message || "Couldn't update question"),
      },
    );
  };

  const handleDelete = () => {
    if (deleteMutation.isPending) return;
    deleteMutation.mutate(question.id, {
      onSuccess: () => toast.success("Question deleted"),
      onError: (error: Error) =>
        toast.error(error.message || "Couldn't delete question"),
    });
  };

  const postOptions: PostOption[] | undefined = isOwner
    ? [
        question.resolved
          ? {
              label: "Reopen question",
              icon: <RotateCcw size={18} strokeWidth={2} />,
              onClick: () => handleToggleResolved(false),
            }
          : {
              label: "Mark as solved",
              icon: <CheckCircle size={18} strokeWidth={2} />,
              onClick: () => handleToggleResolved(true),
            },
        {
          label: "Delete question",
          icon: <Trash2 size={18} strokeWidth={2} />,
          onClick: handleDelete,
        },
      ]
    : undefined;

  return (
    <div className="bg-white lg:rounded-2xl border border-gray-200/80 p-4 sm:p-6 flex flex-col w-full">
      <FeedPostHeader
        title={question.authorName}
        avatarUrl={question.authorAvatarUrl}
        badge={<ResolvedBadge resolved={question.resolved} />}
        description={question.authorSubtitle}
        options={postOptions}
      />

      <FeedPostContent
        text={question.textContent}
        tags={question.tags}
        imageUrl={question.imageUrl}
      />

      <div className="mt-4">
        <QuestionInteract
          questionId={question.id}
          likes={question.likesCount}
          answers={question.answers.length}
          shares={question.sharesCount}
          isLikedByMe={question.isLikedByMe}
        />
      </div>

      {question.answers.length > 0 && (
        <div className="mt-4">
          <QuestionAnswerList
            questionId={question.id}
            answers={question.answers}
            currentUserId={currentUserId}
          />
        </div>
      )}

      <div className="mt-4">
        <QuestionWriteAnswer questionId={question.id} />
      </div>
    </div>
  );
};
