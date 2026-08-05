"use client";

import Image from "next/image";
import {
  useLikeAskForHelpQuestionMutation,
  useShareAskForHelpQuestionMutation,
} from "@/hooks/api/use-ask-for-help";

interface QuestionInteractProps {
  questionId: string;
  likes: number;
  answers: number;
  shares: number;
  isLikedByMe: boolean;
}

export const QuestionInteract = ({
  questionId,
  likes,
  answers,
  shares,
  isLikedByMe,
}: QuestionInteractProps) => {
  const likeMutation = useLikeAskForHelpQuestionMutation();
  const shareMutation = useShareAskForHelpQuestionMutation();

  const handleLike = () => {
    if (likeMutation.isPending) return;
    likeMutation.mutate(questionId);
  };

  const handleShare = () => {
    if (shareMutation.isPending) return;
    shareMutation.mutate(questionId);

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard
        .writeText(
          `${window.location.origin}/dashboard/student/feed/ask-for-help?question=${questionId}`,
        )
        .catch(() => {});
    }
  };

  return (
    <div className="flex justify-between items-center border-t border-b border-gray-100 py-3">
      <div className="flex items-center gap-5">
        <button
          onClick={handleLike}
          disabled={likeMutation.isPending}
          className={`flex gap-2 items-center transition-colors group disabled:cursor-default ${
            isLikedByMe ? "text-[#F86432]" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          <Image
            src="/assets/icons/heart-like.svg"
            alt="Like"
            width={22}
            height={22}
            className="cursor-pointer opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="text-[15px] font-medium">{likes}</span>
        </button>
        <div className="flex gap-2 items-center text-gray-500">
          <Image
            src="/assets/icons/chat-round.svg"
            alt="Answers"
            width={22}
            height={22}
            className="opacity-70"
          />
          <span className="text-[15px] font-medium">{answers}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-400">
        <button
          onClick={handleShare}
          disabled={shareMutation.isPending}
          title="Share question"
          className="flex items-center gap-1.5 hover:text-gray-900 transition-colors disabled:cursor-default"
        >
          <Image
            src="/assets/icons/arrow-share.svg"
            alt="Share"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          {shares > 0 && <span className="text-[15px] font-medium">{shares}</span>}
        </button>
        <button
          onClick={handleShare}
          disabled={shareMutation.isPending}
          title="Copy link"
          className="hover:text-gray-900 transition-colors disabled:cursor-default"
        >
          <Image
            src="/assets/icons/share-icon.svg"
            alt="share"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};
