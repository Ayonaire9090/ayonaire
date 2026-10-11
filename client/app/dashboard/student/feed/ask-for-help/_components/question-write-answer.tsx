"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useAnswerAskForHelpQuestionMutation } from "@/hooks/api/use-ask-for-help";

interface QuestionWriteAnswerProps {
  questionId: string;
}

export const QuestionWriteAnswer = ({ questionId }: QuestionWriteAnswerProps) => {
  const [text, setText] = useState("");
  const answerMutation = useAnswerAskForHelpQuestionMutation();

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed || answerMutation.isPending) return;
    answerMutation.mutate(
      { questionId, text: trimmed },
      { onSuccess: () => setText("") },
    );
  };

  return (
    <div className="flex items-center gap-1 lg:gap-2 w-full">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
        placeholder="Write an answer..."
        className="flex-1 flex items-center bg-[#F6F6F6] rounded-full px-4 h-11 border border-gray-100 border-none min-h-[30px] max-h-[80px] overflow-auto shadow-none focus-visible:ring-0 placeholder:text-gray-500 text-[15px]"
      />
      <button
        onClick={handleSubmit}
        disabled={!text.trim() || answerMutation.isPending}
        className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 transition-colors shrink-0 text-gray-900 disabled:opacity-50 disabled:cursor-default"
      >
        <Image
          src="/assets/icons/send-icon.svg"
          alt="Send"
          width={20}
          height={20}
          className="cursor-pointer lg:w-6 lg:h-6"
        />
      </button>
    </div>
  );
};
